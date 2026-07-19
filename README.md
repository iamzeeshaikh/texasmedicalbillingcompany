# Texas Medical Billing Company — Website

Production website for **texasmedicalbillingcompany.com**: a 300+ page Astro site for a Texas-focused medical billing company, built for long-term growth toward 1,500–3,000 pages without thin/doorway content.

## Stack

- **Astro 7** (static output, directory URLs, trailing slashes)
- **TypeScript** (strict; `astro check` passes with 0 errors)
- **Tailwind CSS v4** (CSS-first tokens in `src/styles/global.css`)
- **Content collections** (guides/blog markdown) + **Zod-validated TS data modules** (all programmatic page types)
- Zero frontend frameworks — a few small vanilla scripts (nav, forms, filters); no islands needed yet

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Local dev server |
| `npm run build` | Production build to `dist/` (fails on invalid content data) |
| `npm run preview` | Preview the production build |
| `npm run check:types` | TypeScript/Astro diagnostics |
| `npm run check:data` | Validate all content data against Zod schemas |
| `npm run check:content` | Post-build QA: dup titles/descriptions, H1s, links, alt text, sitemap consistency |
| `npm run check` | data → build → content, in sequence |
| `npm run inventory` | Regenerate `docs/PAGE-INVENTORY.md` from the build |

## Project Layout

```
src/
  config/        site.ts (central placeholders/CTAs), nav.ts (mega menus)
  styles/        global.css — the design system (tokens + components)
  layouts/       BaseLayout.astro (SEO head, schema graph, analytics)
  components/    UI components + forms/LeadForm.astro
  lib/           schema.ts (JSON-LD builders), content-schemas.ts (Zod), url.ts
  data/          typed content: services, specialties, locations, software,
                 payers, solutions, cost, comparisons, combos + index.ts (validation)
  content/       guides/ (28 md), blog/ (10 md), authors/
  pages/         all routes
scripts/         validate-data.ts, content-quality.mjs, generate-inventory.mjs
docs/            all project documentation (see below)
```

## Documentation

- `docs/ARCHITECTURE.md` — information architecture and technical decisions
- `docs/CONTENT-MODEL.md` — data schemas, collections, and how to add content
- `docs/SEO-STRATEGY.md` — URL conventions, metadata, schema, indexation rules
- `docs/INTERNAL-LINKING.md` — the curated linking system
- `docs/PROGRAMMATIC-SEO.md` — the combo-page quality gate (read before generating pages)
- `docs/COMPLIANCE-REVIEW.md` — every item requiring owner/professional review before launch
- `docs/CONTENT-STYLE-GUIDE.md` — voice, honesty rules, banned phrases
- `docs/DEPLOYMENT.md` — deploying to Cloudflare Pages / Netlify / Vercel; analytics events
- `docs/ENVIRONMENT-VARIABLES.md` — all env vars (no IDs are hardcoded)
- `docs/PAGE-INVENTORY.md` — generated inventory of all 304 pages
- `docs/PRE-LAUNCH-CHECKLIST.md` — the gate between "built" and "launched"

## Brand Notes

Text-based logo lives in `src/components/Logo.astro` (horizontal + compact variants) — replace its markup with a final SVG when produced, keeping the accessible name. Favicon placeholder: `public/favicon.svg`. Social-share template: `public/images/og-default.svg` (replace with a 1200×630 raster before launch). Brand color tokens are defined once in `src/styles/global.css` under `@theme`.

## Honesty Architecture (read this)

This is a **new company** website built under strict no-fabrication rules: no invented experience, clients, results, testimonials, certifications, or addresses anywhere. Several mechanisms enforce this — `ReviewFlag` components mark compliance-sensitive pages in dev; disclaimers render automatically on payer/software pages; `CONTACT.isPlaceholder` suppresses unset phone/address in production; the case-studies page is honestly empty. **Do not add claims without evidence.** See `docs/COMPLIANCE-REVIEW.md`.
