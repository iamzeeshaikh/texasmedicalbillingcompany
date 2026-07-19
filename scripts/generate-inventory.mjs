#!/usr/bin/env node
/**
 * Generates docs/PAGE-INVENTORY.md from the built site (dist/).
 * Run after `npm run build`: npm run inventory
 */
import { readFileSync, readdirSync, statSync, existsSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, relative } from 'node:path';

// A server adapter moves the static pages into dist/client; without one they
// sit directly in dist. Handle both so the inventory is generated either way.
const DIST_ROOT = new URL('../dist', import.meta.url).pathname;
const DIST = existsSync(join(DIST_ROOT, 'client')) ? join(DIST_ROOT, 'client') : DIST_ROOT;
const OUT = new URL('../docs/PAGE-INVENTORY.md', import.meta.url).pathname;

function htmlFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) out.push(...htmlFiles(p));
    else if (entry.endsWith('.html')) out.push(p);
  }
  return out;
}

function classify(path) {
  if (path === '/') return { type: 'Homepage', intent: 'Commercial', parent: '—', review: 'Marketing claims' };
  if (path.startsWith('/services/')) return { type: path === '/services/' ? 'Hub' : 'Service', intent: 'Commercial', parent: '/services/', review: 'Operational claims' };
  if (path.startsWith('/specialties/')) {
    const segs = path.split('/').filter(Boolean);
    if (path === '/specialties/') return { type: 'Hub', intent: 'Commercial', parent: '/', review: '—' };
    if (segs.length === 3) return { type: 'Programmatic combo', intent: 'Commercial/Local', parent: `/specialties/${segs[1]}/`, review: 'Quality gate (PROGRAMMATIC-SEO.md)' };
    return { type: 'Specialty', intent: 'Commercial', parent: '/specialties/', review: 'Coding/educational disclaimers' };
  }
  if (path.startsWith('/locations/')) return { type: path === '/locations/' ? 'Hub' : 'Location', intent: 'Commercial/Local', parent: '/locations/', review: 'No-office honesty' };
  if (path.startsWith('/software/')) return { type: path === '/software/' ? 'Hub' : 'Software', intent: 'Commercial', parent: '/software/', review: 'Non-affiliation disclaimer' };
  if (path.startsWith('/payers/')) return { type: path === '/payers/' ? 'Hub' : 'Payer resource', intent: 'Informational', parent: '/payers/', review: 'Payer/compliance (REQUIRED)' };
  if (path.startsWith('/solutions/')) return { type: path === '/solutions/' ? 'Hub' : 'Solution', intent: 'Problem-aware', parent: '/solutions/', review: 'No-guarantee language' };
  if (path.startsWith('/cost/')) return { type: path === '/cost/' ? 'Hub' : 'Cost resource', intent: 'Commercial-investigation', parent: '/cost/', review: 'Pricing (REQUIRED)' };
  if (path.startsWith('/compare/')) return { type: path === '/compare/' ? 'Hub' : 'Comparison', intent: 'Commercial-investigation', parent: '/compare/', review: 'Neutrality' };
  if (path.startsWith('/guides/')) return { type: path === '/guides/' ? 'Hub' : 'Guide', intent: 'Informational', parent: '/guides/', review: 'Educational accuracy' };
  if (path.startsWith('/blog/category/')) return { type: 'Blog category', intent: 'Informational', parent: '/blog/', review: '—' };
  if (path.startsWith('/blog/')) return { type: path === '/blog/' ? 'Hub' : 'Blog post', intent: 'Informational', parent: '/blog/', review: 'Editorial policy' };
  const core = {
    '/about/': ['About', 'Trust', 'No invented history'],
    '/contact/': ['Contact/Form', 'Conversion', 'Contact placeholders'],
    '/pricing/': ['Pricing/Form', 'Conversion', 'Pricing (REQUIRED)'],
    '/why-us/': ['Trust page', 'Commercial', 'Claims honesty'],
    '/our-process/': ['Process page', 'Trust', 'Operational claims'],
    '/hipaa-and-security/': ['Compliance page', 'Trust', 'HIPAA/legal (REQUIRED)'],
    '/faq/': ['FAQ', 'Informational', 'Claims honesty'],
    '/free-billing-assessment/': ['Conversion/Form', 'Conversion', 'Offer accuracy'],
    '/schedule-a-consultation/': ['Conversion/Form', 'Conversion', '—'],
    '/resources/': ['Hub', 'Informational', '—'],
    '/careers/': ['Careers/Form', 'Recruiting', 'No fictional roles'],
    '/case-studies/': ['Future-ready', 'Trust', 'No fictional cases (REQUIRED)'],
    '/privacy-policy/': ['Legal', 'Legal', 'Counsel review (REQUIRED)'],
    '/terms/': ['Legal', 'Legal', 'Counsel review (REQUIRED)'],
    '/accessibility/': ['Legal', 'Legal', '—'],
    '/cookie-policy/': ['Legal', 'Legal', 'Counsel review (REQUIRED)'],
    '/editorial-policy/': ['Editorial', 'Trust', '—'],
    '/content-review-process/': ['Editorial', 'Trust', '—'],
    '/corrections-policy/': ['Editorial', 'Trust', '—'],
    '/thank-you/': ['Utility (noindex)', 'Conversion', '—'],
    '/404/': ['Utility (noindex)', 'Utility', '—'],
    '/sitemap/': ['HTML sitemap', 'Utility', '—'],
  };
  if (core[path]) return { type: core[path][0], intent: core[path][1], parent: '/', review: core[path][2] };
  return { type: 'Page', intent: '—', parent: '/', review: '—' };
}

const rows = [];
for (const file of htmlFiles(DIST).sort()) {
  const html = readFileSync(file, 'utf8');
  const path = '/' + relative(DIST, file).replace(/index\.html$/, '').replace(/\.html$/, '/');
  const title = html.match(/<title>([^<]*)<\/title>/i)?.[1] ?? '';
  const noindex = /<meta name="robots" content="noindex/i.test(html);
  const c = classify(path);
  rows.push({ title, path, ...c, index: noindex ? 'noindex' : 'index' });
}

const counts = {};
for (const r of rows) counts[r.type] = (counts[r.type] ?? 0) + 1;

let md = `# Page Inventory\n\nGenerated from the production build (\`npm run inventory\`). ${rows.length} pages.\n\n`;
md += `## Counts by Page Type\n\n| Page type | Count |\n|---|---|\n`;
for (const [type, count] of Object.entries(counts).sort((a, b) => b[1] - a[1])) {
  md += `| ${type} | ${count} |\n`;
}
md += `\n## Full Inventory\n\nContent status: all pages below are built and complete unless the Review column marks required owner/professional review before launch.\n\n`;
md += `| Page title | URL | Type | Search intent | Index | Internal-link parent | Required review |\n|---|---|---|---|---|---|---|\n`;
for (const r of rows) {
  md += `| ${r.title.replace(/\|/g, '—')} | ${r.path} | ${r.type} | ${r.intent} | ${r.index} | ${r.parent} | ${r.review} |\n`;
}

mkdirSync(new URL('../docs', import.meta.url).pathname, { recursive: true });
writeFileSync(OUT, md);
console.log(`Wrote ${OUT} (${rows.length} pages)`);
