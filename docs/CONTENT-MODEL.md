# Content Model

## Two Storage Mechanisms

**Typed data modules** (`src/data/*.ts`) hold all programmatic page types. Authored as plain TS arrays typed `z.input<typeof schema>`, parsed centrally in `src/data/index.ts`. Rationale: TS authoring beats YAML/JSON for large structured entries (comments, constants, spread), while Zod parsing gives the same build-failure guarantees as collections.

**Content collections** (`src/content/`, configured in `src/content.config.ts`) hold long-form markdown: guides, blog, authors.

## Shared Entry Fields (baseEntrySchema)

Every routable data entry requires: `slug` (kebab-case, regex-enforced), `title`, `seoTitle` (20–70 chars), `metaDescription` (70–170), `h1`, `summary`, `intro[]` (paragraphs, min lengths), `faqs[]` (min 2, with min answer lengths), `indexable` (default true), `featured`, `complianceReviewRequired` + `complianceTopics`.

Type-specific extensions add the differentiated sections (see `src/lib/content-schemas.ts` for the authoritative definitions): services carry problems/included/process/metrics/considerations; specialties carry complexity/denialCauses/codingConsiderations/kpis; locations carry marketContext/practiceTypes/challenges/surroundingAreas; payers carry sections+sources; solutions carry symptoms/causes/impact/diagnostics/steps/outsourcedHelp; cost carries sections+pricingFactors; comparisons carry rows/when/tradeoffs; combos carry uniqueInsights (min 3 substantial paragraphs — the quality gate).

## Relationship Fields

`relatedServices`, `relatedSpecialties`, `relatedLocations`, `relatedSolutions`, `relatedGuides`, `relatedCostPages`, `relatedComparisons`, `nearbyLocations` — arrays of slugs. **Referential integrity is build-enforced** for data-module targets (services, specialties, locations, solutions, cost, compare): a typo fails the build with the offending reference named. relatedGuides are not build-checked against the markdown collection (guides load in a different pipeline) but are link-checked post-build by the quality script.

## Build-Failure Guarantees

The build fails on: schema violations (missing/short/long fields), duplicate slugs within a hub, duplicate seoTitle or metaDescription across ALL data entries, and broken related-slug references. The post-build script then fails on page-level duplicates (including hand-built pages), missing/multiple H1s, broken links, missing alt text, lorem ipsum, and noindex pages in the sitemap.

## Adding Content: Recipes

**New service/specialty/location/etc.:** append an entry to the relevant data file → `npm run check:data` → fix any violations → add 1–3 related-slug references from existing entries pointing at the new one (the link graph is curated, not automatic) → build.

**New guide:** create `src/content/guides/<slug>.md` with complete frontmatter (schema in content.config.ts) → reference it from related pages' `relatedGuides` where genuinely relevant.

**New blog post:** `src/content/blog/<slug>.md`; categories are the fixed enum (revenue-cycle, practice-management, payer-news, texas-healthcare); tags max 4, used sparingly.

**Authors/reviewers:** only real people, with consent, `isPerson: true`, `published: true`. The default `tmbc-editorial` identity exists so content never carries invented bylines.

## Quality Floors Are Minimums

Schema minimum lengths prevent accidentally thin entries; they are not targets. Every entry must be genuinely differentiated — the anti-keyword-swap rule is enforced editorially (see CONTENT-STYLE-GUIDE.md), and the near-duplicate check is part of pre-launch review.
