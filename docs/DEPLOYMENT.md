# Deployment

## Build Output

`npm run build` → static site in `dist/`. No server runtime required. Node 22.12+ to build (package.json engines).

## Platform Recipes

> **Form delivery needs a Node runtime.** `src/pages/api/contact.ts` sends mail
> over SMTP with nodemailer, which needs a raw TCP socket on port 587. Netlify
> Functions and Vercel Functions provide one. **Cloudflare Workers do not** —
> deploying there means swapping the transport for an HTTP mail API (Resend,
> Postmark, SendGrid). Everything else on the site is static and host-agnostic.
>
> The project is currently configured with `@astrojs/vercel`. Switching hosts
> means switching the adapter in `astro.config.mjs`.

**Cloudflare Pages:** build command `npm run build`, output `dist`, Node 22+. Redirects: `public/_redirects` (create when needed). Headers: `public/_headers` for cache/security headers if desired. Note the SMTP caveat above.

**Netlify:** same build/output. Redirects via `public/_redirects` or netlify.toml.

**Vercel:** framework preset Astro; build `npm run build`, output `dist`. Redirects via vercel.json.

All platforms: set environment variables in the dashboard (see ENVIRONMENT-VARIABLES.md). PUBLIC_-prefixed vars are inlined at build time — a rebuild is required for changes to take effect.

## Recommended CI Gate

Run `npm run check` (data validation → build → content QA) as the deploy pipeline. It exits nonzero on any schema violation, duplicate metadata, broken link, or sitemap inconsistency — treat that as a failed deploy.

## Domain & SEO Plumbing

- Production domain must serve exactly https://texasmedicalbillingcompany.com (canonicals are absolute to it); redirect www→apex (or update site config if choosing www) and http→https at the platform level
- Verify robots.txt and /sitemap-index.xml resolve post-deploy
- Submit the sitemap in Google Search Console; set PUBLIC_GSC_VERIFICATION for meta-tag verification if using that method

## Analytics Event System

Loaded only when env vars are set (Analytics.astro). Delegated listener sends events for any element with `data-analytics`.

Naming convention (documented for GA4 configuration):
| Event | Trigger | Params |
|---|---|---|
| cta_click | CTA links/buttons | cta_id (e.g. header_primary, home_hero_primary, service_<slug>) |
| form_submit | Form submit attempts | form_id (contact, billing-assessment, pricing-inquiry, consultation-request, careers) |
| form_success | Successful submission | form_id |
| phone_click | tel: links | link_url |
| email_click | mailto: links | link_url |

Call tracking: when a tracked number replaces the placeholder, keep the data-analytics="phone_click" attributes and swap numbers centrally in site.ts.

## Forms Backend

LeadForm posts JSON to PUBLIC_FORM_ENDPOINT. Wire to any endpoint (Formspree/Basin/custom worker/CRM webhook). Until configured, forms show a graceful error directing to email — DO NOT launch without a tested endpoint. CRM integration placeholder is marked in LeadForm.astro's success handler.

## Update Workflows

- Content edit → commit → CI runs `npm run check` → deploy
- Regenerate docs/PAGE-INVENTORY.md (`npm run inventory`) when page sets change
- Annual: review guide reviewedDates; code-set update sweep (see CONTENT-REVIEW process)
