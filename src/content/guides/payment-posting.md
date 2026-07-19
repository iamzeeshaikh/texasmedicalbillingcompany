---
title: "Payment Posting"
seoTitle: "Payment Posting: Why Posting Discipline Decides Data Truth"
metaDescription: "Payment posting explained: ERA auto-posting, exception review, adjustment-code discipline, and reconciliation — the bookkeeping that makes every report honest."
summary: "The quiet foundation: payment posting turns remittances into your system's version of financial truth — done loosely, it corrupts every report; done well, it exposes every problem early."
category: process
publishedDate: 2026-07-03
reviewedDate: 2026-07-15
relatedServices: ["payment-posting", "underpayment-identification"]
relatedGuides: ["electronic-remittance-advice", "explanation-of-benefits", "net-collection-rate"]
relatedSolutions: ["inconsistent-payment-posting"]
sources:
  - label: "CMS — Remittance advice resources"
    url: "https://www.cms.gov/medicare/coding-billing/electronic-billing"
---

## Why Posting Is Architecture, Not Clerical Work

Every downstream number — denial statistics, AR aging, collection rates, underpayment analysis — assumes payments and adjustments were categorized correctly at posting. Loose posting does not merely err; it blinds: denials posted as write-offs never reach follow-up queues, underpayments buried in contractual adjustments never surface, and reports built on the data smooth over exactly what they should flag.

## The Posting Workflow

**ERA auto-posting** handles the routine: electronic remittances (835 files) post payments and standard adjustments automatically where amounts match expectations. The value is speed on the clean majority.

**Exception review** is where money hides: variances from expected amounts, takeback transactions, denial codes, and unmapped adjustment reasons route to human review instead of blind acceptance. Auto-posting without exception discipline is auto-hiding.

**Manual posting** covers paper EOBs and portal-only remittances — same rules, human keyed, same-day standard.

**Reconciliation** closes the loop daily: posted totals tie to actual bank deposits, catching errors, missing remittances, and worse. Unapplied cash gets researched on a standing cadence toward zero at month-end.

## Adjustment-Code Discipline

The heart of posting quality is a documented adjustment policy: every code with a defined meaning, contractual adjustments (true contract differences) separated from operational write-offs (denials, timely filing, small-balance policy), and approval rules for non-routine write-offs. Posters applying personal logic produce categories nobody can audit — and rates nobody should trust.

## Denial Routing at Posting Time

Remittances carry denial codes (CARC/RARC — claim adjustment and remittance advice reason codes); posting is the moment denials either enter work queues or die as adjustments. The posting workflow must route every denial code to follow-up, not to the write-off bucket — this single discipline determines whether denial management has an inventory to work.

## Common Errors

- Blanket "contractual" postings absorbing underpayments and denials
- ERA exceptions accepted without review because the queue is behind
- Posting backlogs making every report days stale
- No deposit reconciliation, so posting drift accumulates unfound
- Small-balance write-offs without policy or pattern review

## Practical Checklist

- [ ] Written adjustment-code policy with defined meanings
- [ ] ERA exceptions human-reviewed daily
- [ ] Denial codes routed to work queues at posting
- [ ] Posting-to-deposit reconciliation daily
- [ ] Unapplied cash near zero at month-end
- [ ] Same-day posting standard on electronic remittances

## Frequently Asked Questions

**How fast should payments post?**
Same-day for electronic remittances, within two days for paper — not for tidiness but because every downstream workflow (denial follow-up, patient statements, reporting) reads from posted data, and posting lag is staleness everywhere at once.

**We fixed posting and our numbers got worse — why?**
They got truthful: accurate posting surfaces the denials and variances blanket adjustments used to absorb. Brief ugliness is the price of visibility, and leadership should be briefed to expect it — the alternative was managing by fiction.
