# SEO Strategy

## URL Convention (the one rule set)

- Lowercase kebab-case, always
- Trailing slashes, always (astro.config: trailingSlash 'always', directory format)
- No dates in URLs (blog included)
- Short, human-readable, hub-prefixed: /services/denial-management/, /locations/houston-medical-billing/, /guides/clean-claim-rate/
- No query-parameter content: filters are client-side; no indexable parameter URLs exist
- Canonicals are absolute, production-domain, trailing-slashed, lowercase — generated centrally in BaseLayout via canonicalUrl()

## Metadata System

Every page requires unique seoTitle (≤70 chars) and metaDescription (70–170) — schema-enforced for data pages, script-enforced for all pages post-build. OG + Twitter tags render from the same source. Robots: indexable pages get no robots meta; noindex pages get noindex,follow. Currently noindex: /404/, /thank-you/ (plus any entry with indexable:false).

## Indexation Control

`indexable` field on every data entry and markdown file → sets robots meta. The sitemap (Astro integration) excludes /thank-you/ and /search/; the quality script fails the build if any noindex page appears in the sitemap. Programmatic combos default to noindex at the schema level — indexation is earned (see PROGRAMMATIC-SEO.md). robots.txt disallows /thank-you/, /search/, and query strings, and points at sitemap-index.xml.

## Structured Data

One @graph per page from src/lib/schema.ts: Organization (single @id sitewide) + WebSite + WebPage always; BreadcrumbList, Service, FAQPage, Article/BlogPosting, ItemList per page type. Deliberately absent (per honesty rules): LocalBusiness (no fabricated addresses), Review/AggregateRating (no reviews yet), MedicalBusiness (unreviewed fit), Person (until real people exist). ContactPoint renders phone only when CONTACT.isPlaceholder is false.

## Heading Discipline

Exactly one H1 per page (script-enforced), H2/H3 hierarchy below, descriptive not keyword-stuffed. "Texas medical billing company" appears naturally on the homepage and about page; exact-match repetition is deliberately avoided.

## Duplicate-Content Defenses

- Build-time duplicate title/description checks across all pages
- Schema minimums forcing per-entry substance; editorially enforced differentiation
- Tag pages: none (tags stored, max 4, no archive routes — prevents tag bloat)
- Blog categories: 4 fixed categories only, each with real volume
- One canonical per page, checked unique post-build

## Feeds & Sitemaps

- XML: sitemap-index.xml via @astrojs/sitemap, referenced in robots.txt and page heads
- HTML: /sitemap/ for users and crawl support
- RSS: /rss.xml for the blog

## Redirects

None needed at launch (new domain). Structure for future needs: host-level redirects (documented per platform in DEPLOYMENT.md). Keep a redirects section there when URLs ever change — never orphan a published URL.

## Growth Rules

New pages must clear the same bars: unique metadata (build-enforced), genuine content differentiation (editorial), curated internal links in and out (INTERNAL-LINKING.md), and honest indexation (noindex until content earns otherwise).
