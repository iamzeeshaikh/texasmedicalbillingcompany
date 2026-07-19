/**
 * Specialty entries, part 3 of 3. Validated in src/data/index.ts.
 */
import type { z } from 'astro/zod';
import type { specialtySchema } from '../lib/content-schemas';

type SpecialtyInput = z.input<typeof specialtySchema>;

export const specialties3: SpecialtyInput[] = [
  {
    slug: 'bariatric-surgery-billing',
    title: 'Bariatric Surgery',
    specialtyName: 'Bariatric Surgery',
    seoTitle: 'Bariatric Surgery Billing Services in Texas',
    metaDescription:
      'Bariatric billing: multi-month authorization programs, coverage criteria documentation, program fee structures, and revision surgery claims.',
    h1: 'Bariatric Surgery Billing Services',
    summary:
      'Billing for bariatric programs — where the authorization is a months-long documentation project and coverage criteria decide the surgical pipeline.',
    intro: [
      'Bariatric surgery billing starts months before the operation: payer coverage criteria typically require documented BMI history, supervised weight-management program participation over defined durations, psychological evaluation, and specialist clearances — assembled into an authorization package whose completeness determines whether the surgery happens on schedule.',
      'Our bariatric billing manages the pipeline: per-payer criteria checklists driving each patient’s documentation assembly, program-phase services (nutrition visits, psych evaluations) billed correctly along the way, surgical claims constructed with the program context, and revision surgery claims built on complication documentation.',
    ],
    billingComplexity: [
      'Each payer’s bariatric policy is its own gauntlet — qualifying BMI thresholds with comorbidity alternatives, supervised-diet duration requirements that restart if visits lapse, and exclusions in some employer plans that no documentation can overcome (making benefits verification the first clinical intake step). Pre-surgical program services span covered and non-covered territory per plan, requiring clean patient-financial communication. Revisions demand complication-based medical necessity distinct from the original surgery’s criteria.',
    ],
    serviceCategories: [
      'Primary bariatric procedures (sleeve, bypass)',
      'Pre-surgical multidisciplinary program services',
      'Revision and conversion surgery',
      'Post-surgical follow-up programs',
      'Medical weight management alongside surgical tracks',
    ],
    documentationRisks: [
      'Supervised-diet visit chains broken by missed months',
      'BMI and comorbidity history not documented to policy standards',
      'Revision claims lacking complication and failure documentation',
    ],
    denialCauses: [
      'Authorization criteria incompleteness',
      'Plan exclusions discovered late',
      'Program service claims denied as non-covered per plan',
      'Revision medical-necessity disputes',
    ],
    codingConsiderations: [
      'Program-phase services carry plan-specific coverage — each service billed to the right party (payer or patient) per verified benefits',
      'Staged and revision procedures have distinct code families and criteria from primary surgery',
    ],
    payerChallenges: [
      'Employer plan bariatric exclusions independent of medical necessity',
      'Criteria variation on diet duration and comorbidity qualification',
    ],
    kpis: [
      'Authorization approval rate and time-to-approval',
      'Pipeline conversion rate (program start to surgery)',
      'Program service revenue capture',
      'Benefits-verification completeness at intake',
    ],
    relatedServices: ['benefits-verification', 'prior-authorization-support', 'medical-coding', 'patient-billing'],
    relatedSpecialties: ['general-surgery-medical-billing', 'plastic-surgery-medical-billing', 'endocrinology-medical-billing'],
    relatedLocations: ['houston-medical-billing', 'dallas-medical-billing', 'san-antonio-medical-billing'],
    relatedGuides: ['prior-authorization', 'patient-responsibility', 'insurance-eligibility-verification'],
    faqs: [
      {
        question: 'Why do bariatric authorizations take so long?',
        answer:
          'Because the criteria are longitudinal: many plans require months of documented supervised weight management, and the clock restarts when visit chains break. The controllable factors are verifying the specific plan’s requirements at intake, calendaring the program visits so the chain never breaks, and submitting a complete package the day eligibility criteria are met — all of which we manage per patient.',
      },
      {
        question: 'A patient completed everything and was still denied — now what?',
        answer:
          'First distinguish denial types: criteria disputes are appealable with documentation; plan exclusions generally are not, no matter the medical case. For criteria denials we appeal with the policy text and the patient’s documented compliance item by item. This is also why exclusion screening happens at intake in our workflow — patients deserve that answer before months of program effort.',
      },
    ],
  },
  {
    slug: 'anesthesiology-medical-billing',
    title: 'Anesthesiology',
    specialtyName: 'Anesthesiology',
    seoTitle: 'Anesthesiology Billing Services in Texas',
    metaDescription:
      'Anesthesia billing: base units, time units, modifiers, medical direction rules, and concurrent-case compliance for anesthesiology groups.',
    h1: 'Anesthesiology Billing Services',
    summary:
      'Billing for anesthesia groups — the base-plus-time unit system, medical direction and supervision rules, concurrency compliance, and NSA out-of-network machinery.',
    intro: [
      'Anesthesia is the one specialty whose payment formula is structurally different: claims price from base units (per procedure) plus time units (from documented anesthesia start and stop) plus physical-status and qualifying-circumstance modifiers, multiplied by contracted conversion factors. Around the formula sit care-team rules — medical direction versus supervision, concurrency limits, attestation requirements — that determine both payment and compliance.',
      'Our anesthesia billing runs the formula and the rules: time units from documented times with audit-consistency checks, care-team modifiers reflecting actual staffing and concurrency, medical-direction attestation completeness verified, and out-of-network claims managed through No Surprises Act processes.',
    ],
    billingComplexity: [
      'Concurrency is the compliance center: medical direction rules cap how many cases an anesthesiologist may direct simultaneously while performing required elements (documented by attestation), and staffing patterns that exceed limits or miss attestations convert directed cases to lower-paying supervision — or to false claims exposure when billed wrong. Time documentation is the revenue center: start/stop conventions, discontinuous time, and relief handoffs must be recorded to the standard payers audit against.',
    ],
    serviceCategories: [
      'Surgical anesthesia across service lines',
      'Obstetric anesthesia including labor epidurals',
      'Acute post-operative pain procedures',
      'Care-team anesthesia with CRNAs',
      'Non-OR anesthesia (endoscopy, imaging, cardioversion)',
    ],
    documentationRisks: [
      'Anesthesia start/stop times inconsistent between record systems',
      'Medical-direction attestations missing required elements',
      'Labor epidural time conventions not applied consistently',
    ],
    denialCauses: [
      'Time-unit disputes against documented times',
      'Care-team modifier and concurrency mismatches',
      'Medical-necessity denials on anesthesia for endoscopy in some payers',
      'Out-of-network payment disputes under NSA',
    ],
    codingConsiderations: [
      'Base units follow the anesthesia crosswalk per procedure — the underlying surgical code must be captured correctly from the OR schedule',
      'Labor epidural billing conventions (time caps, methodology) vary by payer and should be contract-verified',
    ],
    payerChallenges: [
      'Payer-specific time rounding and unit calculation methods',
      'NSA disputes dominating out-of-network revenue recovery',
    ],
    kpis: [
      'Units billed versus units paid variance',
      'Attestation completeness rate on directed cases',
      'Concurrency compliance exceptions',
      'NSA negotiation/IDR recovery rates',
    ],
    relatedServices: ['medical-coding', 'underpayment-identification', 'claims-appeals', 'practice-financial-reporting'],
    relatedSpecialties: ['pain-management-billing', 'ambulatory-surgery-center-billing', 'emergency-medicine-billing'],
    relatedLocations: ['houston-medical-billing', 'dallas-medical-billing', 'fort-worth-medical-billing'],
    relatedGuides: ['denial-management', 'net-collection-rate', 'claim-status-follow-up'],
    faqs: [
      {
        question: 'How is anesthesia payment actually calculated?',
        answer:
          'Generally: (base units for the procedure + time units from documented anesthesia time + modifier units where applicable) × the payer’s conversion factor, with care-team modifiers splitting payment between anesthesiologist and CRNA under direction models. Every element is auditable — which is why time documentation and attestation discipline are billing issues, not just clinical ones.',
      },
      {
        question: 'What is the risk in our concurrency patterns?',
        answer:
          'If staffing data shows an anesthesiologist directing more concurrent cases than rules allow — or attestations missing required elements — cases billed as medical direction were technically supervision or worse, creating repayment and false-claims exposure. We run concurrency analysis against billing as a standing control, because discovering this in a payer audit is the expensive version.',
      },
    ],
  },
  {
    slug: 'radiology-medical-billing',
    title: 'Radiology',
    specialtyName: 'Radiology',
    seoTitle: 'Radiology Billing Services in Texas',
    metaDescription:
      'Radiology billing: professional and global component claims, authorization-heavy advanced imaging, and interpretation-volume revenue integrity.',
    h1: 'Radiology Medical Billing Services',
    summary:
      'Billing for radiology practices and imaging centers — component billing at interpretation volume, advanced-imaging authorization gates, and reconciliation against study logs.',
    intro: [
      'Radiology bills in components — professional (interpretation), technical (equipment and staff), or global — and the correct construction per study depends on who owned what where. Volume is the defining condition: thousands of interpretations monthly mean small systematic errors scale immediately, and reconciliation against modality logs is the only way to know every study became a claim.',
      'Our radiology billing runs volume with integrity: component construction verified per site arrangement, claims reconciled against study logs so reads never silently unbill, authorization status checked upstream for advanced imaging, and payer downcoding or edit programs tracked and contested.',
    ],
    billingComplexity: [
      'Component arrangements differ by site — hospital reads bill professional-only, imaging center studies bill global or split — and misconstruction systematically misprices everything at that site. Advanced imaging (CT, MR, PET) sits behind prior-authorization programs where the ordering physician’s office usually holds the obligation, but the radiology claim eats the denial; missing-auth workflows between ordering and rendering parties decide real revenue. Repeat and comparison studies face frequency edits requiring documented indications.',
    ],
    serviceCategories: [
      'Diagnostic radiology interpretation across modalities',
      'Advanced imaging: CT, MRI, PET programs',
      'Interventional radiology procedures',
      'Mammography and screening programs',
      'Teleradiology coverage arrangements',
    ],
    documentationRisks: [
      'Reports missing elements payers require for the professional component',
      'Study logs and billed claims unreconciled',
      'Screening-versus-diagnostic mammography classification errors',
    ],
    denialCauses: [
      'Missing prior authorization on advanced imaging',
      'Component construction errors by site',
      'Frequency edits on repeat studies',
      'Screening/diagnostic benefit classification disputes',
    ],
    codingConsiderations: [
      'Professional/technical/global construction must mirror actual ownership and staffing arrangements per location',
      'Screening mammography converting to diagnostic same-visit follows specific coding conventions preserving screening benefits',
    ],
    payerChallenges: [
      'Radiology benefit managers (RBMs) running authorization gates for commercial plans',
      'Downcoding and edit programs on interpretation claims at volume',
    ],
    kpis: [
      'Study-to-claim reconciliation exception rate',
      'Authorization-related denial rate on advanced imaging',
      'Component construction accuracy by site',
      'Revenue per study by modality versus expected',
    ],
    relatedServices: ['charge-entry', 'payment-posting', 'denial-management', 'underpayment-identification'],
    relatedSpecialties: ['pathology-medical-billing', 'emergency-medicine-billing', 'oncology-medical-billing'],
    relatedLocations: ['dallas-medical-billing', 'houston-medical-billing', 'austin-medical-billing'],
    relatedGuides: ['prior-authorization', 'clean-claim-rate', 'denial-rate'],
    faqs: [
      {
        question: 'The ordering office was supposed to get the authorization — why is our claim denied?',
        answer:
          'Because payers attach the requirement to the service, not the party — the rendering claim takes the denial regardless of whose job the authorization was. Practical protection is workflow: authorization status verified before the study is performed for elective advanced imaging, with escalation to the ordering office while rescheduling is still possible. Retro-authorization and appeals recover some misses; prevention recovers more.',
      },
      {
        question: 'How do we know every study we read got billed?',
        answer:
          'Reconciliation: modality logs and RIS study counts compared against claim counts on a fixed cadence, with every unmatched study investigated. At radiology volume, unbilled reads hide easily in the flow — the log-to-claim habit is the only reliable detector, and it is standard in our radiology operations.',
      },
    ],
  },
  {
    slug: 'pathology-medical-billing',
    title: 'Pathology',
    specialtyName: 'Pathology',
    seoTitle: 'Pathology Billing Services in Texas',
    metaDescription:
      'Pathology billing: specimen-level coding, professional and technical components, stain add-ons, and clinical lab interactions billed correctly.',
    h1: 'Pathology Medical Billing Services',
    summary:
      'Billing for pathology practices — specimen-based code construction, component splits with facilities, stain and special-study add-ons, and referral billing chains.',
    intro: [
      'Pathology billing is constructed from the specimen up: surgical pathology codes tier by specimen type and examination level, with each separately submitted specimen billed on its own line — making the claim a mirror of the gross description. Above that sit special stains, immunohistochemistry, and molecular studies as add-on structures, plus professional/technical splits with hospitals and reference-lab relationships defining who bills what to whom.',
      'Our pathology billing constructs claims from reports: specimen counts and levels matching the gross and microscopic documentation, add-on stains billed per block/antibody rules with medical-necessity awareness, component splits following each facility arrangement, and referral chains (client billing versus direct billing) kept contractually straight.',
    ],
    billingComplexity: [
      'Specimen-level construction is the audit surface — billing separately for specimens submitted together, or leveling specimens above their examination tier, are known enforcement patterns; the report must support every line. IHC and special stain billing has quantity rules (per specimen, per block, per antibody) payers edit tightly, and reflexive stain panels without documented necessity draw review. Client-billing arrangements with referring practices carry regulatory constraints that vary by payer and state — structure them with advice, not assumption.',
    ],
    serviceCategories: [
      'Surgical pathology across specimen tiers',
      'Immunohistochemistry and special stains',
      'Cytopathology including gyn and non-gyn',
      'Molecular and genomic test coordination',
      'Clinical pathology professional services',
    ],
    documentationRisks: [
      'Gross descriptions ambiguous on specimen separateness',
      'Stain orders without documented diagnostic rationale',
      'Component arrangements undocumented per facility',
    ],
    denialCauses: [
      'Specimen-count and level edits against reports',
      'IHC quantity-rule denials',
      'Medical-necessity denials on molecular add-ons',
      'Component billing conflicts with facility claims',
    ],
    codingConsiderations: [
      'Specimen definitions follow the code family’s rules on separate identification and examination — the claim must trace to the gross description',
      'Stain quantities bill under per-specimen/per-block conventions that differ by code and payer',
    ],
    payerChallenges: [
      'Tight quantity edits on stains and panels',
      'Molecular test coverage policies lagging clinical practice',
    ],
    kpis: [
      'Claim-to-report construction accuracy',
      'Stain revenue per case with necessity documentation',
      'Component billing conflict rate',
      'Referral chain payment lag',
    ],
    relatedServices: ['medical-coding', 'billing-audit', 'payment-posting', 'denial-management'],
    relatedSpecialties: ['laboratory-billing', 'dermatology-medical-billing', 'urology-medical-billing'],
    relatedLocations: ['houston-medical-billing', 'dallas-medical-billing', 'san-antonio-medical-billing'],
    relatedGuides: ['medical-necessity-denials', 'clean-claim-rate', 'payment-posting'],
    faqs: [
      {
        question: 'When do multiple tissue pieces bill as one specimen versus several?',
        answer:
          'The controlling logic is how specimens were submitted and identified for individual examination and diagnosis — separately identified and diagnosed specimens support separate lines; multiple pieces of one specimen do not. The gross description is the evidence, and enforcement history in pathology makes this construction worth auditing periodically. Verify current coding policy for specifics; we build claims from the report and flag ambiguous grossing patterns back to the practice.',
      },
      {
        question: 'Our IHC billing keeps getting cut — what are the rules?',
        answer:
          'Payers apply per-specimen and per-block quantity conventions to IHC codes and watch for standing panels run without case-specific rationale. Billing must match the code family’s current quantity definitions, and documentation should tie stains to the diagnostic question. We bill to the conventions and appeal cuts where the report supports the quantities.',
      },
    ],
  },
  {
    slug: 'laboratory-billing',
    title: 'Laboratory',
    specialtyName: 'Clinical Laboratory',
    seoTitle: 'Clinical Laboratory Billing Services in Texas',
    metaDescription:
      'Clinical lab billing: fee schedule dynamics, medical-necessity edits by diagnosis, panel rules, and volume claim operations for laboratories.',
    h1: 'Clinical Laboratory Billing Services',
    summary:
      'Billing for clinical laboratories — fee-schedule economics, diagnosis-driven necessity edits, panel and reflex rules, and clean operations at extreme claim volume.',
    intro: [
      'Laboratory billing is high-volume, low-dollar arithmetic where process quality is everything: thousands of claims priced from lab fee schedules, adjudicated against diagnosis-based medical-necessity edits (with ABN obligations for Medicare when coverage fails), governed by panel bundling rules, and dependent on requisition data quality the lab does not fully control.',
      'Our laboratory billing industrializes the flow: requisition data validated at accession, diagnosis-to-test necessity screening before claims release, panel and reflex billing constructed to the rules, and denial analytics by ordering provider so requisition problems get fixed at their source.',
    ],
    billingComplexity: [
      'Necessity edits are diagnosis-mechanical: covered diagnoses per test are published in policies, and requisitions arriving with insufficient diagnosis codes generate deterministic denials the lab eats — unless front-end screening catches them and ABN/notice processes run where required. Panel rules prohibit unbundling component tests when a panel exists; reflex testing needs documented protocols. Drug-testing billing (presumptive/definitive tiers) remains an enforcement-sensitive zone requiring per-payer conformance.',
    ],
    serviceCategories: [
      'Routine chemistry, hematology, and urinalysis volume',
      'Molecular and infectious disease testing',
      'Toxicology and drug monitoring programs',
      'Pathology-adjacent technical services',
      'Client and patient billing programs',
    ],
    documentationRisks: [
      'Requisitions missing supporting diagnoses per policy',
      'Reflex protocols undocumented for cascade testing',
      'ABN processes inconsistent where Medicare coverage fails',
    ],
    denialCauses: [
      'Diagnosis-based necessity denials at volume',
      'Panel unbundling edits',
      'Frequency limits on repeat testing',
      'Drug-test tier and quantity edits',
    ],
    codingConsiderations: [
      'Test-to-diagnosis mappings follow published coverage policies and change with policy updates — screening tables need maintenance',
      'Panels bill as panels; component billing where a panel applies is a classic false-claims pattern',
    ],
    payerChallenges: [
      'Fee schedule compression on routine testing',
      'Aggressive toxicology review programs',
    ],
    kpis: [
      'Necessity-denial rate by ordering provider',
      'Claim acceptance rate at volume',
      'Revenue per requisition versus expected',
      'ABN capture rate where applicable',
    ],
    relatedServices: ['claims-scrubbing', 'charge-entry', 'denial-management', 'practice-financial-reporting'],
    relatedSpecialties: ['pathology-medical-billing', 'primary-care-medical-billing', 'addiction-treatment-billing'],
    relatedLocations: ['dallas-medical-billing', 'houston-medical-billing', 'lubbock-medical-billing'],
    relatedGuides: ['medical-necessity-denials', 'clean-claim-rate', 'denial-rate'],
    faqs: [
      {
        question: 'Most of our denials trace to bad requisitions — can billing fix ordering providers?',
        answer:
          'Billing can measure them, which changes behavior: denial analytics by ordering provider, shared back through client service with specific missing-diagnosis patterns, converts an invisible problem into an accountable one. Labs that pair front-end screening with provider-level feedback cut necessity denials substantially; labs that silently absorb them subsidize their worst requisitions.',
      },
      {
        question: 'How should reflex testing be billed?',
        answer:
          'Under a documented reflex protocol: the initial test, defined trigger criteria, and the reflexed test billed with documentation supporting the cascade. Undocumented reflexes look like unordered testing to auditors. We verify protocols exist and that claims mirror them — an inexpensive discipline compared to a toxicology audit.',
      },
    ],
  },
  {
    slug: 'ambulatory-surgery-center-billing',
    title: 'Ambulatory Surgery Centers',
    specialtyName: 'Ambulatory Surgery Center',
    seoTitle: 'ASC Billing Services in Texas | Facility Claims',
    metaDescription:
      'ASC billing: facility claims, grouper rates, implant and device billing, out-of-network strategy, and coordination with professional claims.',
    h1: 'Ambulatory Surgery Center Billing Services',
    summary:
      'Facility billing for ASCs — procedure-approved lists and payment groupers, device-intensive claims, professional/facility coordination, and payer contract realities.',
    intro: [
      'ASC billing is facility billing with its own physics: Medicare pays from an ASC-approved procedure list under its payment system, commercial contracts pay through groupers, carve-outs, and implant provisions that make contract knowledge the pricing engine; device-intensive cases live or die on implant invoicing and documentation; and every case generates parallel facility and professional claims that must agree.',
      'Our ASC billing operates the facility side completely: cases coded and billed per contract structure, implants billed with invoice documentation under each contract’s provisions, expected reimbursement computed per case against grouper and carve-out terms, and variance chased — because ASC contracts underpay quietly when nobody computes expectations.',
    ],
    billingComplexity: [
      'Commercial ASC contracts are heterogeneous instruments — grouper tiers, percent-of-billed, fee schedules, implant thresholds with cost-plus provisions, multiple-procedure logic — and posting payments without computing contract-expected amounts per case forfeits the variance. Implant billing requires invoice retention and threshold math per contract. Facility/professional claim mismatches (different codes for the same case) trigger payer scrutiny and stalls; coordination is an operational requirement, not a courtesy.',
    ],
    serviceCategories: [
      'Multi-specialty surgical case billing',
      'GI endoscopy center volume',
      'Orthopedic and spine cases with device intensity',
      'Ophthalmic surgery volume',
      'Pain management procedure schedules',
    ],
    documentationRisks: [
      'Implant invoices unretained against contract cost-plus billing',
      'Operative and coding mismatches between facility and professional claims',
      'Case costing absent for contract-negotiation evidence',
    ],
    denialCauses: [
      'Procedures outside approved lists or contract scopes',
      'Implant documentation and threshold disputes',
      'Grouper assignment and multiple-procedure calculation variances',
      'Authorization gaps on scheduled cases',
    ],
    codingConsiderations: [
      'Facility coding drives grouper assignment — construction errors misprice the whole case',
      'Implant billing terms differ per contract: thresholds, invoice-plus percentages, and excluded devices need per-payer tables',
    ],
    payerChallenges: [
      'Contract complexity making expected-value computation the core discipline',
      'Site-of-service dynamics moving cases between HOPD, ASC, and office settings',
    ],
    kpis: [
      'Per-case payment variance versus contract-expected',
      'Implant reimbursement capture versus cost',
      'Facility/professional claim match rate',
      'Days from case to facility payment',
    ],
    relatedServices: ['underpayment-identification', 'payment-posting', 'prior-authorization-support', 'practice-financial-reporting'],
    relatedSpecialties: ['gastroenterology-medical-billing', 'orthopedic-medical-billing', 'ophthalmology-medical-billing'],
    relatedLocations: ['dallas-medical-billing', 'houston-medical-billing', 'austin-medical-billing'],
    relatedGuides: ['net-collection-rate', 'payment-posting', 'prior-authorization'],
    faqs: [
      {
        question: 'How much are ASC contracts really underpaying us?',
        answer:
          'Centers that have never computed per-case expected payments typically find measurable variance — grouper misassignments, implant provisions unapplied, multiple-procedure math errors. The answer for your center comes from loading contract terms and running recent cases through them; that analysis is the first deliverable of our ASC engagements.',
      },
      {
        question: 'Do you coordinate with our surgeons’ billing companies?',
        answer:
          'Yes — facility and professional claims describing the same case differently invite denials and audits for both parties. We reconcile coding on device-intensive and multi-procedure cases with the professional side before submission where arrangements allow, and flag mismatches when they surface in either direction.',
      },
    ],
  },
  {
    slug: 'skilled-nursing-facility-billing',
    title: 'Skilled Nursing Facilities',
    specialtyName: 'Skilled Nursing Facility',
    seoTitle: 'SNF Billing Services in Texas | PDPM & UB-04 Claims',
    metaDescription:
      'SNF billing: PDPM claims, consolidated billing rules, Medicaid case-mix, and the assessment-driven revenue cycle for skilled nursing facilities.',
    h1: 'Skilled Nursing Facility Billing Services',
    summary:
      'Billing for SNFs — assessment-driven PDPM payment, consolidated billing boundaries, Texas Medicaid case-mix, and census-to-claim operations on UB-04s.',
    intro: [
      'SNF billing is institutional billing where clinical assessment is the pricing engine: Medicare Part A payment flows from PDPM classifications built on MDS assessments, making assessment accuracy and timeliness revenue-determinative; consolidated billing makes the SNF financially responsible for most services residents receive during covered stays; and Texas Medicaid runs its own case-mix and rate machinery for long-stay residents.',
      'Our SNF billing connects the chain: census and payer-status tracking daily, MDS schedules aligned with billing windows, PDPM components verified against assessments, consolidated-billing screens on outside services, and UB-04 cycles run clean across Medicare, Medicaid, and MA plans.',
    ],
    billingComplexity: [
      'The payer-status ladder is operationally brutal: residents move between Medicare Part A, MA plans (with their own authorization and review regimes), Medicaid pending, Medicaid established, and private pay — each transition changing billing rules mid-stay, with retroactive Medicaid eligibility rewriting past months. Consolidated billing traps facilities that let outside providers bill separately for services the SNF owed; those costs boomerang. MA plans add concurrent review and level-of-care denials Medicare never ran.',
    ],
    serviceCategories: [
      'Medicare Part A skilled stays under PDPM',
      'Medicare Advantage skilled stays with authorization cycles',
      'Texas Medicaid long-term care billing',
      'Part B therapy and ancillary billing',
      'Private pay and hospice-interaction billing',
    ],
    documentationRisks: [
      'MDS assessments late or misaligned with billing periods',
      'Skilled-service documentation thin for MA concurrent review',
      'Payer-status transitions undocumented mid-stay',
    ],
    denialCauses: [
      'MA level-of-care and continued-stay denials',
      'PDPM component disputes against assessment data',
      'Consolidated billing conflicts with outside providers',
      'Medicaid-pending aging and eligibility retroactivity chaos',
    ],
    codingConsiderations: [
      'PDPM classification derives from MDS coding — diagnosis capture and assessment accuracy are literally the rate-setting activity',
      'Consolidated billing inclusion/exclusion lists must screen every outside service during covered stays',
    ],
    payerChallenges: [
      'MA plan penetration bringing authorization and audit intensity to SNF stays',
      'Texas Medicaid rate and eligibility administration for long-stay populations',
    ],
    kpis: [
      'Medicare/MA claim acceptance and days-to-payment',
      'MDS timeliness against billing windows',
      'Medicaid-pending AR aging',
      'Consolidated-billing leakage incidents',
    ],
    relatedServices: ['medical-billing', 'accounts-receivable-follow-up', 'denial-management', 'practice-financial-reporting'],
    relatedSpecialties: ['home-health-billing', 'hospice-billing', 'physical-therapy-billing'],
    relatedLocations: ['san-antonio-medical-billing', 'fort-worth-medical-billing', 'tyler-medical-billing'],
    relatedGuides: ['ub-04-claim-form', 'accounts-receivable-aging', 'denial-management'],
    faqs: [
      {
        question: 'Our MA denials for continued stays keep rising — is that industry-wide?',
        answer:
          'Yes — MA concurrent review of SNF stays has intensified industry-wide, with level-of-care denials and early cut dates far exceeding traditional Medicare patterns. The operational response: documentation that evidences skilled need daily, appeal discipline on cut dates (expedited where available), and plan-level denial tracking for contract and referral decisions. We run that machinery.',
      },
      {
        question: 'What is consolidated billing costing facilities that ignore it?',
        answer:
          'Real money: when outside providers bill Medicare separately for services included in the SNF stay, recoupments and cross-billing disputes land on the facility. The control is a screening workflow — every outside service during a covered stay checked against inclusion lists before arrangements are made — plus contracts with outside providers that reflect the rules.',
      },
    ],
  },
  {
    slug: 'home-health-billing',
    title: 'Home Health',
    specialtyName: 'Home Health',
    seoTitle: 'Home Health Billing Services in Texas | PDGM Claims',
    metaDescription:
      'Home health billing: PDGM periods, OASIS-driven payment, NOAs, face-to-face requirements, and EVV compliance for Texas agencies.',
    h1: 'Home Health Billing Services',
    summary:
      'Billing for home health agencies — PDGM period claims built on OASIS accuracy, NOA deadlines, physician documentation chains, and Texas EVV compliance.',
    intro: [
      'Home health billing runs on the PDGM machine: 30-day payment periods classified from OASIS assessments and diagnosis coding, gated by Notices of Admission with hard submission deadlines that forfeit days when missed, and dependent on physician-signed orders and face-to-face documentation that agencies chase but do not control. Texas adds Electronic Visit Verification as a claims-matching prerequisite on Medicaid services.',
      'Our home health billing keeps the machine synchronized: NOAs out within deadline windows, OASIS and coding review before period claims, order-tracking workflows that chase signatures ahead of billing needs, EVV exceptions worked before they block claims, and MA authorization cycles managed alongside traditional Medicare flows.',
    ],
    billingComplexity: [
      'Payment integrity chains through documents the agency must orchestrate: OASIS accuracy drives clinical groupings (and audits), face-to-face encounter documentation from referring physicians is a condition of payment reviewers actually check, and unsigned orders block claims into aging. NOA lapses convert admission delays directly into unpaid days at a per-day forfeit. EVV mismatches — visits without compliant verification records — stop Texas Medicaid claims mechanically.',
    ],
    serviceCategories: [
      'Medicare PDGM episodic care',
      'Medicare Advantage home health with authorization cycles',
      'Texas Medicaid home health with EVV',
      'Skilled nursing and therapy visit programs',
      'Non-covered and private-duty adjacencies kept separate',
    ],
    documentationRisks: [
      'Face-to-face documentation missing or non-compliant from referrers',
      'OASIS responses inconsistent with clinical documentation',
      'Order signature chains aging past billing windows',
    ],
    denialCauses: [
      'NOA timeliness forfeits',
      'F2F and order documentation failures on review',
      'EVV mismatch rejections on Medicaid claims',
      'MA authorization gaps between episodes',
    ],
    codingConsiderations: [
      'Primary diagnosis selection drives PDGM clinical groupings under acceptable-diagnosis rules — coding review is payment review',
      'Therapy and nursing visit utilization patterns face medical-review scrutiny against plan-of-care justification',
    ],
    payerChallenges: [
      'MA penetration bringing per-episode authorization to a Medicare-dominant sector',
      'Texas EVV aggregator mechanics and exception workflows',
    ],
    kpis: [
      'NOA timeliness rate',
      'Claims held for orders/F2F aging',
      'EVV match rate before claim release',
      'Days from period end to payment',
    ],
    relatedServices: ['medical-billing', 'accounts-receivable-follow-up', 'denial-management', 'billing-audit'],
    relatedSpecialties: ['hospice-billing', 'skilled-nursing-facility-billing', 'primary-care-medical-billing'],
    relatedLocations: ['houston-medical-billing', 'san-antonio-medical-billing', 'brownsville-medical-billing'],
    relatedGuides: ['ub-04-claim-form', 'timely-filing-denials', 'denial-management'],
    faqs: [
      {
        question: 'Unsigned physician orders are choking our billing — standard fixes?',
        answer:
          'Treat signatures as a production pipeline: orders tracked from creation with aging reports, chase cadences to physician offices, escalation paths for chronic non-signers, and referral-source scorecards that inform marketing where the relationship supports it. Agencies that chase signatures ad hoc bill late forever; agencies that pipeline them bill on schedule.',
      },
      {
        question: 'How costly are NOA misses really?',
        answer:
          'Directly costly: late NOAs forfeit payment for days from the start-of-care until submission, as a defined per-day reduction. It is among the purest process-failure losses in healthcare billing — entirely preventable with intake-to-NOA workflows measured in hours. Ours are.',
      },
    ],
  },
  {
    slug: 'hospice-billing',
    title: 'Hospice',
    specialtyName: 'Hospice',
    seoTitle: 'Hospice Billing Services in Texas',
    metaDescription:
      'Hospice billing: per-diem levels of care, NOEs, certification chains, service-intensity add-ons, and cap tracking for hospice agencies.',
    h1: 'Hospice Billing Services',
    summary:
      'Billing for hospice agencies — per-diem level-of-care claims, NOE deadlines, certification and election paperwork chains, and aggregate cap management.',
    intro: [
      'Hospice billing is per-diem billing wrapped in eligibility paperwork: four levels of care billed daily with payment varying by level and stay phase (including service-intensity add-ons at end of life), gated by Notices of Election with the same unforgiving deadlines home health knows, and sustained by certification/recertification chains — physician narratives, face-to-face encounters for later benefit periods — that reviewers examine when stays run long.',
      'Our hospice billing keeps eligibility and claims synchronized: NOEs submitted inside deadline windows, certification calendars tracked per patient per benefit period, level-of-care days billed as documented, room-and-board pass-throughs for facility residents handled with Texas Medicaid mechanics, and the aggregate cap monitored across the year.',
    ],
    billingComplexity: [
      'Long-stay scrutiny defines hospice compliance: patients surviving past initial benefit periods require face-to-face encounters and clinical documentation supporting continued terminal prognosis, and lapsed certifications create non-billable gaps. NOE lateness forfeits days mechanically. General inpatient level usage draws review proportional to its rate premium. The aggregate cap converts census composition into a financial planning variable unique to hospice.',
    ],
    serviceCategories: [
      'Routine home care days including facility-based residents',
      'Continuous home care during crises',
      'General inpatient care arrangements',
      'Respite care days',
      'Nursing facility room-and-board coordination',
    ],
    documentationRisks: [
      'Certification narratives and F2F encounters lapsing on long stays',
      'GIP-level justification thin against review standards',
      'Election paperwork defects surfacing at audit',
    ],
    denialCauses: [
      'NOE timeliness forfeits',
      'Certification gap non-billable periods',
      'Level-of-care downgrades on review',
      'Related-versus-unrelated service disputes on concurrent care',
    ],
    codingConsiderations: [
      'Terminal diagnosis coding and relatedness determinations drive what hospice must cover — with audit consequences in both directions',
      'Service-intensity add-on billing at end of life follows specific visit-type and timing rules',
    ],
    payerChallenges: [
      'Medicare review programs targeting long stays and GIP usage',
      'Texas Medicaid room-and-board flows for facility residents',
    ],
    kpis: [
      'NOE timeliness rate',
      'Certification currency across census',
      'Level-of-care mix with documentation support',
      'Cap position tracking through the year',
    ],
    relatedServices: ['medical-billing', 'billing-audit', 'accounts-receivable-follow-up', 'practice-financial-reporting'],
    relatedSpecialties: ['home-health-billing', 'skilled-nursing-facility-billing', 'internal-medicine-medical-billing'],
    relatedLocations: ['tyler-medical-billing', 'fort-worth-medical-billing', 'corpus-christi-medical-billing'],
    relatedGuides: ['ub-04-claim-form', 'timely-filing-denials', 'accounts-receivable-aging'],
    faqs: [
      {
        question: 'What triggers hospice audits most often?',
        answer:
          'Length-of-stay outliers and level-of-care patterns: high proportions of very long stays, GIP usage above norms, and live-discharge patterns draw data-driven review, after which certification narratives and F2F documentation decide outcomes. The defense is built in advance — documentation discipline on every recertification, not remediation after the records request.',
      },
      {
        question: 'How does the aggregate cap actually affect billing?',
        answer:
          'The cap limits total Medicare payments per beneficiary count per cap year; agencies with long-stay-heavy censuses can exceed it and owe money back. Billing’s role is tracking: cap position computed through the year so leadership sees exposure early enough for census strategy to respond — not discovering an overpayment demand after year-end.',
      },
    ],
  },
  {
    slug: 'primary-care-medical-billing',
    title: 'Primary Care',
    specialtyName: 'Primary Care',
    seoTitle: 'Primary Care Billing Services in Texas',
    metaDescription:
      'Primary care billing: E/M volume, preventive schedules, care-management programs, and value-based reporting alongside fee-for-service claims.',
    h1: 'Primary Care Billing Services',
    summary:
      'Billing for primary care organizations — the operational union of family and internal medicine billing, plus the value-based reporting layer modern contracts add.',
    intro: [
      'Primary care billing spans the full front door of medicine: high-volume E/M across all ages, preventive schedules per payer, vaccines, in-office testing, care-management program families, and — increasingly — value-based contract obligations (quality reporting, attribution management, risk-adjustment documentation) layered on top of fee-for-service claims that still pay the bills.',
      'Our primary care billing runs both layers: the fee-for-service engine at volume with the preventive/problem and program disciplines done right, and the value-based layer supported through accurate diagnosis capture, quality-gap data flows, and reporting that connects billing data to contract performance.',
    ],
    billingComplexity: [
      'The fee-for-service layer inherits every family-medicine and internal-medicine challenge at panel scale. The value-based layer adds different failure modes: risk-adjustment revenue depends on complete, documented diagnosis capture annually (with compliance lines that must not be crossed), quality measures draw from coding detail claims must carry, and attribution logistics determine which patients count at all. Practices treating these as separate worlds leak on both sides.',
    ],
    serviceCategories: [
      'Comprehensive E/M across the age spectrum',
      'Preventive and wellness visit schedules',
      'Chronic disease and care-management programs',
      'Immunization and point-of-care testing volume',
      'Value-based contract reporting support',
    ],
    documentationRisks: [
      'Chronic diagnoses unrecaptured annually for risk adjustment',
      'Program time and consent trails incomplete',
      'Quality-measure data elements missing from encounter coding',
    ],
    denialCauses: [
      'Preventive/problem same-day denials',
      'Program overlap and frequency edits',
      'Eligibility churn across broad payer mixes',
      'Vaccine coding variation across payers',
    ],
    codingConsiderations: [
      'Risk-adjustment documentation must reflect genuinely assessed conditions — capture completeness and compliance discipline together',
      'Care-management program family rules (CCM, TCM, AWV, BHI) interlock and need monthly per-patient checks',
    ],
    payerChallenges: [
      'Hybrid contract structures paying FFS plus quality/risk components',
      'Attribution and roster management across plans',
    ],
    kpis: [
      'Panel revenue per patient per year across FFS and programs',
      'Annual chronic-condition recapture rate',
      'Program billing consistency month over month',
      'Quality-gap closure supported by claims data',
    ],
    relatedServices: ['medical-billing', 'practice-financial-reporting', 'insurance-eligibility-verification', 'medical-coding'],
    relatedSpecialties: ['family-medicine-medical-billing', 'internal-medicine-medical-billing', 'pediatric-medical-billing'],
    relatedLocations: ['houston-medical-billing', 'san-antonio-medical-billing', 'arlington-medical-billing'],
    relatedGuides: ['medical-billing', 'net-collection-rate', 'insurance-eligibility-verification'],
    faqs: [
      {
        question: 'Our value-based bonuses keep disappointing — can billing help?',
        answer:
          'Substantially, because much of value-based performance is data plumbing billing controls: diagnosis capture completeness drives risk scores, encounter coding carries quality-measure evidence, and claims data feeds attribution. We audit what your claims currently tell the plans versus what your care actually delivers — the gap is usually recoverable money.',
      },
      {
        question: 'Which care-management programs should we actually run?',
        answer:
          'The ones your panel supports operationally: CCM for multimorbid patients if time-tracking discipline exists, AWVs systematically for Medicare panels, TCM if discharge information flows reliably. Programs half-run produce audit risk without revenue. We model the realistic value per program against your panel and build only what will be sustained.',
      },
    ],
  },
  {
    slug: 'multispecialty-practice-billing',
    title: 'Multispecialty Practices',
    specialtyName: 'Multispecialty Practice',
    seoTitle: 'Multispecialty Practice Billing Services in Texas',
    metaDescription:
      'Multispecialty group billing: specialty-specific workflows under one structure, cross-specialty referrals, and consolidated reporting.',
    h1: 'Multispecialty Practice Billing Services',
    summary:
      'Billing for multispecialty groups — specialty-correct workflows running in parallel under one governance, with reporting that resolves performance per specialty.',
    intro: [
      'Multispecialty billing fails when it is run as one generic workflow: cardiology’s authorization gauntlet, dermatology’s modifier battles, and therapy’s unit arithmetic each need their own edits, queues, and denial playbooks — while the group needs consolidated financials, consistent policies, and internal referral capture working across departments.',
      'Our multispecialty billing runs specialty-correct operations in parallel: per-specialty scrubbing rules and denial workflows, credentialing coordinated across the roster and payer matrix, and reporting that shows each specialty’s true performance alongside the consolidated picture leadership manages by.',
    ],
    billingComplexity: [
      'The structural challenge is preventing averages from hiding problems: a group-level clean-claim rate can look healthy while one specialty bleeds denials, and shared billing staff default to the workflows they know best, quietly under-serving the specialties they know least. Internal referrals add capture risk — orders between departments that never become scheduled, billed encounters — and provider-based or site-of-service questions complicate groups with facility relationships.',
    ],
    serviceCategories: [
      'Parallel specialty billing operations under one structure',
      'Cross-specialty referral and order capture',
      'Consolidated multi-specialty financial reporting',
      'Group-wide credentialing and enrollment management',
      'Shared-services front-end workflows',
    ],
    documentationRisks: [
      'Documentation standards varying by department without review',
      'Internal referral orders unlinked to completed encounters',
      'Specialty-specific requirements missed by generalist workflows',
    ],
    denialCauses: [
      'Specialty-blind claim edits missing specialty-specific rules',
      'Credentialing gaps as providers span departments and sites',
      'Authorization workflows uneven across service lines',
      'Payer enrollment misalignment across specialties and locations',
    ],
    codingConsiderations: [
      'Each specialty’s coding disciplines must run natively — the group structure changes governance, not payer rules',
      'Internal referral pathways need order-tracking so cross-department revenue is captured, not assumed',
    ],
    payerChallenges: [
      'Contracts covering some specialties well and others poorly under one agreement',
      'Payer specialty designations affecting authorization and payment logic per provider',
    ],
    kpis: [
      'Per-specialty KPI dashboards against specialty benchmarks',
      'Internal referral conversion and capture rates',
      'Cross-specialty denial rate dispersion',
      'Consolidated versus per-specialty collection trends',
    ],
    relatedServices: ['revenue-cycle-management', 'practice-financial-reporting', 'credentialing', 'multi-location-practice-billing'],
    relatedSpecialties: ['primary-care-medical-billing', 'cardiology-medical-billing', 'orthopedic-medical-billing'],
    relatedLocations: ['dallas-medical-billing', 'houston-medical-billing', 'austin-medical-billing'],
    relatedGuides: ['revenue-cycle-management', 'net-collection-rate', 'denial-rate'],
    faqs: [
      {
        question: 'Should each specialty in our group have its own billing team?',
        answer:
          'The work should be specialty-specific even when the people are shared: specialty-tuned edits, denial playbooks, and reporting matter more than org-chart separation. What fails is uniform generic processing. We structure work queues and expertise by specialty while preserving the shared-services economics that make groups efficient.',
      },
      {
        question: 'Our consolidated numbers look fine — how do we know no specialty is struggling?',
        answer:
          'You do not, until reporting resolves per specialty against that specialty’s benchmarks — cardiology’s healthy denial rate would be alarming in primary care and vice versa. Per-specialty dashboards are the multispecialty group’s essential instrument, and building them is typically our first deliverable.',
      },
    ],
  },
  {
    slug: 'telemedicine-billing',
    title: 'Telemedicine',
    specialtyName: 'Telemedicine',
    seoTitle: 'Telemedicine Billing Services in Texas',
    metaDescription:
      'Telehealth billing: POS and modifier rules by payer, Texas telemedicine parity, audio-only rules, and multi-state licensure billing considerations.',
    h1: 'Telemedicine Billing Services',
    summary:
      'Billing for virtual care — per-payer telehealth coding matrices, Texas parity law context, audio-only boundaries, and the licensure/enrollment questions scale creates.',
    intro: [
      'Telemedicine billing is rule-tracking as a discipline: place-of-service and modifier requirements that still differ by payer, coverage boundaries between video and audio-only encounters, Texas parity law shaping commercial coverage, Medicare policies that have evolved repeatedly since 2020, and — for virtual-first organizations — licensure and payer enrollment questions multiplying across states and plans.',
      'Our telemedicine billing maintains the matrix: per-payer coding requirements applied automatically at claim creation, documentation standards (consent, modality, locations) built into templates, and coverage-change monitoring so policy shifts update the workflow before they generate denials. Telehealth policy remains genuinely fluid — verification against current payer rules is a standing operation, not a setup step.',
    ],
    billingComplexity: [
      'The same virtual visit codes differently across payers — POS codes, modifier combinations, and eligible service lists genuinely diverge — and audio-only encounters occupy the least-stable policy territory. Texas parity legislation supports commercial telemedicine coverage, but parity of coverage is not parity of every operational rule. Virtual-scale organizations hit structural questions: which state’s licensure a visit requires, whether the rendering provider is enrolled with the member’s specific plan, and how patient location at time of service drives all of it.',
    ],
    serviceCategories: [
      'Synchronous video visits across specialties',
      'Audio-only encounters where covered',
      'Remote patient monitoring programs',
      'Asynchronous e-visits and virtual check-ins',
      'Hybrid practice telehealth integration',
    ],
    documentationRisks: [
      'Modality, consent, and participant locations absent from notes',
      'Audio-only encounters documented indistinguishably from video',
      'Patient state-at-time-of-service untracked for licensure mapping',
    ],
    denialCauses: [
      'POS/modifier construction mismatches by payer',
      'Audio-only claims outside payer coverage',
      'Out-of-state encounters with licensure/enrollment gaps',
      'Telehealth-ineligible service codes billed virtually',
    ],
    codingConsiderations: [
      'Per-payer telehealth matrices are operational necessities — a single sitewide telehealth coding rule guarantees systematic errors somewhere',
      'RPM program codes carry data-day and time thresholds requiring systematic tracking',
    ],
    payerChallenges: [
      'Policy volatility as post-pandemic rules continue settling',
      'Plan-level variation inside the same payer brand',
    ],
    kpis: [
      'Telehealth denial rate by payer',
      'Coding matrix currency (days since last verification per payer)',
      'RPM billing threshold compliance',
      'Virtual visit collection rate versus in-person',
    ],
    relatedServices: ['medical-billing', 'credentialing', 'insurance-eligibility-verification', 'denial-management'],
    relatedSpecialties: ['psychiatry-medical-billing', 'mental-health-billing', 'primary-care-medical-billing'],
    relatedLocations: ['austin-medical-billing', 'dallas-medical-billing', 'houston-medical-billing'],
    relatedGuides: ['insurance-eligibility-verification', 'denial-rate', 'clean-claim-rate'],
    faqs: [
      {
        question: 'Are telehealth visits still covered like office visits in Texas?',
        answer:
          'Texas parity law requires commercial coverage of covered services delivered via telemedicine, and Medicare/Medicaid maintain their own telehealth policies — but coverage parity does not standardize coding, and payer-specific POS/modifier rules still decide whether claims pay. Policies also continue to evolve; we verify per payer on an ongoing basis rather than assuming last year’s rules.',
      },
      {
        question: 'A patient took their video visit from another state — can we bill it?',
        answer:
          'That is a licensure question before a billing question: the patient’s location at time of service generally determines which state’s practice rules apply, and payers may deny or later challenge encounters outside licensed states. Practices with mobile patient bases need a location-capture step and a policy for out-of-state encounters — legal counsel should shape it; billing then implements it.',
      },
    ],
  },
  {
    slug: 'sleep-medicine-billing',
    title: 'Sleep Medicine',
    specialtyName: 'Sleep Medicine',
    seoTitle: 'Sleep Medicine Billing Services in Texas',
    metaDescription:
      'Sleep medicine billing: home sleep tests versus in-lab studies, CPAP compliance rules, DME interactions, and payer steering policies.',
    h1: 'Sleep Medicine Billing Services',
    summary:
      'Billing for sleep practices — study-type steering by payers, compliance-gated therapy coverage, and the medical/DME boundary running through the middle of the specialty.',
    intro: [
      'Sleep medicine billing is shaped by two payer policies: steering (home sleep apnea testing required before in-lab polysomnography unless criteria justify the lab) and compliance-gating (continued CPAP coverage conditioned on documented usage data during defined trial windows). Around them sit the studies themselves, titrations, split-night rules, and a DME boundary that determines which entity bills therapy equipment and supplies.',
      'Our sleep billing runs the policy-aware pipeline: study authorization with criteria documentation for in-lab requests, compliance-window tracking that keeps therapy coverage alive, clean professional/technical study billing per facility arrangement, and DME interactions kept contractually and regulatorily straight.',
    ],
    billingComplexity: [
      'In-lab studies performed where payer policy demanded home testing deny at facility-study prices, making study-type authorization the pipeline’s controlling step. CPAP compliance windows are unforgiving: usage data must demonstrate adherence within trial periods, with clinical follow-up documented, or coverage for device and supplies terminates — a coordination problem across practice, DME supplier, and patient that billing must referee. Practices dispensing DME themselves take on supplier-standard compliance in addition.',
    ],
    serviceCategories: [
      'Home sleep apnea testing programs',
      'In-lab polysomnography and titration studies',
      'Split-night study billing',
      'CPAP management and compliance follow-up',
      'Sleep physician E/M and MSLT/MWT testing',
    ],
    documentationRisks: [
      'In-lab justification thin against home-test-first policies',
      'Compliance-visit documentation missing within required windows',
      'Split-night criteria documentation incomplete',
    ],
    denialCauses: [
      'Study-type steering denials',
      'Compliance-window failures terminating therapy coverage',
      'Professional/technical construction errors on studies',
      'Repeat-study frequency edits',
    ],
    codingConsiderations: [
      'Study code selection by type, age rules, and attended/unattended status must match what was performed and scored',
      'Compliance-period E/M requirements are coverage conditions for therapy continuation, not optional follow-ups',
    ],
    payerChallenges: [
      'Home-test steering with criteria-based lab exceptions',
      'DME benefit administration fragmenting the therapy pathway',
    ],
    kpis: [
      'Study authorization approval rate by type',
      'Compliance-window success rate on new CPAP starts',
      'Study claim first-pass rate',
      'Pipeline conversion: referral to study to therapy',
    ],
    relatedServices: ['prior-authorization-support', 'medical-billing', 'benefits-verification', 'denial-management'],
    relatedSpecialties: ['pulmonology-medical-billing', 'neurology-medical-billing', 'durable-medical-equipment-billing'],
    relatedLocations: ['dallas-medical-billing', 'houston-medical-billing', 'plano-medical-billing'],
    relatedGuides: ['prior-authorization', 'insurance-eligibility-verification', 'medical-necessity-denials'],
    faqs: [
      {
        question: 'When will payers approve in-lab studies over home tests?',
        answer:
          'When documented criteria justify the lab: significant comorbid cardiopulmonary or neuromuscular disease, prior inadequate home studies, suspicion of non-OSA sleep disorders needing full montage, or titration needs. The authorization request must present those criteria explicitly against the payer’s policy — generic requests get steered home. We build requests to the policy text.',
      },
      {
        question: 'Patients keep losing CPAP coverage in the first months — whose problem is that?',
        answer:
          'Operationally, everyone’s — which means nobody’s unless a workflow owns it. Usage data monitoring, outreach to struggling patients, and the required clinical follow-up visit all must happen inside the trial window. We track every new start against its window and drive the checkpoints, because a failed window costs the patient therapy and the pipeline its downstream revenue.',
      },
    ],
  },
  {
    slug: 'wound-care-billing',
    title: 'Wound Care',
    specialtyName: 'Wound Care',
    seoTitle: 'Wound Care Billing Services in Texas',
    metaDescription:
      'Wound care billing: debridement coding by depth and area, CTP/skin substitute rules, measurement documentation, and site-of-service billing.',
    h1: 'Wound Care Billing Services',
    summary:
      'Billing for wound care programs — measurement-driven debridement coding, skin-substitute product billing under tightening policies, and serial-encounter documentation discipline.',
    intro: [
      'Wound care billing is measurement arithmetic under audit pressure: debridement codes select by deepest tissue removed and aggregate area, with add-on units from documented square centimeters; cellular and tissue-based products (skin substitutes) bill product and application under coverage policies that have tightened dramatically amid utilization scrutiny; and serial encounters demand wound-by-wound measurement trails that reviewers reconstruct.',
      'Our wound care billing enforces the documentation-to-claim chain: measurements, depths, and tissue types captured per wound per visit driving code and unit selection, product units reconciled to invoices and wastage rules, coverage criteria (failed conservative care, application limits) verified before CTP use, and site-of-service rules applied correctly across office, HOPD, and facility settings.',
    ],
    billingComplexity: [
      'Skin-substitute billing is the specialty’s high-voltage line: products price high, application-count limits and product coverage lists change, and federal scrutiny of utilization patterns has made documentation completeness existential — conservative-care history, measurable healing trajectory, and product selection rationale per application. Debridement coding errors (selecting by wound depth rather than tissue removed, area math mistakes) are endemic and auditable from the chart alone.',
    ],
    serviceCategories: [
      'Serial debridement programs by depth and area',
      'Cellular and tissue-based product applications',
      'Negative pressure wound therapy management',
      'Diabetic ulcer and vascular wound programs',
      'Hyperbaric oxygen therapy where operated',
    ],
    documentationRisks: [
      'Wound measurements missing or internally inconsistent across visits',
      'Tissue type removed not documented per debridement',
      'Conservative-care trials undocumented before CTP starts',
    ],
    denialCauses: [
      'CTP coverage and application-limit denials',
      'Debridement depth/area construction edits',
      'Frequency scrutiny on serial debridements',
      'Site-of-service payment disputes',
    ],
    codingConsiderations: [
      'Debridement selects by deepest tissue removed with area add-ons — the note must state both explicitly',
      'CTP product and application billing rules differ by setting and by payer product lists that change actively',
    ],
    payerChallenges: [
      'Rapidly evolving skin-substitute coverage policies under utilization scrutiny',
      'MA plan prior authorization spreading across wound services',
    ],
    kpis: [
      'Debridement claim accuracy against documentation',
      'CTP margin integrity per application',
      'Healing-trajectory documentation completeness',
      'Denial rate by service line',
    ],
    relatedServices: ['medical-coding', 'prior-authorization-support', 'billing-audit', 'denial-management'],
    relatedSpecialties: ['podiatry-medical-billing', 'infectious-disease-medical-billing', 'vascular-surgery-medical-billing'],
    relatedLocations: ['houston-medical-billing', 'san-antonio-medical-billing', 'beaumont-medical-billing'],
    relatedGuides: ['medical-necessity-denials', 'prior-authorization', 'denial-management'],
    faqs: [
      {
        question: 'Skin substitute rules seem to change constantly — how do you keep claims safe?',
        answer:
          'With a policy-current product table per payer (covered products, application limits, documentation requirements) checked before each application, plus the documentation chain — conservative care, measurements, rationale — captured contemporaneously. This product category is under active national scrutiny; billing it on last year’s rules is how programs end up in audits. Policy verification is a standing task in our wound workflows.',
      },
      {
        question: 'What do auditors look for in debridement claims?',
        answer:
          'Internal consistency: tissue type removed supporting the code selected, documented measurements supporting area units, wound trajectories plausible across serial visits, and frequency patterns justified by clinical response. Charts that measure carefully audit well; claims coded beyond their documentation do not. We audit samples proactively so surprises happen privately.',
      },
    ],
  },
  {
    slug: 'addiction-treatment-billing',
    title: 'Addiction Treatment',
    specialtyName: 'Addiction & Substance Use Treatment',
    seoTitle: 'Addiction Treatment Billing Services in Texas',
    metaDescription:
      'Substance use treatment billing: ASAM level-of-care authorizations, MAT programs, UDT compliance, and OON strategies for treatment centers.',
    h1: 'Addiction and Substance Use Treatment Billing',
    summary:
      'Billing for SUD treatment programs — level-of-care authorization cycles built on ASAM criteria, MAT billing structures, drug-testing compliance, and 42 CFR Part 2 constraints.',
    intro: [
      'Substance use treatment billing combines behavioral health’s program mechanics with its own layers: level-of-care determinations argued through ASAM criteria at admission and every transition, medication-assisted treatment billed across office-based and program models, urine drug testing as both clinical tool and compliance minefield, and confidentiality rules (42 CFR Part 2) that constrain how billing itself may disclose information.',
      'Our addiction treatment billing runs the full apparatus: utilization review coordination with ASAM-framed documentation, authorization continuity across detox-residential-PHP-IOP transitions, MAT claims constructed per program model and payer, UDT billing kept to defensible frequency and panel patterns, and Part 2-aware processes in every disclosure the billing function makes.',
    ],
    billingComplexity: [
      'Level-of-care denials are the revenue battleground — payers apply their interpretations of medical-necessity criteria to every admission and continued stay, and winning requires documentation organized around the criteria dimensions payers cite. UDT billing carries enforcement history industry-wide: frequency, panel scope, and definitive-testing patterns must be clinically individualized and documented, because payers analyze testing patterns across providers. Out-of-network prevalence in Texas SUD treatment makes single-case agreements and OON benefit mechanics a standing capability rather than an exception.',
    ],
    serviceCategories: [
      'Detoxification and withdrawal management billing',
      'Residential treatment program claims',
      'PHP and IOP substance use programs',
      'Medication-assisted treatment (MAT) services',
      'Drug testing programs under compliance discipline',
    ],
    documentationRisks: [
      'ASAM-dimension documentation thin at admissions and transitions',
      'UDT orders lacking individualized rationale',
      'Part 2 consent architecture gaps in billing disclosures',
    ],
    denialCauses: [
      'Level-of-care and continued-stay denials',
      'Authorization lapses at program transitions',
      'UDT frequency and panel denials',
      'OON claims stalled without negotiation workflows',
    ],
    codingConsiderations: [
      'Program billing constructions vary by payer as in behavioral health, with SUD-specific code families layered in',
      'MAT billing differs by medication and setting — office-based buprenorphine, OTP methadone bundles, and injectable naltrexone each construct differently',
    ],
    payerChallenges: [
      'Restrictive medical-necessity interpretations at residential levels',
      'Network adequacy gaps keeping much treatment out-of-network',
    ],
    kpis: [
      'Authorization approval rates by level of care',
      'Average authorized days per residential episode',
      'UDT denial rate and pattern-audit posture',
      'OON recovery rate versus billed',
    ],
    relatedServices: ['prior-authorization-support', 'claims-appeals', 'denial-management', 'insurance-eligibility-verification'],
    relatedSpecialties: ['behavioral-health-billing', 'psychiatry-medical-billing', 'laboratory-billing'],
    relatedLocations: ['austin-medical-billing', 'houston-medical-billing', 'dallas-medical-billing'],
    relatedGuides: ['prior-authorization', 'medical-necessity-denials', 'denial-management'],
    faqs: [
      {
        question: 'Payers keep cutting residential stays short — how do we fight continued-stay denials?',
        answer:
          'With criteria-organized documentation and disciplined appeals: continued-stay reviews argued dimension by dimension against the criteria the payer claims to apply, peer-to-peer reviews prepared rather than improvised, and expedited appeals used where available. Programs that document to ASAM dimensions from admission win materially more review days than programs that narrate generally.',
      },
      {
        question: 'How do we keep our drug-testing program off payer radar?',
        answer:
          'By making it defensible rather than invisible: individualized testing frequency tied to clinical phase and risk, panels justified per patient, definitive testing reserved for documented need, and billing patterns you would be comfortable explaining — because payers do pattern analysis across their networks. We audit UDT billing posture as a standing control in SUD engagements.',
      },
    ],
  },
  {
    slug: 'dental-medical-billing',
    title: 'Dental Medical Billing',
    specialtyName: 'Dental-to-Medical Billing',
    seoTitle: 'Dental to Medical Billing Services in Texas',
    metaDescription:
      'Dental-medical cross-billing: medically necessary dental procedures, oral surgery, TMD, and sleep appliances billed to medical plans correctly.',
    h1: 'Dental Medical Billing Services',
    summary:
      'Cross-domain billing where dentistry meets medical insurance — oral surgery, TMD treatment, sleep appliances, and trauma care billed to medical plans with medical documentation.',
    intro: [
      'A defined set of dental-adjacent care belongs on medical insurance: oral surgery beyond routine extractions, facial trauma, pathology biopsies, TMD evaluation and treatment, oral appliances for diagnosed sleep apnea, and dental clearances medically necessary before transplants or radiation. Billing it requires translation — CDT-coded dental thinking rendered into medical coding, documentation, and claim formats medical payers adjudicate.',
      'Our dental-medical billing does the translation properly: medical necessity established in medical terms, procedures coded in the medical code sets with appropriate cross-referencing, medical claim formats and attachments handled, and the coordination-of-benefits questions between dental and medical plans answered per case.',
    ],
    billingComplexity: [
      'The structural challenge is domain translation: dental offices document for dental adjudication, but medical payers require medical diagnosis coding, medical-necessity narratives, and often preauthorization with clinical evidence — sleep appliance claims, for example, need the sleep study, the medical diagnosis, and frequently DME-style supplier compliance. COB between dental and medical plans on overlapping procedures follows plan-language details most offices have never read.',
    ],
    serviceCategories: [
      'Oral and maxillofacial surgery on medical benefits',
      'Oral appliance therapy for sleep apnea',
      'TMD diagnosis and treatment billing',
      'Facial trauma and pathology services',
      'Medically necessary dental clearance programs',
    ],
    documentationRisks: [
      'Dental chart notes lacking medical-necessity framing',
      'Sleep appliance files missing study results and physician diagnosis chains',
      'Trauma documentation not supporting medical coding specificity',
    ],
    denialCauses: [
      'Claims denied as dental services on medical plans',
      'Missing preauthorization on appliance and surgical claims',
      'COB confusion between dental and medical coverage',
      'Coding translation errors from CDT-based records',
    ],
    codingConsiderations: [
      'Medical claims require ICD-10 diagnosis support and CPT-coded procedures — direct CDT submission to medical plans fails structurally',
      'Sleep appliance billing typically follows DME benefit rules including supplier standards where applicable',
    ],
    payerChallenges: [
      'Medical payers reflexively deflecting oral-region claims to dental coverage',
      'Plan-by-plan variation in dental-medical boundary language',
    ],
    kpis: [
      'Medical claim acceptance rate on cross-billed services',
      'Appliance program authorization approval rate',
      'Average revenue per medical-billed case versus dental-only',
      'COB resolution time on dual-coverage cases',
    ],
    relatedServices: ['prior-authorization-support', 'benefits-verification', 'medical-coding', 'claims-appeals'],
    relatedSpecialties: ['sleep-medicine-billing', 'otolaryngology-medical-billing', 'plastic-surgery-medical-billing'],
    relatedLocations: ['dallas-medical-billing', 'houston-medical-billing', 'fort-worth-medical-billing'],
    relatedGuides: ['coordination-of-benefits', 'prior-authorization', 'medical-necessity-denials'],
    faqs: [
      {
        question: 'Which dental procedures can actually bill to medical insurance?',
        answer:
          'The medically necessary set: surgical extractions with medical indications, pathology and biopsies, facial trauma repair, TMD treatment, sleep apnea appliances with physician diagnosis, and infection or clearance care tied to medical conditions. Routine restorative and preventive dentistry stays dental. The dividing question is whether a medical diagnosis drives the treatment — we screen candidate cases against that standard honestly.',
      },
      {
        question: 'Our medical claims from the dental office keep getting rejected — why?',
        answer:
          'Usually format and translation failures: CDT codes on medical claims, missing ICD-10 diagnoses, no medical-necessity documentation, or absent preauthorization. Medical payers adjudicate medical claims — the submission must be built as one. That construction is precisely the service we provide.',
      },
    ],
  },
  {
    slug: 'durable-medical-equipment-billing',
    title: 'Durable Medical Equipment',
    specialtyName: 'Durable Medical Equipment',
    seoTitle: 'DME Billing Services in Texas',
    metaDescription:
      'DME billing: supplier standards, documentation packages, rental cycles, same-or-similar checks, and audit-ready claims for equipment suppliers.',
    h1: 'Durable Medical Equipment Billing Services',
    summary:
      'Billing for DME suppliers — documentation-package claims, rental-cycle mechanics, same-or-similar screening, and the audit posture the sector’s scrutiny demands.',
    intro: [
      'DME billing is documentation logistics: every claim category carries a required package — qualifying physician orders (with face-to-face requirements for specified items), medical-record support, proof of delivery, and for many items prior authorization — assembled from parties the supplier must chase. Rental items add cycle mechanics: capped rental months, modifier sequences, and continued-need documentation across the rental life.',
      'Our DME billing runs the packages and the cycles: intake checklists per product category, same-or-similar checks before dispensing (because equipment already on file denies automatically), rental billing calendars with continued-need refresh, and audit-ready file discipline — the sector is review-heavy, and claims should be built to survive the request before it comes.',
    ],
    billingComplexity: [
      'Documentation failure is the sector’s denial engine: orders lacking required elements, face-to-face encounters missing or untimely for items requiring them, and delivery proof gaps turn otherwise legitimate claims unpayable — and post-payment reviews claw back paid claims on the same defects years later. Same-or-similar denials (equipment history conflicts) are checkable before dispensing but only if the check happens. Competitive bidding, fee schedule mechanics, and modifier sequences (rental, purchase, maintenance) supply the pricing complexity on top.',
    ],
    serviceCategories: [
      'Mobility equipment with prior authorization workflows',
      'Respiratory equipment including oxygen and PAP',
      'Diabetic supplies programs',
      'Orthotic and prosthetic device billing',
      'Rental fleet billing across capped and continuous categories',
    ],
    documentationRisks: [
      'Order elements incomplete per product category rules',
      'Face-to-face timing windows missed for specified items',
      'Proof-of-delivery files inconsistent for audit response',
    ],
    denialCauses: [
      'Documentation package defects by category',
      'Same-or-similar equipment history conflicts',
      'Prior authorization gaps on required items',
      'Continued-need and continued-use documentation lapses on rentals',
    ],
    codingConsiderations: [
      'HCPCS selection with required modifiers (rental/purchase, right/left, replacement) follows category-specific sequences',
      'Capped rental categories convert per defined month counts — billing calendars must track each unit’s cycle position',
    ],
    payerChallenges: [
      'High audit and review intensity across the sector',
      'Medicare Advantage plans layering their own authorization and supplier rules',
    ],
    kpis: [
      'Claim acceptance rate by product category',
      'Documentation package completeness at intake',
      'Same-or-similar denial rate (target: near zero)',
      'Audit outcome and recoupment exposure tracking',
    ],
    relatedServices: ['prior-authorization-support', 'billing-audit', 'denial-management', 'accounts-receivable-follow-up'],
    relatedSpecialties: ['sleep-medicine-billing', 'podiatry-medical-billing', 'home-health-billing'],
    relatedLocations: ['houston-medical-billing', 'san-antonio-medical-billing', 'lubbock-medical-billing'],
    relatedGuides: ['prior-authorization', 'timely-filing-denials', 'denial-management'],
    faqs: [
      {
        question: 'What kills most DME claims?',
        answer:
          'Paperwork sequence failures, not medical ones: orders missing required elements, face-to-face encounters outside timing windows, deliveries without compliant proof, authorizations not obtained before dispensing. The remedy is category-specific intake checklists enforced before equipment leaves — after dispensing, leverage to fix the file mostly evaporates.',
      },
      {
        question: 'How do we avoid same-or-similar denials?',
        answer:
          'Check equipment history through payer systems before dispensing, every time — if same-or-similar equipment is on file within its useful lifetime, the claim denies regardless of current medical need, and the patient conversation should happen pre-delivery. It is a two-minute check that prevents the sector’s most avoidable write-off class.',
      },
    ],
  },
  {
    slug: 'ambulance-billing',
    title: 'Ambulance Services',
    specialtyName: 'Ambulance & EMS',
    seoTitle: 'Ambulance Billing Services in Texas',
    metaDescription:
      'Ambulance billing: transport levels, medical necessity, mileage, signature requirements, and facility-transport rules for EMS agencies.',
    h1: 'Ambulance Billing Services',
    summary:
      'Billing for EMS agencies — level-of-service determinations from run documentation, medical-necessity rules per transport, mileage and origin-destination mechanics, and signature logistics.',
    intro: [
      'Ambulance billing converts run reports into leveled claims: emergency and non-emergency transports billed at BLS/ALS tiers the documentation must support, medical necessity established per transport (with stricter regimes for repetitive non-emergency transports), mileage billed by loaded miles with origin-destination coding, and patient signature requirements that field conditions make genuinely difficult.',
      'Our ambulance billing builds claims from the PCR up: level determinations audited against documented interventions and assessments, necessity documentation standards enforced per transport type, repetitive-transport authorization workflows (PCS forms, prior authorization where required) run on schedule, and facility-responsibility rules applied so claims go to the right payer — including SNF consolidated billing interactions.',
    ],
    billingComplexity: [
      'Level-of-service inflation is the audit target — ALS billed where documentation supports BLS — while under-leveling quietly forfeits legitimate revenue; the PCR must evidence the assessment and interventions behind the level billed. Non-emergency transports carry the necessity burden: bed-confinement or condition documentation, physician certification statements for repetitive patients, and prior authorization regimes for defined transport patterns. Origin-destination combinations determine coverage (hospital-to-hospital, SNF interactions, dialysis rounds) under rules that assign some transports to facilities rather than payers.',
    ],
    serviceCategories: [
      'Emergency response transports across service levels',
      'Non-emergency and repetitive transports (dialysis, wound care)',
      'Interfacility transfers including specialty care transport',
      'Treat-no-transport encounters where billable',
      'Standby and event services (contract billing)',
    ],
    documentationRisks: [
      'PCR narratives not supporting the level billed',
      'Necessity documentation generic across repetitive transports',
      'Signature capture inconsistent under field conditions',
    ],
    denialCauses: [
      'Level-of-service downcodes against documentation',
      'Non-emergency necessity denials',
      'Origin-destination and facility-responsibility conflicts',
      'Signature requirement failures',
    ],
    codingConsiderations: [
      'Condition codes and modifiers encode origin-destination pairs — errors misroute financial responsibility entirely',
      'Repetitive-patient prior authorization programs apply in defined states/regions and transport patterns; status must be tracked per patient',
    ],
    payerChallenges: [
      'Medicare necessity frameworks dominating transport adjudication',
      'MA plans adding authorization layers to non-emergency volume',
    ],
    kpis: [
      'Level-billed versus level-documented audit match rate',
      'Non-emergency denial rate',
      'Signature compliance rate',
      'Collection rate by transport class',
    ],
    relatedServices: ['medical-billing', 'billing-audit', 'denial-management', 'accounts-receivable-follow-up'],
    relatedSpecialties: ['emergency-medicine-billing', 'skilled-nursing-facility-billing', 'nephrology-medical-billing'],
    relatedLocations: ['el-paso-medical-billing', 'corpus-christi-medical-billing', 'laredo-medical-billing'],
    relatedGuides: ['medical-necessity-denials', 'denial-management', 'timely-filing-denials'],
    faqs: [
      {
        question: 'Our dialysis transport claims are getting denied in batches — what changed?',
        answer:
          'Repetitive non-emergency transports face layered requirements: current physician certification statements, transport-level necessity documentation per trip, and in defined programs prior authorization for the pattern itself. Batch denials usually mean a certification lapsed or an authorization cycle was missed. We calendar these per repetitive patient so the paperwork renews ahead of the transports.',
      },
      {
        question: 'Why did a payer say the hospital owes us instead of them?',
        answer:
          'Origin-destination rules assign financial responsibility for certain transports to facilities — SNF consolidated billing covers defined transports during covered stays, and hospital-to-hospital transfers for the sending facility’s convenience belong to the facility. The claim was likely coded to a combination the payer reads as facility-responsible; the remedy is correct coding where the payer erred, or invoicing the facility where the rule genuinely applies.',
      },
    ],
  },
  {
    slug: 'rural-health-clinic-billing',
    title: 'Rural Health Clinics',
    specialtyName: 'Rural Health Clinic',
    seoTitle: 'Rural Health Clinic Billing Services in Texas',
    metaDescription:
      'RHC billing: all-inclusive rate claims, qualifying visits, carve-outs, and split billing between RHC and non-RHC services for Texas rural clinics.',
    h1: 'Rural Health Clinic Billing Services',
    summary:
      'Billing for RHCs — the all-inclusive rate system with its qualifying-visit logic, carved-out services, split-billing mechanics, and Texas Medicaid encounter parallels.',
    intro: [
      'Rural Health Clinic billing replaces fee-for-service logic with encounter logic: qualifying visits bill at the all-inclusive rate (AIR) on institutional claims, non-qualifying services fold into the encounter or bill separately under carve-out rules, and the same clinic often runs parallel non-RHC billing for services outside the benefit — making claim routing the daily discipline. Texas Medicaid runs its own encounter-rate mechanics alongside.',
      'Our RHC billing operates the dual machine: qualifying-visit determinations applied correctly, AIR claims constructed on the right forms with the right revenue codes, carved-out services (defined labs and other exceptions) billed their separate way, and the routing between RHC and non-RHC billing streams kept clean per service per payer.',
    ],
    billingComplexity: [
      'The encounter system inverts normal optimization: multiple services one day generally compress into one billable visit, making visit-definition rules (medically necessary face-to-face with qualifying providers; mental health as its own visit category; defined same-day exceptions) the revenue logic. Cost reporting connects operations to future rates, so charge capture completeness matters beyond current claims. Provider-based versus independent status, and Medicare Advantage plans’ inconsistent RHC handling, add structural wrinkles Texas rural operators know well.',
    ],
    serviceCategories: [
      'Qualifying medical visits at the all-inclusive rate',
      'Mental health visits as a distinct encounter category',
      'Carved-out laboratory and excepted services',
      'Non-RHC services under parallel billing',
      'Care management programs available to RHCs',
    ],
    documentationRisks: [
      'Visit qualification ambiguous in documentation (provider type, necessity)',
      'Same-day multiple-service records not supporting exception billing',
      'Charge capture gaps distorting cost reports and future rates',
    ],
    denialCauses: [
      'Non-qualifying encounters billed as visits',
      'Claim-form and revenue-code construction errors',
      'Carve-out services billed inside the AIR or vice versa',
      'MA plan processing inconsistencies on RHC claims',
    ],
    codingConsiderations: [
      'Institutional claim construction with correct revenue codes and qualifying-visit lines is the core mechanical skill',
      'Care-management programs (CCM and related) bill outside the AIR under RHC-specific rules worth capturing',
    ],
    payerChallenges: [
      'MA plans handling RHC claims with non-standard logic requiring plan-by-plan attention',
      'Texas Medicaid encounter mechanics differing from Medicare’s in detail',
    ],
    kpis: [
      'Qualifying-visit capture rate against schedule',
      'AIR claim acceptance rate',
      'Carve-out routing accuracy',
      'Cost-report data integrity from billing feeds',
    ],
    relatedServices: ['medical-billing', 'billing-audit', 'practice-financial-reporting', 'credentialing'],
    relatedSpecialties: ['fqhc-billing', 'family-medicine-medical-billing', 'primary-care-medical-billing'],
    relatedLocations: ['lubbock-medical-billing', 'tyler-medical-billing', 'abilene-medical-billing'],
    relatedGuides: ['ub-04-claim-form', 'medical-billing-process', 'net-collection-rate'],
    faqs: [
      {
        question: 'Two services on the same day — one visit or two?',
        answer:
          'Usually one: the encounter system compresses same-day services into a single billable visit, with defined exceptions (a medical visit plus a qualifying mental health visit, or a patient returning with a distinct new illness or injury). Documentation must clearly support any exception claimed. We apply the rules per encounter and keep the exception billing defensible.',
      },
      {
        question: 'Do Medicare Advantage plans pay our RHC correctly?',
        answer:
          'Inconsistently enough to deserve auditing: MA plans vary in how they process RHC claims and pay relative to the AIR framework, and underpayments hide in the variation. We track MA payment behavior against expected RHC treatment plan by plan — data that supports both recovery and contracting conversations.',
      },
    ],
  },
  {
    slug: 'fqhc-billing',
    title: 'FQHCs',
    specialtyName: 'Federally Qualified Health Center',
    seoTitle: 'FQHC Billing Services in Texas',
    metaDescription:
      'FQHC billing: PPS rate claims, Texas Medicaid encounter billing, sliding fee integration, wrap payments, and multi-program compliance.',
    h1: 'FQHC Billing Services',
    summary:
      'Billing for FQHCs — PPS encounter claims, Medicaid wrap mechanics, sliding-fee integration, and the multi-program compliance stack community health centers carry.',
    intro: [
      'FQHC billing is encounter billing under the Prospective Payment System with community-health obligations layered through: Medicare PPS rates with defined qualifying visits and payment codes, Texas Medicaid encounter rates with managed-care wrap payment reconciliation, sliding-fee discount administration that must integrate with billing without corrupting payer claims, and 340B program interactions touching pharmacy revenue.',
      'Our FQHC billing manages the stack: qualifying encounters identified and constructed correctly per program, MCO claims and wrap reconciliation tracked so the supplemental payments actually arrive, sliding-fee schedules applied to the right balances with clean documentation, and reporting built for the UDS and grant-compliance realities health centers live in.',
    ],
    billingComplexity: [
      'The wrap is the money nobody sees leak: Texas Medicaid managed-care encounters pay MCO rates with state supplemental (wrap) payments reconciling toward encounter entitlements — reconciliation failures across thousands of encounters silently forfeit the difference. PPS qualifying-visit rules, same-day categories (medical, dental, behavioral as distinct encounter types where recognized), and payment-code construction demand precision, while sliding-fee administration must discount patient responsibility without misrepresenting charges to payers.',
    ],
    serviceCategories: [
      'Medical encounters under Medicare PPS and Medicaid rates',
      'Dental program encounters',
      'Behavioral health encounters as distinct visit categories',
      'Enabling and care-management services where billable',
      '340B-connected pharmacy revenue flows',
    ],
    documentationRisks: [
      'Encounter qualification and provider-type documentation gaps',
      'Sliding-fee eligibility files incomplete against policy',
      'Cross-program (medical/dental/BH) same-day records not supporting multiple encounters',
    ],
    denialCauses: [
      'Non-qualifying encounters billed at encounter rates',
      'Payment-code construction errors on PPS claims',
      'MCO claim defects breaking wrap reconciliation chains',
      'Retroactive eligibility churn across the safety-net population',
    ],
    codingConsiderations: [
      'FQHC payment codes wrap underlying services under construction rules distinct from both FFS and RHC billing',
      'Same-day multiple-encounter billing across program types follows specific recognition rules per payer',
    ],
    payerChallenges: [
      'Wrap payment reconciliation across multiple Texas MCOs',
      'Grant, UDS, and audit reporting expectations attached to billing data',
    ],
    kpis: [
      'Encounter capture rate by program type',
      'Wrap reconciliation completeness and aging',
      'Sliding-fee application accuracy',
      'Denial rate by MCO',
    ],
    relatedServices: ['medical-billing', 'practice-financial-reporting', 'billing-audit', 'accounts-receivable-follow-up'],
    relatedSpecialties: ['rural-health-clinic-billing', 'primary-care-medical-billing', 'behavioral-health-billing'],
    relatedLocations: ['el-paso-medical-billing', 'brownsville-medical-billing', 'laredo-medical-billing'],
    relatedGuides: ['ub-04-claim-form', 'net-collection-rate', 'accounts-receivable-aging'],
    faqs: [
      {
        question: 'How do we know our Medicaid wrap payments are complete?',
        answer:
          'Only through encounter-level reconciliation: every MCO-paid encounter matched to its expected wrap entitlement, aged, and chased — because wrap shortfalls do not announce themselves. Centers that reconcile find money; centers that trust the process fund the state’s float. We build the reconciliation as a standing monthly control.',
      },
      {
        question: 'Can billing handle our sliding-fee patients without compliance risk?',
        answer:
          'Yes, with clean architecture: full charges recorded uniformly, discounts applied per your board-approved schedule against documented eligibility, and payer claims never misstating charge or collection reality. The discipline protects both the patient promise and the audit file — sliding fee is a documentation system, and we run it as one.',
      },
    ],
  },
];
