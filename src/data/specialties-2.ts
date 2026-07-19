/**
 * Specialty entries, part 2 of 3. Validated in src/data/index.ts.
 */
import type { z } from 'astro/zod';
import type { specialtySchema } from '../lib/content-schemas';

type SpecialtyInput = z.input<typeof specialtySchema>;

export const specialties2: SpecialtyInput[] = [
  {
    slug: 'pulmonology-medical-billing',
    title: 'Pulmonology',
    specialtyName: 'Pulmonology',
    seoTitle: 'Pulmonology Billing Services in Texas',
    metaDescription:
      'Pulmonology billing: PFT lab coding, bronchoscopy claims, sleep study interactions, and chronic respiratory care programs billed correctly.',
    h1: 'Pulmonology Medical Billing Services',
    summary:
      'Billing for pulmonary practices — PFT labs with component coding, bronchoscopy families, chronic disease programs, and the critical-care documentation hospital work demands.',
    intro: [
      'Pulmonology revenue mixes office E/M for chronic respiratory disease, pulmonary function testing with multi-component coding, bronchoscopic procedures with add-on structures, and substantial hospital work — including critical care billing, where time documentation rules are strict and audits are routine.',
      'Our pulmonology billing covers the full footprint: PFT components billed to what was actually performed, bronchoscopy claims constructed from procedure notes, critical-care time capture done defensibly, and chronic care programs (COPD management, home oxygen ordering) run to their documentation rules.',
    ],
    billingComplexity: [
      'PFT billing is component work — spirometry, lung volumes, diffusion capacity, and bronchodilator responsiveness each code separately with bundling relationships, and labs that bill a fixed panel regardless of what was performed create audit exposure. Critical care billing requires documented time and qualifying clinical conditions; it pays substantially better than standard hospital E/M and is scrutinized proportionally. Home oxygen and DME ordering rules put the pulmonologist’s documentation at the center of someone else’s claim, generating queries that consume staff time.',
    ],
    serviceCategories: [
      'Chronic respiratory disease management (COPD, asthma, ILD)',
      'Pulmonary function testing laboratories',
      'Bronchoscopy and advanced diagnostic procedures',
      'Hospital and critical care services',
      'Sleep-disordered breathing evaluation',
    ],
    documentationRisks: [
      'PFT interpretations not documenting each billed component',
      'Critical care time not explicitly documented per date',
      'Oxygen qualification testing documentation incomplete for DME rules',
    ],
    denialCauses: [
      'PFT component bundling and frequency edits',
      'Critical-care documentation reviews and downcodes',
      'Bronchoscopy add-on denials against procedure notes',
      'Medical-necessity denials on repeat imaging and testing',
    ],
    codingConsiderations: [
      'Critical care is time-based with explicit inclusion/exclusion rules for bundled services — the note must state qualifying time',
      'PFT panels should bill from performed-and-interpreted components, not standing lab defaults',
    ],
    payerChallenges: [
      'Frequency limits on repeat PFTs and imaging for chronic disease',
      'MA plan prior authorization spreading into diagnostics',
    ],
    kpis: [
      'PFT component billing accuracy rate',
      'Critical-care claim acceptance rate',
      'Bronchoscopy claim first-pass rate',
      'Hospital charge capture completeness',
    ],
    relatedServices: ['medical-coding', 'charge-entry', 'denial-management', 'billing-audit'],
    relatedSpecialties: ['sleep-medicine-billing', 'internal-medicine-medical-billing', 'cardiology-medical-billing'],
    relatedLocations: ['houston-medical-billing', 'san-antonio-medical-billing', 'dallas-medical-billing'],
    relatedGuides: ['medical-necessity-denials', 'clean-claim-rate', 'denial-management'],
    faqs: [
      {
        question: 'Are we billing our PFT lab correctly?',
        answer:
          'The test is whether claims mirror performed components: a visit where only spirometry was done should not bill the full panel, and complete studies should not leave diffusion capacity unbilled. We audit a sample against interpretations, then set the charge tickets to component-level accuracy.',
      },
      {
        question: 'What makes critical care billing risky?',
        answer:
          'It pays meaningfully more than standard hospital E/M, so payers audit it: documented time must meet thresholds, the patient’s condition must qualify, and bundled services cannot double-bill. Done with disciplined documentation it is entirely defensible revenue — done casually it is a repayment finding waiting to happen.',
      },
    ],
  },
  {
    slug: 'endocrinology-medical-billing',
    title: 'Endocrinology',
    specialtyName: 'Endocrinology',
    seoTitle: 'Endocrinology Billing Services in Texas',
    metaDescription:
      'Endocrinology billing: diabetes technology claims, CGM billing, thyroid procedures, and chronic care programs for endocrine practices.',
    h1: 'Endocrinology Medical Billing Services',
    summary:
      'Billing for endocrine practices — diabetes technology (CGM, pumps) with device-and-training billing, dense chronic E/M, and the education programs diabetes care runs on.',
    intro: [
      'Endocrinology billing centers on chronic disease intensity: complex E/M for diabetes and thyroid disease, continuous glucose monitoring with its device, sensor, and interpretation billing rules, insulin pump training and management, diabetes self-management education programs with certification requirements, and in-office procedures like thyroid biopsy.',
      'Our endocrinology billing captures the technology-era revenue correctly: CGM personal-versus-professional distinctions, interpretation billing at documented frequencies, DSMES program billing under its accreditation rules, and E/M coding that reflects genuinely complex medical decision-making.',
    ],
    billingComplexity: [
      'CGM billing splits by model: professional CGM (practice-owned, episodic) bills device placement and interpretation codes, while personal CGM interpretation bills on its own frequency rules — mixing the two constructions is a common error. Remote monitoring and interpretation services carry minimum data-day and time thresholds. Diabetes education (DSMES) is billable under specific program accreditation and referral rules, hours-limited per year, and widely underused where the administrative structure is missing.',
    ],
    serviceCategories: [
      'Diabetes management with technology integration',
      'Professional and personal CGM services',
      'Insulin pump initiation and management',
      'Thyroid ultrasound and biopsy procedures',
      'Diabetes self-management education programs',
    ],
    documentationRisks: [
      'CGM interpretation notes missing data-period and clinical action',
      'Remote monitoring day-counts below billable thresholds',
      'DSMES referral and hour-tracking documentation gaps',
    ],
    denialCauses: [
      'CGM code construction mismatches (personal versus professional)',
      'Frequency denials on interpretation services',
      'DSMES billing outside accreditation or referral rules',
      'Thyroid biopsy bundling with same-day ultrasound',
    ],
    codingConsiderations: [
      'Device, supply, training, and interpretation components each have distinct codes and payers differ on which the practice may bill versus DME channels',
      'Time- and data-threshold services need systematic tracking — recollection is not documentation',
    ],
    payerChallenges: [
      'DME-versus-medical-benefit routing for diabetes technology by plan',
      'MA prior authorization on CGM and pump starts',
    ],
    kpis: [
      'Technology service revenue per diabetes panel patient',
      'Interpretation billing frequency compliance',
      'DSMES hour utilization against referrals',
      'E/M distribution versus endocrine norms',
    ],
    relatedServices: ['medical-billing', 'prior-authorization-support', 'insurance-eligibility-verification', 'practice-financial-reporting'],
    relatedSpecialties: ['internal-medicine-medical-billing', 'nephrology-medical-billing', 'family-medicine-medical-billing'],
    relatedLocations: ['dallas-medical-billing', 'houston-medical-billing', 'plano-medical-billing'],
    relatedGuides: ['prior-authorization', 'insurance-eligibility-verification', 'net-collection-rate'],
    faqs: [
      {
        question: 'Which CGM services can our practice actually bill?',
        answer:
          'It depends on the model and the payer: professional CGM episodes (practice-owned devices) bill placement and interpretation; personal CGM typically routes devices and sensors through DME or pharmacy benefits while the practice bills interpretation at allowed frequencies. We map the billable set per payer for your panel — and this area changes enough to warrant periodic re-verification.',
      },
      {
        question: 'Is diabetes education worth setting up billing for?',
        answer:
          'For endocrine panel sizes, usually yes — DSMES carries annual hour allowances per patient under accreditation and referral rules, and practices with the program structure bill it routinely while others leave it entirely uncaptured. The billing setup is straightforward once program accreditation exists.',
      },
    ],
  },
  {
    slug: 'rheumatology-medical-billing',
    title: 'Rheumatology',
    specialtyName: 'Rheumatology',
    seoTitle: 'Rheumatology Billing Services in Texas',
    metaDescription:
      'Rheumatology billing: biologic infusion suites, buy-and-bill margins, injection procedures, and authorization renewals for rheumatic disease care.',
    h1: 'Rheumatology Medical Billing Services',
    summary:
      'Billing for rheumatology practices — where the infusion suite is the financial engine and authorization renewals, unit precision, and site-of-care policy define the risk.',
    intro: [
      'Rheumatology practice economics run through the biologic infusion suite: high-cost drugs bought and billed by the practice, administration coding on time documentation, and authorization requirements renewing on each payer’s cycle — with site-of-care and white-bagging policies constantly pressuring the model. Around the suite sit complex E/M, joint injections, ultrasound guidance, and infusion-alternative injectables.',
      'Our rheumatology billing protects the engine: drug units reconciled to inventory, authorization renewals calendared per patient-therapy, administration claims built from start/stop times, and payer policy shifts (biosimilar preferences, site steering) tracked so the practice reacts before revenue does.',
    ],
    billingComplexity: [
      'Every infusion claim couples a drug line and administration lines, each falling separately: units, NDC, and wastage on the drug; hierarchy and time documentation on administration. Payers increasingly mandate specific biosimilars — infusing a non-preferred product pays as a denial at drug prices. Authorization renewals cluster around plan-year boundaries, and one missed renewal strands a treatment cycle the practice already bought the drug for.',
    ],
    serviceCategories: [
      'Biologic and immunotherapy infusion services',
      'Injectable biologic administration and teaching',
      'Joint aspiration and injection procedures with guidance',
      'Complex E/M for systemic rheumatic disease',
      'In-office ultrasound and DXA where present',
    ],
    documentationRisks: [
      'Infusion start/stop times incomplete for time-based codes',
      'Wastage documentation below payer specificity',
      'Preferred-product verification missing before infusion',
    ],
    denialCauses: [
      'Non-preferred biosimilar/product denials',
      'Authorization renewal lapses mid-therapy',
      'Drug unit and NDC edits',
      'Guidance bundling errors on injection procedures',
    ],
    codingConsiderations: [
      'Product-specific codes change as biosimilars launch — charge masters need active maintenance',
      'Ultrasound guidance with injections has bundling rules that vary by procedure and payer',
    ],
    payerChallenges: [
      'Biosimilar preference lists differing by payer and changing mid-year',
      'White-bagging mandates displacing buy-and-bill economics',
    ],
    kpis: [
      'Drug margin integrity per infusion',
      'Authorization renewal on-time rate',
      'Preferred-product compliance rate at infusion',
      'Infusion suite claim first-pass rate',
    ],
    relatedServices: ['prior-authorization-support', 'payment-posting', 'underpayment-identification', 'denial-management'],
    relatedSpecialties: ['hematology-medical-billing', 'oncology-medical-billing', 'internal-medicine-medical-billing'],
    relatedLocations: ['dallas-medical-billing', 'houston-medical-billing', 'austin-medical-billing'],
    relatedGuides: ['prior-authorization', 'payment-posting', 'medical-necessity-denials'],
    faqs: [
      {
        question: 'How do we avoid getting caught by biosimilar preference changes?',
        answer:
          'By verifying the payer’s currently preferred product before every infusion cycle, not per authorization period — preferences change mid-year and mid-therapy. Our workflow checks product preference at scheduling and flags mismatches while there is still time to switch product or obtain a medical-exception authorization.',
      },
      {
        question: 'A payer wants our infusion patients to use white-bagged drugs — what does that mean for us?',
        answer:
          'White-bagging replaces your buy-and-bill drug revenue with a specialty-pharmacy-supplied product you only administer — a significant economic and operational change. Where policies allow exceptions we document them; where they do not, the decision becomes contractual and clinical. We provide the per-payer revenue impact data leadership needs for that conversation.',
      },
    ],
  },
  {
    slug: 'ophthalmology-medical-billing',
    title: 'Ophthalmology',
    specialtyName: 'Ophthalmology',
    seoTitle: 'Ophthalmology Billing Services in Texas',
    metaDescription:
      'Ophthalmology billing: eye codes versus E/M, cataract co-management, retina injections, and the vision-versus-medical coverage split handled cleanly.',
    h1: 'Ophthalmology Medical Billing Services',
    summary:
      'Billing for ophthalmology practices — the eye-code/E/M choice, vision-versus-medical plan routing, surgical co-management, and injection-driven retina economics.',
    intro: [
      'Ophthalmology billing has structural quirks no other specialty carries: a parallel code family (general ophthalmological service “eye codes”) alongside standard E/M with payer-by-payer preferences between them; a routing decision on nearly every encounter between the patient’s vision plan and medical insurance; cataract surgery globals with optometric co-management splits; and retina practices whose revenue is dominated by anti-VEGF injectable drugs.',
      'Our ophthalmology billing manages each quirk deliberately: eye-code-versus-E/M selection by payer and encounter, refraction and vision-plan routing rules that prevent patient disputes, co-management splits billed correctly with the required transfer documentation, and injection drug billing reconciled at retina-practice volume.',
    ],
    billingComplexity: [
      'The vision/medical split drives daily errors: routine exams belong to vision plans, medical eye problems to health insurance — and the encounter’s chief complaint determines routing, not what reimburses better. Cataract co-management requires documented transfer-of-care and correct modifier-based fee splits between surgeon and optometrist across the global. Anti-VEGF drugs price like oncology products: units, wastage, and per-eye authorization tracked injection by injection.',
    ],
    serviceCategories: [
      'Medical eye examinations and chronic disease management',
      'Cataract surgery with co-management arrangements',
      'Retina services and intravitreal injections',
      'Glaucoma monitoring and procedures',
      'Diagnostic imaging (OCT, visual fields, photography)',
    ],
    documentationRisks: [
      'Chief complaint not supporting the plan billed (vision versus medical)',
      'Co-management transfer documentation absent or late',
      'Injection laterality and drug-lot records incomplete',
      'Diagnostic imaging frequency without refreshed indications',
    ],
    denialCauses: [
      'Vision/medical routing rejections and patient disputes',
      'Imaging frequency edits (OCT, fields) on monitoring patients',
      'Drug unit and authorization errors on anti-VEGF claims',
      'Global-period disputes across co-managed cataracts',
    ],
    codingConsiderations: [
      'Eye codes and E/M pay differently by payer with different documentation constructions — the profitable-and-defensible choice varies',
      'Bilateral injection billing rules and per-eye authorizations must align per encounter',
    ],
    payerChallenges: [
      'Vision plan carve-outs adjacent to medical coverage on the same patient',
      'Step-therapy policies on anti-VEGF product selection',
    ],
    kpis: [
      'Claim routing accuracy (vision versus medical)',
      'Injection drug margin integrity',
      'Imaging denial rate',
      'Co-management split accuracy',
    ],
    relatedServices: ['medical-billing', 'prior-authorization-support', 'payment-posting', 'insurance-eligibility-verification'],
    relatedSpecialties: ['optometry-billing', 'plastic-surgery-medical-billing', 'ambulatory-surgery-center-billing'],
    relatedLocations: ['houston-medical-billing', 'san-antonio-medical-billing', 'fort-worth-medical-billing'],
    relatedGuides: ['insurance-eligibility-verification', 'patient-responsibility', 'prior-authorization'],
    faqs: [
      {
        question: 'How do we stop the constant vision-versus-medical billing confusion?',
        answer:
          'With a routing rule applied at check-in: the documented reason for the visit decides the plan. Routine exam, no medical complaint — vision plan. Medical complaint or disease monitoring — medical insurance, even if the patient “came for a check-up.” We script the front-desk conversation and audit routing monthly, because this single discipline eliminates most eye-care billing disputes.',
      },
      {
        question: 'Do you handle retina injection billing volumes?',
        answer:
          'Yes — anti-VEGF programs bill drug and administration per eye per visit at oncology-grade prices, with step-therapy and authorization rules per payer. Units reconcile to purchasing, authorizations track per eye, and product-preference changes get flagged before injection days.',
      },
    ],
  },
  {
    slug: 'optometry-billing',
    title: 'Optometry',
    specialtyName: 'Optometry',
    seoTitle: 'Optometry Billing Services in Texas',
    metaDescription:
      'Optometry billing: medical optometry claims, vision plan coordination, co-management billing, and contact lens service billing for OD practices.',
    h1: 'Optometry Billing Services',
    summary:
      'Billing for optometric practices — building the medical-billing side of an OD practice while keeping vision-plan and retail revenue cleanly separated.',
    intro: [
      'Optometry practices increasingly earn from medical eye care — dry eye disease, glaucoma management, diabetic eye exams, foreign body removal — but many bill it poorly or not at all, defaulting everything to vision plans and materials revenue. Medical optometry billing means health-insurance credentialing, medical coding discipline, and the same vision/medical routing rigor ophthalmology needs.',
      'Our optometry billing builds and runs that medical side: credentialing ODs with medical panels, routing encounters correctly, billing diabetic and glaucoma monitoring programs properly, and handling cataract co-management fees from the optometric end.',
    ],
    billingComplexity: [
      'The foundational problem is credentialing: ODs not enrolled with medical payers cannot bill medical care, so scope of billable practice follows panel status per payer. After that comes routing discipline — the same patient may have a vision plan for refractions and medical coverage for disease care, and each encounter must bill by its documented purpose. Co-management adds modifier-based fee splitting during surgical globals with transfer documentation requirements.',
    ],
    serviceCategories: [
      'Comprehensive and routine vision examinations',
      'Medical optometry: dry eye, glaucoma, diabetic exams',
      'Cataract and refractive surgery co-management',
      'Contact lens fitting including medically necessary lenses',
      'Anterior segment procedures and foreign body removal',
    ],
    documentationRisks: [
      'Medical visits documented like routine exams, undermining medical billing',
      'Co-management transfer and period documentation incomplete',
      'Medically-necessary contact lens justification thin',
    ],
    denialCauses: [
      'OD not credentialed with the medical payer billed',
      'Vision/medical routing rejections',
      'Diabetic exam billing without required elements or reporting',
      'Refraction billed to medical plans (routinely non-covered)',
    ],
    codingConsiderations: [
      'Refraction is separately billed and typically excluded from medical coverage — patient-pay policies must be explicit',
      'Eye codes versus E/M selection applies to ODs as it does to ophthalmology, payer by payer',
    ],
    payerChallenges: [
      'Medical panel access for ODs varying by payer',
      'Vision plan lab and materials rules interacting with exam billing',
    ],
    kpis: [
      'Medical revenue share of total practice revenue',
      'Medical claim denial rate',
      'Co-management fee capture rate',
      'Routing accuracy rate',
    ],
    relatedServices: ['credentialing', 'medical-billing', 'insurance-eligibility-verification', 'patient-billing'],
    relatedSpecialties: ['ophthalmology-medical-billing', 'primary-care-medical-billing', 'family-medicine-medical-billing'],
    relatedLocations: ['san-antonio-medical-billing', 'el-paso-medical-billing', 'arlington-medical-billing'],
    relatedGuides: ['provider-credentialing', 'insurance-eligibility-verification', 'patient-responsibility'],
    faqs: [
      {
        question: 'We mostly bill vision plans — is medical billing worth building?',
        answer:
          'For most OD practices, yes: medical eye care (dry eye, glaucoma, diabetic monitoring) reimburses per encounter at rates vision plans never approach, and your existing patient base already carries the conditions. The build is credentialing plus routing discipline — we handle both, and the revenue mix shift is usually visible within two quarters.',
      },
      {
        question: 'Can we bill a medical visit and a refraction the same day?',
        answer:
          'Generally yes — the refraction bills separately (usually to the patient or vision plan, as medical plans exclude it) alongside the medical exam, with documentation supporting each. Clear patient communication about the refraction charge prevents the front-desk dispute that otherwise follows.',
      },
    ],
  },
  {
    slug: 'otolaryngology-medical-billing',
    title: 'Otolaryngology (ENT)',
    specialtyName: 'Otolaryngology',
    seoTitle: 'ENT Medical Billing Services in Texas',
    metaDescription:
      'ENT billing: office endoscopy, audiology integration, sinus surgery claims, and same-day procedure-with-visit billing for otolaryngology groups.',
    h1: 'ENT Medical Billing Services',
    summary:
      'Billing for ENT practices — scope-heavy clinics, audiology service integration, allergy programs, and surgical claims from tubes to complex sinus procedures.',
    intro: [
      'ENT clinics generate procedures at primary-care pace: nasal endoscopies, laryngoscopies, ear debridements, and in-office turbinate and sinus procedures — most alongside an E/M visit, putting ENT at the center of same-day-procedure modifier scrutiny. Many groups also run audiology, allergy testing and immunotherapy, and surgical lines each with distinct billing rules.',
      'Our ENT billing keeps the whole operation clean: scope procedures billed with defensible same-day E/M patterns, audiology services routed under the right supervision and technician rules, allergy programs billed to their build-up and maintenance logic, and surgical globals managed like the orthopedic ones they resemble.',
    ],
    billingComplexity: [
      'Diagnostic scopes with E/M on the same day is the specialty’s chronic edit battleground — payers deny the combination reflexively and the note must justify both services. In-office sinus procedures (balloon dilation and similar) carry payer-specific coverage policies and authorization rules with meaningful dollar values. Allergy immunotherapy billing splits preparation and administration with dose-tracking that must stay coherent over multi-year courses.',
    ],
    serviceCategories: [
      'Office endoscopy: nasal, laryngeal, otologic procedures',
      'Sinus surgery and in-office balloon procedures',
      'Audiology and hearing aid services',
      'Allergy testing and immunotherapy programs',
      'Pediatric ENT surgery (tubes, tonsils, adenoids)',
    ],
    documentationRisks: [
      'Scope findings documented without distinct E/M justification same-day',
      'Immunotherapy vial preparation and dose logs incomplete',
      'Audiology test batteries not itemized per component',
    ],
    denialCauses: [
      'Same-day scope-with-E/M modifier denials',
      'Coverage-policy denials on in-office sinus procedures',
      'Allergy serum preparation billing errors',
      'Audiology supervision and rendering-provider rule mismatches',
    ],
    codingConsiderations: [
      'Bilateral and multiple-scope combinations carry bundling relationships payers edit',
      'Immunotherapy codes separate serum preparation from injection administration with unit logic per vial and dose',
    ],
    payerChallenges: [
      'Divergent coverage policies for newer in-office procedures',
      'Hearing benefit carve-outs and managed-care audiology rules',
    ],
    kpis: [
      'Scope claim first-pass rate',
      'Same-day E/M overturn rate on appeal',
      'Immunotherapy revenue per active patient',
      'Surgical global leakage rate',
    ],
    relatedServices: ['medical-coding', 'claims-scrubbing', 'prior-authorization-support', 'denial-management'],
    relatedSpecialties: ['allergy-immunology-billing', 'plastic-surgery-medical-billing', 'pediatric-medical-billing'],
    relatedLocations: ['dallas-medical-billing', 'houston-medical-billing', 'austin-medical-billing'],
    relatedGuides: ['denial-management', 'prior-authorization', 'clean-claim-rate'],
    faqs: [
      {
        question: 'Payers keep bundling our scopes into the office visit — what wins those?',
        answer:
          'Documentation that shows two services: an E/M with its own history, assessment, and plan, and a scope performed for a distinct diagnostic purpose with findings. Where notes read as one blended service, the bundle sticks. We tune note patterns with providers and appeal the deniable edits — overturn rates on well-documented combinations are good.',
      },
      {
        question: 'Can you bill our allergy immunotherapy program?',
        answer:
          'Yes — preparation billing per vial with dose accounting, administration per injection visit, and the multi-year dose-tracking that keeps the two coherent. Programs leak revenue when vial preparations go unbilled or dose logs drift from claims; we reconcile both monthly.',
      },
    ],
  },
  {
    slug: 'allergy-immunology-billing',
    title: 'Allergy & Immunology',
    specialtyName: 'Allergy and Immunology',
    seoTitle: 'Allergy & Immunology Billing Services in Texas',
    metaDescription:
      'Allergy billing: skin testing units, immunotherapy vial preparation, biologic programs, and unit-count accuracy for allergy practices.',
    h1: 'Allergy and Immunology Billing Services',
    summary:
      'Billing for allergy practices — where revenue is counted in test units and vial doses, and accuracy compounds across thousands of small billable increments.',
    intro: [
      'Allergy billing is unit arithmetic at scale: skin testing billed per test with documented counts, immunotherapy billed across preparation (per vial/dose) and administration (per injection), and multi-year treatment courses whose billing must stay consistent through dose escalations, vial changes, and payer transitions. Biologics for asthma and urticaria add authorization-managed drug billing on top.',
      'Our allergy billing keeps the arithmetic exact: test counts reconciled to documentation, vial preparation billing captured when serum is mixed (not forgotten until injections), administration claims flowing at visit volume, and biologic programs run with per-cycle authorization discipline.',
    ],
    billingComplexity: [
      'Every allergy revenue line is a countable unit that payers can audit against documentation: number of percutaneous and intradermal tests, number of vial-doses prepared, injections given per visit. Undercounting is silent revenue loss; overcounting is audit exposure. Immunotherapy courses spanning years cross plan changes and deductible resets, making eligibility re-verification and patient-cost communication a permanent workflow rather than an intake step.',
    ],
    serviceCategories: [
      'Percutaneous and intradermal allergy testing',
      'Subcutaneous immunotherapy (build-up and maintenance)',
      'Biologic therapy for asthma and chronic urticaria',
      'Drug and food challenge procedures',
      'Pulmonary function testing for asthma management',
    ],
    documentationRisks: [
      'Test counts in notes not matching billed units',
      'Vial preparation records not supporting billed doses',
      'Challenge procedure time and monitoring documentation thin',
    ],
    denialCauses: [
      'Unit-count edits on testing claims',
      'Preparation-versus-administration construction errors',
      'Biologic authorization lapses',
      'Frequency edits on repeat testing',
    ],
    codingConsiderations: [
      'Testing codes bill per test with documented counts — the encounter note is the audit defense',
      'Preparation codes bill per dose-vial under payer-specific unit definitions that genuinely differ',
    ],
    payerChallenges: [
      'Unit-definition differences between payers on immunotherapy preparation',
      'Step-therapy on biologics requiring documented conventional-therapy failure',
    ],
    kpis: [
      'Billed-versus-documented unit match rate',
      'Immunotherapy revenue per active course',
      'Biologic authorization continuity rate',
      'Patient balance aging on long courses',
    ],
    relatedServices: ['medical-billing', 'prior-authorization-support', 'insurance-eligibility-verification', 'billing-audit'],
    relatedSpecialties: ['otolaryngology-medical-billing', 'pulmonology-medical-billing', 'pediatric-medical-billing'],
    relatedLocations: ['austin-medical-billing', 'houston-medical-billing', 'plano-medical-billing'],
    relatedGuides: ['insurance-eligibility-verification', 'patient-responsibility', 'prior-authorization'],
    faqs: [
      {
        question: 'How do payers define immunotherapy “doses” differently?',
        answer:
          'Some payers count a dose as a defined volume increment from the vial; others apply their own maximums per preparation billing. The same mixing session can be worth different billable units under different contracts — so we maintain per-payer unit rules and bill preparation to each payer’s definition, which protects both revenue and audit posture.',
      },
      {
        question: 'Patients quit immunotherapy over surprise bills — can billing help retention?',
        answer:
          'Significantly. Most “surprise” is January: deductibles reset and the weekly injection suddenly costs money. Re-verifying benefits each plan year, telling patients their new expected cost before the first January visit, and offering payment plans keeps courses — and their clinical benefit — intact.',
      },
    ],
  },
  {
    slug: 'infectious-disease-medical-billing',
    title: 'Infectious Disease',
    specialtyName: 'Infectious Disease',
    seoTitle: 'Infectious Disease Billing Services in Texas',
    metaDescription:
      'Infectious disease billing: hospital consult volume, OPAT infusion programs, prolonged services, and complex E/M for ID practices.',
    h1: 'Infectious Disease Billing Services',
    summary:
      'Billing for ID practices — consult-heavy hospital work, outpatient parenteral antibiotic programs, and cognitively complex visits that deserve full E/M capture.',
    intro: [
      'Infectious disease is a cognitive specialty with a hospital-heavy footprint: high consult volumes across facilities, prolonged complex visits, and — where practices run OPAT programs — outpatient infusion billing with drug, administration, and line-care components. Charge capture across hospital rounding is the classic ID revenue leak.',
      'Our ID billing focuses on capture and complexity: every hospital day reconciled against census, prolonged-service and complexity billing supported by documentation, and OPAT programs billed across their component structure with authorization management for high-cost antimicrobials.',
    ],
    billingComplexity: [
      'ID physicians round at multiple facilities with dense consult and follow-up volume — charges captured on cards, memory, or end-of-week recall leak persistently, and unsigned hospital notes stall what is captured. OPAT adds infusion mechanics (drug units, administration time, supplies, line care) plus coordination billing that many programs never capture. Visit complexity is genuinely high, but higher E/M levels hold only with decision-making documentation that matches.',
    ],
    serviceCategories: [
      'Hospital infectious disease consultation',
      'Outpatient parenteral antimicrobial therapy (OPAT)',
      'Complex outpatient ID management (HIV, hepatitis, TB)',
      'Wound and device infection management',
      'Travel medicine services (often self-pay)',
    ],
    documentationRisks: [
      'Hospital rounding days missing charges across facilities',
      'OPAT monitoring and coordination time undocumented',
      'Complexity documentation not supporting billed levels',
    ],
    denialCauses: [
      'Concurrent-care denials for overlapping specialist billing',
      'OPAT drug and administration construction errors',
      'High-level E/M documentation reviews',
      'Antimicrobial authorization gaps',
    ],
    codingConsiderations: [
      'Concurrent care by multiple specialists requires distinct problem-focus documentation per specialty',
      'OPAT bills across drug, administration, supply, and coordination components whose payability differs by payer and setting',
    ],
    payerChallenges: [
      'High-cost antimicrobial authorization requirements',
      'Site-of-care review on prolonged infusion courses',
    ],
    kpis: [
      'Hospital charge capture rate against census',
      'OPAT revenue per treatment course',
      'E/M level distribution with documentation support',
      'Consult-to-payment lag by facility payer mix',
    ],
    relatedServices: ['charge-entry', 'medical-billing', 'prior-authorization-support', 'practice-financial-reporting'],
    relatedSpecialties: ['internal-medicine-medical-billing', 'wound-care-billing', 'pulmonology-medical-billing'],
    relatedLocations: ['houston-medical-billing', 'dallas-medical-billing', 'san-antonio-medical-billing'],
    relatedGuides: ['medical-billing-process', 'clean-claim-rate', 'prior-authorization'],
    faqs: [
      {
        question: 'How much hospital revenue does a typical ID practice leak?',
        answer:
          'Practices that have never reconciled census against captured charges are usually surprised — multi-facility rounding with cross-coverage reliably drops encounters. The fix is mechanical: daily census-to-charge reconciliation per facility, unsigned-note escalation, and a capture tool providers actually use. We run that machine.',
      },
      {
        question: 'Can you bill our OPAT program properly?',
        answer:
          'Yes — OPAT billing spans drug units, administration codes, supplies, lab monitoring, and physician oversight, with payability varying by payer and site. Most programs bill some components and silently skip others; we map the full billable set per payer and capture it consistently.',
      },
    ],
  },
  {
    slug: 'podiatry-medical-billing',
    title: 'Podiatry',
    specialtyName: 'Podiatry',
    seoTitle: 'Podiatry Medical Billing Services in Texas',
    metaDescription:
      'Podiatry billing: routine foot care rules, diabetic foot programs, surgical claims, DME dispensing, and Medicare class findings handled correctly.',
    h1: 'Podiatry Medical Billing Services',
    summary:
      'Billing for podiatric practices — where Medicare routine-foot-care rules, class findings, and modifier requirements make ordinary visits compliance-sensitive.',
    intro: [
      'Podiatry billing carries a rulebook quirk that trips generalist billers: routine foot care (nail debridement, callus care) is excluded from Medicare coverage unless systemic conditions and documented class findings make it medically necessary — with specific modifier and diagnosis constructions signaling qualification. Around that sit diabetic foot programs, surgery, wound care, and in-office DME dispensing.',
      'Our podiatry billing applies the specialty’s rules natively: class findings documented and coded on qualifying routine care, therapeutic shoe program billing run to its certification requirements, surgical globals managed, and DME dispensing billed under the practice’s supplier enrollment correctly.',
    ],
    billingComplexity: [
      'Routine-foot-care claims without qualifying systemic diagnoses, class findings, and modifiers deny automatically — and worse, patterns of unsupported claims invite audit. The diabetic therapeutic shoe program pays reliably but demands certification statements from the managing physician, in-person fitting documentation, and supplier-standard compliance. Nail procedures, wound debridements, and injections each have frequency edits payers apply mechanically.',
    ],
    serviceCategories: [
      'Diabetic foot care and ulcer management',
      'Routine foot care under qualifying conditions',
      'Podiatric surgery: bunions, hammertoes, fractures',
      'Therapeutic shoes and custom orthotics',
      'Wound care and debridement services',
    ],
    documentationRisks: [
      'Class findings not documented per visit for routine care',
      'Therapeutic shoe certification and fitting records incomplete',
      'Debridement depth and measurements missing for wound codes',
    ],
    denialCauses: [
      'Routine foot care denials lacking qualifying construction',
      'Frequency edits on nail care and debridements',
      'Shoe program documentation failures',
      'Surgical global disputes on staged toe procedures',
    ],
    codingConsiderations: [
      'Qualifying routine care requires the systemic diagnosis, class-finding modifiers, and often the managing physician’s information on the claim',
      'Wound debridement codes by depth and area must match measured documentation',
    ],
    payerChallenges: [
      'Medicare rule dominance with MA plans layering their own edits',
      'DME supplier requirements for dispensing practices',
    ],
    kpis: [
      'Routine-care claim acceptance rate',
      'Shoe program revenue and documentation completeness',
      'Wound care claim first-pass rate',
      'Frequency-edit denial rate',
    ],
    relatedServices: ['medical-billing', 'medical-coding', 'denial-management', 'billing-audit'],
    relatedSpecialties: ['wound-care-billing', 'durable-medical-equipment-billing', 'endocrinology-medical-billing'],
    relatedLocations: ['san-antonio-medical-billing', 'houston-medical-billing', 'corpus-christi-medical-billing'],
    relatedGuides: ['medical-necessity-denials', 'denial-management', 'clean-claim-rate'],
    faqs: [
      {
        question: 'Why does Medicare deny our nail care claims?',
        answer:
          'Routine foot care is statutorily excluded unless the patient’s systemic condition (diabetes with qualifying findings, vascular disease) makes it medically necessary — and the claim must carry the qualifying diagnosis, class-finding modifiers, and documentation to match. Claims billed without that construction deny correctly. We set up the documentation and coding pattern so qualifying care pays and non-qualifying care is handled as patient-pay honestly.',
      },
      {
        question: 'Is the diabetic shoe program worth the paperwork?',
        answer:
          'Usually yes for diabetic-heavy panels — it pays dependably, but the documentation chain (physician certification, fitting records, supplier standards) must be complete per patient per year, because it is a known audit target. We build the checklist into the workflow so the paperwork happens at fitting time, not at audit time.',
      },
    ],
  },
  {
    slug: 'chiropractic-billing',
    title: 'Chiropractic',
    specialtyName: 'Chiropractic',
    seoTitle: 'Chiropractic Billing Services in Texas',
    metaDescription:
      'Chiropractic billing: Medicare AT-modifier rules, visit caps, personal injury liens, and cash-hybrid practice billing done correctly.',
    h1: 'Chiropractic Billing Services',
    summary:
      'Billing for chiropractic practices — narrow Medicare coverage with active-treatment rules, commercial visit caps, personal injury cases, and hybrid cash models.',
    intro: [
      'Chiropractic billing operates inside tight coverage boxes: Medicare covers only spinal manipulation for active treatment (with the AT modifier separating covered corrective care from maintenance that must bill to the patient), commercial plans impose visit caps and medical-necessity reviews, and many practices run substantial personal-injury caseloads on letters of protection with their own settlement-dependent economics.',
      'Our chiropractic billing keeps each lane clean: Medicare claims constructed to active-treatment rules with compliant patient-pay handling for maintenance care, commercial visit tracking against caps, PI cases documented and tracked to settlement, and cash-service pricing kept properly separate from insured billing.',
    ],
    billingComplexity: [
      'The Medicare structure is the compliance heart: manipulation is covered only during active corrective treatment, maintenance care is excluded and belongs on advance notice to the patient, and exam/therapy services are not covered for chiropractors at all — errors in this lane are systematic by nature. Personal injury adds lien-based receivables that age until settlement, requiring documentation that supports both care and eventual negotiation.',
    ],
    serviceCategories: [
      'Spinal manipulation treatment episodes',
      'Therapy modalities and exercise services (commercial)',
      'Personal injury care under letters of protection',
      'Examinations and re-examinations',
      'Cash wellness and maintenance programs',
    ],
    documentationRisks: [
      'Treatment plans not showing functional progress for active-care status',
      'Maintenance transitions unrecognized and billed as active care',
      'PI records not built for settlement documentation demands',
    ],
    denialCauses: [
      'Medicare active-treatment (AT) construction errors',
      'Commercial visit-cap exhaustion untracked',
      'Medical-necessity reviews on extended episodes',
      'PI receivables aging without lien management',
    ],
    codingConsiderations: [
      'Manipulation codes tier by spinal regions treated — documentation must identify regions and findings per region',
      'The covered/non-covered boundary per payer must drive who gets billed, with proper notices for patient-responsibility care',
    ],
    payerChallenges: [
      'Narrow Medicare benefit with mechanical edit enforcement',
      'Commercial utilization review on visit counts per episode',
    ],
    kpis: [
      'Active-versus-maintenance classification accuracy',
      'Visit-cap tracking compliance rate',
      'PI receivable aging and realization rates',
      'Cash service revenue separation integrity',
    ],
    relatedServices: ['medical-billing', 'patient-billing', 'insurance-eligibility-verification', 'billing-audit'],
    relatedSpecialties: ['physical-therapy-billing', 'pain-management-billing', 'orthopedic-medical-billing'],
    relatedLocations: ['fort-worth-medical-billing', 'arlington-medical-billing', 'san-antonio-medical-billing'],
    relatedGuides: ['patient-responsibility', 'insurance-eligibility-verification', 'denial-management'],
    faqs: [
      {
        question: 'How should we handle Medicare patients who want maintenance care?',
        answer:
          'With honesty and the right paperwork: once care transitions from active correction to maintenance, Medicare no longer covers it, the patient should receive an advance notice of non-coverage, and the visits bill to the patient at your stated rates. Practices get in trouble by blurring that line — we build the classification and notice workflow so the line is clean.',
      },
      {
        question: 'Do you manage personal injury billing and liens?',
        answer:
          'Yes — PI cases run on their own track: documentation built for demand packages, balances tracked per case and attorney, statute and settlement timelines monitored, and reductions negotiated at resolution per your policies. PI is real revenue with real aging risk; it deserves case management, not a shoebox.',
      },
    ],
  },
  {
    slug: 'physical-therapy-billing',
    title: 'Physical Therapy',
    specialtyName: 'Physical Therapy',
    seoTitle: 'Physical Therapy Billing Services in Texas',
    metaDescription:
      'PT billing: 8-minute rule discipline, plan-of-care certifications, visit caps, and therapy threshold tracking for physical therapy clinics.',
    h1: 'Physical Therapy Billing Services',
    summary:
      'Billing for PT clinics — timed-unit arithmetic under the 8-minute rule, plan-of-care certification chains, authorization visit blocks, and threshold tracking.',
    intro: [
      'Physical therapy billing runs on time: most treatment codes bill in 15-minute units governed by the 8-minute rule (for Medicare and payers following it), making the daily note’s minutes the claim’s foundation. Above the visit sit structural requirements — physician-certified plans of care with recertification clocks, annual therapy thresholds with modifier requirements, commercial visit caps, and authorization blocks measured in visits.',
      'Our PT billing keeps the structure current: units calculated correctly from documented minutes, certifications and recertifications chased before they lapse, visit counts tracked against caps and authorizations in real time, and threshold modifiers applied when totals cross the lines.',
    ],
    billingComplexity: [
      'Unit errors compound silently: a clinic miscounting timed units by one unit per few visits loses or overbills thousands monthly at PT volumes — and both directions are problems. The certification chain (initial plan signed, recertifications on schedule) is pure administration, but a lapsed certification makes covered care non-covered retroactively. Assistant-provided services now carry payment differentials with required modifiers under Medicare, adding a staffing dimension to claim construction.',
    ],
    serviceCategories: [
      'Therapeutic exercise and activity programs',
      'Manual therapy services',
      'Modalities (supervised and constant attendance)',
      'Evaluations and re-evaluations by complexity',
      'Post-surgical rehabilitation protocols',
    ],
    documentationRisks: [
      'Treatment minutes not documented per service per day',
      'Plan-of-care certifications and recerts lapsing unnoticed',
      'Assistant-versus-therapist service attribution unclear',
    ],
    denialCauses: [
      'Unit-count edits against documented minutes',
      'Uncertified or lapsed plan-of-care periods',
      'Visit-cap and authorization exhaustion',
      'Threshold claims missing required modifiers',
    ],
    codingConsiderations: [
      'The 8-minute rule aggregates timed minutes across services — daily unit math must follow the payer’s counting method, which differs between Medicare and some commercial plans',
      'Assistant-provided care requires payment-differential modifiers for Medicare and payers adopting its rules',
    ],
    payerChallenges: [
      'Authorization blocks in visits with utilization review on extensions',
      'Annual threshold tracking with medical-necessity documentation above the lines',
    ],
    kpis: [
      'Units-per-visit distribution (both directions audited)',
      'Certification currency rate across active plans',
      'Authorization exhaustion incidents per month',
      'Denial rate on timed-code claims',
    ],
    relatedServices: ['medical-billing', 'insurance-eligibility-verification', 'prior-authorization-support', 'billing-audit'],
    relatedSpecialties: ['occupational-therapy-billing', 'speech-therapy-billing', 'chiropractic-billing'],
    relatedLocations: ['frisco-medical-billing', 'fort-worth-medical-billing', 'austin-medical-billing'],
    relatedGuides: ['insurance-eligibility-verification', 'prior-authorization', 'denial-rate'],
    faqs: [
      {
        question: 'What is the 8-minute rule and why do our units keep getting adjusted?',
        answer:
          'For timed codes, Medicare counts total timed minutes per discipline per day and pays units on 15-minute increments with an 8-minute threshold for the next unit — and some commercial payers count differently (per-service rather than aggregate). Adjustments usually mean your unit math and the payer’s counting method disagree. We apply each payer’s method at charge entry, which ends the adjustments.',
      },
      {
        question: 'Can you track our plan-of-care certifications?',
        answer:
          'Yes — every active patient carries certification status and recertification due dates in our tracking, with chase workflows to referring physicians before lapses. A signed plan is a payment condition; treating it as paperwork is how clinics donate weeks of visits.',
      },
    ],
  },
  {
    slug: 'occupational-therapy-billing',
    title: 'Occupational Therapy',
    specialtyName: 'Occupational Therapy',
    seoTitle: 'Occupational Therapy Billing Services in Texas',
    metaDescription:
      'OT billing: timed units, evaluation complexity levels, pediatric OT authorizations, and plan-of-care management for occupational therapy practices.',
    h1: 'Occupational Therapy Billing Services',
    summary:
      'Billing for OT practices — shared therapy-billing structure with OT-specific evaluation levels, pediatric authorization landscapes, and school/medical funding boundaries.',
    intro: [
      'Occupational therapy shares physical therapy’s billing skeleton — timed units, plans of care, thresholds, visit caps — with its own complications: evaluation codes tiered by complexity with documentation requirements per tier, heavy pediatric caseloads where Texas Medicaid authorization rules dominate, and constant boundary questions between medically billable therapy and school- or education-funded services.',
      'Our OT billing manages both the shared structure and the OT-specific edges: evaluations coded to documented complexity, pediatric Medicaid authorizations tracked through Texas MCO processes, and funding-source boundaries kept clean so medical claims stand on medical necessity.',
    ],
    billingComplexity: [
      'Pediatric OT in Texas is largely a Medicaid discipline: authorization requirements per MCO, therapy-hour allocations, re-authorization cycles with progress documentation, and rate structures that make clean operations essential at thin margins. Evaluation complexity tiers require documentation of specific elements (occupational profile, assessment counts, clinical decision-making) — under-documenting drops the tier, over-claiming invites review.',
    ],
    serviceCategories: [
      'Pediatric developmental and sensory-integration therapy',
      'Adult neurological and post-surgical rehabilitation',
      'Hand therapy programs',
      'OT evaluations by complexity level',
      'Feeding and swallowing programs (with SLP overlap)',
    ],
    documentationRisks: [
      'Evaluation notes not supporting the complexity tier billed',
      'Progress documentation thin for Medicaid re-authorizations',
      'Timed minutes and service attribution incomplete',
    ],
    denialCauses: [
      'Medicaid authorization lapses between cycles',
      'Evaluation tier downcoding on review',
      'Timed-unit edits against documented minutes',
      'Medical-necessity denials framed as educational needs',
    ],
    codingConsiderations: [
      'Evaluation complexity selection follows defined element counts — the note must inventory them',
      'Medical claims for school-age children must document medical necessity distinct from educational goals',
    ],
    payerChallenges: [
      'Texas Medicaid MCO authorization variation for pediatric therapy',
      'Commercial plans importing Medicare therapy rules inconsistently',
    ],
    kpis: [
      'Authorization continuity rate on active pediatric caseload',
      'Evaluation tier distribution with documentation support',
      'Re-authorization approval rate',
      'Visits held versus visits billed (leakage)',
    ],
    relatedServices: ['prior-authorization-support', 'medical-billing', 'insurance-eligibility-verification', 'denial-management'],
    relatedSpecialties: ['physical-therapy-billing', 'speech-therapy-billing', 'pediatric-medical-billing'],
    relatedLocations: ['san-antonio-medical-billing', 'el-paso-medical-billing', 'mcallen-medical-billing'],
    relatedGuides: ['prior-authorization', 'insurance-eligibility-verification', 'medical-necessity-denials'],
    faqs: [
      {
        question: 'Our pediatric Medicaid re-authorizations keep getting reduced — what helps?',
        answer:
          'Progress documentation that speaks the reviewer’s language: measurable functional goals, quantified progress against them, and clear medical necessity for continued frequency. Vague notes get vague authorizations. We coordinate the re-auth calendar and package the documentation so requests stand on evidence.',
      },
      {
        question: 'A payer denied therapy as “educational” — can that be fought?',
        answer:
          'Often yes, when the record shows medical goals (function, safety, ADLs) rather than academic ones. The boundary is real — school responsibilities exist — but payers over-apply it. Appeals succeed where documentation frames therapy in medical-necessity terms from evaluation onward, which is a documentation habit we help build.',
      },
    ],
  },
  {
    slug: 'speech-therapy-billing',
    title: 'Speech Therapy',
    specialtyName: 'Speech-Language Pathology',
    seoTitle: 'Speech Therapy Billing Services in Texas',
    metaDescription:
      'SLP billing: untimed session codes, pediatric Medicaid authorizations, swallowing services, and clean claims for speech-language pathology practices.',
    h1: 'Speech Therapy Billing Services',
    summary:
      'Billing for SLP practices — mostly untimed session codes with their own economics, pediatric Medicaid authorization cycles, and swallowing/AAC service billing.',
    intro: [
      'Speech-language pathology bills differently from its therapy siblings: core treatment codes are largely untimed (per session, not per 15 minutes), which changes scheduling economics and removes unit arithmetic while adding its own edge cases — evaluation code selection across speech, language, fluency, and swallowing; AAC device evaluation billing; and instrumental swallowing studies where performed.',
      'Our SLP billing fits the specialty’s actual shape: session claims produced cleanly at caseload volume, the right evaluation codes per assessment purpose, pediatric Medicaid authorization cycles managed through Texas MCOs, and funding boundaries with schools kept documented and clean.',
    ],
    billingComplexity: [
      'Untimed codes mean revenue scales with sessions, not minutes — making cancellation management and schedule density the financial levers, and making per-session denials proportionally expensive. Pediatric caseloads run on Texas Medicaid authorization cycles with progress-documentation demands mirroring OT. Evaluation coding spans distinct code families by assessment domain; using a generic evaluation code for a specialized assessment leaves money and specificity on the table.',
    ],
    serviceCategories: [
      'Speech and language treatment sessions',
      'Comprehensive evaluations by domain',
      'Swallowing evaluation and treatment',
      'AAC evaluation and device services',
      'Pediatric early-intervention collaboration',
    ],
    documentationRisks: [
      'Session notes not individualized across a group-heavy day',
      'Evaluation domain and instruments not supporting code selection',
      'Progress metrics thin for authorization renewals',
    ],
    denialCauses: [
      'Medicaid authorization gaps between cycles',
      'Evaluation code family mismatches',
      'Medical-versus-educational necessity disputes',
      'Coverage exclusions on developmental delay diagnoses in some commercial plans',
    ],
    codingConsiderations: [
      'Treatment codes are per-session — payers watch for multiple-session-per-day patterns needing justification',
      'Swallowing and AAC services carry their own code families and, often, their own authorization rules',
    ],
    payerChallenges: [
      'Commercial plan exclusions and limits on developmental speech services',
      'Texas Medicaid MCO variation on therapy authorizations',
    ],
    kpis: [
      'Sessions billed versus sessions held',
      'Authorization continuity on pediatric caseload',
      'Denial rate by payer and diagnosis category',
      'Evaluation revenue per new patient',
    ],
    relatedServices: ['prior-authorization-support', 'medical-billing', 'insurance-eligibility-verification', 'patient-billing'],
    relatedSpecialties: ['occupational-therapy-billing', 'physical-therapy-billing', 'pediatric-medical-billing'],
    relatedLocations: ['houston-medical-billing', 'san-antonio-medical-billing', 'brownsville-medical-billing'],
    relatedGuides: ['prior-authorization', 'insurance-eligibility-verification', 'patient-responsibility'],
    faqs: [
      {
        question: 'A commercial plan excluded our patient’s speech therapy as developmental — options?',
        answer:
          'First verify the exclusion’s actual text — some plans exclude developmental delay but cover therapy for defined medical conditions, so diagnosis documentation matters enormously. Where a medical basis exists (neurological, structural, post-illness), claims and appeals should be built on it. Where the exclusion genuinely applies, families deserve a clear self-pay conversation early, not a surprise bill later.',
      },
      {
        question: 'Do sessions bill the same regardless of length?',
        answer:
          'For the core untimed treatment codes, generally yes — a session is a session within clinically reasonable norms, which is why schedule design drives SLP practice economics. We flag payers with session-length or frequency policies that deviate, and keep multiple-session days documented to withstand review.',
      },
    ],
  },
  {
    slug: 'urgent-care-billing',
    title: 'Urgent Care',
    specialtyName: 'Urgent Care',
    seoTitle: 'Urgent Care Billing Services in Texas',
    metaDescription:
      'Urgent care billing: high-volume E/M with procedures, S9083 global-fee contracts, occupational medicine, and front-end collections discipline.',
    h1: 'Urgent Care Billing Services',
    summary:
      'Billing for urgent care centers — retail-pace volume, contract quirks like global visit rates, walk-in eligibility challenges, and occupational medicine lines.',
    intro: [
      'Urgent care operates at retail velocity with fee-for-service complexity: high daily encounter counts mixing E/M, procedures, x-rays, labs, and injections; payer contracts that sometimes flatten everything into a global per-visit rate (the S9083 model) changing the billing calculus entirely; walk-in patients whose eligibility must verify in minutes; and employer-paid occupational medicine running on invoices rather than claims.',
      'Our urgent care billing is built for that pace: same-day charge flows, contract-aware billing that knows which payers pay global versus fee-for-service, front-desk eligibility support tuned for walk-ins, and occ-med invoicing kept separate and current.',
    ],
    billingComplexity: [
      'Contract structure determines everything: under global-rate contracts, ancillary capture stops mattering for those payers while accurate visit classification becomes the revenue driver — billing teams that treat all payers identically systematically err in both directions. Walk-in volume makes real-time eligibility the front line, since there is no 72-hour verification runway, and failed verification converts directly to bad debt at urgent care collection rates.',
    ],
    serviceCategories: [
      'Episodic illness and injury visits',
      'Procedures: laceration repair, splinting, foreign body removal',
      'On-site x-ray and laboratory services',
      'Occupational medicine: physicals, drug screens, work injuries',
      'Vaccinations and seasonal programs',
    ],
    documentationRisks: [
      'Procedure documentation thin behind high-throughput visits',
      'Occ-med and insured services mixed in one record without payer separation',
      'X-ray interpretations missing elements for professional billing',
    ],
    denialCauses: [
      'Eligibility failures on walk-in volume',
      'Global-versus-FFS contract misapplication',
      'Workers’ comp claims routed to health plans and vice versa',
      'After-hours and site-of-service code disputes',
    ],
    codingConsiderations: [
      'Global-rate payer claims still require correct coding even when payment flattens — contract compliance and data integrity both depend on it',
      'Work-injury visits belong to comp carriers under comp rules from the first encounter, requiring employer/carrier capture at intake',
    ],
    payerChallenges: [
      'Contract heterogeneity: global rates, carve-outs, and FFS across the same waiting room',
      'High-deductible patients making time-of-service collection decisive',
    ],
    kpis: [
      'Same-day claim submission rate',
      'Time-of-service collection rate',
      'Eligibility failure rate on walk-ins',
      'Revenue per visit by payer contract type',
    ],
    relatedServices: ['medical-billing', 'insurance-eligibility-verification', 'charge-entry', 'practice-financial-reporting'],
    relatedSpecialties: ['emergency-medicine-billing', 'family-medicine-medical-billing', 'primary-care-medical-billing'],
    relatedLocations: ['houston-medical-billing', 'katy-medical-billing', 'frisco-medical-billing'],
    relatedGuides: ['insurance-eligibility-verification', 'patient-responsibility', 'clean-claim-rate'],
    faqs: [
      {
        question: 'Some payers pay us one flat rate per visit — should billing change?',
        answer:
          'Yes, meaningfully. Under global-rate contracts, the revenue lever shifts from ancillary capture to correct visit classification and contract compliance, while your fee-for-service payers still reward complete capture. Billing must run contract-aware logic per payer — and your contract mix deserves periodic re-negotiation analysis, which our reporting supports.',
      },
      {
        question: 'How do we cut bad debt from walk-in patients?',
        answer:
          'Front-end mechanics: real-time eligibility on arrival, clear cost communication, time-of-service collection of copays and estimated responsibility, and card-on-file where your policies allow. Urgent care balances collect poorly once the patient leaves — the visit is the collection window.',
      },
    ],
  },
  {
    slug: 'emergency-medicine-billing',
    title: 'Emergency Medicine',
    specialtyName: 'Emergency Medicine',
    seoTitle: 'Emergency Medicine Billing Services in Texas',
    metaDescription:
      'Emergency medicine billing: ED E/M leveling, No Surprises Act workflows, IDR support, and high-volume professional-fee claims for EM groups.',
    h1: 'Emergency Medicine Billing Services',
    summary:
      'Professional-fee billing for EM groups — acuity-based E/M leveling at volume, EMTALA-shaped payer mix, and the No Surprises Act machinery for out-of-network payment.',
    intro: [
      'Emergency medicine professional billing carries unique structural facts: every patient is seen regardless of coverage, making self-pay and Medicaid shares structural rather than chosen; E/M leveling across thousands of encounters drives revenue and draws payer downcoding programs; and out-of-network emergency care now runs through the No Surprises Act — with its qualifying payment amounts, open negotiation windows, and independent dispute resolution process.',
      'Our EM billing runs the volume with the machinery: leveling supported by documentation at scale, downcoding programs tracked and contested by payer, NSA timelines docketed per claim, and the IDR process operated where negotiation fails and the economics justify it.',
    ],
    billingComplexity: [
      'ED E/M distribution is the specialty’s audit surface — payers run automated downcoding programs against high-acuity coding, and defending levels requires documentation of medical decision-making that matches the acuity billed, encounter by encounter. Out-of-network claims move on NSA clocks: initial payment or denial triggers negotiation windows and IDR eligibility with hard deadlines, turning payment disputes into calendared legal-process work at claim volume.',
    ],
    serviceCategories: [
      'Emergency department professional fees across acuity levels',
      'Critical care services in the ED',
      'Procedures: intubation, lines, reductions, repairs',
      'Observation service billing',
      'Trauma team activation services',
    ],
    documentationRisks: [
      'MDM documentation not carrying the acuity level billed',
      'Critical-care time not explicitly documented',
      'Procedure notes abbreviated below billing requirements at shift pace',
    ],
    denialCauses: [
      'Payer downcoding programs on high-level E/M',
      'NSA payment disputes underpaying out-of-network care',
      'Retroactive ED-visit “avoidability” review programs',
      'Coordination failures with facility claims',
    ],
    codingConsiderations: [
      'ED leveling follows MDM-based rules where risk, data, and problem complexity must be evidenced in the note',
      'NSA claims require tracking qualifying payment amounts, deadlines, and batch-eligibility rules for IDR',
    ],
    payerChallenges: [
      'Systematic downcoding and prepayment review programs',
      'NSA process friction: slow initial payments, low QPA offers',
    ],
    kpis: [
      'E/M distribution versus documented acuity',
      'Downcode appeal overturn rate',
      'NSA negotiation and IDR win rates with recovered deltas',
      'Collection rate by coverage class',
    ],
    relatedServices: ['medical-coding', 'claims-appeals', 'denial-management', 'practice-financial-reporting'],
    relatedSpecialties: ['urgent-care-billing', 'anesthesiology-medical-billing', 'radiology-medical-billing'],
    relatedLocations: ['houston-medical-billing', 'dallas-medical-billing', 'el-paso-medical-billing'],
    relatedGuides: ['denial-management', 'denial-rate', 'claim-status-follow-up'],
    faqs: [
      {
        question: 'A payer is downcoding a chunk of our high-level ED visits automatically — what works?',
        answer:
          'Systematic response: identify the program (many payers announce methodology), audit your documentation against the levels billed, appeal the wrongly downcoded encounters in volume with records attached, and escalate patterns through contract channels or regulators where the program ignores documentation. Groups that fight case-by-case lose; groups that respond programmatically recover meaningful revenue.',
      },
      {
        question: 'Is the IDR process worth using for out-of-network claims?',
        answer:
          'Selectively — IDR has filing fees, batching rules, and timelines, so it pays on claims (or batches) where the gap between payment and reasonable value covers the process cost. Published outcomes have generally favored providers who bring organized evidence. We run the triage: negotiate first, batch what qualifies, and file where economics justify.',
      },
    ],
  },
  {
    slug: 'general-surgery-medical-billing',
    title: 'General Surgery',
    specialtyName: 'General Surgery',
    seoTitle: 'General Surgery Billing Services in Texas',
    metaDescription:
      'General surgery billing: 90-day globals, assistant and co-surgeon claims, emergency add-ons, and multi-procedure surgical coding.',
    h1: 'General Surgery Medical Billing Services',
    summary:
      'Billing for general surgery practices — global package management, multi-procedure sessions, assistant rules, and the emergency case flow that complicates all three.',
    intro: [
      'General surgery billing is global-package management at scale: most major procedures carry 90-day globals defining what the surgical fee includes, while multi-procedure sessions invoke reduction rules, assistant-at-surgery eligibility varies by procedure and payer, and emergency cases arrive with modifier implications and — when out-of-network — surprise-billing process rights.',
      'Our general surgery billing manages the package lifecycle per case: operative coding from the note with combinations verified, expected reimbursement computed through reduction rules so underpayments surface at posting, global calendars tracked per patient, and E/M capture protected around the package (decision-for-surgery visits, unrelated problems).',
    ],
    billingComplexity: [
      'Multi-procedure payment logic means posted payments rarely equal fee-schedule lookups — without computed expected amounts per case, underpayments hide inside plausible-looking checks. Global periods swallow legitimately separate E/M when modifier and documentation discipline slips, and staged or related returns to the OR have their own modifier paths payers police. Assistant claims fail when the procedure’s assistant-eligibility status was never checked pre-billing.',
    ],
    serviceCategories: [
      'Abdominal and gastrointestinal surgery',
      'Hernia repair programs',
      'Breast surgery including oncologic procedures',
      'Emergency general surgery coverage',
      'Endoscopy where practiced',
    ],
    documentationRisks: [
      'Operative notes not supporting all procedures billed in combination',
      'Decision-for-surgery E/M not documented distinctly from pre-op care',
      'Assistant’s role not documented for assistant claims',
    ],
    denialCauses: [
      'Multiple-procedure bundling and reduction disputes',
      'Global-period E/M denials',
      'Assistant-at-surgery eligibility denials',
      'Emergency out-of-network payment disputes',
    ],
    codingConsiderations: [
      'Combination coding must respect bundling edits while capturing legitimately separate procedures — both failure modes cost money',
      'Staged/related/unrelated return-to-OR modifiers each have distinct rules the note must support',
    ],
    payerChallenges: [
      'High-dollar claim documentation requests delaying surgical payments',
      'Assistant and co-surgeon policies differing by payer per procedure',
    ],
    kpis: [
      'Surgical claim first-pass rate',
      'Per-case payment variance versus computed expected',
      'Global-period E/M capture rate',
      'Days from surgery to payment',
    ],
    relatedServices: ['medical-coding', 'underpayment-identification', 'prior-authorization-support', 'claims-appeals'],
    relatedSpecialties: ['bariatric-surgery-billing', 'vascular-surgery-medical-billing', 'ambulatory-surgery-center-billing'],
    relatedLocations: ['dallas-medical-billing', 'houston-medical-billing', 'lubbock-medical-billing'],
    relatedGuides: ['denial-management', 'medical-necessity-denials', 'net-collection-rate'],
    faqs: [
      {
        question: 'How do we know if our surgical claims are being underpaid?',
        answer:
          'By computing expected payment per case through the reduction rules — primary procedure at contract rate, subsequent procedures at their contractual percentages, assistant fees at their percentages — and comparing posted payments against it. Practices posting surgical checks without computed expectations are almost certainly absorbing variance. We build that expected-value check into posting.',
      },
      {
        question: 'Can we bill visits during a patient’s global period?',
        answer:
          'For unrelated problems, yes — with the appropriate modifier and documentation showing the visit addressed something outside the surgery’s recovery. Routine post-op care is included in the package. The failure modes are billing included care (denials, audit risk) and not billing unrelated care (lost revenue); a global calendar with encounter review handles both.',
      },
    ],
  },
  {
    slug: 'plastic-surgery-medical-billing',
    title: 'Plastic Surgery',
    specialtyName: 'Plastic Surgery',
    seoTitle: 'Plastic Surgery Billing Services in Texas',
    metaDescription:
      'Plastic surgery billing: reconstructive insurance claims, cosmetic revenue separation, prior authorization with photos, and staged procedure management.',
    h1: 'Plastic Surgery Billing Services',
    summary:
      'Billing for plastic surgery practices — the reconstructive/cosmetic boundary, photo-documented authorizations, staged procedures, and dual-revenue operations.',
    intro: [
      'Plastic surgery runs two businesses with one schedule: cosmetic procedures on patient-pay terms that must never touch insurance, and reconstructive surgery billed to payers who presume cosmetic intent until documentation proves function — with photographs, measurements, and symptom history as the currency of authorization.',
      'Our plastic surgery billing keeps both businesses correct: reconstructive claims built on functional documentation and pre-authorized with the evidence payers require, staged reconstruction tracked across authorization and global sequences, and cosmetic revenue segregated cleanly in scheduling, documentation, and accounting.',
    ],
    billingComplexity: [
      'The reconstructive/cosmetic determination is made per payer policy, procedure by procedure: breast reduction by resection weights and symptom documentation, panniculectomy by functional impairment evidence, eyelid surgery by visual field studies — the authorization package is a documentation project, and operating without approval converts surgery to charity. Mixed sessions (reconstructive plus cosmetic components) require rigorous separation of operative time, supplies, and fees between payer and patient.',
    ],
    serviceCategories: [
      'Breast reconstruction and reduction surgery',
      'Post-bariatric and functional body contouring',
      'Hand surgery and trauma reconstruction',
      'Skin cancer reconstruction after excision',
      'Cosmetic surgery (patient-pay, non-insurance)',
    ],
    documentationRisks: [
      'Functional impairment evidence thin in authorization packages',
      'Mixed-session operative notes not separating covered and cosmetic components',
      'Photographic documentation missing payer-specified views',
    ],
    denialCauses: [
      'Cosmetic determinations on reconstructive claims',
      'Authorization criteria mismatches (weights, measurements, conservative care)',
      'Staged-procedure authorization gaps between stages',
      'Mixed-session billing separation disputes',
    ],
    codingConsiderations: [
      'Reconstructive coverage rules are procedure-specific with quantitative criteria per payer — the package must be built to the policy checklist',
      'Breast reconstruction after mastectomy carries federal coverage mandates (WHCRA) worth knowing in disputes',
    ],
    payerChallenges: [
      'Cosmetic-presumption reviews on legitimately functional surgery',
      'Criteria variation between payers on identical procedures',
    ],
    kpis: [
      'Authorization approval rate on first submission',
      'Reconstructive claim denial and overturn rates',
      'Cosmetic/insurance segregation integrity (zero crossover)',
      'Staged-sequence authorization continuity',
    ],
    relatedServices: ['prior-authorization-support', 'claims-appeals', 'medical-coding', 'patient-billing'],
    relatedSpecialties: ['dermatology-medical-billing', 'general-surgery-medical-billing', 'bariatric-surgery-billing'],
    relatedLocations: ['dallas-medical-billing', 'houston-medical-billing', 'austin-medical-billing'],
    relatedGuides: ['prior-authorization', 'medical-necessity-denials', 'patient-responsibility'],
    faqs: [
      {
        question: 'How do we get breast reductions approved more reliably?',
        answer:
          'Build the package to the payer’s written criteria: documented symptom history and conservative treatment, estimated resection weights against the payer’s threshold methodology, photographs in required views, and physician attestation. Approval rates track package completeness — we maintain per-payer criteria checklists so submissions go in complete the first time.',
      },
      {
        question: 'A session combined covered reconstruction with a cosmetic add-on — how is that billed?',
        answer:
          'Separated explicitly: the covered procedure to insurance with its documentation, the cosmetic component to the patient at quoted rates, with operative time, supplies, and facility charges allocated defensibly between them. The patient should sign the cosmetic quote pre-operatively. Blurring this line risks both payer disputes and patient litigation — the separation discipline protects everyone.',
      },
    ],
  },
  {
    slug: 'vascular-surgery-medical-billing',
    title: 'Vascular Surgery',
    specialtyName: 'Vascular Surgery',
    seoTitle: 'Vascular Surgery Billing Services in Texas',
    metaDescription:
      'Vascular surgery billing: endovascular coding, vein procedure authorizations, vascular lab accreditation billing, and OBL facility claims.',
    h1: 'Vascular Surgery Billing Services',
    summary:
      'Billing for vascular practices — endovascular procedure coding, the medical/cosmetic vein boundary, accredited vascular lab billing, and office-based lab economics.',
    intro: [
      'Vascular surgery billing spans open surgery, endovascular intervention coding built from access-and-treatment component logic, a vein practice whose coverage turns on documented symptoms and conservative-therapy trials, vascular laboratory studies requiring accreditation for payment with many payers, and — for practices running office-based labs (OBLs) — site-of-service economics that payers actively pressure.',
      'Our vascular billing handles each layer: endovascular claims coded from procedure logs with component structure intact, vein procedures pre-authorized against payer criteria, lab studies billed under accreditation requirements, and OBL claims constructed to office-based rules with their distinct payment profile.',
    ],
    billingComplexity: [
      'Endovascular coding builds claims from anatomic and device components under bundling rules that changed structurally in recent years — coding from memory rather than current structure produces systematic errors. Vein treatment is the payer-scrutiny zone: coverage requires documented symptoms, duplex findings, and failed conservative therapy (compression trials) with cosmetic presumption otherwise. Vascular lab payment commonly requires IAC or equivalent accreditation, making the credential a billing prerequisite.',
    ],
    serviceCategories: [
      'Endovascular procedures: angioplasty, stenting, atherectomy',
      'Dialysis access creation and maintenance',
      'Venous disease treatment: ablation, phlebectomy, sclerotherapy',
      'Accredited vascular laboratory studies',
      'Open vascular surgery',
    ],
    documentationRisks: [
      'Procedure logs not itemizing vessels, devices, and interventions per segment',
      'Conservative-therapy documentation missing for vein authorizations',
      'Lab study indications not refreshed for surveillance frequency edits',
    ],
    denialCauses: [
      'Endovascular component construction errors',
      'Vein procedure cosmetic determinations',
      'Lab accreditation and frequency denials',
      'OBL site-of-service payment disputes',
    ],
    codingConsiderations: [
      'Current endovascular code structure bundles access, imaging, and intervention differently than legacy patterns — construction must follow today’s rules',
      'Dialysis access maintenance has dedicated code families with their own bundling logic',
    ],
    payerChallenges: [
      'Utilization scrutiny on atherectomy and peripheral intervention volumes',
      'Vein coverage policies tightening with documentation demands rising',
    ],
    kpis: [
      'Endovascular claim first-pass rate',
      'Vein authorization approval rate',
      'Lab study denial rate',
      'OBL case revenue versus expected',
    ],
    relatedServices: ['medical-coding', 'prior-authorization-support', 'underpayment-identification', 'denial-management'],
    relatedSpecialties: ['cardiology-medical-billing', 'general-surgery-medical-billing', 'nephrology-medical-billing'],
    relatedLocations: ['houston-medical-billing', 'dallas-medical-billing', 'mcallen-medical-billing'],
    relatedGuides: ['prior-authorization', 'medical-necessity-denials', 'denial-management'],
    faqs: [
      {
        question: 'Vein ablation denials say “cosmetic” despite real symptoms — what fixes this?',
        answer:
          'The documentation chain payers require: symptom history with functional impact, duplex findings meeting the policy’s reflux criteria, and a documented conservative-therapy trial (usually compression for a defined period) — assembled into the authorization before scheduling. Symptomatic disease documented to the policy standard gets approved; symptomatic disease documented casually gets called cosmetic.',
      },
      {
        question: 'Does our vascular lab need accreditation to bill?',
        answer:
          'For many payers — including Medicare in most localities via LCD requirements — yes, lab accreditation (IAC or equivalent) is a payment condition for vascular studies. If your lab bills without it, that is an urgent compliance and revenue issue worth verifying immediately; we check accreditation-linked billing as part of vascular onboarding.',
      },
    ],
  },
];
