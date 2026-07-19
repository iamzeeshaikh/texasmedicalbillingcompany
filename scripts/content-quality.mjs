#!/usr/bin/env node
/**
 * Content quality checker — runs against the built site in dist/.
 *
 * Checks (per QA requirements):
 *  - duplicate <title> and meta descriptions
 *  - missing/duplicate canonical URLs; canonical uses production domain + trailing slash
 *  - exactly one <h1> per page
 *  - images missing alt text
 *  - lorem ipsum / unresolved placeholder text visible in production
 *  - broken internal links (href -> built page or asset)
 *  - noindex pages present in the XML sitemap (and vice-versa spot checks)
 *  - thin indexable pages (very low text content)
 *
 * Usage: npm run check:content   (after `npm run build`)
 * Exit code 1 on failures; warnings don't fail the build.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

// With a server adapter configured, Astro emits the static pages to
// dist/client and the SSR bundle to dist/server. Without one, they sit
// directly in dist. Resolve whichever layout this build produced, so the
// checks keep pointing at real page HTML instead of silently walking the
// wrong tree (which reports every internal link as broken).
const DIST_ROOT = new URL('../dist', import.meta.url).pathname;
const DIST = existsSync(join(DIST_ROOT, 'client')) ? join(DIST_ROOT, 'client') : DIST_ROOT;
const SITE = 'https://texasmedicalbillingcompany.com';

if (!existsSync(DIST)) {
  console.error('dist/ not found — run `npm run build` first.');
  process.exit(1);
}

/** Recursively collect built HTML files. */
function htmlFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) out.push(...htmlFiles(p));
    else if (entry.endsWith('.html')) out.push(p);
  }
  return out;
}

const files = htmlFiles(DIST);
const errors = [];
const warnings = [];

const titles = new Map();
const descriptions = new Map();
const canonicals = new Map();
const pagePaths = new Set();
const noindexPages = new Set();

const get = (html, re) => html.match(re)?.[1]?.trim();

for (const file of files) {
  const rel = '/' + relative(DIST, file).replace(/index\.html$/, '').replace(/\.html$/, '/');
  pagePaths.add(rel);
}

