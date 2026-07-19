---
title: "Prior Authorization"
seoTitle: "Prior Authorization: Process, Pitfalls & Workflow Design"
metaDescription: "Prior authorization explained: how the process works, why denials happen despite approvals, and the scheduling-gate workflow that prevents auth losses."
summary: "The gate before the service: how prior authorization actually works, the failure modes that turn delivered care into denials, and the workflow that closes them."
category: process
publishedDate: 2026-07-03
reviewedDate: 2026-07-15
relatedServices: ["prior-authorization-support", "eligibility-authorization-workflow-support"]
relatedGuides: ["medical-necessity-denials", "insurance-eligibility-verification", "denial-management"]
relatedSolutions: ["missing-prior-authorizations"]
sources:
  - label: "CMS — Prior authorization initiatives"
    url: "https://www.cms.gov/medicare/coding-billing/prior-authorization-pre-claim-review-initiatives"
---

## What Prior Authorization Is

Prior authorization is payer permission obtained before delivering defined services — advanced imaging, procedures, specialty drugs, therapies. The payer reviews clinical information against its coverage criteria and approves, denies, or requests more. Without required authorization, delivered services deny almost unappealably: the payer's position is simply "you didn't ask first."

## How the Process Works

1. **Requirement check:** does this payer require auth for this service under this plan? Requirements differ by plan and change frequently — the check must be current, per-payer, and documented either way.
2. **Submission with clinicals:** the request goes in complete — correct form or portal, clinical documentation matching the payer's criteria (conservative therapy history, findings, measurements as policies specify).
3. **Tracking to decision:** every open request carries a status and next-check date; stalls escalate before the service date.
4. **Approval capture:** the authorization number, valid dates, approved units, and scope get recorded and handed to scheduling and billing — an approval nobody can find helps nobody.

## Why Approved Services Still Deny

The approval is a bounded object: it covers specific procedures, date windows, and unit counts. Denials-despite-approval happen when reality drifts from the boundary — the procedure evolved intraoperatively, the visit slipped past the window, units exceeded the grant, or the claim's codes mismatch the authorized ones. Authorization management continues through the claim: billed services must align with approved parameters, and changes need communicated updates within payer windows.

## The Workflow That Prevents Losses

One mandatory gate: no auth-sensitive service gets scheduled without a documented requirement check, and none is performed without confirmed approval (or a documented, informed decision otherwise). Around the gate: maintained per-payer requirement lists, a tracked request pipeline, approval-detail capture, and expiry/exhaustion alerts for ongoing care. Every failure mode maps to a missing piece of that machinery.

## Regulatory Direction

Authorization burden has drawn regulatory response — federal rules for Medicare Advantage and other government-program plans have tightened decision timelines, required criteria transparency, and added continuity protections, with electronic authorization standards phasing in. The trendline helps; the workflow discipline remains yours.

## Practical Checklist

- [ ] Requirement check documented at scheduling for every auth-sensitive service
- [ ] Per-payer requirement lists maintained on a refresh cadence
- [ ] Open requests tracked with next-action dates and escalation triggers
- [ ] Approval numbers, windows, units, and scope captured and shared
- [ ] Claims aligned to authorized parameters before submission
- [ ] Auth-related denial rate tracked toward zero

## Frequently Asked Questions

**Can we recover a claim denied for missing authorization?**
Paths are narrow but real: some payers offer retro-authorization windows for defined circumstances, urgent-care exceptions exist, and appeals succeed where requirements were actually met but records disagree. Prevention economics dominate — the recovery paths are labor-heavy by design.

**Whose job is the authorization when another office ordered the service?**
The payer does not care: the requirement attaches to the service, and the rendering claim eats the denial. Protect yourself procedurally — verify auth status before performing elective auth-sensitive services, whatever the referral paperwork implies.
