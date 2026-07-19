# Programmatic SEO — Rules of Engagement

## What Exists

The architecture supports specialty × city combination pages at /specialties/[specialty]/[city]/ — e.g., /specialties/cardiology-medical-billing/dallas/. Exactly **two demonstration pages** ship in the initial build (cardiology×Dallas, orthopedics×Houston), both meeting the full quality bar and marked indexable.

## What Is Deliberately Prevented

There are 57 specialties × 62 cities = 3,534 possible combos. Generating them mechanically would create a doorway-page farm that would (deservedly) burn the domain. The route renders **only** entries in src/data/combos.ts; there is no cartesian generation, and this is a design decision, not an omission.

## The Quality Gate (schema-enforced)

Every combo entry requires:
- `uniqueInsights`: minimum 3 paragraphs of ≥120 chars each, containing genuine specialty-in-city insight — market structure, payer behavior, referral dynamics specific to that pairing. If you cannot write three honest paragraphs about cardiology billing in Lubbock specifically, the page should not exist.
- `localConsiderations`: minimum 3 specific items
- `faqs`: minimum 2, genuinely local-specific
- Unique seoTitle/metaDescription (uniqueness build-checked)
- `indexable`: **defaults to false** — pages ship noindex until content review flips them

## The Expansion Process

1. **Demand check:** confirm genuine search intent for the pairing (volume data, GSC queries, sales signals)
2. **Insight check:** can three substantive, non-template paragraphs be written? Interview the billing team about that market if needed
3. Author the entry in combos.ts meeting all minimums
4. Ship noindex; review rendered output against the two demonstration pages for depth parity
5. Flip indexable:true only after editorial sign-off
6. **Batch limit:** expand in small batches (≤10/month) with performance review between batches — if pages don't earn impressions/engagement, stop and reassess

## Content Duplication Red Lines

- No sentence-level reuse between combos beyond structural boilerplate
- The specialty's generic content belongs on the specialty page; the city's on the location page — the combo page must justify itself with the intersection only
- If a combo mostly restates its parents, delete it and let the parents rank

## Who May Expand

Anyone technically; editorially, combo expansion requires the same review as any indexable content (CONTENT-REVIEW process). The schema stops thin entries; judgment stops pointless ones.
