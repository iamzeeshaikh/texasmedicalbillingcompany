---
title: "Electronic Remittance Advice (ERA)"
seoTitle: "Electronic Remittance Advice (ERA/835) Explained"
metaDescription: "The ERA/835 explained: how electronic remittances work, CARC/RARC codes, auto-posting with exception review, and reconciliation to payments."
summary: "The provider-side adjudication record: how the 835 remittance works, the CARC/RARC codes that carry its meaning, and the posting disciplines it enables."
category: forms-documents
publishedDate: 2026-07-05
reviewedDate: 2026-07-15
relatedServices: ["payment-posting", "underpayment-identification"]
relatedGuides: ["payment-posting", "explanation-of-benefits", "denial-management"]
relatedSolutions: ["inconsistent-payment-posting", "underpaid-claims"]
sources:
  - label: "CMS — Electronic remittance advice standards"
    url: "https://www.cms.gov/medicare/coding-billing/electronic-billing"
  - label: "X12 — Claim adjustment reason codes"
    url: "https://x12.org/codes"
---

## What the ERA Is

The Electronic Remittance Advice — the 835 transaction — is the payer's machine-readable adjudication report to the provider: claim by claim and line by line, what was allowed, paid, adjusted, and why. It is the EOB's provider-side twin in transaction format, and it powers auto-posting, denial routing, and payment analytics — when operations actually use its detail instead of just its totals.

## The Code Systems That Carry Meaning

**CARC (Claim Adjustment Reason Codes)** state why a line's payment differs from billed: contractual obligation, deductible, denial reasons, bundling. **RARC (Remittance Advice Remark Codes)** add detail and instructions. **Group codes** assign responsibility: CO (contractual obligation — provider absorbs), PR (patient responsibility — billable to patient), OA/PI (other/payer-initiated). The group-code distinction is financially decisive: a CO adjustment is a write-down; a PR amount is collectible — posting that confuses them either forfeits revenue or bills patients wrongly.

## Auto-Posting and Its Exceptions

ERAs enable automatic posting of routine payments — the speed layer. The value discipline is exception handling: variances from expected amounts, takeback/reversal transactions, denial codes, and unmapped adjustment reasons must route to human review, because the exceptions are precisely where underpayments and denials hide. Auto-posting configured to accept everything is a machine for burying problems at scale.

## Reconciliation: ERA, EFT, and Bank

The 835 describes money; the EFT moves it. Reconciliation ties remittance totals to actual deposits daily — catching missing files, split payments, and errors. Practices also encounter payer takebacks inside ERAs (recoupments netted against current payments), which demand accurate posting to keep account histories truthful.

## Mining ERAs Beyond Posting

The remittance stream is an analytics asset: denial codes aggregated by payer and category feed prevention; allowed amounts compared against loaded contracts detect underpayments systematically; payment timing per payer builds the follow-up league table. Operations that only post ERAs use a fraction of what they paid to receive.

## Practical Checklist

- [ ] ERA enrollment active with every payer that offers it
- [ ] Group-code discipline: CO versus PR posted correctly, always
- [ ] Exception review on variances, takebacks, and denial codes daily
- [ ] ERA-to-deposit reconciliation daily
- [ ] Denial codes routed to work queues at posting
- [ ] Remittance analytics feeding underpayment and denial programs

## Frequently Asked Questions

**We get ERAs but still post from portal PDFs — does it matter?**
Materially: manual posting from portals forfeits speed, code fidelity, and analytics, and it invites the categorization drift that corrupts reporting. ERA-first posting with exception review is both faster and more truthful.

**What is a takeback and how should it post?**
A recoupment of prior payment, netted inside a current remittance — often from audits, eligibility reversals, or corrections. It must post against the original claim with its reason documented, not absorbed as a mystery reduction on today's batch; accounts and appeals both depend on the trail.
