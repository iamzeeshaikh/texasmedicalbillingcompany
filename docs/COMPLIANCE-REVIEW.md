# Compliance Review — Required Before Launch

This file is the authoritative list of everything requiring owner and/or qualified-professional review before the site goes live. The ReviewFlag component surfaces these in dev mode (set PUBLIC_SHOW_REVIEW_FLAGS=true to see them in a preview build).

## 1. Legal Counsel Review (REQUIRED)

- /privacy-policy/ — confirm it reflects actual data practices; set dates; add mailing address when one exists
- /terms/ — jurisdiction/venue language; overall review
- /cookie-policy/ — must match actually-enabled tracking at launch
- Patient billing & collection statements (patient-billing, patient-statements service pages; solutions content) — debt-collection compliance
- Business Associate Agreement claims across the site — must match the executed BAA template

## 2. Healthcare Compliance Professional Review (REQUIRED)

- /hipaa-and-security/ — the page carries an explicit owner-review notice; every safeguard statement must be verified against actual implemented controls before launch
- Offshore/workforce-location statements (site-wide, esp. hipaa-and-security, local-vs-offshore comparison, FAQ) — must match actual staffing and contracts
- Credit balance/overpayment content (credit-balance-review service) — Medicare overpayment rule framing
- Coding-adjacent content (coding services, specialty coding sections, coding guides) — educational framing verified; no definitive CPT/ICD guidance published unsourced

## 3. Owner Verification (REQUIRED)

- src/config/site.ts — ALL placeholders: phone, email mailbox existence, address (null until real), hours, legal entity name, state registration. CONTACT.isPlaceholder must flip to false only when real
- Pricing statements (/pricing/, /cost/* pages) — confirm model descriptions match actual company pricing policy
- Service scope claims (turnaround standards, reporting commitments across services/process pages) — confirm operationally deliverable
- Careers page — confirm no fictional roles listed (currently none)
- Form backend — PUBLIC_FORM_ENDPOINT configured and tested end-to-end; submissions must reach a monitored inbox/CRM
- Analytics IDs via env vars if desired at launch

## 4. Payer Page Verification (REQUIRED)

All 12 /payers/ pages are flagged complianceReviewRequired. Verify: factual statements against current payer/provider documentation, source links live and correct, non-affiliation disclaimer rendering (it is automatic — confirm visually), and no reproduced copyrighted payer content.

## 5. Structural Honesty Mechanisms (verify intact, do not remove)

- ReviewFlag topics on: coding, prior-auth, patient-billing, credit-balance, coding-audit, physician-group (incident-to), virtual billing (offshore/security), all payers, all cost pages, pricing page, hipaa page, legal pages
- Automatic disclaimers: payer (PAYER_DISCLAIMER), software (SOFTWARE_DISCLAIMER), forms (PHI_WARNING), footer (DISCLAIMER)
- CONTACT.isPlaceholder gating phone/address rendering
- Case studies page: remains honestly empty until real, client-approved cases exist
- Authors: no invented people; tmbc-editorial identity until real profiles

## 6. Items That Remain Placeholders After Launch Prep

Track these to closure:
- [ ] Final SVG logo (Logo.astro) and favicon
- [ ] 1200×630 raster OG image replacing og-default.svg
- [ ] Real business phone/address in site.ts
- [ ] Form endpoint + CRM integration
- [ ] Scheduling tool embed on /schedule-a-consultation/ (placeholder comment marks the spot)
- [ ] Analytics env vars
- [ ] Legal page dates
- [ ] Team profiles (when real people consent)
