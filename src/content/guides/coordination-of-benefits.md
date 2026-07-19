---
title: "Coordination of Benefits"
seoTitle: "Coordination of Benefits (COB): Rules & Billing Order"
metaDescription: "COB explained: how primary and secondary coverage is determined, Medicare's MSP rules, the birthday rule, and workflows that prevent COB denials."
summary: "Who pays first and why it matters: the ordering rules from employer coverage to Medicare secondary payer, and the workflows that keep dual-coverage claims from stalling."
category: forms-documents
publishedDate: 2026-07-05
reviewedDate: 2026-07-15
relatedServices: ["insurance-eligibility-verification", "payment-posting"]
relatedGuides: ["insurance-eligibility-verification", "explanation-of-benefits", "patient-responsibility"]
relatedSolutions: ["eligibility-verification-errors"]
sources:
  - label: "CMS — Medicare secondary payer rules"
    url: "https://www.cms.gov/medicare/coordination-benefits-recovery"
---

## What COB Is

Coordination of benefits is the rule system deciding payment order when a patient holds multiple coverages — employer plans, spousal coverage, Medicare, Medicaid, TRICARE, and liability situations. Bill the wrong payer first and the claim denies or, worse, pays and later recoups; the ordering rules are therefore front-end knowledge with back-end consequences.

## The Ordering Rules in Brief

- **Own-employer coverage generally precedes spousal coverage** for the employee; dependents covered under both parents follow the **birthday rule** (the parent whose birthday falls earlier in the year is primary) in most commercial coordination
- **Medicare Secondary Payer (MSP) rules** govern when Medicare pays second: working-aged beneficiaries with employer group coverage (employer size thresholds apply), disability and ESRD situations with their own logic, and liability/no-fault/workers' comp situations where those payers precede Medicare
- **Medicaid is payer of last resort** — after essentially everything else, including Medicare (the dual-eligible flow: Medicare primary, Medicaid wrapping)
- **TRICARE for Life** wraps Medicare for military retirees: Medicare primary, TRICARE secondary
- **Accident and injury situations** route first to liability, no-fault auto, or workers' comp coverage where applicable — with health plans conditional behind them

## The Workflow That Prevents COB Denials

Capture and verify other-coverage data at registration — eligibility responses flag COB indicators; intake questions surface spousal coverage, Medicare status, and accident circumstances. Sequence claims correctly: primary billed first, secondary billed with the primary's adjudication attached (electronic crossovers automate some flows — Medicare crosses to supplements and Medicaid — but verification beats assumption). Keep MSP questionnaires current for Medicare patients, because payers re-ask and mismatches stall claims.

## Where COB Goes Wrong

- Secondary billed as primary, denying for other-coverage
- Primary EOBs never forwarded, stranding secondary claims until timely filing
- Medicare billed primary in MSP situations, generating recoupments later
- Accident claims sent to health plans while liability questions pend, tangling everyone
- Stale COB data — the divorce, retirement, or job change nobody updated

## Practical Checklist

- [ ] Other-coverage questions in registration, refreshed periodically
- [ ] Eligibility-response COB indicators worked, not ignored
- [ ] MSP questionnaire current on Medicare patients
- [ ] Secondary claims triggered automatically on primary adjudication
- [ ] Accident-circumstance capture at intake for injury visits

## Frequently Asked Questions

**A secondary payer denied for missing primary information — but we sent it?**
Verify the attachment actually carried: electronic secondary claims must include the primary adjudication data in the transaction, and crossover assumptions fail silently. Rebill with the primary remittance data explicitly attached, and check whether this payer requires its own claim format for secondaries.

**Both plans paid and now one wants money back — what happened?**
Order was wrong or data was stale: the recoup­ing payer determined it paid primary when it owed secondary (or nothing). Reconcile the true order under the rules, refund per the demand's process, and rebill the correct payer — then fix the intake data that caused it.
