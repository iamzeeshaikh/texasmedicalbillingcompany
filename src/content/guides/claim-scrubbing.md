---
title: "Claim Scrubbing"
seoTitle: "Claim Scrubbing: How Pre-Submission Edits Work"
metaDescription: "Claim scrubbing explained: how pre-submission edits catch errors cheaply, the edit layers from generic to payer-specific, and how to tune a rule set."
summary: "The cheapest fix in billing: how claim scrubbing catches errors before submission, the layered edit architecture that works, and the tuning loop that keeps rules earning their place."
category: process
publishedDate: 2026-07-03
reviewedDate: 2026-07-15
relatedServices: ["claims-scrubbing", "claims-submission"]
relatedGuides: ["clean-claim-rate", "medical-billing-process", "denial-rate"]
relatedSolutions: ["low-clean-claim-rate"]
sources:
  - label: "CMS — NCCI edits overview"
    url: "https://www.cms.gov/medicare/coding-billing/national-correct-coding-initiative-ncci-edits"
---

## What Scrubbing Is

Claim scrubbing is systematic pre-submission error checking: every claim passes through rule sets — demographic completeness, code validity, code-pair conflicts, payer-specific requirements — before it leaves. The economics are the whole argument: an error caught at scrub costs a minute; the same error caught after denial costs weeks of rework and payment delay.

## The Edit Layers

**Format and completeness edits** catch structural failures: missing identifiers, invalid dates, malformed fields. Clearinghouses provide these by default.

**Code-set edits** validate codes against current CPT, ICD-10, and HCPCS sets — retired codes and invalid combinations stopped before payers see them.

**Bundling and relationship edits** apply NCCI (National Correct Coding Initiative) logic and similar rules: code pairs that conflict, mutually exclusive procedures, and modifier requirements for legitimate exceptions.

**Payer-specific edits** encode individual payers' quirks — the requirements generic rules miss and your denial history reveals. This layer is where scrubbing stops being commodity and starts being competitive.

**Practice-specific edits** encode your own recurring mistakes: the provider who forgets a required field, the service line with chronic modifier issues.

## Building From Denial History

The best edit set is reverse-engineered from your own failures: mine 6–12 months of rejections and denials, rank causes by frequency and dollars, and write an edit for each recurring preventable cause. Generic edit libraries catch generic errors; your denial history catches your errors.

## The Tuning Loop

Edits are living rules: monthly review adds edits for new failure patterns and — equally important — retires zero-yield edits that only add friction. Track edit yield (errors caught per rule); an edit that never fires is noise, and noise slows claims without protecting them. Over-editing is a real failure mode: claims crawling through hundreds of low-value rules serve nobody.

## What Scrubbing Cannot Catch

Rules catch what rules can describe. Documentation insufficiency, medical-necessity judgment, and clinical-coding mismatches need human review — scrubbing complements coding review, never replaces it. A claim can pass every edit and still be wrong about what happened in the exam room.

## Practical Checklist

- [ ] Clearinghouse and code-set edits confirmed current
- [ ] NCCI/bundling logic active with modifier awareness
- [ ] Payer-specific rules built from your denial history
- [ ] Edit yield reviewed monthly; stale rules retired
- [ ] Scrub-failure queue worked daily with correction turnarounds

## Frequently Asked Questions

**Our system has thousands of edits available — should we enable them all?**
No — enable what maps to your failure history and payer mix. Blanket enablement buries claims in false positives and staff in noise. The discipline is curation: every active edit should be able to justify its existence with caught errors.

**Do edits slow down our claims?**
Passing claims go out same-day as always; failing claims were going to bounce anyway — the edit moved the fix from weeks later to minutes now. Only bloated, untuned rule sets create real drag, which is what yield review prevents.
