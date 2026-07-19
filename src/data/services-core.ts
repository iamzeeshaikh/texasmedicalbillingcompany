/**
 * Core service entries (part 1 of 2). Validated in src/data/index.ts.
 * Every entry must be genuinely differentiated — no keyword-swapped clones.
 */
import type { z } from 'astro/zod';
import type { serviceSchema } from '../lib/content-schemas';

type ServiceInput = z.input<typeof serviceSchema>;

export const servicesCore: ServiceInput[] = [
  {
    slug: 'medical-billing',
    title: 'Medical Billing Services',
    seoTitle: 'Medical Billing Services in Texas | End-to-End Claim Support',
    metaDescription:
      'End-to-end medical billing services for Texas practices: charge entry, claim scrubbing, submission, payment posting, denial follow-up, and monthly reporting.',
    h1: 'Medical Billing Services for Texas Practices',
    summary:
      'Full-cycle claim management — from charge capture through payment posting and denial follow-up — handled by a dedicated billing team working inside your existing practice management system.',
    intro: [
      'Medical billing is the operational backbone of every practice: if claims go out late, incomplete, or coded inconsistently, revenue slows down no matter how busy the schedule is. Our medical billing service covers the complete claim workflow — charge entry, scrubbing, electronic submission, payment posting, rejection handling, and structured follow-up — so your front office can focus on patients instead of payer portals.',
      'We work inside your existing, client-authorized practice management or EHR system rather than forcing a software migration. Your data stays in your system, you keep full visibility, and every action our team takes is traceable in your own audit logs.',
    ],
    category: 'core',
    featured: true,
    problemsAddressed: [
      'Claims going out days after the visit because the front office is stretched thin',
      'Rejections and denials sitting unworked while staff handle patients at the desk',
      'No clear picture of what was billed, what was paid, and what is still outstanding',
      'Billing knowledge concentrated in one employee, creating risk when they leave',
    ],
    included: [
      'Daily charge entry and claim creation from your encounter data',
      'Pre-submission claim scrubbing against payer-specific edits',
      'Electronic claim submission and clearinghouse rejection handling',
      'Insurance and patient payment posting with reconciliation',
      'Denial review, correction, and resubmission workflows',
      'Weekly and monthly performance reporting with plain-language commentary',
    ],
    processSteps: [
      {
        title: 'Workflow review',
        description:
          'We map how encounters currently move from the schedule to a paid claim and identify where charges leak, stall, or get written off.',
      },
      {
        title: 'System access and setup',
        description:
          'You grant role-based access to your practice management system under a signed Business Associate Agreement; we configure work queues and edits.',
      },
      {
        title: 'Parallel ramp-up',
        description:
          'We begin with a defined claim scope, verify output quality against your expectations, then expand to the full billing workflow.',
      },
      {
        title: 'Ongoing production and reporting',
        description:
          'Claims are worked daily, denials tracked to resolution, and results reviewed with you in a standing monthly performance call.',
      },
    ],
    metrics: [
      {
        name: 'Clean claim rate',
        description:
          'The share of claims accepted by payers on first submission — the fastest lever for predictable cash flow.',
      },
      {
        name: 'Days in accounts receivable',
        description:
          'How long revenue sits unpaid on average; billing discipline shows up here first.',
      },
      {
        name: 'First-pass resolution rate',
        description:
          'Claims paid without any rework — a direct measure of front-end billing quality.',
      },
    ],
    suitableFor: [
      'Private practices that want billing off their front desk without losing visibility',
      'Groups replacing a departing biller or an underperforming vendor',
      'New practices that need a billing function from day one',
    ],
    considerations: [
      'Billing quality depends on documentation quality — we flag documentation gaps back to providers rather than guessing at charges.',
      'Transitions take planning: expect a defined cutover period where old AR and new claims are worked in parallel.',
      'A billing service manages the process; final coding and clinical documentation decisions remain with the practice and its providers.',
    ],
    relatedServices: ['revenue-cycle-management', 'denial-management', 'payment-posting', 'accounts-receivable-follow-up'],
    relatedSpecialties: ['family-medicine-medical-billing', 'internal-medicine-medical-billing', 'cardiology-medical-billing'],
    relatedSolutions: ['claim-submission-delays', 'poor-billing-visibility', 'billing-staff-turnover'],
    relatedGuides: ['medical-billing', 'medical-billing-process', 'clean-claim-rate'],
    faqs: [
      {
        question: 'Do we have to switch software to work with you?',
        answer:
          'No. We work inside your existing, client-authorized practice management or EHR system whenever platform access rules allow it. Keeping your system means your data, history, and reporting stay under your control.',
      },
      {
        question: 'How long does it take to transition billing to your team?',
        answer:
          'Most single-specialty practices complete onboarding in two to four weeks: access setup, workflow documentation, a parallel ramp-up period, and then full production. Complex multi-provider groups may take longer, and we define the timeline in writing before starting.',
      },
      {
        question: 'Who works our old accounts receivable during the transition?',
        answer:
          'That is agreed explicitly in scoping. We can take over existing AR as a defined project, work only claims we submit, or run both in parallel — the key is that nothing is left unowned during the cutover.',
      },
      {
        question: 'How do you charge for medical billing services?',
        answer:
          'Pricing depends on specialty, claim volume, monthly collections, scope, and your software environment. See our pricing page for how common models work, then request a quote based on your actual numbers.',
      },
    ],
  },
  {
    slug: 'revenue-cycle-management',
    title: 'Revenue Cycle Management',
    seoTitle: 'Revenue Cycle Management Services for Texas Practices',
    metaDescription:
      'Full revenue cycle management: eligibility, charge capture, claims, denials, AR follow-up, patient billing, and reporting managed as one accountable workflow.',
    h1: 'Revenue Cycle Management Services',
    summary:
      'End-to-end ownership of the financial workflow — from eligibility checks before the visit to reporting after payment — so every step of the revenue cycle has a clear owner and a measurable outcome.',
    intro: [
      'Medical billing handles claims; revenue cycle management (RCM) handles the whole financial journey of a patient encounter. Problems that surface as denials or slow payments usually start earlier — an eligibility check that never happened, a missing authorization, a charge that was never entered. RCM puts one accountable process around all of it.',
      'Our RCM service combines front-end verification, mid-cycle claim management, and back-end recovery with monthly reporting that explains not just what happened, but why — and what is being changed to improve the next month.',
    ],
    category: 'core',
    featured: true,
    problemsAddressed: [
      'Denials caused upstream — eligibility, authorization, registration — that claim-level fixes never solve',
      'No single owner for the revenue cycle, so issues bounce between front desk, providers, and billing',
      'Reports that show totals but never explain root causes or trends',
      'Revenue leakage from missed charges and unworked low-balance claims',
    ],
    included: [
      'Insurance eligibility and benefits verification before scheduled visits',
      'Charge capture review and reconciliation against the schedule',
      'Claim scrubbing, submission, and rejection management',
      'Denial management with root-cause tracking by category',
      'Accounts receivable follow-up with payer-specific workflows',
      'Patient statement cycles and inquiry support',
      'Monthly KPI reporting: collections, denial trends, AR aging, and action items',
    ],
    processSteps: [
      {
        title: 'Revenue cycle assessment',
        description:
          'We baseline your current KPIs — clean claim rate, denial rate, days in AR, net collection rate — and identify the highest-impact gaps.',
      },
      {
        title: 'Workflow design',
        description:
          'Front-end, mid-cycle, and back-end responsibilities are documented so every step has an owner, a turnaround expectation, and a check.',
      },
      {
        title: 'Implementation',
        description:
          'Our team takes over agreed workflows inside your system, with escalation paths defined for issues that need practice decisions.',
      },
      {
        title: 'Measure and adjust',
        description:
          'Monthly reviews track KPI movement against the baseline, and workflows are adjusted where the data shows friction.',
      },
    ],
    metrics: [
      {
        name: 'Net collection rate',
        description:
          'Collections as a share of what you were contractually entitled to collect — the truest measure of revenue cycle health.',
      },
      {
        name: 'Denial rate by category',
        description:
          'Tracking denials by root cause (eligibility, authorization, coding, timely filing) shows where the cycle is leaking.',
      },
      {
        name: 'AR over 90 days',
        description:
          'The share of receivables aging past 90 days — old AR loses value quickly and signals follow-up gaps.',
      },
    ],
    suitableFor: [
      'Practices where denials keep recurring despite claim-level fixes',
      'Groups that want one accountable partner for the full financial workflow',
      'Administrators who need KPI reporting they can take to physician owners',
    ],
    considerations: [
      'RCM requires cooperation at the front desk — eligibility and registration quality are shared responsibilities we help structure, not tasks we can do around you.',
      'Meaningful KPI movement typically shows over one to two quarters, not the first month; beware anyone promising instant results.',
    ],
    relatedServices: ['medical-billing', 'insurance-eligibility-verification', 'denial-management', 'practice-financial-reporting'],
    relatedSpecialties: ['multispecialty-practice-billing', 'cardiology-medical-billing', 'orthopedic-medical-billing'],
    relatedSolutions: ['high-claim-denial-rate', 'revenue-leakage', 'poor-billing-visibility'],
    relatedGuides: ['revenue-cycle-management', 'net-collection-rate', 'denial-rate'],
    faqs: [
      {
        question: 'What is the difference between medical billing and revenue cycle management?',
        answer:
          'Medical billing covers the claim workflow: charge entry through payment posting and denial follow-up. Revenue cycle management adds the front end (eligibility, benefits, authorizations, registration quality) and the analytical back end (root-cause denial tracking, KPI reporting). Billing fixes claims; RCM fixes the process that produces them.',
      },
      {
        question: 'Can you take over only part of our revenue cycle?',
        answer:
          'Yes. Some clients keep front-desk verification in-house and outsource claims and denials; others hand over the full cycle. Scope is defined per workflow in the service agreement so responsibilities never blur.',
      },
      {
        question: 'What reporting do we get?',
        answer:
          'A standard monthly package: collections summary, denial trends by category, AR aging, clean claim rate, and net collection rate, with commentary explaining movements and the actions planned. Custom reports can be added where your system supports them.',
      },
    ],
  },
  {
    slug: 'medical-coding',
    title: 'Medical Coding Support',
    seoTitle: 'Medical Coding Support Services for Texas Practices',
    metaDescription:
      'Medical coding support for Texas practices: chart review, code validation, documentation feedback, and denial-driven coding corrections with audit-ready workflows.',
    h1: 'Medical Coding Support Services',
    summary:
      'Coding review and validation workflows that catch mismatches between documentation and billed codes before payers do — reducing coding denials and audit exposure.',
    intro: [
      'Coding sits at the highest-risk point of the revenue cycle: undercode and you leave earned revenue on the table; overcode and you create denial and audit exposure. Our coding support service reviews encounters against documentation, validates code selection and modifier use, and feeds recurring documentation gaps back to providers in plain language.',
      'We position this service carefully: our team supports coding workflows and quality review, while final coding decisions and documentation standards remain with the practice and its providers. Where certified coder review is required for specific work, that requirement is stated in scoping rather than assumed.',
    ],
    category: 'core',
    problemsAddressed: [
      'Denials tagged to coding errors, bundling edits, or modifier misuse',
      'Provider documentation that does not support the codes being billed',
      'Inconsistent code selection between providers in the same group',
      'Backlogs of unbilled encounters waiting on coding questions',
    ],
    included: [
      'Pre-submission coding review for defined encounter types',
      'Modifier and bundling-edit validation against current payer rules',
      'Denial-driven coding correction and resubmission support',
      'Recurring documentation-gap feedback summaries for providers',
      'Coding-related denial trend reporting by provider and code group',
    ],
    processSteps: [
      {
        title: 'Scope definition',
        description:
          'We agree which encounter types, providers, or denial categories need coding review — full-chart review and targeted review are priced differently.',
      },
      {
        title: 'Baseline review',
        description:
          'A sample of recent encounters is reviewed to identify recurring mismatches between documentation and billed codes.',
      },
      {
        title: 'Ongoing review workflow',
        description:
          'Defined encounters route through coding review before submission; questions go back to providers through a structured query process.',
      },
      {
        title: 'Feedback loop',
        description:
          'Monthly summaries show coding denial trends and documentation patterns so the same issues stop recurring.',
      },
    ],
    metrics: [
      {
        name: 'Coding-related denial rate',
        description:
          'The share of denials attributable to code selection, bundling, or modifiers — the direct measure of coding quality.',
      },
      {
        name: 'Query turnaround time',
        description:
          'How quickly provider documentation questions are resolved; slow queries create unbilled encounter backlogs.',
      },
    ],
    suitableFor: [
      'Practices seeing repeated coding or bundling denials',
      'Groups with wide variation in coding patterns between providers',
      'Practices preparing for payer audits or post-payment reviews',
    ],
    considerations: [
      'Coding support is educational and operational — it does not replace the provider’s responsibility for accurate documentation and final code selection.',
      'CPT and ICD-10 rules change annually and payer policies vary; specific coding guidance on this site is educational and must be verified against current official sources.',
    ],
    complianceReviewRequired: true,
    complianceTopics: ['coding'],
    relatedServices: ['coding-audit', 'denial-management', 'billing-audit', 'medical-billing'],
    relatedSpecialties: ['orthopedic-medical-billing', 'cardiology-medical-billing', 'general-surgery-medical-billing'],
    relatedSolutions: ['coding-related-denials', 'high-claim-denial-rate'],
    relatedGuides: ['medical-coding-basics', 'medical-necessity-denials', 'denial-management'],
    faqs: [
      {
        question: 'Do you replace our in-house coder?',
        answer:
          'Not necessarily. Many clients use us to backstop an in-house coder — handling overflow, second-level review, or denial-driven corrections. Others route defined encounter types to us entirely. The model is set in scoping based on volume and risk.',
      },
      {
        question: 'Can you tell us which codes to bill?',
        answer:
          'We validate that billed codes are supported by documentation and flag mismatches, but final coding decisions remain with the practice and its providers. Definitive coding advice for specific clinical scenarios should always be verified against current CPT, ICD-10, and payer policy sources.',
      },
      {
        question: 'How do you handle coding for multiple specialties in one group?',
        answer:
          'Review workflows are set up per specialty, because denial patterns and documentation risks differ — an orthopedic global-period issue looks nothing like an E/M leveling question in internal medicine. Reporting is broken out the same way.',
      },
    ],
  },
  {
    slug: 'credentialing',
    title: 'Provider Credentialing',
    seoTitle: 'Provider Credentialing Services in Texas | Payer Enrollment',
    metaDescription:
      'Provider credentialing and payer enrollment support for Texas practices: applications, CAQH maintenance, revalidations, and status tracking to protect your start dates.',
    h1: 'Provider Credentialing Services',
    summary:
      'Structured credentialing and payer enrollment management — applications, CAQH upkeep, revalidations, and follow-up — so new providers can start seeing insured patients without avoidable delays.',
    intro: [
      'Every week a provider waits on credentialing is a week of visits that either get rescheduled, written off, or billed out-of-network. Credentialing is rarely difficult work, but it is unforgiving: one stale CAQH attestation or an unanswered payer request can silently add sixty days to an enrollment.',
      'Our credentialing service manages the full enrollment lifecycle — initial applications, group linkages, CAQH profile maintenance, revalidations, and expirables tracking — with a status log you can check instead of wondering where things stand.',
    ],
    category: 'front-end',
    featured: true,
    problemsAddressed: [
      'New providers seeing patients before payer enrollment is effective, creating unbillable visits',
      'Applications stalled because payer requests for information went unnoticed',
      'Missed revalidations that deactivate an enrolled provider without warning',
      'No central record of which providers are enrolled with which payers',
    ],
    included: [
      'Initial credentialing applications for commercial and government payers',
      'Group contract linkage and location adds for existing contracts',
      'CAQH profile setup, maintenance, and attestation schedules',
      'Revalidation and re-enrollment tracking with deadline alerts',
      'Weekly status reporting per provider per payer',
    ],
    processSteps: [
      {
        title: 'Document collection',
        description:
          'We gather licenses, DEA, malpractice history, work history, and practice details into a complete credentialing file before anything is submitted.',
      },
      {
        title: 'Application submission',
        description:
          'Applications go to the agreed payer list with each payer’s specific format and portal requirements handled.',
      },
      {
        title: 'Active follow-up',
        description:
          'Every open application is followed up on a fixed cadence — payer silence is chased, not waited out.',
      },
      {
        title: 'Effective-date confirmation',
        description:
          'Enrollment effective dates are confirmed in writing and handed to the billing workflow so claims are held or released correctly.',
      },
    ],
    metrics: [
      {
        name: 'Average enrollment turnaround',
        description:
          'Days from complete application to effective date, tracked per payer — the number that tells you when a provider can safely start.',
      },
      {
        name: 'Application deficiency rate',
        description:
          'How often payers bounce applications back for missing information; a clean file process keeps this near zero.',
      },
    ],
    suitableFor: [
      'Practices hiring providers and needing enrollment before start dates',
      'New practices building their initial payer panel',
      'Groups that have lost track of revalidation and expirables deadlines',
    ],
    considerations: [
      'Payer processing times are outside anyone’s control — good credentialing removes avoidable delay, it cannot make a payer commit to a date.',
      'Credentialing and contracting are different: enrollment gets a provider on file; contract terms and rates are a separate negotiation the practice owns.',
    ],
    relatedServices: ['new-practice-billing-setup', 'medical-billing', 'insurance-eligibility-verification'],
    relatedSpecialties: ['telemedicine-billing', 'behavioral-health-billing', 'urgent-care-billing'],
    relatedSolutions: ['credentialing-delays'],
    relatedGuides: ['provider-credentialing'],
    faqs: [
      {
        question: 'How long does payer credentialing take in Texas?',
        answer:
          'Commercial payers commonly take 60–120 days from a complete application; Medicare and Texas Medicaid have their own timelines that vary with workload and application quality. The realistic lever is submitting complete applications early and following up relentlessly — which is exactly what a credentialing service does.',
      },
      {
        question: 'Can a new provider see patients while credentialing is pending?',
        answer:
          'It depends on the payer and the contract. Some situations allow supervised or retroactive billing arrangements; many do not, and visits become unbillable. We flag the risk per payer so scheduling decisions are made with accurate information, but the practice should confirm specifics with each payer or its counsel.',
      },
      {
        question: 'Do you handle re-credentialing and expirables?',
        answer:
          'Yes. Revalidation deadlines, license and DEA expirations, and CAQH attestations are tracked with alerts, because a missed revalidation can deactivate a fully enrolled provider overnight.',
      },
    ],
  },
  {
    slug: 'insurance-eligibility-verification',
    title: 'Insurance Eligibility Verification',
    seoTitle: 'Insurance Eligibility Verification Services | Texas Practices',
    metaDescription:
      'Pre-visit insurance eligibility verification for Texas practices: coverage checks, plan details, and flag-outs before the patient arrives — fewer eligibility denials.',
    h1: 'Insurance Eligibility Verification Services',
    summary:
      'Scheduled pre-visit eligibility checks that confirm coverage is active and identify plan changes before the visit — cutting one of the most preventable denial categories.',
    intro: [
      'Eligibility denials are the most frustrating category in billing because they are almost entirely preventable — the information was available before the patient walked in. Coverage terminations, plan changes at the start of the year, Medicaid churn, and Medicare Advantage switches all get caught by a disciplined verification routine and missed by an overloaded front desk.',
      'Our verification service runs scheduled eligibility checks ahead of upcoming appointments, flags problems to your team with enough lead time to act, and documents each check so downstream denials can be appealed with evidence.',
    ],
    category: 'front-end',
    problemsAddressed: [
      'Denials for terminated coverage or patient-not-eligible on date of service',
      'Surprises from plan changes the patient did not mention',
      'Front desk too busy checking in patients to run verifications properly',
      'No documented proof of verification when appealing eligibility denials',
    ],
    included: [
      'Batch eligibility checks for scheduled appointments on an agreed lead time',
      'Verification of active coverage, plan type, and payer ID accuracy',
      'Flag reports for terminated, changed, or unverifiable coverage',
      'Documentation of each verification for appeal support',
      'Re-verification workflows for recurring visit specialties',
    ],
    processSteps: [
      {
        title: 'Schedule integration',
        description:
          'We pull upcoming appointments from your system on a set cadence — typically 48 to 72 hours ahead.',
      },
      {
        title: 'Verification run',
        description:
          'Coverage is checked through clearinghouse and payer portals; anything ambiguous is escalated for a direct check.',
      },
      {
        title: 'Exception flagging',
        description:
          'Terminated or changed coverage is flagged to your front desk with clear next steps before the patient arrives.',
      },
    ],
    metrics: [
      {
        name: 'Eligibility denial rate',
        description:
          'Denials for coverage issues as a share of total denials — the direct measure of verification effectiveness.',
      },
      {
        name: 'Verification coverage rate',
        description:
          'The share of scheduled visits verified before arrival; gaps here show exactly where denials will come from.',
      },
    ],
    suitableFor: [
      'High-volume practices where the front desk cannot verify every visit',
      'Specialties with recurring visits where coverage changes mid-treatment',
      'Practices with heavy Medicaid or Medicare Advantage mix, where churn is constant',
    ],
    considerations: [
      'Eligibility responses confirm coverage status, not payment — benefits, medical necessity, and authorization rules still apply.',
      'Same-day add-on appointments need a defined fallback workflow, since batch verification runs ahead of the schedule.',
    ],
    relatedServices: ['benefits-verification', 'prior-authorization-support', 'medical-billing'],
    relatedSpecialties: ['physical-therapy-billing', 'behavioral-health-billing', 'urgent-care-billing'],
    relatedSolutions: ['eligibility-verification-errors', 'high-claim-denial-rate'],
    relatedGuides: ['insurance-eligibility-verification', 'coordination-of-benefits'],
    faqs: [
      {
        question: 'How far ahead do you verify eligibility?',
        answer:
          'Typically 48–72 hours before the appointment — close enough to catch recent changes, far enough out for your team to contact the patient if something is wrong. High-churn payer mixes sometimes justify a second same-week check.',
      },
      {
        question: 'What is the difference between eligibility and benefits verification?',
        answer:
          'Eligibility confirms the coverage is active and you have the right payer. Benefits verification goes deeper: copays, deductibles remaining, visit limits, and service-specific coverage rules. Many practices run eligibility on every visit and full benefits checks on new patients and high-cost services.',
      },
      {
        question: 'Can verification stop all eligibility denials?',
        answer:
          'It dramatically reduces them but cannot reach zero — retroactive terminations and payer data lags still happen. The documented check gives you an evidence trail for appeals in exactly those cases.',
      },
    ],
  },
  {
    slug: 'benefits-verification',
    title: 'Benefits Verification',
    seoTitle: 'Insurance Benefits Verification Services for Texas Practices',
    metaDescription:
      'Detailed benefits verification: deductibles, copays, visit limits, and service-specific coverage confirmed before treatment so patients and providers avoid surprises.',
    h1: 'Insurance Benefits Verification Services',
    summary:
      'Service-level benefit checks — deductibles, coinsurance, visit limits, exclusions — completed before treatment starts, so financial conversations happen up front instead of in collections.',
    intro: [
      'Knowing coverage is active is not the same as knowing what it pays. Benefits verification answers the questions that determine whether a visit ends in payment or a dispute: how much deductible remains, whether the service is covered under the plan, how many visits are allowed, and what the patient will owe.',
      'This matters most where treatment plans span multiple visits or involve expensive services — therapy series, injections, imaging, surgical episodes. Verifying benefits before the first visit lets your team set accurate patient expectations and collect the right amounts at the right time.',
    ],
    category: 'front-end',
    problemsAddressed: [
      'Patients surprised by bills because nobody checked their deductible before treatment',
      'Claims denied for exceeded visit limits or non-covered services',
      'Treatment plans started before anyone confirmed the plan covers them',
      'Front desk quoting copays from old cards instead of current plan data',
    ],
    included: [
      'Service-specific benefit checks for scheduled treatments',
      'Deductible, coinsurance, and out-of-pocket status documentation',
      'Visit-limit and frequency-limit confirmation for therapy and recurring care',
      'Coverage exclusion and plan-rule flags relevant to the planned service',
      'Patient-responsibility estimates for your front desk to communicate',
    ],
    processSteps: [
      {
        title: 'Service scoping',
        description:
          'We agree which visit types get full benefit checks — typically new patients, high-cost services, and multi-visit treatment plans.',
      },
      {
        title: 'Benefit investigation',
        description:
          'Plan documents, portal data, and payer calls are combined into a documented benefit summary per patient.',
      },
      {
        title: 'Front-desk handoff',
        description:
          'Your team receives a clear summary — what is covered, what the patient owes, what needs authorization — before the visit.',
      },
    ],
    metrics: [
      {
        name: 'Point-of-service collection rate',
        description:
          'Money collected at the visit as a share of what should have been collected — accurate benefits data drives this directly.',
      },
      {
        name: 'Benefit-related denial rate',
        description:
          'Denials for limits, exclusions, and non-covered services that a pre-visit benefit check would have caught.',
      },
    ],
    suitableFor: [
      'Therapy practices managing visit limits across long treatment plans',
      'Specialties with high-cost procedures where surprises are expensive',
      'Practices trying to raise point-of-service collections',
    ],
    considerations: [
      'Benefit quotes from payers are estimates, not guarantees of payment — we document who said what and when, which matters in disputes.',
      'Benefits verification adds the most value when the front desk actually uses the estimates in patient conversations; we help script that handoff.',
    ],
    relatedServices: ['insurance-eligibility-verification', 'prior-authorization-support', 'patient-billing'],
    relatedSpecialties: ['physical-therapy-billing', 'pain-management-billing', 'plastic-surgery-medical-billing'],
    relatedSolutions: ['patient-balance-problems', 'eligibility-verification-errors'],
    relatedGuides: ['patient-responsibility', 'insurance-eligibility-verification'],
    faqs: [
      {
        question: 'Do you verify benefits for every visit?',
        answer:
          'Usually not — that would be wasteful. The standard pattern is eligibility checks on every visit, with full benefits verification on new patients, new treatment plans, and defined high-cost services. Scope is set to where the financial risk actually is.',
      },
      {
        question: 'Can you give patients exact out-of-pocket amounts?',
        answer:
          'We provide estimates based on current plan data — deductible remaining, coinsurance, and allowed amounts where available. Payers treat these as non-binding, so estimates are framed as estimates, which is also what price-transparency good practice expects.',
      },
    ],
  },
  {
    slug: 'charge-entry',
    title: 'Charge Entry',
    seoTitle: 'Charge Entry Services for Medical Practices in Texas',
    metaDescription:
      'Accurate, same-day charge entry services: encounter reconciliation, charge capture checks, and clean handoff to claim submission for Texas medical practices.',
    h1: 'Medical Charge Entry Services',
    summary:
      'Disciplined charge entry with schedule reconciliation — every encounter accounted for, entered accurately, and moved to claim creation without backlog.',
    intro: [
      'Charge entry is where revenue is either captured or quietly lost. A charge that never gets entered produces no denial, no report line, no alarm — it simply never becomes money. The discipline that prevents this is reconciliation: comparing entered charges against the appointment schedule so missing encounters are caught within days, not quarters.',
      'Our charge entry service enters charges daily from your encounter data, reconciles against the schedule, and flags gaps — unsigned notes, missing superbills, encounters without charges — back to your team while they are still fixable.',
    ],
    category: 'core',
    problemsAddressed: [
      'Encounters that never turn into claims because charges were never entered',
      'Charge lag stretching days-to-bill and delaying the whole revenue cycle',
      'Data entry errors — wrong provider, wrong location, wrong date — that cause downstream denials',
      'No reconciliation between the schedule and billed charges',
    ],
    included: [
      'Daily charge entry from encounter documentation or superbills',
      'Schedule-to-charge reconciliation with missing-encounter reports',
      'Demographic and insurance data accuracy checks at entry',
      'Charge lag tracking and unsigned-note escalation',
    ],
    processSteps: [
      {
        title: 'Source setup',
        description:
          'We define where charges come from — EHR encounter data, superbills, or interface feeds — and standardize the format.',
      },
      {
        title: 'Daily entry cycle',
        description:
          'Charges are entered on a same-day or next-day cadence with accuracy checks on provider, location, date, and payer.',
      },
      {
        title: 'Reconciliation',
        description:
          'Entered charges are matched against the appointment schedule; every unmatched encounter is investigated and reported.',
      },
    ],
    metrics: [
      {
        name: 'Charge lag',
        description:
          'Days from date of service to charge entry — every day of lag delays payment and pushes claims toward timely-filing limits.',
      },
      {
        name: 'Missing encounter rate',
        description:
          'Scheduled visits without corresponding charges — the direct measure of revenue leakage at capture.',
      },
    ],
    suitableFor: [
      'Practices with charge backlogs or multi-day entry lag',
      'Groups where missed charges have been discovered after the fact',
      'High-volume clinics needing same-day entry discipline',
    ],
    considerations: [
      'Charge entry quality depends on documentation being complete and signed — we escalate unsigned notes rather than entering charges that cannot be supported.',
      'Reconciliation catches missing charges; deciding how to handle late documentation remains a practice policy question.',
    ],
    relatedServices: ['medical-billing', 'claims-submission', 'revenue-integrity-support'],
    relatedSolutions: ['revenue-leakage', 'claim-submission-delays'],
    relatedGuides: ['medical-billing-process', 'medical-claim-lifecycle'],
    faqs: [
      {
        question: 'How fast are charges entered?',
        answer:
          'The standard target is same-day or next-business-day from when documentation is available. The gating factor is usually note signing — we track and escalate unsigned encounters so the delay is visible instead of silent.',
      },
      {
        question: 'How do you catch missed charges?',
        answer:
          'Reconciliation against the appointment schedule: every scheduled, arrived visit should produce a charge or a documented reason it did not. Unmatched encounters go on a daily exception report until resolved.',
      },
    ],
  },
  {
    slug: 'claims-submission',
    title: 'Claims Submission',
    seoTitle: 'Medical Claims Submission Services | Texas Billing Support',
    metaDescription:
      'Daily electronic claims submission with clearinghouse rejection handling, payer acknowledgment tracking, and timely-filing protection for Texas practices.',
    h1: 'Medical Claims Submission Services',
    summary:
      'Daily electronic submission with acknowledgment tracking and same-week rejection rework — claims leave on time, and nothing disappears between clearinghouse and payer.',
    intro: [
      'Between “claim created” and “claim received by payer” sits a surprising amount of failure: clearinghouse rejections nobody reworks, batches that error out silently, payer acknowledgments that never arrive. Claims lost in this gap age quietly until they hit timely-filing limits and become permanent write-offs.',
      'Our submission service runs a daily cycle — submit, confirm acknowledgment, rework rejections — with batch-level tracking so every claim is provably either at the payer or in a worked exception queue.',
    ],
    category: 'core',
    problemsAddressed: [
      'Clearinghouse rejections sitting unworked for weeks',
      'Claims lost between the practice system and the payer with no one noticing',
      'Timely-filing write-offs caused by submission gaps, not slow payers',
      'No confirmation trail proving when claims reached the payer',
    ],
    included: [
      'Daily electronic claim batch submission',
      'Clearinghouse acceptance and payer acknowledgment (277CA) tracking',
      'Rejection rework with same-week resubmission targets',
      'Secondary and tertiary claim submission workflows',
      'Timely-filing deadline monitoring on unsubmitted and rejected claims',
    ],
    processSteps: [
      {
        title: 'Submission cycle setup',
        description:
          'Batch schedules, clearinghouse connections, and payer ID mappings are verified so claims route correctly from day one.',
      },
      {
        title: 'Daily submit-and-confirm',
        description:
          'Batches go out daily; acceptance reports are reconciled against what was sent, so missing acknowledgments surface immediately.',
      },
      {
        title: 'Rejection rework',
        description:
          'Rejected claims are corrected and resubmitted on a same-week target, with recurring rejection causes reported for upstream fixes.',
      },
    ],
    metrics: [
      {
        name: 'Rejection rate',
        description:
          'Claims bounced by clearinghouse or payer front-end edits — a measure of data quality before adjudication even starts.',
      },
      {
        name: 'Days to submission',
        description:
          'Time from charge entry to claim out the door; this should be measured in hours, not days.',
      },
    ],
    suitableFor: [
      'Practices that have found unsubmitted claim batches after the fact',
      'Groups writing off claims to timely filing without a clear cause',
      'Billing teams without a daily acknowledgment reconciliation habit',
    ],
    considerations: [
      'Submission tracking proves delivery, not payment — adjudication issues are handled in denial management, a separate workflow.',
      'Payer and clearinghouse edits change; recurring rejections usually mean an upstream data fix, which we report rather than silently patching forever.',
    ],
    relatedServices: ['claims-scrubbing', 'medical-billing', 'denial-management'],
    relatedSolutions: ['claim-submission-delays', 'high-no-response-claim-volume'],
    relatedGuides: ['medical-claim-lifecycle', 'timely-filing-denials', 'cms-1500-claim-form'],
    faqs: [
      {
        question: 'What is the difference between a rejection and a denial?',
        answer:
          'A rejection happens before adjudication — the clearinghouse or payer front end refuses the claim for format or data errors, and it never enters processing. A denial is an adjudicated decision on a received claim. Rejections are faster to fix but easier to lose track of, because they often live in reports nobody reads.',
      },
      {
        question: 'How do you prevent timely-filing write-offs?',
        answer:
          'Three habits: daily submission so claims never sit, acknowledgment reconciliation so lost claims surface within days, and a deadline monitor on every unresolved rejection. Timely-filing denials are almost always process failures, and the process is fixable.',
      },
    ],
  },
  {
    slug: 'claims-scrubbing',
    title: 'Claims Scrubbing',
    seoTitle: 'Claim Scrubbing Services | Cleaner First-Pass Claims in Texas',
    metaDescription:
      'Pre-submission claim scrubbing against payer-specific edits: demographic, coding, and policy checks that raise first-pass acceptance for Texas practices.',
    h1: 'Claim Scrubbing Services',
    summary:
      'Layered pre-submission edits — demographics, code pairs, modifiers, payer policy quirks — applied before claims leave, so errors are fixed in minutes instead of resubmitted in weeks.',
    intro: [
      'Every error caught before submission costs minutes; the same error caught after adjudication costs weeks. Claim scrubbing is the systematic application of edits — from basic demographic checks to payer-specific policy rules — at the moment fixing them is cheapest.',
      'We layer standard clearinghouse edits with a custom rule set built from your own denial history, so the scrubber learns from what payers have actually rejected rather than relying on generic rules alone.',
    ],
    category: 'core',
    problemsAddressed: [
      'First-pass denial patterns that repeat month after month',
      'Generic clearinghouse edits missing payer-specific quirks',
      'Rework volume overwhelming the billing team',
      'No feedback loop from denials back into pre-submission rules',
    ],
    included: [
      'Pre-submission edit configuration in your system or clearinghouse',
      'Custom edit rules built from your historical denial patterns',
      'Daily scrub-exception work queues with correction turnaround targets',
      'Monthly edit-effectiveness review: what the scrubber caught and what still got through',
    ],
    processSteps: [
      {
        title: 'Denial-pattern analysis',
        description:
          'We mine 6–12 months of denial and rejection history to identify what edits would have prevented.',
      },
      {
        title: 'Edit configuration',
        description:
          'Rules are configured in your practice management system and clearinghouse, layered from generic to payer-specific.',
      },
      {
        title: 'Exception workflow',
        description:
          'Claims that fail edits route to a daily correction queue instead of going out wrong or sitting in limbo.',
      },
      {
        title: 'Continuous tuning',
        description:
          'New denial patterns feed new edits monthly; stale edits that only create noise are retired.',
      },
    ],
    metrics: [
      {
        name: 'First-pass acceptance rate',
        description:
          'Claims accepted without front-end rejection — the immediate output of scrubbing quality.',
      },
      {
        name: 'Edit yield',
        description:
          'Errors caught per edit rule; high-yield edits prove their value, zero-yield edits get reviewed for retirement.',
      },
    ],
    suitableFor: [
      'Practices with clean claim rates below the mid-90s',
      'Groups whose denial reports show the same causes repeatedly',
      'Billing teams drowning in preventable rework',
    ],
    considerations: [
      'Scrubbing catches what rules can describe — documentation and medical-necessity issues need coding review, not more edits.',
      'Over-editing is real: too many low-value rules slow the billing cycle without improving acceptance. Edits should earn their place.',
    ],
    relatedServices: ['claims-submission', 'medical-coding', 'denial-management'],
    relatedSolutions: ['low-clean-claim-rate', 'high-claim-denial-rate'],
    relatedGuides: ['claim-scrubbing', 'clean-claim-rate', 'first-pass-resolution-rate'],
    faqs: [
      {
        question: 'Doesn’t our clearinghouse already scrub claims?',
        answer:
          'Clearinghouses apply generic format and basic policy edits, which catch a lot — but the denials that persist at most practices are payer-specific and specialty-specific. The gap between generic edits and your actual denial history is exactly where custom scrubbing rules pay off.',
      },
      {
        question: 'Will more edits slow down our claims?',
        answer:
          'Done right, no. Claims that pass edits go out same-day as always; claims that fail were going to be denied anyway — the edit just moved the fix from weeks after submission to minutes before. We also retire noisy edits that flag non-problems.',
      },
    ],
  },
  {
    slug: 'payment-posting',
    title: 'Payment Posting',
    seoTitle: 'Payment Posting Services | Accurate ERA & EOB Posting',
    metaDescription:
      'Accurate payment posting for Texas practices: ERA and manual posting, adjustment coding discipline, variance flagging, and daily reconciliation to deposits.',
    h1: 'Payment Posting Services',
    summary:
      'Same-day ERA and manual posting with disciplined adjustment coding and deposit reconciliation — because every downstream report is only as accurate as the posting underneath it.',
    intro: [
      'Payment posting looks clerical but determines whether your entire revenue picture is trustworthy. Sloppy posting hides underpayments inside contractual adjustments, buries denials in miscoded write-offs, and makes AR reports fiction. Disciplined posting is what makes underpayment detection, denial tracking, and net collection reporting possible at all.',
      'Our posting service handles electronic remittances and paper EOBs on a same-day cycle, applies adjustment codes according to a documented policy, and reconciles postings against actual bank deposits so nothing is posted that was not received.',
    ],
    category: 'core',
    problemsAddressed: [
      'Underpayments hidden inside blanket “contractual adjustment” postings',
      'Denials posted as write-offs instead of routing to follow-up',
      'Posting backlogs that make AR reports weeks out of date',
      'Postings that never get reconciled to bank deposits',
    ],
    included: [
      'Same-day ERA (835) auto-posting with exception review',
      'Manual EOB posting for paper and portal remittances',
      'Documented adjustment-code policy with variance flagging',
      'Denial routing to follow-up queues at posting time',
      'Daily posting-to-deposit reconciliation',
    ],
    processSteps: [
      {
        title: 'Posting policy setup',
        description:
          'Adjustment codes, small-balance rules, and variance thresholds are documented so every poster applies the same logic.',
      },
      {
        title: 'Daily posting cycle',
        description:
          'ERAs auto-post with exceptions reviewed line by line; paper EOBs are posted manually the day received.',
      },
      {
        title: 'Reconciliation and routing',
        description:
          'Postings tie to deposits daily; denials and variances route to work queues instead of dying as adjustments.',
      },
    ],
    metrics: [
      {
        name: 'Posting lag',
        description:
          'Days from remittance receipt to posting — lag here makes every AR and collection report stale.',
      },
      {
        name: 'Unapplied cash balance',
        description:
          'Money received but not yet posted to accounts — should be near zero at every month-end close.',
      },
    ],
    suitableFor: [
      'Practices with posting backlogs distorting their AR reports',
      'Groups that suspect underpayments but cannot see them in the data',
      'Administrators tightening month-end close discipline',
    ],
    considerations: [
      'Posting policy decisions — small-balance write-off thresholds, adjustment categories — are practice decisions we document and apply, not decisions we make unilaterally.',
      'Accurate posting exposes problems (underpayments, denial volume) that were previously invisible; expect reports to look worse before they look truthful.',
    ],
    relatedServices: ['underpayment-identification', 'denial-management', 'practice-financial-reporting'],
    relatedSolutions: ['inconsistent-payment-posting', 'underpaid-claims', 'revenue-leakage'],
    relatedGuides: ['payment-posting', 'electronic-remittance-advice', 'explanation-of-benefits'],
    faqs: [
      {
        question: 'Why does payment posting quality matter so much?',
        answer:
          'Because everything downstream reads from it. Denial tracking, underpayment recovery, AR aging, and net collection rate all assume payments and adjustments were coded correctly at posting. A practice with sloppy posting cannot even see its problems, let alone fix them.',
      },
      {
        question: 'Do you post from ERAs automatically?',
        answer:
          'Yes — electronic remittances auto-post where your system supports it, but the value is in the exception handling: variances from expected allowed amounts, takebacks, and denial codes get human review and routing instead of blind acceptance.',
      },
    ],
  },
  {
    slug: 'denial-management',
    title: 'Denial Management',
    seoTitle: 'Denial Management Services | Texas Medical Billing Support',
    metaDescription:
      'Systematic denial management for Texas practices: triage, correction, appeals, and root-cause prevention reporting that shrinks denial rates over time.',
    h1: 'Denial Management Services',
    summary:
      'A production system for denials — triage by value and deadline, correct and appeal with evidence, then attack root causes so the same denial stops recurring.',
    intro: [
      'Industry surveys consistently put initial denial rates near or above ten percent of claims, and a large share of denied dollars are never worked at all — not because they were unwinnable, but because nobody had the time. Denial management is not heroic appeal writing; it is a production system that makes sure every denial gets triaged, the winnable ones get worked before deadlines, and the preventable ones stop happening.',
      'Our denial workflow classifies every denial by root cause, works corrections and appeals on deadline-aware queues, and reports monthly on which upstream fixes would eliminate the most denied dollars.',
    ],
    category: 'recovery',
    featured: true,
    problemsAddressed: [
      'Denied claims aging past appeal deadlines unworked',
      'The same denial causes recurring month after month with no prevention',
      'Appeals sent as form letters without evidence, losing winnable cases',
      'No reporting on denial causes, values, or recovery rates',
    ],
    included: [
      'Daily denial triage by dollar value, appeal deadline, and winnability',
      'Correction-and-resubmission workflows for fixable denials',
      'Evidence-based appeals with payer-specific requirements and formats',
      'Root-cause classification and monthly prevention reporting',
      'Denial recovery tracking: appealed, overturned, written off — with reasons',
    ],
    processSteps: [
      {
        title: 'Denial inventory',
        description:
          'Existing denials are cataloged by age, value, cause, and appeal deadline — you see exactly what is at stake before work begins.',
      },
      {
        title: 'Triage and work queues',
        description:
          'Denials route into deadline-aware queues; high-value and near-deadline items are worked first, by design rather than by chance.',
      },
      {
        title: 'Correct, appeal, or escalate',
        description:
          'Fixable claims are corrected and resubmitted; deniable-in-error claims get evidence-based appeals; contract disputes are escalated with documentation.',
      },
      {
        title: 'Prevention loop',
        description:
          'Monthly root-cause reports turn denial patterns into upstream fixes — edits, verification steps, documentation feedback.',
      },
    ],
    metrics: [
      {
        name: 'Denial rate',
        description:
          'Denied claims as a share of submitted claims, tracked by category — the headline number for revenue cycle friction.',
      },
      {
        name: 'Appeal overturn rate',
        description:
          'Share of appealed denials decided in the practice’s favor — proof of appeal quality and case selection.',
      },
      {
        name: 'Denial write-off rate',
        description:
          'Denied dollars ultimately written off — the number denial management exists to shrink.',
      },
    ],
    suitableFor: [
      'Practices with denial rates trending above single digits',
      'Groups with a backlog of unworked denials approaching deadlines',
      'Administrators who want prevention reporting, not just rework',
    ],
    considerations: [
      'Not every denial is winnable — honest triage includes writing off true losses quickly and documenting why, instead of burning hours on dead claims.',
      'Appeal deadlines vary by payer and contract; a backlogged denial inventory loses options every week it waits.',
    ],
    relatedServices: ['claims-appeals', 'accounts-receivable-follow-up', 'claims-scrubbing', 'medical-coding'],
    relatedSpecialties: ['pain-management-billing', 'cardiology-medical-billing', 'behavioral-health-billing'],
    relatedSolutions: ['high-claim-denial-rate', 'unworked-denials', 'coding-related-denials'],
    relatedGuides: ['denial-management', 'denial-rate', 'medical-necessity-denials', 'timely-filing-denials'],
    faqs: [
      {
        question: 'What denial rate should a practice expect?',
        answer:
          'Published industry benchmarks vary by specialty and payer mix, but well-run practices typically hold initial denial rates in the mid single digits. More important than the benchmark is the trend and the mix: a rising rate or a pile of “preventable” categories (eligibility, authorization, timely filing) signals process problems that rework alone will not fix.',
      },
      {
        question: 'Are appeals actually worth the effort?',
        answer:
          'Selectively, yes. A meaningful share of denials are overturned when appealed with proper evidence — but blanket appealing everything wastes effort on unwinnable claims. Triage is the skill: work the winnable, write off the lost, and prevent the recurring.',
      },
      {
        question: 'Can you work our existing denial backlog?',
        answer:
          'Yes — backlog projects are scoped separately from ongoing denial management, because the economics differ. We inventory the backlog by deadline and value first, so effort goes to claims that can still be recovered.',
      },
    ],
  },
  {
    slug: 'accounts-receivable-follow-up',
    title: 'Accounts Receivable Follow-Up',
    seoTitle: 'Medical AR Follow-Up Services | Insurance Claim Follow-Up',
    metaDescription:
      'Systematic insurance AR follow-up: aged claim workflows, payer-specific escalation, and status resolution that keeps receivables from sliding past 90 days.',
    h1: 'Accounts Receivable Follow-Up Services',
    summary:
      'Scheduled, payer-aware follow-up on every open claim — statused, escalated, and resolved on a cadence — so receivables stop aging into write-offs.',
    intro: [
      'Insurance AR does not resolve itself. Claims sit in payer queues, get pended for information nobody sent, or simply vanish — and every aging bucket a claim slides through makes recovery less likely. Follow-up is unglamorous, repetitive work, which is exactly why in-house teams squeezed for time do it last.',
      'Our AR follow-up service works open claims on a fixed cadence with payer-specific playbooks: status checks, missing-information responses, escalations, and reprocessing requests — each documented so the claim’s history is visible, not tribal knowledge.',
    ],
    category: 'recovery',
    problemsAddressed: [
      'Claims aging past 60 and 90 days with no follow-up activity logged',
      'Payer “we never received it” responses discovered months too late',
      'Follow-up happening only when cash flow dips, not on a schedule',
      'No documentation of prior calls, making every touch start from zero',
    ],
    included: [
      'Aged AR work queues with claim-level follow-up cadences',
      'Payer status checks via portals, clearinghouses, and calls',
      'Missing-information and development-request responses',
      'Reprocessing and adjustment requests with reference tracking',
      'AR aging trend reporting by payer and bucket',
    ],
    processSteps: [
      {
        title: 'AR inventory and prioritization',
        description:
          'Open claims are ranked by value, age, and payer behavior so follow-up effort lands where recovery odds are highest.',
      },
      {
        title: 'Cadenced follow-up',
        description:
          'Every open claim gets a next-action date; touches are logged with payer references so history compounds instead of restarting.',
      },
      {
        title: 'Escalation and resolution',
        description:
          'Stalled claims escalate through payer channels; resolved claims close with documented outcomes feeding the aging report.',
      },
    ],
    metrics: [
      {
        name: 'AR over 90 days',
        description:
          'The percentage of receivables older than 90 days — the standard early-warning number for follow-up gaps.',
      },
      {
        name: 'Touch-to-resolution rate',
        description:
          'How many follow-up actions it takes to resolve a claim, by payer — reveals which payers need escalation paths, not more calls.',
      },
    ],
    suitableFor: [
      'Practices whose AR-over-90 percentage keeps creeping up',
      'Groups with follow-up staff pulled constantly into other duties',
      'Practices that inherited messy AR from a previous biller or system',
    ],
    considerations: [
      'Follow-up recovers claims that can be recovered — some aged AR is genuinely dead, and honest reporting includes recommending write-offs with documented reasons.',
      'Consistent follow-up works best paired with denial management; statusing a claim is pointless if the resulting denial never gets worked.',
    ],
    relatedServices: ['old-ar-recovery', 'denial-management', 'payment-posting'],
    relatedSolutions: ['accounts-receivable-over-90-days', 'high-no-response-claim-volume', 'slow-insurance-payments'],
    relatedGuides: ['accounts-receivable-aging', 'days-in-accounts-receivable', 'claim-status-follow-up'],
    faqs: [
      {
        question: 'What percentage of AR should be over 90 days?',
        answer:
          'Commonly cited benchmarks put well-managed practices under roughly 15–20% of AR beyond 90 days, though payer mix matters — heavy workers’ comp or Medicaid managed care skews older. The more useful signal is your own trend: a rising over-90 share means follow-up is losing ground.',
      },
      {
        question: 'How is AR follow-up different from denial management?',
        answer:
          'Follow-up chases claims with no answer — pending, lost, or ignored. Denial management works claims with a negative answer. They overlap and feed each other, which is why we track both in one workflow but report them separately.',
      },
    ],
  },
  {
    slug: 'prior-authorization-support',
    title: 'Prior Authorization Support',
    seoTitle: 'Prior Authorization Support Services for Texas Practices',
    metaDescription:
      'Prior authorization support: requirement checks, submission, clinical documentation coordination, and status tracking so scheduled care is not derailed by missing auths.',
    h1: 'Prior Authorization Support Services',
    summary:
      'Authorization requirements checked before scheduling, requests submitted with complete clinicals, and statuses tracked to decision — so care and revenue stop hinging on a missed fax.',
    intro: [
      'Prior authorization is where clinical care and administrative burden collide hardest. Requirements differ by payer, plan, and procedure; they change without much notice; and a missing authorization converts an entire scheduled procedure into a denial that is very hard to appeal after the fact.',
      'Our authorization support puts structure around the chaos: verify whether authorization is required, assemble and submit the request with the clinical documentation payers actually ask for, track it to a decision, and hand the approval — with its number, dates, and units — to scheduling and billing.',
    ],
    category: 'front-end',
    problemsAddressed: [
      'Procedures performed without required authorization and denied outright',
      'Authorization requests stalled on missing clinical documentation',
      'Approvals obtained but expired or exceeded by the time of service',
      'Staff spending hours daily on hold with utilization management lines',
    ],
    included: [
      'Authorization requirement verification per payer and procedure',
      'Request submission with clinical documentation coordination',
      'Status tracking with escalation on stalled requests',
      'Approval detail handoff: numbers, valid dates, units, and limits',
      'Expiring and exhausted authorization alerts for ongoing care',
    ],
    processSteps: [
      {
        title: 'Requirement check',
        description:
          'Before scheduling, we confirm whether the payer requires authorization for the planned service — and document the answer either way.',
      },
      {
        title: 'Submission with clinicals',
        description:
          'Requests go in complete: the right form, the right clinical evidence, the right channel for that payer.',
      },
      {
        title: 'Tracking to decision',
        description:
          'Every open request has a status and next-check date; stalls trigger escalation before the service date, not after.',
      },
    ],
    metrics: [
      {
        name: 'Authorization-related denial rate',
        description:
          'Denials citing missing or invalid authorization — the number this workflow exists to drive toward zero.',
      },
      {
        name: 'Turnaround time to decision',
        description:
          'Days from request to payer decision, tracked by payer — the data scheduling needs to set realistic dates.',
      },
    ],
    suitableFor: [
      'Procedure-heavy specialties where a missed auth means a five-figure denial',
      'Practices whose staff lose hours daily to authorization phone queues',
      'Clinics managing recurring services with unit and date limits',
    ],
    considerations: [
      'An authorization is not a payment guarantee — eligibility and medical-necessity rules still apply at claim time, which is why we document everything.',
      'Clinical documentation for authorization requests comes from providers; our role is coordination and completeness, not clinical judgment.',
    ],
    complianceReviewRequired: true,
    complianceTopics: ['payer', 'reimbursement'],
    relatedServices: ['insurance-eligibility-verification', 'benefits-verification', 'denial-management'],
    relatedSpecialties: ['pain-management-billing', 'orthopedic-medical-billing', 'radiology-medical-billing'],
    relatedSolutions: ['missing-prior-authorizations', 'high-claim-denial-rate'],
    relatedGuides: ['prior-authorization', 'medical-necessity-denials'],
    faqs: [
      {
        question: 'Can you guarantee an authorization will be approved?',
        answer:
          'No one can — approval is the payer’s decision based on clinical criteria. What a structured workflow guarantees is that requests go in complete, on time, through the right channel, and get chased to a decision, which removes the failure modes that cause most authorization denials.',
      },
      {
        question: 'What happens if a service was performed without authorization?',
        answer:
          'Options narrow fast, but retro-authorization windows exist with some payers for defined circumstances, and appeal paths exist where requirements were met but records disagree. We triage these case by case — and honestly flag the ones that are unrecoverable.',
      },
    ],
  },
  {
    slug: 'patient-billing',
    title: 'Patient Billing',
    seoTitle: 'Patient Billing Services | Clear Statements, Fewer Disputes',
    metaDescription:
      'Patient billing support for Texas practices: accurate balances after insurance, understandable statements, inquiry handling, and respectful follow-up workflows.',
    h1: 'Patient Billing Services',
    summary:
      'Accurate patient balances, statements people can actually understand, and responsive inquiry handling — patient billing that collects without damaging patient relationships.',
    intro: [
      'Patient responsibility has grown into a major share of practice revenue as high-deductible plans have spread — and it is the hardest share to collect. Confusing statements, balances sent before insurance finished processing, and unanswered billing questions turn collectible balances into disputes and bad reviews.',
      'Our patient billing service makes sure balances are right before they bill (insurance fully adjudicated, payments posted, adjustments applied), statements are clear, and patient questions get answered by someone who can actually see the account history.',
    ],
    category: 'core',
    problemsAddressed: [
      'Statements sent before insurance finished, generating angry calls and rebills',
      'Patient balances aging because statements are confusing or wrong',
      'Front desk fielding billing questions they cannot see the data to answer',
      'No consistent statement cycle or follow-up sequence',
    ],
    included: [
      'Balance verification after full insurance adjudication',
      'Statement cycle management with clear, plain-language formats',
      'Patient billing inquiry line handling with documented resolutions',
      'Payment plan setup per practice policy',
      'Patient AR aging reports with recommended actions',
    ],
    processSteps: [
      {
        title: 'Balance accuracy gate',
        description:
          'Statements only go out on accounts where insurance processing is complete and postings are verified — accuracy before volume.',
      },
      {
        title: 'Statement cycles',
        description:
          'A defined cadence of statements and reminders, worded plainly, with every touch logged on the account.',
      },
      {
        title: 'Inquiry resolution',
        description:
          'Patient questions route to trained staff with full account visibility; disputes get researched, not deflected.',
      },
    ],
    metrics: [
      {
        name: 'Patient collection rate',
        description:
          'Patient-responsibility dollars collected as a share of what was billed to patients — clarity and accuracy move this number.',
      },
      {
        name: 'Statement-to-payment lag',
        description:
          'Days from first statement to payment; long lags usually mean confusing statements or unanswered questions.',
      },
    ],
    suitableFor: [
      'Practices with growing patient AR under high-deductible plans',
      'Groups whose staff dread billing-question phone calls',
      'Practices wanting consistent, respectful follow-up without collections-agency tone',
    ],
    considerations: [
      'Collection policies — payment plans, discounts, when to involve external collections — are practice decisions governed by your policies and applicable law; we execute the policy you set. Debt-collection practices are regulated, and policies should be reviewed by counsel.',
      'Patient billing tone is brand-sensitive: statements and calls represent your practice, and we treat them that way.',
    ],
    complianceReviewRequired: true,
    complianceTopics: ['patient-billing', 'debt-collection'],
    relatedServices: ['patient-statements', 'payment-posting', 'benefits-verification'],
    relatedSolutions: ['patient-balance-problems'],
    relatedGuides: ['patient-responsibility', 'explanation-of-benefits'],
    faqs: [
      {
        question: 'Do you act as a collections agency?',
        answer:
          'No. We manage routine patient billing — statements, reminders, questions, payment plans — under your policies. Accounts that exhaust your internal process may be referred to a licensed collections agency if that is your policy; that decision and relationship remain yours.',
      },
      {
        question: 'How do you reduce patient billing complaints?',
        answer:
          'Mostly by fixing the causes: never billing before insurance finishes, making statements readable, and answering questions with real account data. A large share of “billing complaints” are actually accuracy and communication failures, which are fixable process problems.',
      },
    ],
  },
  {
    slug: 'patient-statements',
    title: 'Patient Statements',
    seoTitle: 'Patient Statement Services | Statement Cycle Management',
    metaDescription:
      'Patient statement cycle management: accurate, plain-language statements on a reliable cadence, with delivery tracking and pre-statement balance verification.',
    h1: 'Patient Statement Services',
    summary:
      'A reliable statement engine — verified balances, plain-language formats, consistent cycles, and delivery tracking — so patient AR moves instead of aging.',
    intro: [
      'Statements are the workhorse of patient collections, and most practices run them badly: irregular cycles, balances that include pending insurance, formats designed by the software vendor rather than for the patient. The result is predictable — patients pay slowly or call confused, and staff time gets burned re-explaining balances.',
      'This service manages the statement cycle end to end: balance verification before sending, formats that show what insurance paid and what remains in plain language, a consistent cadence, and tracking of undeliverable statements so bad addresses get fixed instead of ignored.',
    ],
    category: 'core',
    problemsAddressed: [
      'Irregular statement cycles that stall patient cash flow',
      'Statements including balances insurance has not finished processing',
      'High undeliverable rates from unmanaged address data',
      'Formats patients cannot decode without calling the office',
    ],
    included: [
      'Pre-statement balance and adjudication verification',
      'Plain-language statement formatting within your system’s capabilities',
      'Fixed statement cycles with reminder sequencing',
      'Returned-mail and bad-address workflows',
      'Statement volume and payment-response reporting',
    ],
    processSteps: [
      {
        title: 'Cycle design',
        description:
          'Statement frequency, reminder counts, and escalation points are set as policy with the practice.',
      },
      {
        title: 'Verified generation',
        description:
          'Each cycle, accounts are screened so only complete, accurate balances bill — the single biggest driver of statement trust.',
      },
      {
        title: 'Delivery and response tracking',
        description:
          'Undeliverables trigger address workflows; payment response per cycle is reported so the cadence can be tuned.',
      },
    ],
    metrics: [
      {
        name: 'Statement response rate',
        description:
          'Share of statements producing payment within the cycle — the effectiveness measure for format and cadence.',
      },
      {
        name: 'Undeliverable rate',
        description:
          'Returned statements as a share of sent; rising rates mean upstream demographic data problems.',
      },
    ],
    suitableFor: [
      'Practices without a consistent monthly statement discipline',
      'Groups with high statement-related call volume',
      'Practices moving from paper-only to mixed digital delivery',
    ],
    considerations: [
      'Statement content and dunning language may be subject to state and federal rules depending on practice type and collection stage — have counsel review templates.',
      'Electronic statement adoption depends on your patient population; we recommend mixed delivery rather than assuming digital-first works everywhere.',
    ],
    complianceReviewRequired: true,
    complianceTopics: ['patient-billing'],
    relatedServices: ['patient-billing', 'payment-posting'],
    relatedSolutions: ['patient-balance-problems'],
    relatedGuides: ['patient-responsibility'],
    faqs: [
      {
        question: 'How often should statements go out?',
        answer:
          'Monthly cycles are the common baseline, with many practices adding a reminder mid-cycle for balances over a threshold. More important than frequency is reliability — a statement engine that runs every month without fail outperforms sporadic bursts every time.',
      },
      {
        question: 'Can you send electronic statements?',
        answer:
          'Where your practice management system or statement vendor supports it, yes — email and text-to-pay options typically improve response for younger patient populations. We configure mixed delivery and track response by channel.',
      },
    ],
  },
  {
    slug: 'claims-appeals',
    title: 'Claims Appeals',
    seoTitle: 'Medical Claims Appeals Services | Evidence-Based Appeals',
    metaDescription:
      'Evidence-based claim appeals: case selection, payer-specific formats, clinical documentation assembly, and deadline management for denied medical claims.',
    h1: 'Medical Claims Appeals Services',
    summary:
      'Appeals built like cases — selected for winnability, assembled with evidence, formatted to each payer’s requirements, and filed inside deadlines.',
    intro: [
      'An appeal is an argument, and most appeals lose because they are not argued — a form letter restating the claim is not evidence. Winning appeals pair the denial reason with the specific proof that rebuts it: eligibility screenshots for eligibility denials, operative notes and policy citations for medical-necessity denials, acknowledgment reports for timely-filing denials.',
      'Our appeals service triages which denials justify appeal, assembles the evidence file, writes the argument against the payer’s own policy language, and tracks every level of the appeal to decision — including second-level and external review where available and warranted.',
    ],
    category: 'recovery',
    problemsAddressed: [
      'Winnable denials written off because nobody had time to appeal',
      'Form-letter appeals losing cases that evidence would have won',
      'Appeal deadlines missed while denials sat in queues',
      'No tracking of appeal outcomes to inform future case selection',
    ],
    included: [
      'Appeal-worthiness triage: value, evidence strength, deadline, payer history',
      'Evidence assembly: records, policies, verification logs, submission proof',
      'Payer-specific appeal drafting and filing at each available level',
      'Deadline docketing across first-level, second-level, and external review',
      'Outcome tracking with overturn-rate reporting by denial category',
    ],
    processSteps: [
      {
        title: 'Case selection',
        description:
          'Each denial is assessed for evidence strength and recovery value — resources go to appeals that can win.',
      },
      {
        title: 'Evidence and argument',
        description:
          'The appeal is built against the payer’s stated denial reason, citing plan policy, records, and documented facts.',
      },
      {
        title: 'Filing and follow-through',
        description:
          'Appeals are filed in the payer’s required format and channel, then tracked to decision with escalation to the next level when justified.',
      },
    ],
    metrics: [
      {
        name: 'Overturn rate',
        description:
          'Appeals decided for the practice as a share of appeals filed — the quality measure for case selection and argumentation.',
      },
      {
        name: 'Recovered dollars per appeal hour',
        description:
          'The economics check: appeals should recover materially more than they cost to produce.',
      },
    ],
    suitableFor: [
      'Practices with high-dollar procedure denials worth fighting',
      'Groups seeing medical-necessity denials on documented, appropriate care',
      'Practices with appeal backlogs approaching deadline cliffs',
    ],
    considerations: [
      'Appeal rights, levels, and deadlines are set by contracts, plan type, and regulation — specifics vary and should be confirmed per case; this page is educational, not legal advice.',
      'A high overturn rate can indicate under-appealing (only the easiest cases filed) — we report volume and rate together for an honest picture.',
    ],
    complianceReviewRequired: true,
    complianceTopics: ['appeals', 'payer'],
    relatedServices: ['denial-management', 'medical-coding', 'accounts-receivable-follow-up'],
    relatedSolutions: ['unworked-denials', 'underpaid-claims'],
    relatedGuides: ['denial-management', 'medical-necessity-denials', 'timely-filing-denials'],
    faqs: [
      {
        question: 'What share of denials should be appealed?',
        answer:
          'There is no universal number — it depends on denial mix and dollar values. The discipline is explicit triage: appeal where evidence is strong and value justifies effort, correct-and-resubmit where the claim was simply wrong, and write off true losses fast with documented reasons.',
      },
      {
        question: 'How long do payers take to decide appeals?',
        answer:
          'Regulatory and contractual timeframes vary by plan type — commercial, Medicare Advantage, and Medicaid managed care each have their own clocks, often 30–60 days per level. We docket every deadline in both directions: theirs and ours.',
      },
    ],
  },
];
