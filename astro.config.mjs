// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

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
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
