---
title: "UB-04 Claim Form"
seoTitle: "UB-04 Claim Form: Institutional Billing Explained"
metaDescription: "The UB-04 institutional claim explained: revenue codes, bill types, condition and occurrence codes, and how facility billing differs from professional."
summary: "The institutional claim's map: what the UB-04 carries, how revenue codes and bill types structure facility billing, and where institutional claims fail."
category: forms-documents
publishedDate: 2026-07-05
reviewedDate: 2026-07-15
relatedServices: ["medical-billing", "accounts-receivable-follow-up"]
relatedGuides: ["cms-1500-claim-form", "medical-claim-lifecycle", "payment-posting"]
relatedSolutions: ["high-claim-denial-rate"]
sources:
  - label: "CMS — Institutional paper claim form (UB-04)"
    url: "https://www.cms.gov/medicare/coding-billing/electronic-billing/institutional-paper-claim-form-cms-1450"
  - label: "NUBC — Official UB-04 data specifications"
    url: "https://www.nubc.org"
---

## What the UB-04 Is

The UB-04 (CMS-1450) is the standard claim for institutional providers — hospitals, ASCs, SNFs, home health, hospice, RHCs, and FQHCs — maintained by the National Uniform Billing Committee, traveling electronically as the 837I. Where professional claims describe practitioner services, institutional claims describe facility encounters: revenue-code structured, episode-aware, and coded with situational detail professional billing never touches.

## The Structures That Make It Different

**Revenue codes** organize every charge line by department/service category — room and board, pharmacy, supplies, therapy, emergency. Payers adjudicate against expected revenue-code patterns, and services billed under wrong codes misprice or deny.

**Type of bill** encodes facility type, care category, and the claim's sequence in an episode (original, continuing, final, corrected) in one field — small digits with large consequences, since episode-based payers process each sequence differently.

**Condition, occurrence, and value codes** carry the situational story: circumstances affecting adjudication, dated events, and amounts (from accident indicators to covered-day counts). Institutional denials frequently trace to missing situational codes the payer's rules required.

**Diagnosis structure** includes admitting diagnosis, present-on-admission indicators where required, and procedure coding (ICD-10-PCS in hospital settings) — a parallel coding world from professional CPT.

## Who Bills It (in This Site's World)

Among practices this site serves: ASCs bill facility claims on the 837I with grouper-driven payment; SNFs bill PDPM episodes with assessment-driven rates; home health and hospice bill period claims with notice-of-admission/election gating; RHCs and FQHCs bill encounter rates with qualifying-visit logic. Each has its own guide-level complexity — the UB-04 is their shared chassis.

## Failure Patterns

- Revenue code and CPT/HCPCS combinations outside payer expectations
- Bill-type sequence errors breaking episode processing
- Missing condition/occurrence codes for situations payer rules define
- Overlapping claims across facility episodes (SNF consolidated billing conflicts)
- Facility and professional claims describing the same case inconsistently

## Practical Checklist

- [ ] Revenue-code mappings maintained against payer expectations
- [ ] Bill-type logic verified for episode-based payers
- [ ] Situational code requirements captured per payer as edits
- [ ] Facility/professional claim coordination on shared cases
- [ ] Episode overlap checks where consolidated billing applies

## Frequently Asked Questions

**Our facility and the surgeon's office billed the same case differently — does it matter?**
Yes: payers cross-check facility and professional claims, and inconsistent coding narratives trigger review and stalls for both parties. Coordinating code selection on device-intensive and multi-procedure cases is an operational requirement, not a courtesy.

**Why did an institutional claim deny for a "missing" code no one has heard of?**
Situational codes: institutional rules define condition/occurrence/value codes required in specific circumstances, and their absence denies claims that look complete otherwise. The payer's companion guides and denial detail identify which — then the requirement belongs in your edits.
