# Pre-Launch Checklist

The gate between "built" and "live". Grouped by owner. Items marked ⛔ are launch blockers.

## Engineering

- [ ] ⛔ `npm run check` passes on the launch commit (data + build + content QA)
- [ ] ⛔ `npm run check:types` — 0 errors
- [ ] ⛔ Production domain serving with https, www policy decided and redirected
- [ ] ⛔ PUBLIC_FORM_ENDPOINT configured; every form tested end-to-end to a monitored destination
- [ ] robots.txt and sitemap-index.xml verified live; sitemap submitted to GSC
- [ ] Analytics env vars set (if launching with analytics); events verified in GA4 debug
- [ ] 404 page verified on the platform (bad URL renders our 404)
- [ ] Lighthouse pass on homepage + one page per hub type: performance, a11y, SEO
- [ ] Mobile walkthrough: nav, menus, forms, tables scroll correctly, no horizontal overflow
- [ ] Keyboard-only walkthrough: skip link, menus, accordions, forms

## Owner (business facts) — see COMPLIANCE-REVIEW.md §3

- [ ] ⛔ site.ts placeholders resolved: email mailbox live; phone/address real or suppressed; hours; legal name
- [ ] ⛔ Pricing content matches actual pricing policy
- [ ] Service-scope commitments confirmed deliverable
- [ ] Final logo/favicon/OG image (or accept text-brand launch consciously)
- [ ] Scheduling tool embedded or form-flow accepted for consultations

## Legal Counsel — COMPLIANCE-REVIEW.md §1

- [ ] ⛔ Privacy policy, terms, cookie policy reviewed; dates set
- [ ] Patient-billing/collections language reviewed

## Compliance Professional — COMPLIANCE-REVIEW.md §2

- [ ] ⛔ /hipaa-and-security/ verified against actual controls
- [ ] Workforce-location statements match reality
- [ ] Coding-adjacent content review sign-off

## Editorial

- [ ] All 12 payer pages verified (facts + live sources + visible disclaimers)
- [ ] ReviewFlag preview pass (PUBLIC_SHOW_REVIEW_FLAGS=true build) — every flag resolved or accepted
- [ ] Spot-check 10 random programmatic pages for differentiation quality
- [ ] Search the built site for: "PLACEHOLDER", "OWNER:", "TODO", "lorem" — zero hits in visible content (script checks this too)
- [ ] Confirm no page claims: testimonials, case studies, counts, certifications, guarantees (grep the honesty-banned list from CONTENT-STYLE-GUIDE.md)

## Post-Launch (first month)

- [ ] GSC coverage review at 2 and 4 weeks (indexation matching intent)
- [ ] Form submissions arriving and answered within stated SLA
- [ ] Analytics events flowing; conversion funnel visible
- [ ] First content-review cycle scheduled (guide review dates)