for (const file of files) {
  const html = readFileSync(file, 'utf8');
  const rel = '/' + relative(DIST, file).replace(/index\.html$/, '').replace(/\.html$/, '/');
  const is404 = rel === '/404/';

  // Title / description / canonical
  const title = get(html, /<title>([^<]*)<\/title>/i);
  const desc = get(html, /<meta name="description" content="([^"]*)"/i);
  const canonical = get(html, /<link rel="canonical" href="([^"]*)"/i);
  const noindex = /<meta name="robots" content="noindex/i.test(html);
  if (noindex) noindexPages.add(rel);

  if (!title) errors.push(`${rel}: missing <title>`);
  else if (titles.has(title)) errors.push(`Duplicate title "${title}" on ${titles.get(title)} and ${rel}`);
  else titles.set(title, rel);

  if (!desc) errors.push(`${rel}: missing meta description`);
  else if (descriptions.has(desc) && !is404) errors.push(`Duplicate description on ${descriptions.get(desc)} and ${rel}`);
  else descriptions.set(desc, rel);

  if (!canonical) errors.push(`${rel}: missing canonical`);
  else {
    if (!canonical.startsWith(SITE)) errors.push(`${rel}: canonical not on production domain: ${canonical}`);
    if (!canonical.endsWith('/')) errors.push(`${rel}: canonical missing trailing slash: ${canonical}`);
    if (canonical !== canonical.toLowerCase()) errors.push(`${rel}: canonical not lowercase: ${canonical}`);
    if (canonicals.has(canonical)) errors.push(`Duplicate canonical ${canonical} on ${canonicals.get(canonical)} and ${rel}`);
    else canonicals.set(canonical, rel);
  }

  // H1 count
  const h1Count = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1Count === 0) errors.push(`${rel}: no <h1>`);
  if (h1Count > 1) errors.push(`${rel}: ${h1Count} <h1> tags`);

  // Images without alt
  for (const img of html.match(/<img\b[^>]*>/g) ?? []) {
    if (!/\balt=/.test(img)) errors.push(`${rel}: <img> missing alt attribute`);
  }

  // Placeholder / lorem leakage. Split into what a visitor actually reads and
  // what only sits in the source, because the two are not equally serious:
  // "[OWNER: set date at launch]" rendered on the privacy policy is a launch
  // blocker, the same note inside an HTML comment is not. Matching on stripped
  // text (not raw HTML) also keeps the `placeholder=` form attribute — which is
  // legitimate markup on every input — from tripping the PLACEHOLDER marker.
  const body = html.replace(/<script[\s\S]*?<\/script>/g, '');
  const comments = body.match(/<!--[\s\S]*?-->/g) ?? [];
  const visibleText = body
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ');
  if (/lorem ipsum/i.test(visibleText)) errors.push(`${rel}: lorem ipsum text found`);
  for (const marker of ['TODO:', 'FIXME', 'XXX-XXX', 'PLACEHOLDER', 'OWNER:']) {
    if (visibleText.includes(marker)) errors.push(`${rel}: unresolved placeholder "${marker}" visible on the page`);
    else if (comments.some((c) => c.includes(marker))) warnings.push(`${rel}: "${marker}" left in an HTML comment (ships to production source)`);
  }

  // Thin-page check on indexable pages (text under ~1200 chars is suspicious)
  if (!noindex && !is404) {
    const text = visibleText;
    if (text.length < 1200) warnings.push(`${rel}: thin indexable page (~${text.length} chars of text)`);
  }

  // Internal link resolution
  for (const m of body.matchAll(/href="(\/[^"#?]*)[#?]?[^"]*"/g)) {
    let href = m[1];
    if (/\.(xml|svg|png|jpg|jpeg|webp|ico|txt|pdf|css|js)$/.test(href)) {
      if (!existsSync(join(DIST, href))) errors.push(`${rel}: broken asset link ${href}`);
      continue;
    }
    if (!href.endsWith('/')) href += '/';
    if (!pagePaths.has(href)) errors.push(`${rel}: broken internal link ${href}`);
  }
}

// Sitemap consistency: noindex pages must not be listed
const sitemapIndex = join(DIST, 'sitemap-index.xml');
if (existsSync(sitemapIndex)) {
  let sitemapUrls = [];
  const smFiles = readdirSync(DIST).filter((f) => /^sitemap-\d+\.xml$/.test(f));
  for (const sm of smFiles) {
    const xml = readFileSync(join(DIST, sm), 'utf8');
    sitemapUrls.push(...[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
  }
  for (const url of sitemapUrls) {
    const path = url.replace(SITE, '');
    if (noindexPages.has(path)) errors.push(`Sitemap lists noindex page: ${path}`);
    if (!pagePaths.has(path)) errors.push(`Sitemap lists non-existent page: ${path}`);
  }
  console.log(`Sitemap URLs: ${sitemapUrls.length}`);
} else {
  errors.push('sitemap-index.xml missing from dist');
}

console.log(`\nChecked ${files.length} pages.`);
console.log(`Noindex pages: ${[...noindexPages].join(', ') || 'none'}`);

if (warnings.length) {
  console.log(`\n⚠ ${warnings.length} warning(s):`);
  for (const w of warnings.slice(0, 40)) console.log('  - ' + w);
  if (warnings.length > 40) console.log(`  … and ${warnings.length - 40} more`);
}

if (errors.length) {
  console.error(`\n✗ ${errors.length} error(s):`);
  for (const e of errors.slice(0, 60)) console.error('  - ' + e);
  if (errors.length > 60) console.error(`  … and ${errors.length - 60} more`);
  process.exit(1);
}

console.log('\n✓ Content quality checks passed');
