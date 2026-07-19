# Architecture

## Information Architecture

Twelve content hubs, each a directory with a hub page and detail pages:

| Hub | Route | Source | Count |
|---|---|---|---|
| Core company pages | various | hand-built pages | 23 |
| Services | /services/ | src/data/services-*.ts | 32 + hub |
| Specialties | /specialties/ | src/data/specialties-*.ts | 57 + hub |
| Texas locations | /locations/ | src/data/locations-*.ts | 62 + hub |
| Software support | /software/ | src/data/software.ts | 20 + hub |
| Payer resources | /payers/ | src/data/payers.ts | 12 + hub |
| Problems/solutions | /solutions/ | src/data/solutions.ts | 21 + hub |
| Cost resources | /cost/ | src/data/cost.ts | 12 + hub |
| Comparisons | /compare/ | src/data/comparisons.ts | 11 + hub |
| Knowledge center | /guides/ | src/content/guides/*.md | 28 + hub |
| Blog | /blog/ | src/content/blog/*.md | 10 + hub + 4 categories |
| Programmatic combos | /specialties/[slug]/[city]/ | src/data/combos.ts | 2 (gated) |

Total: 304 built pages.

## Rendering Model

Fully static (`output: 'static'`), one HTML file per page, directory format with trailing slashes. No server runtime is required; forms POST to an external endpoint configured by env var. This keeps hosting portable (Cloudflare Pages/Netlify/Vercel) and Core Web Vitals trivially strong.

## Data Flow

1. Authoring: TS data modules in `src/data/` (typed as `z.input<schema>`) or markdown in `src/content/`.
2. Validation: `src/data/index.ts` parses every entry through Zod at import time — invalid entries, duplicate slugs/titles/descriptions, or broken related-slug references **throw and fail the build**. Markdown collections validate via `src/content.config.ts`.
3. Rendering: route templates (`src/pages/<hub>/[slug].astro`) receive parsed entries via `getStaticPaths` props and render through shared components.
4. QA: `scripts/content-quality.mjs` audits the built HTML (titles, H1s, links, alt, sitemap).

## Component Architecture

- `BaseLayout.astro` owns the head: metadata, canonicals, OG/Twitter, robots, the JSON-LD @graph (Organization + WebSite + WebPage + page-specific nodes), skip link, header/footer, analytics.
- Section components (`PageHero`, `FaqSection`, `RelatedLinks`, `ProcessSteps`, `CtaSection`) standardize page anatomy so templates stay thin.
- `ReviewFlag` renders compliance notices in dev only (or with PUBLIC_SHOW_REVIEW_FLAGS=true).
- `forms/LeadForm.astro` is the single form engine (validation, honeypot, PHI warning, consent, states, analytics).

## JavaScript Budget

Intentional near-zero: header menu toggle, mobile nav, hub filters (client-side, crawl-safe), form handling, and delegated analytics events. No framework, no islands, no animation libraries. Add React/Vue islands only if a future feature genuinely needs state (none currently does).

## Design System

Tailwind v4 CSS-first: brand tokens under `@theme` (navy/teal/sand scales, shadows, radius), component classes under `@layer components` (buttons, cards, badges, forms, prose, tables, alerts, steps, breadcrumbs). Note the v4 constraint: custom classes cannot be `@apply`-ed into other custom classes — shared styles use grouped selectors instead.

## Scale Path to 1,500–3,000 Pages

- Add entries to data files (validation enforces quality floors) — no template work needed
- New specialties/locations/software/payers: append to the arrays; related-slug checks keep the link graph intact
- Specialty×city combos: gated expansion per docs/PROGRAMMATIC-SEO.md
- Guides/blog: drop markdown files; schemas enforce metadata
- The quality script and sitemap pipeline scale automatically
