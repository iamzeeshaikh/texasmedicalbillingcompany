/**
 * Extended service entries (part 2 of 2): analysis, recovery projects,
 * and practice-type services. Validated in src/data/index.ts.
 */
import type { z } from 'astro/zod';
import type { serviceSchema } from '../lib/content-schemas';

type ServiceInput = z.input<typeof serviceSchema>;

export const servicesExtended: ServiceInput[] = [
  {
    slug: 'underpayment-identification',
    title: 'Underpayment Identification',
    seoTitle: 'Underpayment Identification & Recovery | Texas Practices',
    metaDescription:
      'Systematic underpayment detection: contract-rate comparison, variance analysis, and recovery requests for claims paid below contracted amounts.',
    h1: 'Underpayment Identification Services',
    summary:
      'Line-level comparison of what payers paid against what contracts say they owe — surfacing the quiet variance that blanket adjustments hide, and pursuing recovery.',
    intro: [
      'Underpayments are the most invisible form of revenue loss because the claim looks fine: it was paid, posted, and closed. The problem is the number — a payment 4% below the contracted rate, an incorrectly applied multiple-procedure reduction, an outdated fee schedule in the payer’s system. Multiply small variances across thousands of claims and the total is material.',
      'Our underpayment workflow loads your contracted rates, compares actual allowed amounts line by line, and pursues variances through reprocessing requests and, where needed, formal disputes — with reporting that shows recovery by payer and cause.',
    ],
    category: 'analysis',
    problemsAddressed: [
      'Payments below contract rates absorbed silently as contractual adjustments',
      'Fee schedule updates never verified against actual payer behavior',
      'Multiple-procedure and modifier reductions applied incorrectly',
      'No systematic comparison of paid versus contracted amounts',
    ],
    included: [
      'Contract and fee schedule loading for major payers',
      'Line-level paid-versus-expected variance analysis',
      'Reprocessing and adjustment requests with contract citations',
      'Underpayment dispute escalation where reprocessing fails',
      'Recovery reporting by payer, code group, and cause',
    ],
    processSteps: [
      {
        title: 'Contract loading',
        description:
          'Your payer contracts and fee schedules are captured into comparison tables — often the first time anyone has consolidated them.',
      },
      {
        title: 'Variance sweep',
        description:
          'Recent remittances are compared line by line against expected allowables; variances are classified by cause and value.',
      },
      {
        title: 'Recovery pursuit',
        description:
          'Confirmed underpayments go back to payers as reprocessing requests with contract citations, tracked to resolution.',
      },
    ],
    metrics: [
      {
        name: 'Payment variance rate',
        description:
          'Share of claim lines paid below expected allowed amounts — the headline detection number.',
      },
      {
        name: 'Recovered variance dollars',
        description:
          'Underpaid amounts actually recovered — the metric that proves the workflow pays for itself.',
      },
    ],
    suitableFor: [
      'Practices that have never audited paid claims against contracts',
      'Groups with significant commercial contract volume',
      'Administrators who suspect “paid” does not mean “paid correctly”',
    ],
    considerations: [
      'Detection requires your actual contracts and fee schedules — if the practice cannot locate current contracted rates, that discovery process is step one and is valuable in itself.',
      'Some variance causes are contract interpretation disputes rather than errors; those may need escalation paths the practice controls, including contracting conversations.',
    ],
    relatedServices: ['payment-posting', 'practice-financial-reporting', 'denial-management'],
    relatedSolutions: ['underpaid-claims', 'revenue-leakage'],
    relatedGuides: ['electronic-remittance-advice', 'net-collection-rate'],
    faqs: [
      {
        question: 'How common are underpayments really?',
        answer:
          'Industry analyses have repeatedly found measurable shares of claims paid below contract — often concentrated in a few payers, code families, or reduction rules. The honest answer for any specific practice comes from a variance sweep of its own remittance data, which is exactly where we start.',
      },
      {
        question: 'Can you recover old underpayments?',
        answer:
          'Look-back windows are set by contract and state rules, so age matters. We prioritize recent variances with clear contract support, then work backward as far as the rules and the economics justify.',
      },
    ],
  },
  {
    slug: 'credit-balance-review',
    title: 'Credit Balance Review',
    seoTitle: 'Credit Balance Review & Resolution | Medical Practices',
    metaDescription:
      'Credit balance identification and resolution: root-cause research, refund workflows, and compliance-aware handling of patient and payer overpayments.',
    h1: 'Credit Balance Review Services',
    summary:
      'Research and resolution of credit balances — misapplied payments, true overpayments, posting errors — handled with the compliance seriousness refunds deserve.',
    intro: [
      'Credit balances are a liability wearing a friendly face. Some are posting errors that inflate apparent collections; others are genuine overpayments that must be refunded — and unrefunded government overpayments carry regulatory obligations with real teeth, including Medicare’s rules on reporting and returning overpayments.',
      'Our credit balance review researches each credit to its root cause, corrects the posting errors, routes true overpayments into your refund process with documentation, and reports patterns so the same errors stop generating new credits.',
    ],
    category: 'analysis',
    problemsAddressed: [
      'Credit balances accumulating unreviewed for months or years',
      'Overpayments owed to patients or payers sitting unrefunded',
      'Posting errors masquerading as credits and distorting reports',
      'No documentation trail showing credits were handled properly',
    ],
    included: [
      'Full credit balance inventory and aging analysis',
      'Root-cause research per credit: error, overpayment, or misapplication',
      'Posting corrections for non-refund credits',
      'Refund package preparation for practice approval and processing',
      'Pattern reporting to prevent recurring credit creation',
    ],
    processSteps: [
      {
        title: 'Inventory',
        description:
          'Every credit balance is cataloged with age, source, and amount — establishing the true size of the liability.',
      },
      {
        title: 'Research and classification',
        description:
          'Each credit is traced to its cause; misapplied payments are corrected, and genuine overpayments are documented for refund.',
      },
      {
        title: 'Resolution and prevention',
        description:
          'Refunds route through your approval process with complete documentation; recurring causes get workflow fixes.',
      },
    ],
    metrics: [
      {
        name: 'Credit balance aging',
        description:
          'How long credits sit unresolved — old government-payer credits are a compliance red flag, not just untidiness.',
      },
      {
        name: 'Credit creation rate',
        description:
          'New credits per month by cause; a falling rate proves the prevention loop is working.',
      },
    ],
    suitableFor: [
      'Practices with a credit balance line nobody wants to talk about',
      'Groups preparing for audits, sales, or system conversions',
      'Administrators cleaning up after years of inconsistent posting',
    ],
    considerations: [
      'Overpayment refund obligations — especially for Medicare and Medicaid — have defined timeframes and legal consequences; your compliance counsel should confirm policy. We prepare the documentation; refund decisions and issuance remain with the practice.',
      'A large credit cleanup temporarily depresses reported collections as errors are corrected; leadership should expect that and value the accuracy.',
    ],
    complianceReviewRequired: true,
    complianceTopics: ['medicare', 'medicaid', 'legal'],
    relatedServices: ['payment-posting', 'billing-audit', 'revenue-integrity-support'],
    relatedSolutions: ['inconsistent-payment-posting'],
    relatedGuides: ['payment-posting', 'coordination-of-benefits'],
    faqs: [
      {
        question: 'Why are credit balances a compliance issue?',
        answer:
          'Because identified overpayments from federal programs must be reported and returned within defined timeframes, and retaining them can create liability under federal law. Commercial contracts and state rules add their own obligations. This is why credits deserve research and documentation, not periodic mass write-offs.',
      },
      {
        question: 'Are most credits real overpayments?',
        answer:
          'In our experience a large share are posting artifacts — payments applied to the wrong encounter, missed adjustments, duplicate postings — that correction resolves without any refund. The research step exists precisely to separate the two accurately.',
      },
    ],
  },
  {
    slug: 'revenue-integrity-support',
    title: 'Revenue Integrity Support',
    seoTitle: 'Revenue Integrity Support for Texas Medical Practices',
    metaDescription:
      'Revenue integrity support: charge capture audits, fee schedule review, reconciliation controls, and leak detection across the revenue cycle.',
    h1: 'Revenue Integrity Support Services',
    summary:
      'The controls layer of the revenue cycle — charge capture audits, fee schedule hygiene, and reconciliation checks that find leaks before they compound.',
    intro: [
      'Revenue integrity asks a different question than billing: not “did the claim get paid?” but “did everything that should have been billed get billed, at the right rates, with nothing lost between systems?” Leaks hide in the seams — interface gaps between EHR and billing system, fee schedules years out of date, charge capture habits that vary by provider.',
      'Our revenue integrity support builds recurring controls: schedule-to-charge reconciliation, charge capture audits by service line, fee schedule review against current benchmarks, and system interface checks — each producing findings with owners and deadlines rather than reports that get filed.',
    ],
    category: 'analysis',
    problemsAddressed: [
      'Charges lost in interface gaps between clinical and billing systems',
      'Fee schedules unchanged for years, billing below market or below contract',
      'Charge capture varying wildly between providers doing identical work',
      'No recurring control that would catch a new leak when it opens',
    ],
    included: [
      'Charge capture audits by provider and service line',
      'Schedule-to-charge and system interface reconciliation',
      'Fee schedule review and update recommendations',
      'Missed-revenue quantification with root-cause findings',
      'Recurring integrity control calendar with owner assignments',
    ],
    processSteps: [
      {
        title: 'Leak assessment',
        description:
          'A defined review period is audited end to end — schedule to charge to claim to payment — to find and size the leaks.',
      },
      {
        title: 'Controls design',
        description:
          'For each leak class, a recurring control is built: who checks what, how often, and what triggers escalation.',
      },
      {
        title: 'Operate and report',
        description:
          'Controls run on calendar; findings are quantified and tracked to closure in a monthly integrity summary.',
      },
    ],
    metrics: [
      {
        name: 'Charge capture rate',
        description:
          'Billed encounters as a share of documented encounters — the primary leak detector.',
      },
      {
        name: 'Identified leakage dollars',
        description:
          'Revenue found by integrity controls per period — with the goal of trending down as causes get fixed.',
      },
    ],
    suitableFor: [
      'Groups that have grown past the point where one person can see everything',
      'Practices after a system conversion, when interface leaks are most common',
      'Owners who want financial controls, not just billing production',
    ],
    considerations: [
      'Fee schedule strategy interacts with payer contracts and market position — we provide analysis; pricing decisions rest with practice leadership.',
      'Integrity findings sometimes implicate workflow owners; the program works best with leadership sponsorship and a no-blame framing.',
    ],
    relatedServices: ['charge-entry', 'billing-audit', 'underpayment-identification', 'practice-financial-reporting'],
    relatedSolutions: ['revenue-leakage', 'poor-billing-visibility'],
    relatedGuides: ['gross-collection-rate', 'net-collection-rate'],
    faqs: [
      {
        question: 'How is revenue integrity different from a billing audit?',
        answer:
          'An audit is a point-in-time examination; revenue integrity is the ongoing control system an audit usually recommends. Most engagements start with an audit to find and size the leaks, then install recurring controls so the findings stay fixed.',
      },
      {
        question: 'Where do you usually find the biggest leaks?',
        answer:
          'The seams: encounters documented but never charged, interface failures after system changes, outdated fee schedules, and inconsistent charge behavior between providers. None are dramatic individually — the total usually is.',
      },
    ],
  },
  {
    slug: 'practice-financial-reporting',
    title: 'Practice Financial Reporting',
    seoTitle: 'Practice Financial Reporting | Billing KPIs & Analysis',
    metaDescription:
      'Monthly practice financial reporting: collections, denial trends, AR aging, and KPI dashboards with plain-language analysis physicians can act on.',
    h1: 'Practice Financial Reporting Services',
    summary:
      'Monthly reporting built for decisions — the KPIs that matter, trended honestly, explained in plain language, with recommended actions attached.',
    intro: [
      'Most practices are either starved of billing data or buried in it. The system can print a hundred reports; what owners actually need is a dozen numbers tracked consistently, explained honestly, and connected to actions: what changed, why, and what we are doing about it.',
      'Our reporting service establishes a standard monthly package — collections, charges, adjustments, denial trends, AR aging, clean claim rate, net collection rate — with commentary written for physicians and administrators, not for other billers.',
    ],
    category: 'analysis',
    problemsAddressed: [
      'Owners seeing only the deposit total, with no view into why it moved',
      'Reports full of numbers but empty of explanation',
      'KPIs defined inconsistently month to month, making trends meaningless',
      'Board or partner meetings run on anecdote instead of data',
    ],
    included: [
      'Standard monthly KPI package with consistent definitions',
      'Plain-language commentary: what moved, why, and planned actions',
      'Denial and AR trend analysis by payer and category',
      'Provider-level productivity and collection views where appropriate',
      'Quarterly deep-dive reviews with leadership',
    ],
    processSteps: [
      {
        title: 'KPI definition',
        description:
          'Metrics and their exact definitions are agreed once, in writing — so every future month compares like with like.',
      },
      {
        title: 'Monthly production',
        description:
          'The package is produced on a fixed calendar day with data validated against source system totals.',
      },
      {
        title: 'Review and action',
        description:
          'A standing review meeting turns findings into assigned actions; next month reports on their completion.',
      },
    ],
    metrics: [
      {
        name: 'Net collection rate',
        description:
          'The single best summary of revenue cycle health — collections against contractually collectible amounts.',
      },
      {
        name: 'Report-to-action rate',
        description:
          'Our internal measure: findings that produced an assigned action versus findings that just got read.',
      },
    ],
    suitableFor: [
      'Physician owners who want to understand their numbers without becoming billers',
      'Group administrators reporting to boards or partners',
      'Practices that suspect their current reports hide more than they show',
    ],
    considerations: [
      'Reporting is only as good as underlying data hygiene — posting and adjustment discipline may need fixing first, and we say so when it does.',
      'Provider-level reporting has cultural impact in groups; rollout deserves leadership thought, and we advise on sequencing.',
    ],
    relatedServices: ['revenue-cycle-management', 'payment-posting', 'rcm-assessment'],
    relatedSolutions: ['poor-billing-visibility'],
    relatedGuides: ['net-collection-rate', 'days-in-accounts-receivable', 'denial-rate'],
    faqs: [
      {
        question: 'Which KPIs should a practice track monthly?',
        answer:
          'A workable core: collections, charges, adjustments, net collection rate, clean claim rate, denial rate by category, days in AR, and percent of AR over 90 days. Fewer, consistent, well-defined numbers beat a thick report nobody reads.',
      },
      {
        question: 'Can you report on data from our existing system?',
        answer:
          'Yes — we build the package from your practice management system’s data, validated against system totals. If the system’s data quality blocks a metric, we report that honestly and fix the upstream discipline first.',
      },
    ],
  },
  {
    slug: 'billing-audit',
    title: 'Billing Audit',
    seoTitle: 'Medical Billing Audit Services | Independent Practice Review',
    metaDescription:
      'Independent medical billing audit: claims accuracy, denial patterns, AR quality, posting discipline, and workflow findings with a prioritized fix list.',
    h1: 'Medical Billing Audit Services',
    summary:
      'An independent, evidence-based examination of your billing operation — what is working, what is leaking, and a prioritized fix list with quantified impact.',
    intro: [
      'A billing audit answers the question every practice owner eventually asks: “is our billing actually being done well?” Whether billing is in-house or outsourced, the audit examines the evidence — claim samples, denial data, AR composition, posting quality, write-off patterns — and reports what it finds without diplomatic fog.',
      'The deliverable is not a grade; it is a prioritized list of findings, each with quantified impact and a concrete fix, ordered so the practice knows exactly what to do first. Audits are also the natural first step before changing billing arrangements, converting systems, or preparing for growth.',
    ],
    category: 'analysis',
    featured: true,
    problemsAddressed: [
      'Uncertainty about whether current billing — in-house or vendor — performs well',
      'Suspected problems with no independent evidence either way',
      'Due diligence needs before acquisitions, mergers, or vendor changes',
      'Recurring cash flow surprises with no explanation',
    ],
    included: [
      'Claim sample review for accuracy, timeliness, and completeness',
      'Denial and write-off pattern analysis over 6–12 months',
      'AR composition and aging quality assessment',
      'Payment posting and adjustment discipline review',
      'Workflow and segregation-of-duties observations',
      'Prioritized findings report with quantified impact and fixes',
    ],
    processSteps: [
      {
        title: 'Scope and data collection',
        description:
          'Audit period, claim samples, and report extracts are defined; access is read-only and documented.',
      },
      {
        title: 'Examination',
        description:
          'Samples and data are worked through defined test procedures — the same questions asked the same way for every audit.',
      },
      {
        title: 'Findings and debrief',
        description:
          'Results are presented in a written report and a leadership debrief, with each finding sized and paired with a fix.',
      },
    ],
    metrics: [
      {
        name: 'Findings by severity',
        description:
          'Issues classified by financial and compliance impact — so effort goes to what matters, not what is easiest.',
      },
      {
        name: 'Quantified leakage estimate',
        description:
          'The audit’s bottom line: estimated dollars affected by identified issues per year.',
      },
    ],
    suitableFor: [
      'Owners who have never independently verified their billing quality',
      'Practices evaluating whether to keep, fix, or replace current billing',
      'Buyers and sellers needing revenue cycle due diligence',
    ],
    considerations: [
      'An audit by a company that also sells billing services has an inherent interest; we address it by reporting evidence, publishing our methodology to you, and being explicit when findings do NOT justify outsourcing.',
      'Coding compliance audits (documentation supporting code selection) are a distinct, deeper review — see our coding audit service; billing audits examine operational performance.',
    ],
    relatedServices: ['rcm-assessment', 'coding-audit', 'revenue-integrity-support'],
    relatedSolutions: ['poor-billing-visibility', 'revenue-leakage'],
    relatedGuides: ['medical-billing-audit', 'accounts-receivable-aging'],
    faqs: [
      {
        question: 'How long does a billing audit take?',
        answer:
          'A single-specialty practice audit typically runs three to five weeks from data access to debrief, depending on sample sizes and how quickly source reports can be pulled. Multi-site groups scale from there. The timeline is fixed in the engagement letter.',
      },
      {
        question: 'Will you audit our existing billing company?',
        answer:
          'Yes — vendor performance audits are common. We examine output evidence (claims, denials, AR, reports) rather than the vendor’s internal process, and we are explicit in findings about what the evidence does and does not support.',
      },
    ],
  },
  {
    slug: 'rcm-assessment',
    title: 'RCM Assessment',
    seoTitle: 'Revenue Cycle Assessment | Free Billing Assessment for Texas',
    metaDescription:
      'Structured revenue cycle assessment: KPI baseline, workflow review, and a prioritized improvement roadmap for Texas practices — the natural first step.',
    h1: 'Revenue Cycle Assessment',
    summary:
      'A structured baseline of your revenue cycle — KPIs measured, workflows mapped, gaps ranked — producing a roadmap you can execute with us or without us.',
    intro: [
      'Before changing anything about your billing, it pays to know exactly where you stand. The RCM assessment establishes that baseline: your actual clean claim rate, denial rate and mix, AR aging shape, net collection rate, and the workflow realities behind each number.',
      'The output is a written roadmap — findings ranked by impact and effort — that you own regardless of what you decide next. Practices use it to fix in-house operations, hold current vendors accountable, or scope an outsourcing engagement with real numbers instead of sales claims. Our free billing assessment is the entry-level version of this review.',
    ],
    category: 'analysis',
    problemsAddressed: [
      'Deciding about billing changes with no measured baseline',
      'Vendor or staff performance debates with no shared facts',
      'Improvement effort scattered across low-impact fixes',
      'Not knowing which problems are process, people, or system',
    ],
    included: [
      'KPI baseline: clean claim rate, denial rate, days in AR, net collection rate',
      'AR composition analysis by age, payer, and balance type',
      'Front-end, mid-cycle, and back-end workflow mapping',
      'Gap analysis ranked by financial impact and implementation effort',
      'Written roadmap with sequenced recommendations',
    ],
    processSteps: [
      {
        title: 'Data intake',
        description:
          'Standard reports are pulled from your system — we provide the exact list — plus a short workflow questionnaire.',
      },
      {
        title: 'Analysis',
        description:
          'KPIs are computed with stated definitions and compared against published industry reference ranges, with workflow context attached.',
      },
      {
        title: 'Roadmap delivery',
        description:
          'Findings and sequenced recommendations are walked through with leadership; the document is yours either way.',
      },
    ],
    metrics: [
      {
        name: 'Baseline KPI set',
        description:
          'The measured starting point every later improvement claim gets tested against.',
      },
      {
        name: 'Impact-ranked gap list',
        description:
          'Each identified gap sized in estimated annual dollars, so priorities argue for themselves.',
      },
    ],
    suitableFor: [
      'Practices considering outsourcing but wanting facts first',
      'Owners who suspect underperformance but cannot locate it',
      'New administrators inheriting an undocumented revenue cycle',
    ],
    considerations: [
      'Assessment quality depends on report availability from your system; where data is missing, we say what could not be measured rather than estimating around it.',
      'We sell billing services, and the assessment may recommend them — or may not. Recommendations cite evidence you can verify, and the roadmap is deliberately usable without us.',
    ],
    relatedServices: ['billing-audit', 'revenue-cycle-management', 'medical-billing-consulting'],
    relatedSolutions: ['poor-billing-visibility', 'high-claim-denial-rate'],
    relatedGuides: ['revenue-cycle-management', 'net-collection-rate'],
    faqs: [
      {
        question: 'What is the difference between the free assessment and this service?',
        answer:
          'The free billing assessment reviews a limited data set — headline KPIs and obvious gaps — in a short turnaround. The full RCM assessment goes deeper: workflow mapping, AR composition, provider-level views, and a sequenced roadmap. Many clients start free and upgrade when the first pass finds something worth quantifying.',
      },
      {
        question: 'Do we have to become a billing client afterward?',
        answer:
          'No. The roadmap is written to be executable by your own team or another vendor. Some practices hire us afterward; others fix things internally. Either outcome is a success for the assessment.',
      },
    ],
  },
  {
    slug: 'old-ar-recovery',
    title: 'Old AR Recovery',
    seoTitle: 'Old Accounts Receivable Recovery | Aged Medical AR Cleanup',
    metaDescription:
      'Old AR recovery projects: triage of aged receivables, recovery of workable claims, and documented closure of dead balances — clean books, recovered cash.',
    h1: 'Old Accounts Receivable Recovery',
    summary:
      'A project-based attack on aged receivables — triage what is recoverable, work it hard before deadlines close, and document the closure of what is not.',
    intro: [
      'Every practice accumulates old AR: claims from a departed biller’s era, a system conversion, a denial backlog nobody worked. The uncomfortable truth is that aged AR decays — appeal windows close, timely-filing limits pass, records get harder to assemble. The right response is a time-boxed project, not a vague intention to “work the old stuff.”',
      'Our old AR projects begin with honest triage: every aged claim classified as workable, doubtful, or dead — because pretending dead AR is recoverable wastes money and delays clean books. Workable inventory then gets production-line follow-up, appeals, and resubmissions, with recovery reported weekly against the triage baseline.',
    ],
    category: 'recovery',
    problemsAddressed: [
      'Six- or seven-figure aged AR of unknown real value',
      'AR inherited from previous billers, vendors, or systems',
      'Balance sheets carrying receivables everyone privately knows are dead',
      'In-house teams too busy with current claims to touch the backlog',
    ],
    included: [
      'Full aged AR inventory with claim-level triage classification',
      'Recovery workflows: status, resubmit, appeal, escalate — by claim class',
      'Deadline mapping so near-expiry claims are worked first',
      'Write-off recommendation files with documented reasons per claim',
      'Weekly recovery reporting against the triage baseline',
    ],
    processSteps: [
      {
        title: 'Triage',
        description:
          'The backlog is classified claim by claim: recoverable, doubtful, dead — with deadline dates attached to everything recoverable.',
      },
      {
        title: 'Production recovery',
        description:
          'Recoverable claims are worked in deadline order through payer-specific workflows, with outcomes logged.',
      },
      {
        title: 'Clean closure',
        description:
          'Unrecoverable balances get documented write-off recommendations, leaving books that reflect reality.',
      },
    ],
    metrics: [
      {
        name: 'Recovery rate on workable inventory',
        description:
          'Dollars recovered as a share of what triage classified as workable — the honest success measure.',
      },
      {
        name: 'Inventory burn-down',
        description:
          'Aged claims resolved (recovered or closed) per week — the project’s pace gauge.',
      },
    ],
    suitableFor: [
      'Practices sitting on aged AR after a biller departure or vendor failure',
      'Groups cleaning up before a sale, merger, or system conversion',
      'Owners who want a real number instead of a hopeful balance sheet line',
    ],
    considerations: [
      'Recovery expectations must be honest: aged AR recovers at far lower rates than fresh claims, and anyone quoting a high flat recovery percentage sight-unseen is guessing.',
      'Old AR projects are typically priced on recovered dollars or as a fixed project — the model is agreed before work starts.',
    ],
    relatedServices: ['accounts-receivable-follow-up', 'denial-management', 'claims-appeals'],
    relatedSolutions: ['old-accounts-receivable', 'accounts-receivable-over-90-days'],
    relatedGuides: ['accounts-receivable-aging', 'timely-filing-denials'],
    faqs: [
      {
        question: 'How much of our old AR can you recover?',
        answer:
          'Nobody can answer that before triage — and you should be skeptical of anyone who does. Recovery depends on claim age, denial mix, payer behavior, and how much documentation survives. Triage gives you a claim-level answer within the first weeks, before major effort is spent.',
      },
      {
        question: 'Is working old AR worth it, or should we just write it off?',
        answer:
          'Usually some of both. Triage typically finds a workable core worth real money and a tail that only pollutes reports. The project’s value is as much the documented, defensible closure of the dead tail as the cash recovered from the workable core.',
      },
    ],
  },
  {
    slug: 'virtual-medical-billing',
    title: 'Virtual Medical Billing',
    seoTitle: 'Virtual Medical Billing Services | Remote Billing for Texas',
    metaDescription:
      'Virtual medical billing: a remote billing team working securely inside your systems with defined workflows, daily output, and full visibility.',
    h1: 'Virtual Medical Billing Services',
    summary:
      'A remote billing team operating inside your systems under your visibility — the output of an in-house department without the desk, turnover, and single-person risk.',
    intro: [
      'Virtual billing means your billing function is staffed remotely but operates inside your own practice management system — same claims, same queues, same reports you would see from an employee at the front office. The difference is structural: documented workflows, coverage that does not vanish with one resignation, and output you can inspect in your own system at any time.',
      'Security is the legitimate question about remote billing, and it deserves a real answer: role-based access under a Business Associate Agreement, unique named logins for audit trails, minimum-necessary permissions, and documented device and access policies. Our HIPAA and security page details the framework.',
    ],
    category: 'practice-type',
    problemsAddressed: [
      'Billing dependent on one or two local hires in a tight labor market',
      'No office space or appetite for managing additional employees',
      'Turnover repeatedly resetting billing knowledge to zero',
      'Wanting in-system visibility that traditional “send us your files” vendors do not give',
    ],
    included: [
      'Named remote billing staff working in your system under your access controls',
      'Documented workflows for every function they perform',
      'Daily production output visible in your own work queues',
      'Coverage continuity — no single point of failure',
      'Standard monthly reporting and review cadence',
    ],
    processSteps: [
      {
        title: 'Access and security setup',
        description:
          'Role-based accounts, BAA execution, and access documentation come first — before any production work.',
      },
      {
        title: 'Workflow documentation',
        description:
          'Your billing procedures are written down — often for the first time — so service quality does not depend on memory.',
      },
      {
        title: 'Production with visibility',
        description:
          'Work happens in your system where you can see it; reviews compare output against agreed standards.',
      },
    ],
    metrics: [
      {
        name: 'Daily production volumes',
        description:
          'Claims entered, submitted, posted, and worked per day — visible in your system, not just claimed in a report.',
      },
      {
        name: 'Queue aging',
        description:
          'How long items wait in each work queue — the operational freshness measure for any billing team, remote or local.',
      },
    ],
    suitableFor: [
      'Practices that cannot reliably hire and retain local billing staff',
      'Owners who want vendor accountability with employee-style visibility',
      'Groups scaling faster than their back office can hire',
    ],
    considerations: [
      'Remote access must comply with your system vendor’s licensing and access terms — we verify platform rules during setup rather than assuming.',
      'Where any offshore staffing is involved, it is disclosed contractually and governed by the security framework; some practices require US-only teams, and that requirement is respected in scoping.',
    ],
    complianceReviewRequired: true,
    complianceTopics: ['security', 'offshore', 'baa'],
    relatedServices: ['outsourced-medical-billing', 'medical-billing', 'small-practice-medical-billing'],
    relatedSolutions: ['billing-staff-turnover', 'in-house-billing-costs'],
    relatedGuides: ['medical-billing', 'medical-billing-process'],
    faqs: [
      {
        question: 'How is virtual billing different from regular outsourced billing?',
        answer:
          'Mostly in where the work happens and what you can see. Traditional outsourcing often moves your data into the vendor’s system and returns reports. Virtual billing staffs your existing system remotely — every claim, note, and queue stays visible to you in real time.',
      },
      {
        question: 'How do you keep remote access secure?',
        answer:
          'Named individual logins (never shared credentials), role-based minimum-necessary permissions, BAA coverage, documented device policies, and reliance on your system’s own audit logging — every action traceable to a person. Full details are on our HIPAA and security page, and your compliance reviewer is welcome to interrogate the setup.',
      },
    ],
  },
  {
    slug: 'outsourced-medical-billing',
    title: 'Outsourced Medical Billing',
    seoTitle: 'Outsourced Medical Billing for Texas Practices | Full Service',
    metaDescription:
      'Outsourced medical billing for Texas practices: full billing operations under contract with defined scope, SLAs, transparent reporting, and no lock-in surprises.',
    h1: 'Outsourced Medical Billing Services',
    summary:
      'The complete billing function under contract — defined scope, measurable standards, transparent reporting — with the structural honesty outsourcing decisions deserve.',
    intro: [
      'Outsourcing billing is a significant operational decision, and the honest framing is this: a good vendor gives you production discipline, coverage continuity, and reporting rigor; a bad one gives you opacity and excuses at a monthly percentage. The difference is rarely the sales pitch — it is scope definition, visibility, and exit terms.',
      'Our outsourced billing engagements are built on that premise: written scope for every workflow, your system where platform rules allow it, KPI reporting with consistent definitions, and contract terms that let you leave with your data and dignity if we underperform. That last clause is not marketing courage; it is the correct alignment of incentives.',
    ],
    category: 'practice-type',
    featured: true,
    problemsAddressed: [
      'Billing consuming management attention the practice cannot spare',
      'In-house cost per claim rising while output quality falls',
      'A current vendor that reports little and explains less',
      'Growth outpacing back-office capacity',
    ],
    included: [
      'Full billing operations: charge entry through denial resolution',
      'Written workflow scope with turnaround standards',
      'Monthly KPI reporting with plain-language review',
      'Defined escalation and issue-resolution paths',
      'Transition planning — in and, if ever needed, out',
    ],
    processSteps: [
      {
        title: 'Scoping and baseline',
        description:
          'Current KPIs are baselined and every workflow’s ownership is written down — the contract reflects operations, not boilerplate.',
      },
      {
        title: 'Transition',
        description:
          'A dated cutover plan covers system access, old AR ownership, staff communication, and parallel-run verification.',
      },
      {
        title: 'Steady-state operations',
        description:
          'Production runs against turnaround standards with monthly KPI reviews and a quarterly relationship review.',
      },
    ],
    metrics: [
      {
        name: 'KPI movement against baseline',
        description:
          'The whole point of the engagement, measured from the pre-transition baseline with consistent definitions.',
      },
      {
        name: 'Turnaround standard compliance',
        description:
          'Share of work completed within agreed timeframes — charge lag, rejection rework, denial response.',
      },
    ],
    suitableFor: [
      'Practices where billing management has outgrown available attention',
      'Groups comparing in-house rebuild versus vendor after a departure',
      'Practices dissatisfied with a current vendor’s transparency',
    ],
    considerations: [
      'Outsourcing does not remove the practice’s role: documentation quality, front-desk data capture, and policy decisions stay in-house, and the engagement defines these boundaries explicitly.',
      'Compare vendors on visibility and exit terms, not just rate — a low percentage with opaque reporting is usually the most expensive option available. Our in-house versus outsourced comparison covers the full decision.',
    ],
    relatedServices: ['medical-billing', 'virtual-medical-billing', 'revenue-cycle-management'],
    relatedSolutions: ['in-house-billing-costs', 'billing-staff-turnover', 'practice-growth-billing-capacity'],
    relatedGuides: ['medical-billing', 'revenue-cycle-management'],
    faqs: [
      {
        question: 'What does outsourced billing cost?',
        answer:
          'Common models are percentage-of-collections, per-claim, and flat monthly fees, each fitting different volumes and scopes — our cost guides explain the trade-offs. Actual pricing depends on specialty, volume, collections, scope, and system; we quote from your real numbers, not a rate card.',
      },
      {
        question: 'How do we know you are performing?',
        answer:
          'Because the reporting is designed for accountability: KPIs against your pre-transition baseline, consistent definitions, and your own system data as the source of truth wherever platform access allows. If our numbers cannot be verified in your system, we consider that our problem to fix.',
      },
      {
        question: 'What happens if we want to leave?',
        answer:
          'The contract defines an orderly exit: notice period, transition support, and your data remaining yours — including work documentation. Vendors that make leaving painful are telling you something about how they intend to retain clients.',
      },
    ],
  },
  {
    slug: 'small-practice-medical-billing',
    title: 'Small Practice Medical Billing',
    seoTitle: 'Small Practice Medical Billing Services in Texas',
    metaDescription:
      'Medical billing built for small Texas practices: right-sized service, honest pricing fit, and the billing discipline solo and 2–5 provider groups rarely get.',
    h1: 'Medical Billing for Small Practices',
    summary:
      'Billing service sized for solo physicians and small groups — full workflow discipline at a scale where hiring a great biller is hardest and losing one hurts most.',
    intro: [
      'Small practices face the worst version of the billing staffing problem: the practice needs perhaps one full-time biller, which means one person holds all the knowledge, takes all the vacations, and eventually leaves. Meanwhile, big-vendor minimums and enterprise workflows are built for groups ten times the size.',
      'Our small-practice service delivers the full billing workflow — charges, claims, posting, denials, follow-up, reporting — sized and priced for solo and 2–5 provider practices, with the process discipline that a single in-house hire, however good, cannot provide alone.',
    ],
    category: 'practice-type',
    problemsAddressed: [
      'One-person billing dependency and the chaos when that person leaves',
      'Owner-physicians doing billing follow-up on weekends',
      'Vendor minimums and contracts designed for much larger groups',
      'No backup, no documentation, no reporting — just hope',
    ],
    included: [
      'Complete billing workflow appropriate to practice volume',
      'Team coverage — vacations and departures do not stop your claims',
      'Monthly plain-language reporting sized for an owner, not a committee',
      'Direct access to the people doing your billing',
      'Scaling headroom as the practice adds providers',
    ],
    processSteps: [
      {
        title: 'Right-size scoping',
        description:
          'Service scope matches actual volume — a solo practice does not pay for enterprise ceremony it does not need.',
      },
      {
        title: 'Simple transition',
        description:
          'Onboarding is deliberately lightweight for small practices: access, a short workflow review, and a defined start date.',
      },
      {
        title: 'Steady operations',
        description:
          'Claims worked daily, a monthly report the owner actually reads, and a named contact who knows the account.',
      },
    ],
    metrics: [
      {
        name: 'Days in AR',
        description:
          'For a small practice, cash predictability is survival — this number is the pulse.',
      },
      {
        name: 'Owner hours spent on billing',
        description:
          'The metric small-practice owners feel most: evenings and weekends returned.',
      },
    ],
    suitableFor: [
      'Solo physicians and 2–5 provider groups',
      'New practices not ready to hire billing staff',
      'Small practices burned by big-vendor minimum commitments',
    ],
    considerations: [
      'Small practices feel service quality differences immediately — ask any prospective vendor (including us) who exactly will work your account and how many accounts they handle.',
      'Percentage pricing at low collection volumes can hit vendor minimums; we are explicit about the fit rather than signing accounts that resent the invoice.',
    ],
    relatedServices: ['medical-billing', 'new-practice-billing-setup', 'virtual-medical-billing'],
    relatedSolutions: ['billing-staff-turnover', 'in-house-billing-costs'],
    relatedGuides: ['medical-billing', 'days-in-accounts-receivable'],
    faqs: [
      {
        question: 'Is outsourcing worth it for a solo practice?',
        answer:
          'Often, but not always — it depends on volume, payer mix, and what your time is worth. A solo practice collecting modest monthly revenue may do fine with a competent part-time biller; one juggling growth, call schedules, and weekend billing catch-up usually is not fine. The free assessment gives you the numbers to decide.',
      },
      {
        question: 'Will a small account get lost among your bigger clients?',
        answer:
          'Structurally, no: small accounts have named staff and the same production queues and reporting cadence as larger ones. This is worth interrogating with any vendor — ask how many accounts your assigned team works and what happens when someone is out.',
      },
    ],
  },
  {
    slug: 'multi-location-practice-billing',
    title: 'Multi-Location Practice Billing',
    seoTitle: 'Multi-Location Practice Billing Services | Texas Groups',
    metaDescription:
      'Billing for multi-location Texas practices: location-aware claims, consolidated and per-site reporting, and standardized workflows across offices.',
    h1: 'Multi-Location Practice Billing Services',
    summary:
      'Billing that handles the multi-site realities — location-specific enrollment, place-of-service accuracy, per-site performance visibility — under one standardized workflow.',
    intro: [
      'Multi-location groups hit billing problems single offices never see: payer enrollments that must include every service location, claims denied for place-of-service mismatches, front-desk data quality varying wildly by site, and reports that average away the fact that one location is quietly underperforming.',
      'Our multi-location service standardizes billing workflows across sites while preserving per-location visibility — claims carry the right location data, enrollments cover every site, and reporting shows each location’s performance separately, so a problem in one office cannot hide inside a group average.',
    ],
    category: 'practice-type',
    problemsAddressed: [
      'Denials from location enrollment gaps and place-of-service errors',
      'Front-end data quality differing by site with no comparative visibility',
      'Group-level reports masking a struggling location',
      'Inconsistent billing workflows evolved separately at each office',
    ],
    included: [
      'Location-aware claim workflows with place-of-service validation',
      'Payer enrollment coverage tracking across all service locations',
      'Per-location and consolidated KPI reporting',
      'Standardized front-end data standards with site-level feedback',
      'New-location onboarding checklists for expansions',
    ],
    processSteps: [
      {
        title: 'Site audit',
        description:
          'Enrollment coverage, location data setup, and workflow differences across sites are documented and gap-listed.',
      },
      {
        title: 'Standardization',
        description:
          'One billing workflow is established across locations, with site-specific exceptions documented deliberately rather than accumulating by accident.',
      },
      {
        title: 'Per-site operations',
        description:
          'Production runs group-wide while reporting stays location-resolved — averages never hide a site again.',
      },
    ],
    metrics: [
      {
        name: 'Per-location denial and AR profiles',
        description:
          'The comparative view that shows which office needs help and which has practices worth copying.',
      },
      {
        name: 'Location-cause denial rate',
        description:
          'Denials from enrollment, place-of-service, and location data errors — the multi-site-specific failure class.',
      },
    ],
    suitableFor: [
      'Groups running two or more offices under common ownership',
      'Practices mid-expansion adding sites faster than back-office process',
      'Groups whose per-location profitability is currently unknowable',
    ],
    considerations: [
      'Location additions have enrollment lead times — payers must have the new site on file before claims bill from it, and expansion timelines should account for that.',
      'Standardization requires site managers’ cooperation; we bring the data and templates, but leadership sets the mandate.',
    ],
    relatedServices: ['physician-group-billing', 'credentialing', 'practice-financial-reporting'],
    relatedSolutions: ['practice-growth-billing-capacity', 'poor-billing-visibility'],
    relatedGuides: ['revenue-cycle-management', 'denial-rate'],
    faqs: [
      {
        question: 'Why are we getting denials after opening a new location?',
        answer:
          'Almost always enrollment or data: payers did not have the new service location linked to your contracts before claims went out, or claims carry mismatched place-of-service and address data. Both are preventable with a location-launch checklist — and fixable with targeted follow-up now.',
      },
      {
        question: 'Can you report each location separately?',
        answer:
          'Yes — that is the core of the service. Charges, collections, denials, and AR are reported per site and consolidated, using your system’s location structure. If the current system setup cannot distinguish sites cleanly, fixing that data structure is an early deliverable.',
      },
    ],
  },
  {
    slug: 'physician-group-billing',
    title: 'Physician Group Billing',
    seoTitle: 'Physician Group Billing Services | Multi-Provider Texas Groups',
    metaDescription:
      'Billing for multi-provider physician groups: provider-level reporting, credentialing coordination, and workflows that scale past ten providers cleanly.',
    h1: 'Physician Group Billing Services',
    summary:
      'Billing infrastructure for multi-provider groups — provider-level accountability, enrollment coordination across the roster, and reporting that supports fair compensation math.',
    intro: [
      'Group billing is not solo billing multiplied. Providers join and leave, each with credentialing timelines that gate their revenue; compensation formulas depend on accurate provider-level collection data; and coding patterns vary between partners in ways that create both compliance exposure and internal fairness questions.',
      'Our group billing service builds for those realities: enrollment status tracked per provider per payer, claims routed under the right billing identifiers, and provider-level reporting clean enough to support compensation calculations — with variance patterns surfaced discreetly to leadership.',
    ],
    category: 'practice-type',
    problemsAddressed: [
      'New providers generating unbillable visits while enrollment lags',
      'Provider-level collection data too messy for compensation formulas',
      'Coding pattern variance between providers nobody reviews',
      'Billing breakdowns during partner transitions and departures',
    ],
    included: [
      'Provider-level claim workflows with correct identifier routing',
      'Credentialing status coordination across the provider roster',
      'Provider-resolved collections and productivity reporting',
      'Coding pattern variance summaries for leadership review',
      'Provider onboarding and offboarding billing checklists',
    ],
    processSteps: [
      {
        title: 'Roster and enrollment mapping',
        description:
          'Every provider’s enrollment status with every payer is tabled — gaps become visible and get owned.',
      },
      {
        title: 'Workflow setup',
        description:
          'Claims route under correct group and individual identifiers, with holds for providers whose enrollment is pending.',
      },
      {
        title: 'Provider-level reporting',
        description:
          'Monthly reporting resolves to the provider level with consistent attribution rules the group agrees to once.',
      },
    ],
    metrics: [
      {
        name: 'Enrollment-gap revenue exposure',
        description:
          'Dollars held or at risk from providers not yet effective with payers — the group-specific leak.',
      },
      {
        name: 'Provider-level net collections',
        description:
          'The number compensation math depends on, produced with stated attribution rules.',
      },
    ],
    suitableFor: [
      'Single-specialty and multispecialty groups from five providers up',
      'Groups whose compensation model needs trustworthy provider-level data',
      'Practices with steady provider turnover and onboarding volume',
    ],
    considerations: [
      'Attribution rules (who gets credit for shared visits, mid-levels, split billing) are governance decisions — we implement what the group decides and document it.',
      'Incident-to and split/shared billing rules are payer-specific and carry compliance weight; policies in this area should be set with qualified compliance input.',
    ],
    complianceReviewRequired: true,
    complianceTopics: ['coding', 'medicare'],
    relatedServices: ['multi-location-practice-billing', 'credentialing', 'practice-financial-reporting'],
    relatedSolutions: ['credentialing-delays', 'practice-growth-billing-capacity'],
    relatedGuides: ['provider-credentialing', 'net-collection-rate'],
    faqs: [
      {
        question: 'Can your reporting support our compensation formula?',
        answer:
          'Yes, if the attribution rules are defined — that definition is the hard part, and it belongs to group governance. Once rules are set (rendering versus billing provider, mid-level attribution, location splits), reporting applies them consistently every month.',
      },
      {
        question: 'How do you handle a provider joining mid-year?',
        answer:
          'The onboarding checklist starts at signed offer: credentialing applications out early, CAQH current, enrollment tracked per payer, and claims held or routed appropriately until effective dates land. The goal is a start date where the provider can actually bill.',
      },
    ],
  },
  {
    slug: 'new-practice-billing-setup',
    title: 'New Practice Billing Setup',
    seoTitle: 'New Practice Billing Setup Services | Start Clean in Texas',
    metaDescription:
      'Billing setup for new Texas practices: payer enrollment, system configuration, fee schedules, and first-claim workflows — a revenue cycle built right from day one.',
    h1: 'New Practice Billing Setup',
    summary:
      'The billing foundation for a practice that does not exist yet — enrollments sequenced to your opening date, systems configured correctly once, and first claims that actually pay.',
    intro: [
      'A new practice gets one chance to build its billing right the first time, and the sequencing matters more than most founders expect: payer enrollment takes months and gates everything; system setup decisions made casually in week one become expensive to unwind in year two; and fee schedules set by guesswork leave money on the table from the first visit.',
      'Our setup service works backward from your opening date: enrollment applications out early with realistic timelines, practice management configuration done deliberately, clearinghouse connections tested, and billing workflows documented before the first patient — so opening month produces claims, not chaos.',
    ],
    category: 'practice-type',
    problemsAddressed: [
      'Opening day arriving before payer enrollments are effective',
      'System setup shortcuts that corrupt data structure permanently',
      'Fee schedules copied from somewhere with no market or contract basis',
      'No billing workflow at all until the denials start arriving',
    ],
    included: [
      'Enrollment sequencing plan tied to the target opening date',
      'Practice management and clearinghouse configuration',
      'Fee schedule development framework with benchmark references',
      'Billing workflow documentation and staff walkthroughs',
      'First-claims monitoring through the initial billing cycles',
    ],
    processSteps: [
      {
        title: 'Timeline backward-planning',
        description:
          'From opening date, enrollment and setup milestones are laid out with the long-lead items — payer enrollment — started first.',
      },
      {
        title: 'Build and configure',
        description:
          'Systems, connections, fee schedules, and workflows are set up and tested before go-live, not during it.',
      },
      {
        title: 'Launch monitoring',
        description:
          'The first weeks of real claims get heightened monitoring — every early rejection pattern fixed before it compounds.',
      },
    ],
    metrics: [
      {
        name: 'Enrollment readiness at opening',
        description:
          'Share of target payers effective by day one — the single number that predicts opening-quarter cash flow.',
      },
      {
        name: 'First-cycle clean claim rate',
        description:
          'Early claims accepted first-pass — proof the setup was built right.',
      },
    ],
    suitableFor: [
      'Physicians leaving employment to open private practices',
      'Group spin-offs and new-location entities needing separate billing',
      'Founders who want the revenue cycle built once, correctly',
    ],
    considerations: [
      'Entity, tax, and contracting decisions interlock with enrollment (legal entity, EIN, ownership structure must be final before applications) — coordinate your attorney and accountant early; we sequence around those dependencies.',
      'Some payer panels in Texas markets are periodically closed to new enrollment; panel research early in planning avoids surprises.',
    ],
    relatedServices: ['credentialing', 'medical-billing', 'small-practice-medical-billing'],
    relatedSolutions: ['credentialing-delays'],
    relatedGuides: ['provider-credentialing', 'medical-billing-process'],
    faqs: [
      {
        question: 'When should billing setup start before opening?',
        answer:
          'Four to six months out is comfortable, driven almost entirely by payer enrollment lead times. Later starts are workable but shift risk: a practice opening with key enrollments pending either delays seeing those patients or accumulates held claims.',
      },
      {
        question: 'Can you set up billing if we have not chosen software yet?',
        answer:
          'Yes — and being consulted before the choice is ideal, since billing workflow fit varies significantly between platforms for different specialties and sizes. We work with your shortlist honestly; we do not take vendor referral fees.',
      },
    ],
  },
  {
    slug: 'medical-billing-consulting',
    title: 'Medical Billing Consulting',
    seoTitle: 'Medical Billing Consulting Services for Texas Practices',
    metaDescription:
      'Medical billing consulting: workflow redesign, KPI programs, vendor evaluation, and in-house team development — expertise without outsourcing.',
    h1: 'Medical Billing Consulting Services',
    summary:
      'Billing expertise applied to your operation without taking it over — workflow redesign, team development, vendor accountability, and decision support.',
    intro: [
      'Not every billing problem calls for outsourcing. Sometimes a practice has good people trapped in bad workflows, a vendor that needs accountability rather than replacement, or a strategic decision — system change, merger, growth plan — that needs an expert with no stake in the outcome selling itself.',
      'Our consulting engagements are scoped, time-boxed, and deliverable-based: redesign the denial workflow, build the KPI program, evaluate the vendor proposals, train the team. We are explicit about conflicts — where a recommendation could favor our own services, we say so in the deliverable and show the evidence either way.',
    ],
    category: 'analysis',
    problemsAddressed: [
      'In-house teams working hard inside workflows that guarantee poor results',
      'Billing decisions pending with no independent expertise in the room',
      'Vendor relationships underperforming with no framework to fix them',
      'KPI and reporting programs that do not exist or are not trusted',
    ],
    included: [
      'Workflow assessment and redesign with implementation support',
      'KPI program design: definitions, targets, and review cadence',
      'Billing vendor evaluation, RFP support, and performance frameworks',
      'In-house team training and role design',
      'System selection and conversion billing readiness',
    ],
    processSteps: [
      {
        title: 'Engagement scoping',
        description:
          'The problem, the deliverable, the timeline, and the definition of done are written before work begins.',
      },
      {
        title: 'Assessment and design',
        description:
          'Current state is documented from evidence; future state is designed with the people who will run it.',
      },
      {
        title: 'Implementation support',
        description:
          'We stay through the change: training, first-cycle monitoring, and adjustment — recommendations that die in a slide deck do not count.',
      },
    ],
    metrics: [
      {
        name: 'Deliverable acceptance',
        description:
          'Every engagement has a defined deliverable and done-state, accepted by the client — consulting hours are a cost, not the product.',
      },
      {
        name: 'Post-engagement KPI movement',
        description:
          'The redesigned workflow’s results, measured on the same definitions used in the assessment.',
      },
    ],
    suitableFor: [
      'Practices committed to keeping billing in-house but needing expertise',
      'Leadership facing system, vendor, or structural decisions',
      'Groups whose billing team needs development, not replacement',
    ],
    considerations: [
      'Consulting succeeds only with internal follow-through — engagements include named internal owners for each change, or we flag the risk at scoping.',
      'We disclose the obvious: we also sell billing services. Consulting deliverables present evidence and options, including options that exclude us.',
    ],
    relatedServices: ['rcm-assessment', 'billing-audit', 'practice-financial-reporting'],
    relatedSolutions: ['poor-billing-visibility', 'billing-staff-turnover'],
    relatedGuides: ['revenue-cycle-management', 'medical-billing-audit'],
    faqs: [
      {
        question: 'Why hire a billing company as consultants instead of doing the billing?',
        answer:
          'Because operating billing daily is exactly what qualifies the advice — the workflows, payer behaviors, and failure patterns are current, not textbook. The engagement structure (fixed scope, deliverables, disclosed conflicts) is what keeps the advice honest.',
      },
      {
        question: 'Can you help us hold our current billing vendor accountable?',
        answer:
          'Yes — that is a common engagement. We define measurable standards from your contract and data, build the reporting to track them, and structure the review cadence. Often the vendor improves; sometimes the evidence supports a change. Either way you decide from facts.',
      },
    ],
  },
  {
    slug: 'coding-audit',
    title: 'Coding Audit',
    seoTitle: 'Medical Coding Audit Services | Documentation & Code Review',
    metaDescription:
      'Independent coding audits: documentation-to-code validation, E/M distribution analysis, and risk findings with education-focused follow-up.',
    h1: 'Medical Coding Audit Services',
    summary:
      'Independent review of whether documentation supports billed codes — surfacing both compliance risk and undercoding, with findings built for provider education.',
    intro: [
      'A coding audit examines the question underneath every claim: does the documentation support the code? The answer matters in both directions — overcoding creates payer audit and repayment exposure, while undercoding quietly donates earned revenue back to payers year after year. Most practices that have never audited find some of each.',
      'Our coding audits sample encounters across providers and service types, validate code selection against documentation using current official guidelines, analyze E/M level distributions against specialty norms, and deliver findings as provider-specific education rather than a compliance scare memo.',
    ],
    category: 'analysis',
    problemsAddressed: [
      'Unknown exposure from coding patterns nobody has independently reviewed',
      'E/M distributions that look unusual against specialty norms',
      'Suspected undercoding by conservative providers',
      'Payer audit or prepayment review already underway or threatened',
    ],
    included: [
      'Stratified encounter sampling across providers and visit types',
      'Documentation-to-code validation against current guidelines',
      'E/M level distribution analysis with specialty context',
      'Finding-by-finding provider education summaries',
      'Re-audit scheduling to verify pattern change',
    ],
    processSteps: [
      {
        title: 'Sample design',
        description:
          'Samples are stratified by provider, service type, and risk area so findings represent the practice, not an anecdote.',
      },
      {
        title: 'Review',
        description:
          'Each sampled encounter is reviewed against documentation with the applied guideline cited per finding.',
      },
      {
        title: 'Education and follow-up',
        description:
          'Findings become provider-specific education sessions; a re-audit window verifies that patterns actually moved.',
      },
    ],
    metrics: [
      {
        name: 'Coding accuracy rate',
        description:
          'Sampled encounters where documentation supports the billed code — the audit’s headline number.',
      },
      {
        name: 'Net variance direction',
        description:
          'The balance of overcoding versus undercoding findings — practices are often surprised which way it leans.',
      },
    ],
    suitableFor: [
      'Practices that have never had an independent coding review',
      'Groups with notable E/M distribution variation between providers',
      'Practices responding to payer audit activity',
    ],
    considerations: [
      'Audit findings are educational and operational; they are not legal advice, and practices facing active payer audits or investigations should involve healthcare counsel — audits can sometimes be structured under privilege at counsel’s direction.',
      'Where certified coder review is required for the audit scope, that staffing is stated explicitly in the engagement terms rather than assumed.',
    ],
    complianceReviewRequired: true,
    complianceTopics: ['coding', 'legal'],
    relatedServices: ['medical-coding', 'billing-audit', 'denial-management'],
    relatedSolutions: ['coding-related-denials'],
    relatedGuides: ['medical-coding-basics', 'medical-billing-audit'],
    faqs: [
      {
        question: 'How often should a practice audit its coding?',
        answer:
          'Common practice is a baseline audit, then periodic re-audits — often annually, or more frequently for high-risk service lines and new providers. Frequency should follow risk: new billing patterns, new providers, and payer scrutiny all justify tighter cycles.',
      },
      {
        question: 'Will an audit get our providers in trouble?',
        answer:
          'The purpose is the opposite: find and fix patterns before a payer does, and document the practice’s good-faith compliance effort. Findings are framed as education with citations, not accusations. For situations with active legal exposure, involve counsel first — we will work within that structure.',
      },
    ],
  },
  {
    slug: 'eligibility-authorization-workflow-support',
    title: 'Eligibility & Authorization Workflow Support',
    seoTitle: 'Eligibility & Authorization Workflow Design | Texas Practices',
    metaDescription:
      'Design and staffing for eligibility and authorization workflows: intake-to-approval processes that stop front-end denials at the source.',
    h1: 'Eligibility and Authorization Workflow Support',
    summary:
      'The front-end machine built properly — intake data standards, verification checkpoints, authorization tracking — designed, documented, and optionally staffed.',
    intro: [
      'Eligibility and authorization failures are the classic front-end denials, and they share a root: nobody designed the workflow. Verification happens when someone remembers; authorization requirements get checked after scheduling; approvals live in someone’s email. The fix is process architecture, not more reminders.',
      'This service designs the front-end workflow end to end — what gets verified when, by whom, with what documentation, and how exceptions escalate — then either trains your team to run it or staffs it through our verification and authorization services.',
    ],
    category: 'front-end',
    problemsAddressed: [
      'Front-end denials persisting despite everyone “being careful”',
      'Verification and authorization steps living in individual habits, not process',
      'No handoff structure between scheduling, verification, and billing',
      'Authorization approvals untracked against dates, units, and expiry',
    ],
    included: [
      'Current-state front-end workflow mapping and failure analysis',
      'Future-state design: checkpoints, owners, timing, and documentation standards',
      'Exception and escalation path definition',
      'Team training with quick-reference procedure documentation',
      'Optional ongoing staffing of the designed workflow',
    ],
    processSteps: [
      {
        title: 'Failure analysis',
        description:
          'Recent front-end denials are traced to the exact missing step — the design is built from your actual failure data.',
      },
      {
        title: 'Workflow design',
        description:
          'Each checkpoint gets an owner, a deadline relative to the visit, and a documentation requirement — on paper, agreed, and trained.',
      },
      {
        title: 'Run and refine',
        description:
          'The workflow runs with denial tracking as the scoreboard; steps that do not prevent denials get redesigned, not ritualized.',
      },
    ],
    metrics: [
      {
        name: 'Front-end denial rate',
        description:
          'Eligibility, authorization, and registration denials combined — the workflow’s direct output measure.',
      },
      {
        name: 'Checkpoint completion rate',
        description:
          'Share of visits passing each verification checkpoint on time — the leading indicator behind the denial number.',
      },
    ],
    suitableFor: [
      'Practices with persistent front-end denial categories',
      'Groups standardizing intake across providers or locations',
      'Teams that want the process designed but staffed in-house',
    ],
    considerations: [
      'Front-end workflows touch scheduling and front-desk staff workloads; realistic design accounts for their capacity, or the process fails politely in week two.',
      'The scoreboard is denial data — expect the workflow to be judged and adjusted by measured results, not by whether the binder looks complete.',
    ],
    relatedServices: ['insurance-eligibility-verification', 'prior-authorization-support', 'benefits-verification'],
    relatedSolutions: ['eligibility-verification-errors', 'missing-prior-authorizations'],
    relatedGuides: ['insurance-eligibility-verification', 'prior-authorization'],
    faqs: [
      {
        question: 'We already verify eligibility — why do denials keep happening?',
        answer:
          'Usually because “we verify” means “someone usually verifies most visits.” The failures live in the gaps: add-on appointments, plan changes after verification, services needing benefits detail rather than just active coverage, and authorizations nobody rechecked against units and dates. Tracing your actual denials shows exactly which gap is bleeding.',
      },
      {
        question: 'Can you design the workflow but let our staff run it?',
        answer:
          'Yes — design-and-train is a standard engagement shape. You get the documented workflow, trained staff, and the denial-tracking scoreboard; some practices later add our staffing for the pieces they cannot cover internally.',
      },
    ],
  },
];
