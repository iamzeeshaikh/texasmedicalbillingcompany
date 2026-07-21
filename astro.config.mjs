// @ts-check
import { readFile, writeFile, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// @astrojs/sitemap always emits a sitemap-index.xml plus numbered chunks
// (sitemap-0.xml, sitemap-1.xml, …), even when everything fits in one file.
// This tiny integration runs after the build and, when there is exactly one
// chunk, collapses it into a single flat /sitemap.xml — the conventional name
// with every URL directly inside — then deletes the index and the numbered
// chunk. If the site ever grows past one chunk (~45k URLs) it leaves the
// standard index untouched, since multiple files genuinely need an index.
function flattenSitemap() {
  return {
    name: 'flatten-sitemap',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        // With an adapter the static output is dir; without one it's also dir.
        // The sitemap files sit at the root of whichever directory that is.
        const root = fileURLToPath(dir);
        const chunk0 = join(root, 'sitemap-0.xml');
        const chunk1 = join(root, 'sitemap-1.xml');
        const index = join(root, 'sitemap-index.xml');
        const flat = join(root, 'sitemap.xml');

        if (!existsSync(chunk0) || existsSync(chunk1)) {
          logger.info('more than one sitemap chunk — leaving the index in place');
          return;
        }
        await writeFile(flat, await readFile(chunk0, 'utf8'));
        await rm(chunk0, { force: true });
        await rm(index, { force: true });
        logger.info('collapsed sitemap into a single /sitemap.xml');
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://texasmedicalbillingcompany.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  // Every content page stays prerendered static — the adapter exists only so
  // `src/pages/api/contact.ts` can run server-side to send form mail over SMTP.
  // That route opts in with `export const prerender = false`; nothing else does,
  // so the 304 public pages are still plain HTML on a CDN.
  //
  // NOTE: this requires a Node runtime. Netlify and Vercel both provide one.
  // Cloudflare Pages does NOT — Workers cannot open raw SMTP sockets on port
  // 587, so switching hosts means switching the mail transport to an HTTP API
  // (Resend, Postmark, SendGrid) rather than nodemailer.
  adapter: vercel(),
  integrations: [
    sitemap({
      // Only indexable URLs belong in the sitemap. Non-indexable routes are
      // excluded here; scripts/content-quality.mjs verifies data-level
      // `indexable: false` entries stay out of the sitemap.
      filter: (page) =>
        !['/thank-you/', '/search/'].some((path) => page.endsWith(path)),
      changefreq: 'weekly',
      priority: 0.7,
    }),
    flattenSitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
