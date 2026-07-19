/**
 * Specialty entries, part 1 of 3. Validated in src/data/index.ts.
 * Every entry must carry specialty-specific substance: real complexity,
 * denial causes, and coding considerations — no keyword-swapped clones.
 * Educational content only; not coding or payer advice.
 */
import type { z } from 'astro/zod';
import type { specialtySchema } from '../lib/content-schemas';

type SpecialtyInput = z.input<typeof specialtySchema>;

export const specialties1: SpecialtyInput[] = [
  {
    slug: 'cardiology-medical-billing',
    title: 'Cardiology',
    specialtyName: 'Cardiology',
    seoTitle: 'Cardiology Medical Billing Services in Texas',
    metaDescription:
      'Cardiology billing support: diagnostics, interventional procedures, device checks, and global-period rules handled by a team that knows cardiology denials.',
    h1: 'Cardiology Medical Billing Services',
    summary:
      'Billing support for cardiology groups — from E/M and diagnostics through interventional procedures and device management — where documentation and bundling rules punish casual billing.',
    intro: [
      'Cardiology revenue spans office E/M, high-volume diagnostics (echo, stress testing, nuclear studies), interventional procedures, and device interrogations — each with its own coding logic, supervision requirements, and payer coverage policies. Few specialties combine this claim volume with this much per-claim complexity.',
      'Our cardiology billing support pairs disciplined claim production with the specialty-specific checks that matter: bundling edits on diagnostics, global-period tracking after interventions, and medical-necessity documentation for the tests payers scrutinize hardest.',
    ],
    featured: true,
    billingComplexity: [
      'Cardiology claims fail in specialty-specific ways: diagnostic tests bundled into same-day E/M without proper modifier support, interventional procedures billed inside another procedure’s global period, device checks billed beyond frequency limits, and nuclear or CT studies denied for medical necessity when documentation does not connect symptoms to the test ordered. Prior authorization now covers much of advanced cardiac imaging in commercial plans, adding a front-end gate that scheduling has to respect.',
    ],
    serviceCategories: [
      'Office and hospital evaluation & management visits',
      'Echocardiography, stress testing, and nuclear cardiology',
      'Cardiac catheterization and interventional procedures',
      'Pacemaker and defibrillator implantation and device checks',
      'Remote monitoring and cardiac rehabilitation services',
    ],
    documentationRisks: [
      'Test interpretations missing the elements payers require for the professional component',
      'Symptoms and indications not documented to support medical necessity of advanced imaging',
      'Procedure notes lacking detail to support add-on codes actually performed',
      'Supervision level for diagnostics not evident from the record',
    ],
    denialCauses: [
      'Medical-necessity denials on echo, nuclear, and CT studies',
      'Missing prior authorization for advanced imaging and procedures',
      'Bundling denials for same-session diagnostics and E/M',
      'Frequency-limit denials on device interrogations and repeat testing',
    ],
    codingConsiderations: [
      'Component billing (professional versus technical) must match where the service was performed and who owns the equipment',
      'Interventional coding builds from base procedures plus add-ons; unsupported add-ons and missed add-ons are both common',
      'Global periods after device implants and interventions require modifier discipline for unrelated visits',
    ],
    payerChallenges: [
      'Commercial prior-authorization programs covering most advanced cardiac imaging',
      'Medicare coverage policies (NCD/LCD) with specific indication lists for key tests',
      'Payer-specific rules on same-day diagnostic combinations',
    ],
    kpis: [
      'Clean claim rate on diagnostic claims',
      'Authorization-related denial rate',
      'Average reimbursement lag on interventional claims',
      'Denial overturn rate on medical-necessity appeals',
    ],
    relatedServices: ['prior-authorization-support', 'denial-management', 'medical-coding', 'underpayment-identification'],
    relatedSpecialties: ['vascular-surgery-medical-billing', 'internal-medicine-medical-billing', 'pulmonology-medical-billing'],
    relatedLocations: ['houston-medical-billing', 'dallas-medical-billing', 'san-antonio-medical-billing'],
    relatedGuides: ['prior-authorization', 'medical-necessity-denials', 'denial-management'],
    faqs: [
      {
        question: 'Why do cardiology imaging claims get denied so often?',
        answer:
          'Two dominant causes: missing or mismatched prior authorization, and medical-necessity findings where the documented indication does not match payer coverage policy for that test. Both are front-end problems — the fix is checking authorization and indication documentation before the study, not appealing after.',
      },
      {
        question: 'Can you handle both professional and global billing for our diagnostics?',
        answer:
          'Yes. We bill professional, technical, or global components according to where studies are performed and who owns the equipment, and we verify the setup per payer — component billing errors are a recurring source of both denials and underpayments in cardiology.',
      },
      {
        question: 'Do you work cardiology device-clinic billing?',
        answer:
          'Yes — device interrogations and remote monitoring have frequency limits and date-window rules that need tracking per device and payer. We maintain those schedules so routine checks stop generating routine denials.',
      },
    ],
  },
  {
    slug: 'orthopedic-medical-billing',
    title: 'Orthopedics',
    specialtyName: 'Orthopedics',
    seoTitle: 'Orthopedic Medical Billing Services in Texas',
    metaDescription:
      'Orthopedic billing support: surgical global periods, fracture care, workers’ comp claims, and implant billing handled with orthopedic-specific discipline.',
    h1: 'Orthopedic Medical Billing Services',
    summary:
      'Billing for orthopedic groups — surgical packages, global periods, fracture care, DME, and the workers’ compensation claims most billers handle badly.',
    intro: [
      'Orthopedic billing is dominated by the surgical package: what is included in the global period, what is separately billable, and how to document the difference. Add fracture care billing choices, casting and supply charges, in-office DME, imaging, and a meaningful workers’ compensation caseload, and orthopedic claims demand more per-claim judgment than most specialties.',
      'Our orthopedic billing support builds the workflows this specialty needs: global-period calendars per surgery, workers’ comp claim handling with jurisdiction-specific requirements, and denial workflows tuned to the bundling and modifier disputes payers raise on surgical claims.',
    ],
    featured: true,
    billingComplexity: [
      'The global surgical package concentrates risk: visits and services inside the global period are denied unless properly documented as unrelated or staged, while legitimately separate services go unbilled by cautious staff — losing revenue in both directions. Workers’ compensation adds a parallel billing universe with its own fee schedules, forms, and treatment-approval workflows; in Texas, DWC rules govern billing and disputes, and claims handled like commercial insurance simply fail.',
    ],
    serviceCategories: [
      'Surgical procedures with 10- and 90-day global periods',
      'Fracture care and casting services',
      'In-office imaging and musculoskeletal ultrasound',
      'Durable medical equipment and supplies',
      'Workers’ compensation injury care',
    ],
    documentationRisks: [
      'Post-operative visits not distinguishing global-included care from unrelated problems',
      'Operative notes lacking laterality, approach, or levels needed for code specificity',
      'Fracture care documentation ambiguous between global fracture treatment and itemized visits',
      'Work-injury records missing employer, injury-date, and causation details comp carriers require',
    ],
    denialCauses: [
      'Global-period denials on post-operative visits and procedures',
      'Bundling and modifier disputes on multi-procedure surgeries',
      'Workers’ comp denials for missing authorization or wrong forms',
      'Medical-necessity denials on imaging and injections',
    ],
    codingConsiderations: [
      'Modifier use around the global package (staged, unrelated, return-to-OR) requires documentation that survives payer review',
      'Multiple-procedure reductions and bilateral rules materially change expected payment and must be tracked at posting',
      'Fracture care can often be billed as a global package or itemized — the choice has documentation and revenue consequences per case',
    ],
    payerChallenges: [
      'Texas workers’ compensation (DWC) fee schedules, treatment guidelines, and dispute processes',
      'Commercial prior authorization for surgeries, advanced imaging, and injections',
      'Payer-specific bundling edits stricter than standard NCCI on some contracts',
    ],
    kpis: [
      'Surgical claim first-pass resolution rate',
      'Global-period denial rate',
      'Workers’ comp days-to-payment versus commercial',
      'Multiple-procedure payment variance rate',
    ],
    relatedServices: ['medical-coding', 'prior-authorization-support', 'underpayment-identification', 'denial-management'],
    relatedSpecialties: ['pain-management-billing', 'physical-therapy-billing', 'neurosurgery-medical-billing'],
    relatedLocations: ['dallas-medical-billing', 'fort-worth-medical-billing', 'houston-medical-billing'],
    relatedGuides: ['medical-necessity-denials', 'denial-management', 'prior-authorization'],
    faqs: [
      {
        question: 'Why are our post-op visits getting denied?',
        answer:
          'They are almost certainly hitting the surgical global period. Visits inside the global window are payable only when genuinely unrelated or otherwise qualifying — with the right modifier and documentation. The fix is a global-period calendar per surgery and coding review on post-op encounters, which is exactly what we run.',
      },
      {
        question: 'Do you handle Texas workers’ compensation billing?',
        answer:
          'Yes. Texas comp claims follow DWC rules — specific billing forms, fee schedules, preauthorization for listed services, and formal dispute processes with deadlines. We work comp claims as their own workflow rather than forcing them through commercial habits, which is where most comp revenue gets lost.',
      },
    ],
  },
  {
    slug: 'pain-management-billing',
    title: 'Pain Management',
    specialtyName: 'Pain Management',
    seoTitle: 'Pain Management Billing Services in Texas',
    metaDescription:
      'Pain management billing: injection series, authorization tracking, medical-necessity documentation, and payer scrutiny handled with specialty discipline.',
    h1: 'Pain Management Billing Services',
    summary:
      'Billing for interventional pain practices — where nearly every procedure needs authorization, documentation is scrutinized, and payer policy changes land constantly.',
    intro: [
      'Pain management may face more payer scrutiny per claim than any other office-based specialty: interventional procedures with strict medical-necessity criteria, series limits on injections, mandatory conservative-therapy documentation, and authorization requirements that differ by payer and change frequently. Urine drug testing and medication management add their own coverage and frequency rules.',
      'Our pain management billing support is built around the authorization-and-documentation gauntlet: verifying requirements before scheduling, tracking series counts and date windows, and appealing medical-necessity denials with the documentation payers’ own policies demand.',
    ],
    billingComplexity: [
      'Payer policies for interventional pain typically require documented failure of conservative treatment, impose limits on injection frequency and series counts, and mandate authorization per procedure — with criteria that vary by payer and get revised regularly. Claims also face heightened post-payment review; documentation that supported payment once can still be clawed back later if it does not meet policy detail. Billing this specialty well means running policy-aware workflows, not just clean claims.',
    ],
    serviceCategories: [
      'Epidural steroid injections and facet procedures',
      'Radiofrequency ablation',
      'Spinal cord stimulator trials and implants',
      'Medication management visits',
      'Urine drug testing programs',
    ],
    documentationRisks: [
      'Conservative-therapy history missing or vague before interventional procedures',
      'Pain scores and functional outcomes not documented between series injections',
      'Fluoroscopic guidance documentation incomplete',
      'UDT orders lacking individualized medical-necessity rationale',
    ],
    denialCauses: [
      'Medical-necessity denials citing payer interventional-pain policies',
      'Missing or exceeded prior authorizations',
      'Frequency and series-limit denials on repeat injections',
      'UDT denials for frequency and panel-size rules',
    ],
    codingConsiderations: [
      'Injection coding depends on levels, laterality, and guidance — each element documented or the claim is exposed',
      'Stimulator trials versus permanent implants follow distinct coding and authorization paths',
      'Drug-testing code selection (presumptive versus definitive, panel scope) is a known audit focus area',
    ],
    payerChallenges: [
      'Frequent payer policy revisions for interventional procedures',
      'Aggressive prepayment and post-payment review programs',
      'Workers’ comp treatment-guideline gates on pain procedures in Texas',
    ],
    kpis: [
      'Authorization coverage rate on procedures performed',
      'Medical-necessity denial and overturn rates',
      'Days from procedure to payment',
      'Post-payment review/audit outcome tracking',
    ],
    relatedServices: ['prior-authorization-support', 'denial-management', 'coding-audit', 'claims-appeals'],
    relatedSpecialties: ['orthopedic-medical-billing', 'anesthesiology-medical-billing', 'neurology-medical-billing'],
    relatedLocations: ['houston-medical-billing', 'austin-medical-billing', 'dallas-medical-billing'],
    relatedGuides: ['prior-authorization', 'medical-necessity-denials', 'denial-management'],
    faqs: [
      {
        question: 'Our injections keep getting denied for medical necessity — why?',
        answer:
          'Usually the documentation does not track the payer’s policy checklist: conservative therapy tried and failed, response to prior injections quantified, and interval requirements met. Payers deny against their policy text, so the winning workflow is documenting to that text before the procedure and appealing with it after.',
      },
      {
        question: 'Can you track our authorization series and visit limits?',
        answer:
          'Yes — series counts, date windows, and unit limits are tracked per patient per payer, with alerts before a procedure would exceed what was approved. Exceeded-authorization denials are among the most preventable losses in pain management.',
      },
    ],
  },
  {
    slug: 'family-medicine-medical-billing',
    title: 'Family Medicine',
    specialtyName: 'Family Medicine',
    seoTitle: 'Family Medicine Billing Services in Texas',
    metaDescription:
      'Family medicine billing: high-volume E/M, preventive visit rules, chronic care programs, and vaccine billing handled accurately at primary care scale.',
    h1: 'Family Medicine Billing Services',
    summary:
      'High-volume billing for family practices — E/M leveling, preventive-versus-problem visit rules, vaccines, and care-management programs, done accurately at scale.',
    intro: [
      'Family medicine billing is a volume game with subtle rules: E/M leveling under current guidelines, preventive visits colliding with problem visits in the same encounter, vaccine and administration coding, in-office procedures, and the growing family of care-management and wellness programs that pay modestly per patient but add up — when billed correctly and consistently.',
      'Our family medicine billing keeps the volume moving while protecting the margins: same-day preventive-plus-problem billing handled correctly, chronic care and wellness-visit programs tracked to their rules, and E/M distributions monitored so coding stays defensible.',
    ],
    billingComplexity: [
      'The recurring traps in family medicine are combination encounters — a preventive visit where a problem was also addressed, billable separately only with distinct documentation and correct modifiers — and program billing (annual wellness visits, chronic care management, transitional care) where each code carries eligibility, time, and consent requirements. At thousands of encounters per month, small systematic errors compound into real money in either direction.',
    ],
    serviceCategories: [
      'Problem-focused E/M visits across all ages',
      'Preventive medicine and annual wellness visits',
      'Immunizations and injection administration',
      'In-office procedures and point-of-care testing',
      'Chronic care management and remote monitoring programs',
    ],
    documentationRisks: [
      'Combined preventive/problem visits without clearly separable documentation',
      'Time-based billing without adequate time documentation',
      'Care-management time logs incomplete for CCM billing',
      'Vaccine lot, site, and counseling documentation gaps for pediatric patients',
    ],
    denialCauses: [
      'Preventive-versus-problem visit denials and patient billing disputes',
      'Frequency denials on wellness visits billed early',
      'Vaccine administration denials for payer-specific coding rules',
      'Eligibility denials from high-churn commercial and Medicaid panels',
    ],
    codingConsiderations: [
      'E/M level distribution should be monitored per provider against specialty norms — outliers in either direction deserve review',
      'Medicare wellness visits and commercial preventive visits follow different code families with different rules',
    ],
    payerChallenges: [
      'Broad payer mix — commercial, Medicare, Medicare Advantage, Medicaid, marketplace — each with quirks',
      'Value-based program reporting obligations layered on fee-for-service billing',
    ],
    kpis: [
      'Encounters billed per day and charge lag',
      'Clean claim rate at volume',
      'Preventive/problem same-day capture rate',
      'Care-management program enrollment and billing consistency',
    ],
    relatedServices: ['medical-billing', 'charge-entry', 'insurance-eligibility-verification', 'practice-financial-reporting'],
    relatedSpecialties: ['internal-medicine-medical-billing', 'pediatric-medical-billing', 'primary-care-medical-billing'],
    relatedLocations: ['san-antonio-medical-billing', 'fort-worth-medical-billing', 'el-paso-medical-billing'],
    relatedGuides: ['medical-billing-process', 'clean-claim-rate', 'patient-responsibility'],
    faqs: [
      {
        question: 'Patients complain when we bill an office visit with their physical — can billing fix that?',
        answer:
          'Partly. When a problem is genuinely addressed during a preventive visit, separate billing is legitimate — but it requires distinct documentation, correct modifiers, and ideally a front-desk script that warns patients how their insurance handles it. We handle the billing mechanics and help you set the communication practice.',
      },
      {
        question: 'Is chronic care management worth billing at our size?',
        answer:
          'Frequently yes — CCM and similar programs produce steady recurring revenue at primary-care panel sizes, but only with the enrollment, consent, and time-tracking discipline the codes require. We assess your panel and set up compliant tracking before any claims go out.',
      },
    ],
  },
  {
    slug: 'internal-medicine-medical-billing',
    title: 'Internal Medicine',
    specialtyName: 'Internal Medicine',
    seoTitle: 'Internal Medicine Billing Services in Texas',
    metaDescription:
      'Internal medicine billing: complex E/M, chronic disease management, Medicare wellness programs, and multi-payer discipline for internist practices.',
    h1: 'Internal Medicine Billing Services',
    summary:
      'Billing for internists — complex E/M with multimorbidity, Medicare-heavy panels, wellness and care-management programs, and the documentation to support higher-acuity coding.',
    intro: [
      'Internal medicine panels skew older and sicker than general family practice: more chronic conditions per patient, more Medicare and Medicare Advantage, more complex medical decision-making — and therefore more scrutiny when E/M levels reflect that complexity. Care-management programs fit these panels naturally but demand administrative discipline.',
      'Our internal medicine billing supports the acuity honestly: E/M coding review that defends legitimate complexity rather than defaulting down, Medicare program billing run to the letter, and denial workflows tuned to the Medicare Advantage plans that dominate internist AR problems.',
    ],
    billingComplexity: [
      'Internists legitimately bill higher E/M levels than many specialties because their patients carry more concurrent conditions — but payers audit exactly that pattern, so documentation of medical decision-making must carry the level billed. Medicare Advantage adds friction: plan-specific authorization rules, aggressive claim edits, and slower dispute paths than traditional Medicare, often across half a dozen plans in one panel.',
    ],
    serviceCategories: [
      'Complex evaluation & management across chronic multimorbidity',
      'Medicare annual wellness visits and preventive services',
      'Chronic care and principal care management programs',
      'In-office diagnostics and infusion services',
      'Transitional care after hospital discharge',
    ],
    documentationRisks: [
      'Medical decision-making documentation not supporting billed complexity',
      'Problem lists carried forward without evidence of active management',
      'Time logs for care-management programs incomplete or duplicated across programs',
      'Transitional care contact and visit timing requirements not evidenced',
    ],
    denialCauses: [
      'E/M downcoding or documentation requests from Medicare Advantage plans',
      'Wellness visit frequency and eligibility denials',
      'Care-management billing conflicts between overlapping programs',
      'Eligibility churn across Medicare Advantage plan switches each January',
    ],
    codingConsiderations: [
      'Concurrent program billing (CCM, PCM, RPM, TCM) has explicit overlap restrictions that must be checked per month per patient',
      'Higher-level E/M is defensible only through documented decision-making complexity — templates that look identical across visits invite downcoding',
    ],
    payerChallenges: [
      'Medicare Advantage plan proliferation with divergent rules per plan',
      'Annual plan-switch churn requiring January eligibility rigor',
    ],
    kpis: [
      'E/M distribution by provider versus internal medicine norms',
      'Medicare Advantage denial rate by plan',
      'Care-management revenue per enrolled patient',
      'January eligibility denial spike ratio',
    ],
    relatedServices: ['medical-billing', 'insurance-eligibility-verification', 'medical-coding', 'denial-management'],
    relatedSpecialties: ['family-medicine-medical-billing', 'cardiology-medical-billing', 'endocrinology-medical-billing'],
    relatedLocations: ['houston-medical-billing', 'dallas-medical-billing', 'plano-medical-billing'],
    relatedGuides: ['denial-rate', 'insurance-eligibility-verification', 'net-collection-rate'],
    faqs: [
      {
        question: 'Medicare Advantage plans keep downcoding our visits — what can we do?',
        answer:
          'Fight with documentation: appeal downcodings where the record supports the level, and fix documentation patterns where it does not. We track downcoding by plan and provider, appeal systematically, and report which plans behave worst — data that is also useful at contract renewal.',
      },
      {
        question: 'Can we bill chronic care management and remote monitoring together?',
        answer:
          'Sometimes — the programs have specific overlap rules about which can be billed concurrently for the same patient and month, and time counted once cannot count twice. We run those checks monthly per patient before claims go out, because overlap denials often arrive as post-payment takebacks.',
      },
    ],
  },
  {
    slug: 'pediatric-medical-billing',
    title: 'Pediatrics',
    specialtyName: 'Pediatrics',
    seoTitle: 'Pediatric Medical Billing Services in Texas',
    metaDescription:
      'Pediatric billing: well-child schedules, vaccine programs, Texas Medicaid and CHIP claims, and newborn billing handled by a pediatric-aware team.',
    h1: 'Pediatric Medical Billing Services',
    summary:
      'Billing for pediatric practices — well-child visit schedules, VFC vaccine billing, Texas Medicaid and CHIP volume, and the newborn coverage chase.',
    intro: [
      'Pediatric billing runs on rhythms other specialties never see: well-child visit schedules with strict periodicity, vaccines under the Vaccines for Children program billed as administration-only, heavy Texas Medicaid and CHIP participation with managed-care plan fragmentation, and the perennial scramble of newborns billed before their coverage exists in any system.',
      'Our pediatric billing handles these rhythms as designed workflows: periodicity tracked against payer schedules, VFC administration billing kept clean, Medicaid managed-care claims routed to the right plan, and a newborn process that stops eating the first month of every new patient relationship.',
    ],
    billingComplexity: [
      'Texas pediatrics means Texas Medicaid — and Medicaid managed care means one program fragmented across multiple MCOs, each with its own claim quirks, portals, and denial behaviors. Add VFC rules (vaccine product free, administration billable, private-stock billing an audit risk), Texas Health Steps checkup requirements, and newborn eligibility lag, and pediatric AR problems are structural rather than random.',
    ],
    serviceCategories: [
      'Well-child checkups under Texas Health Steps and commercial schedules',
      'Immunizations under VFC and private stock',
      'Sick visits and same-day well/sick combinations',
      'Newborn hospital and first-month office care',
      'Developmental and behavioral screening programs',
    ],
    documentationRisks: [
      'Screening components of well-child visits not individually documented',
      'VFC eligibility category not recorded per vaccine encounter',
      'Same-day well and sick documentation insufficiently distinct',
      'Newborn records missing subscriber linkage details for coverage chase',
    ],
    denialCauses: [
      'Newborn claims denied while enrollment lags birth',
      'Well-child frequency denials against periodicity schedules',
      'VFC administration billing errors and vaccine-stock mismatches',
      'Medicaid MCO-specific edits and eligibility churn',
    ],
    codingConsiderations: [
      'Vaccine administration coding counts components and counseling — undercounting is chronic, silent revenue loss at pediatric volumes',
      'Well-visit plus sick-visit same-day billing requires modifier discipline and distinct documentation',
    ],
    payerChallenges: [
      'Texas Medicaid managed-care fragmentation across MCOs',
      'CHIP and Medicaid eligibility churn requiring continuous verification',
      'Commercial plans with differing preventive schedules from Texas Health Steps',
    ],
    kpis: [
      'Well-child visit capture rate against eligible panel',
      'Vaccine administration revenue per vaccine encounter',
      'Newborn claim first-pass payment rate',
      'Medicaid MCO denial rate by plan',
    ],
    relatedServices: ['medical-billing', 'insurance-eligibility-verification', 'charge-entry', 'denial-management'],
    relatedSpecialties: ['family-medicine-medical-billing', 'primary-care-medical-billing', 'urgent-care-billing'],
    relatedLocations: ['san-antonio-medical-billing', 'el-paso-medical-billing', 'mcallen-medical-billing'],
    relatedGuides: ['insurance-eligibility-verification', 'clean-claim-rate', 'coordination-of-benefits'],
    faqs: [
      {
        question: 'Why do our newborn claims keep denying?',
        answer:
          'Newborns are usually not in payer systems yet when first claims go out — coverage takes days to weeks to attach after birth, and Medicaid newborn processes have their own lag. The workflow answer is capturing subscriber details at the first visit, holding claims the right length of time per payer, and chasing enrollment confirmation rather than rebilling blindly.',
      },
      {
        question: 'Do you work with all the Texas Medicaid managed-care plans?',
        answer:
          'Yes — pediatric panels in Texas typically span several MCOs, and we work each plan’s claims through its own portal behaviors and edit quirks, tracking denial rates by plan so you can see which MCOs cost you the most administrative effort.',
      },
    ],
  },
  {
    slug: 'psychiatry-medical-billing',
    title: 'Psychiatry',
    specialtyName: 'Psychiatry',
    seoTitle: 'Psychiatry Medical Billing Services in Texas',
    metaDescription:
      'Psychiatry billing: E/M with psychotherapy add-ons, medication management, telepsychiatry rules, and parity-aware denial handling for psychiatric practices.',
    h1: 'Psychiatry Medical Billing Services',
    summary:
      'Billing for psychiatric practices — E/M plus psychotherapy add-on structures, telepsychiatry billing rules, and payers whose behavioral carve-outs complicate everything.',
    intro: [
      'Psychiatry billing sits at the intersection of medical and behavioral billing rules: visits coded as E/M, psychotherapy billed as time-based add-ons in the same encounter, and claims often routed to a behavioral health carve-out vendor with its own network, authorization, and claims infrastructure that the patient’s ID card barely mentions.',
      'Our psychiatry billing gets the structural pieces right: E/M-plus-add-on coding supported by time and content documentation, carve-out routing identified at verification, and telepsychiatry claims coded to each payer’s current telehealth rules.',
    ],
    billingComplexity: [
      'The E/M-plus-psychotherapy structure demands documentation that separates medical management time from therapy time within one encounter — a distinction auditors check. Carve-out routing causes silent failures: claims sent to the medical payer instead of the behavioral vendor vanish into rejections. Telepsychiatry, now a large share of psychiatric volume, keeps its own moving rulebook of place-of-service and modifier requirements that vary by payer and continue to evolve post-pandemic.',
    ],
    serviceCategories: [
      'Psychiatric diagnostic evaluations',
      'Medication management E/M visits',
      'E/M with psychotherapy add-on sessions',
      'Telepsychiatry across Texas',
      'Long-acting injectable administration',
    ],
    documentationRisks: [
      'Therapy time not documented separately from medical management time',
      'Telehealth modality, consent, and location details missing from notes',
      'Medical necessity for ongoing visit frequency not refreshed in treatment plans',
    ],
    denialCauses: [
      'Claims misrouted between medical plans and behavioral carve-outs',
      'Telehealth coding denials as payer rules shift',
      'Authorization lapses on ongoing treatment episodes',
      'Add-on psychotherapy denied where time documentation is thin',
    ],
    codingConsiderations: [
      'Psychotherapy add-on selection is strictly time-based — rounded or templated times are an audit flag',
      'Place-of-service and telehealth modifiers must match each payer’s current policy, which still differs between payers',
    ],
    payerChallenges: [
      'Behavioral health carve-out vendors with separate networks and claims systems',
      'Payer-by-payer telehealth policy divergence',
      'Parity-inconsistent authorization burdens on psychiatric care',
    ],
    kpis: [
      'Claim routing accuracy rate (medical versus carve-out)',
      'Telepsychiatry denial rate by payer',
      'Authorization continuity rate on active patients',
      'Days in AR versus behavioral benchmark',
    ],
    relatedServices: ['insurance-eligibility-verification', 'credentialing', 'denial-management', 'medical-billing'],
    relatedSpecialties: ['behavioral-health-billing', 'mental-health-billing', 'addiction-treatment-billing'],
    relatedLocations: ['austin-medical-billing', 'houston-medical-billing', 'dallas-medical-billing'],
    relatedGuides: ['insurance-eligibility-verification', 'prior-authorization', 'denial-management'],
    faqs: [
      {
        question: 'Why do some of our claims disappear with certain commercial plans?',
        answer:
          'Behavioral carve-outs. Many commercial plans delegate psychiatric benefits to a separate behavioral vendor with its own payer ID and claims system; claims sent to the medical plan get rejected or lost. Verification has to identify the carve-out per patient before the first claim — that is a standard step in our psychiatry workflow.',
      },
      {
        question: 'Is telepsychiatry still billable across Texas payers?',
        answer:
          'Broadly yes — telepsychiatry retains among the strongest telehealth coverage of any service line, but coding requirements (place of service, modifiers, audio-only rules) still differ by payer and continue to change. We maintain a per-payer telehealth matrix and update claims behavior as policies move; specifics should always be verified against current payer policy.',
      },
    ],
  },
  {
    slug: 'behavioral-health-billing',
    title: 'Behavioral Health',
    specialtyName: 'Behavioral Health',
    seoTitle: 'Behavioral Health Billing Services in Texas',
    metaDescription:
      'Behavioral health billing: IOP and PHP program claims, authorization management, carve-out navigation, and utilization review support for treatment programs.',
    h1: 'Behavioral Health Billing Services',
    summary:
      'Billing for behavioral health programs — IOP/PHP program billing, concurrent authorization cycles, and the utilization-review documentation rhythm program care depends on.',
    intro: [
      'Program-level behavioral health — intensive outpatient, partial hospitalization, structured day treatment — bills differently from office visits: per-diem or per-program codes, authorizations granted in short blocks with concurrent review, and revenue that lives or dies on utilization-review documentation submitted on the payer’s clock.',
      'Our behavioral health billing runs that operational rhythm: authorization blocks tracked to the day, concurrent review submissions calendared, program claims coded to each payer’s billing construction, and denials fought with the clinical documentation UR already assembled.',
    ],
    billingComplexity: [
      'Program billing failure is usually authorization failure: a patient attends days that were never authorized because concurrent review slipped, and those days become nearly unrecoverable. Payers also differ on how programs bill — per-diem codes, hourly constructions, or bundled rates — and on medical-necessity criteria for each level of care, making level-of-care transitions (detox to residential to IOP) a billing event that needs managing, not just a clinical one.',
    ],
    serviceCategories: [
      'Intensive outpatient programs (IOP)',
      'Partial hospitalization programs (PHP)',
      'Structured outpatient and day treatment',
      'Individual, group, and family therapy within programs',
      'Psychological and psychosocial assessments',
    ],
    documentationRisks: [
      'Attendance and duration records not matching billed program days',
      'Treatment plan updates missing for concurrent review deadlines',
      'Level-of-care justification thin at admission and transition points',
      'Group session records lacking required individualized notes',
    ],
    denialCauses: [
      'Unauthorized days from lapsed concurrent reviews',
      'Level-of-care denials at admission or step-down',
      'Program code construction mismatches by payer',
      'Out-of-network claims stalled in negotiation or single-case agreements',
    ],
    codingConsiderations: [
      'Program billing constructions differ materially by payer — the same IOP week bills differently across plans and must be mapped per contract',
      'Individual services inside program days may or may not be separately billable depending on the payer’s bundling rules',
    ],
    payerChallenges: [
      'Concurrent review cadences with short authorization blocks',
      'Carve-out vendors managing behavioral benefits with separate rules',
      'Out-of-network prevalence requiring single-case agreement workflows',
    ],
    kpis: [
      'Authorized-versus-attended day match rate',
      'Concurrent review on-time submission rate',
      'Denied program days as share of billed days',
      'Average authorization block length by payer',
    ],
    relatedServices: ['prior-authorization-support', 'denial-management', 'insurance-eligibility-verification', 'claims-appeals'],
    relatedSpecialties: ['psychiatry-medical-billing', 'addiction-treatment-billing', 'mental-health-billing'],
    relatedLocations: ['dallas-medical-billing', 'austin-medical-billing', 'houston-medical-billing'],
    relatedGuides: ['prior-authorization', 'medical-necessity-denials', 'denial-management'],
    faqs: [
      {
        question: 'How do we stop losing days to lapsed authorizations?',
        answer:
          'Treat concurrent review as a production calendar: every active patient has a next-review date, clinical updates are assembled ahead of it, and submissions are tracked like claims. The billing side maintains that calendar and reconciles attended days against authorized days daily — a lapse then becomes an exception, not a discovery at denial time.',
      },
      {
        question: 'Can you bill programs that are out of network?',
        answer:
          'Yes — out-of-network program billing runs through verification of OON benefits, single-case agreement negotiation where payers allow it, and member-claim strategies where they do not. Recovery is genuinely harder out of network; we are straightforward about expected outcomes per payer.',
      },
    ],
  },
  {
    slug: 'mental-health-billing',
    title: 'Mental Health',
    specialtyName: 'Mental Health',
    seoTitle: 'Mental Health Billing Services for Texas Therapists',
    metaDescription:
      'Mental health billing for therapy practices: session billing, LPC/LCSW credentialing tiers, telehealth therapy claims, and clean recurring-visit workflows.',
    h1: 'Mental Health Billing Services',
    summary:
      'Billing for outpatient therapy practices — counselors, social workers, and therapists — where session volume, credential tiers, and telehealth rules shape the revenue.',
    intro: [
      'Outpatient mental health billing looks simple — a small set of time-based session codes — but the operational reality is dense: license-level credentialing and reimbursement tiers (LPC, LCSW, LMFT, psychologist), associate-level supervision billing rules that vary by payer, session-frequency scrutiny on long-running episodes, and a patient population where coverage changes and high deductibles hit collections hard.',
      'Our mental health billing keeps therapy practices paid: credentialing managed per clinician license level, telehealth sessions coded per payer, recurring-session claims produced on a clean weekly rhythm, and patient balances handled with the sensitivity a therapy relationship requires.',
    ],
    billingComplexity: [
      'Reimbursement differs by license level with most payers, so group practices must track which clinician credential bills what rate under which contract — and whether pre-licensed associates can bill at all under supervision, a rule that varies sharply between commercial plans and against Medicaid. High-deductible plans make many therapy patients functionally self-pay for months each year, which moves the collections problem to eligibility-checking and patient-financial communication rather than claims.',
    ],
    serviceCategories: [
      'Individual psychotherapy sessions (time-based)',
      'Couples and family therapy',
      'Group therapy',
      'Teletherapy across Texas',
      'Initial diagnostic assessments',
    ],
    documentationRisks: [
      'Session start/stop times missing for time-based codes',
      'Treatment plans not updated to support ongoing frequency',
      'Supervision documentation gaps for associate-level clinicians',
    ],
    denialCauses: [
      'Claims denied for non-credentialed or wrong-tier rendering clinicians',
      'Deductible-phase patient balances aging uncollected',
      'Telehealth coding mismatches by payer',
      'Session-frequency reviews on long-running treatment episodes',
    ],
    codingConsiderations: [
      'Time-based session codes require actual time documentation — identical times across a caseload draw review',
      'Rendering-provider identifiers must match credentialed license tiers per payer contract',
    ],
    payerChallenges: [
      'License-tier reimbursement differences and associate billing rules per payer',
      'Behavioral carve-outs and EAP session-billing interactions',
    ],
    kpis: [
      'Sessions billed versus sessions held (leakage check)',
      'Denial rate by clinician credential tier',
      'Patient balance share of total revenue',
      'Average days from session to payment',
    ],
    relatedServices: ['credentialing', 'insurance-eligibility-verification', 'patient-billing', 'medical-billing'],
    relatedSpecialties: ['psychiatry-medical-billing', 'psychology-billing', 'behavioral-health-billing'],
    relatedLocations: ['austin-medical-billing', 'plano-medical-billing', 'fort-worth-medical-billing'],
    relatedGuides: ['insurance-eligibility-verification', 'patient-responsibility', 'provider-credentialing'],
    faqs: [
      {
        question: 'Can our pre-licensed associates bill insurance?',
        answer:
          'It depends on the payer. Some commercial plans credential and reimburse associate-level clinicians under supervision arrangements; others do not recognize them at all, and Medicaid has its own rules. We map the answer per payer for your roster so sessions are scheduled with billing reality in mind.',
      },
      {
        question: 'How do you handle patients whose deductibles reset every January?',
        answer:
          'With January eligibility re-verification across the caseload, updated patient-cost estimates communicated before sessions, and a card-on-file or time-of-service collection practice if you adopt one. Therapy practices that skip this spend spring collecting winter balances.',
      },
    ],
  },
  {
    slug: 'psychology-billing',
    title: 'Psychology',
    specialtyName: 'Psychology',
    seoTitle: 'Psychology Billing Services | Testing & Therapy Claims',
    metaDescription:
      'Psychology billing: neuropsychological and psychological testing batteries, authorization for testing hours, and therapy billing for psychologist practices.',
    h1: 'Psychology Billing Services',
    summary:
      'Billing for psychologists — where testing batteries with hour-based codes, authorization for testing time, and report-writing rules create billing problems therapy-only practices never meet.',
    intro: [
      'Psychological and neuropsychological testing is its own billing discipline: batteries built from base and add-on hour codes, distinctions between psychologist time and technician time, authorization requests measured in hours, and payer rules about scoring and report-writing time that differ enough to change what a battery is worth.',
      'Our psychology billing handles both sides of the practice — clean therapy billing, and testing claims built code-by-code from documented hours with authorizations to match — so batteries stop being underpaid puzzles.',
    ],
    billingComplexity: [
      'Testing claims fail when billed hours drift from authorized hours or documentation does not separate administration, scoring, and interpretation time by who performed it — psychologist versus technician codes pay differently and payers check. Authorization is hours-based: under-requesting truncates the battery financially, over-requesting invites denial, and the request needs clinical justification per instrument planned.',
    ],
    serviceCategories: [
      'Neuropsychological testing batteries',
      'Psychological and psychoeducational testing',
      'Diagnostic interviews and evaluations',
      'Individual psychotherapy',
      'Forensic and disability evaluations (often non-insurance)',
    ],
    documentationRisks: [
      'Testing time logs not separating administration, scoring, and interpretation',
      'Technician-administered hours not distinguished from psychologist hours',
      'Instrument list and clinical rationale missing from authorization requests',
    ],
    denialCauses: [
      'Testing hours billed beyond authorized hours',
      'Medical-necessity denials on testing referrals payers view as educational',
      'Technician/psychologist code construction errors',
      'Report and feedback session billing rules varying by payer',
    ],
    codingConsiderations: [
      'Testing code family distinguishes evaluation services from test administration and from technician administration — construction must mirror who did what for how long',
      'Educational testing (learning disabilities for school purposes) is frequently excluded from medical benefits — screen referrals before booking batteries',
    ],
    payerChallenges: [
      'Hour-based authorization negotiation per battery',
      'Coverage exclusions for educational and forensic purposes',
    ],
    kpis: [
      'Authorized-versus-billed testing hours match rate',
      'Testing claim denial rate',
      'Average revenue per completed battery',
      'Therapy session collection metrics alongside testing',
    ],
    relatedServices: ['prior-authorization-support', 'medical-billing', 'benefits-verification', 'denial-management'],
    relatedSpecialties: ['mental-health-billing', 'psychiatry-medical-billing', 'behavioral-health-billing'],
    relatedLocations: ['houston-medical-billing', 'austin-medical-billing', 'san-antonio-medical-billing'],
    relatedGuides: ['prior-authorization', 'medical-necessity-denials', 'patient-responsibility'],
    faqs: [
      {
        question: 'Why did the payer only pay part of our testing battery?',
        answer:
          'Most commonly: billed hours exceeded authorized hours, technician versus psychologist codes were constructed differently than documentation supports, or the payer applies its own rules about scoring and report time. We rebuild the claim against the time logs and the authorization, and appeal the difference where documentation supports it.',
      },
      {
        question: 'Does insurance cover testing for ADHD or learning disabilities?',
        answer:
          'Coverage hinges on purpose: testing for medical diagnosis and treatment is often covered; testing primarily for educational placement frequently is not. The answer is payer- and plan-specific, so we verify testing benefits and exclusions before batteries are scheduled — protecting both the practice and the family from surprises.',
      },
    ],
  },
  {
    slug: 'dermatology-medical-billing',
    title: 'Dermatology',
    specialtyName: 'Dermatology',
    seoTitle: 'Dermatology Medical Billing Services in Texas',
    metaDescription:
      'Dermatology billing: lesion destruction and excision coding, pathology billing, cosmetic-versus-medical separation, and Mohs surgery claims.',
    h1: 'Dermatology Medical Billing Services',
    summary:
      'Billing for dermatology practices — procedure coding by size, site, and count; pathology flows; Mohs claims; and the clean separation of cosmetic from medical revenue.',
    intro: [
      'Dermatology generates dense procedural claims: destructions, biopsies, excisions, and repairs coded by lesion count, size, anatomic site, and pathology results — often several on one visit, with bundling rules governing which combinations pay. Beneath it runs a second business, cosmetic services, that must stay cleanly separated from insurance billing.',
      'Our dermatology billing gets the procedural detail right claim by claim — counts, sizes, sites, and the pathology-dependent coding that sometimes requires holding claims for results — while keeping cosmetic revenue segregated and E/M-with-procedure billing defensible.',
    ],
    billingComplexity: [
      'Excision coding depends on final pathology (benign versus malignant changes the code family) and on measured size including margins — claims billed before pathology returns, or coded from lesion size alone, systematically miscode. Same-day E/M with procedures is a chronic modifier-25 battleground with payers running prepayment edits against it. Mohs surgery adds stage-and-block documentation requirements that payers audit specifically.',
    ],
    serviceCategories: [
      'Lesion destructions, biopsies, and excisions',
      'Mohs micrographic surgery',
      'Repairs and reconstructions after excision',
      'Phototherapy and biologic therapy management',
      'Dermatopathology (where in-house lab exists)',
    ],
    documentationRisks: [
      'Lesion sizes documented without margins for excision coding',
      'Mohs stage, block, and mapping documentation incomplete',
      'E/M notes on procedure days not evidencing separately identifiable service',
      'Cosmetic and medical services intermixed in documentation',
    ],
    denialCauses: [
      'Modifier-25 prepayment edits on same-day E/M with procedures',
      'Multiple-procedure bundling on lesion combinations',
      'Medical-necessity denials for benign lesion removals',
      'Biologic prior authorization and specialty-pharmacy routing failures',
    ],
    codingConsiderations: [
      'Excision codes finalize with pathology — a claims-hold workflow for path-dependent codes prevents systematic recoding',
      'Destruction and biopsy counts, sites, and methods each affect code selection and payer edits',
    ],
    payerChallenges: [
      'Benign-lesion coverage policies requiring symptom or change documentation',
      'Biologic drug authorization programs for psoriasis and related conditions',
    ],
    kpis: [
      'Procedure claim first-pass rate',
      'Modifier-25 denial and overturn rates',
      'Pathology-hold claim turnaround time',
      'Cosmetic revenue segregation accuracy (zero insurance leakage)',
    ],
    relatedServices: ['medical-coding', 'claims-scrubbing', 'prior-authorization-support', 'denial-management'],
    relatedSpecialties: ['plastic-surgery-medical-billing', 'pathology-medical-billing', 'general-surgery-medical-billing'],
    relatedLocations: ['dallas-medical-billing', 'austin-medical-billing', 'the-woodlands-medical-billing'],
    relatedGuides: ['medical-necessity-denials', 'clean-claim-rate', 'denial-management'],
    faqs: [
      {
        question: 'Payers keep denying our office visits billed with procedures — is that fixable?',
        answer:
          'Often, yes. Same-day E/M with a procedure is payable when the visit was significant and separately identifiable — but documentation has to show it, and several payers now run automated edits that deny first and review on appeal. We tighten the documentation pattern, bill the combination only when supported, and appeal the edits with the note attached.',
      },
      {
        question: 'Should excisions be billed before pathology comes back?',
        answer:
          'Generally no — the code family for excisions depends on whether pathology returns benign or malignant, so billing before results risks systematic miscoding in one direction or the other. We run a short pathology-hold queue so these claims go out correct the first time, usually adding only days.',
      },
    ],
  },
  {
    slug: 'gastroenterology-medical-billing',
    title: 'Gastroenterology',
    specialtyName: 'Gastroenterology',
    seoTitle: 'Gastroenterology Billing Services in Texas',
    metaDescription:
      'GI billing support: screening-versus-diagnostic colonoscopy rules, anesthesia coordination, facility relationships, and multi-procedure endoscopy claims.',
    h1: 'Gastroenterology Medical Billing Services',
    summary:
      'Billing for GI practices — where the screening-versus-diagnostic colonoscopy distinction drives patient disputes, and endoscopy coding rules decide the margins.',
    intro: [
      'Gastroenterology billing revolves around endoscopy: high procedure volumes, multiple-procedure payment rules within one session, moderate sedation questions, and the single most patient-sensitive issue in the specialty — when a screening colonoscopy becomes diagnostic because a polyp was found, and what that does to the patient’s benefits.',
      'Our GI billing manages the endoscopy engine: screening intent captured and coded correctly with the modifiers that preserve preventive benefits, polypectomy combinations coded to the session rules, and the office side — infusions, hepatology, breath tests — billed with equal discipline.',
    ],
    billingComplexity: [
      'The screening-to-diagnostic transition is governed by specific coding rules (and modifier conventions that differ between Medicare and commercial payers) designed to preserve preventive cost-sharing protections — errors here generate both denials and furious patient calls about surprise bills. Within a session, multiple endoscopic procedures follow family-based payment rules where the combinations and reductions must be coded and posted correctly, or margins quietly disappear.',
    ],
    serviceCategories: [
      'Screening and diagnostic colonoscopy',
      'Upper endoscopy and advanced endoscopic procedures',
      'In-office infusion services for IBD',
      'Hepatology visit and monitoring programs',
      'Capsule endoscopy and breath testing',
    ],
    documentationRisks: [
      'Screening intent at scheduling not documented into the procedure record',
      'Polyp removal technique per site not detailed for combination coding',
      'Infusion documentation missing start/stop times for time-based billing',
    ],
    denialCauses: [
      'Screening/diagnostic coding disputes and patient cost-share complaints',
      'Multiple-procedure endoscopy bundling errors',
      'Infusion drug and administration billing mismatches',
      'Authorization gaps on advanced procedures and biologics',
    ],
    codingConsiderations: [
      'Screening-intent modifiers differ between Medicare and commercial conventions — the workflow must apply the right family per payer',
      'Endoscopy families have internal payment logic where base and related procedures reduce differently than unrelated combinations',
    ],
    payerChallenges: [
      'Preventive-benefit interpretation differences across commercial plans',
      'Biologic infusion authorization and site-of-care policies pushing patients between settings',
    ],
    kpis: [
      'Endoscopy claim first-pass rate',
      'Screening-coded share of colonoscopy volume (pattern check)',
      'Infusion revenue capture per administered course',
      'Patient billing dispute volume on scope claims',
    ],
    relatedServices: ['medical-coding', 'prior-authorization-support', 'payment-posting', 'benefits-verification'],
    relatedSpecialties: ['ambulatory-surgery-center-billing', 'anesthesiology-medical-billing', 'general-surgery-medical-billing'],
    relatedLocations: ['houston-medical-billing', 'san-antonio-medical-billing', 'dallas-medical-billing'],
    relatedGuides: ['patient-responsibility', 'medical-necessity-denials', 'payment-posting'],
    faqs: [
      {
        question: 'A patient’s “free screening” colonoscopy generated a bill — what went wrong?',
        answer:
          'Usually one of three things: the procedure was coded diagnostic without the screening-intent modifier after a polyp was found, the visit was scheduled as diagnostic because of symptoms (which legitimately changes benefits), or the payer applied cost-sharing incorrectly. We audit the coding first, correct and rebill where the practice erred, and give the patient a straight answer either way.',
      },
      {
        question: 'Do you bill for our infusion suite too?',
        answer:
          'Yes — IBD biologic infusions involve drug units, administration time codes, and authorization tracking per cycle, and they are revenue-dense enough that small errors are expensive. We reconcile drug purchases against billed units as a standing leakage check.',
      },
    ],
  },
  {
    slug: 'neurology-medical-billing',
    title: 'Neurology',
    specialtyName: 'Neurology',
    seoTitle: 'Neurology Medical Billing Services in Texas',
    metaDescription:
      'Neurology billing: EMG/NCS and EEG coding, infusion and injection billing, prolonged visit capture, and authorization-heavy therapies handled correctly.',
    h1: 'Neurology Medical Billing Services',
    summary:
      'Billing for neurology practices — diagnostic study coding with strict construction rules, long-visit E/M capture, and the authorization apparatus around modern neurologic therapies.',
    intro: [
      'Neurology combines cognitively long visits with technically dense diagnostics: EMG and nerve conduction studies whose codes are built from counts and combinations payers edit aggressively, EEG services spanning routine to long-term monitoring, botulinum toxin programs with drug-and-injection billing, and infusion therapies wrapped in authorization requirements.',
      'Our neurology billing captures the specialty’s real revenue shape: prolonged-service and complexity billing where documentation supports it, diagnostic study construction that survives payer edits, and toxin and infusion programs reconciled unit-by-unit against purchases.',
    ],
    billingComplexity: [
      'EMG/NCS coding is construction work — study counts and combinations map to specific codes with payer edits watching for upcoding patterns, and units that do not match the report get denied or flagged. Botulinum toxin billing pairs drug units (with wastage documentation rules) and injection-site coding per indication, under prior authorization almost universally. Long cognitive visits are chronically undercoded without deliberate prolonged-service capture.',
    ],
    serviceCategories: [
      'Cognitive E/M for complex neurologic disease',
      'EMG and nerve conduction studies',
      'EEG from routine through long-term monitoring',
      'Botulinum toxin injection programs',
      'Infusion therapies for MS, migraine, and immunologic conditions',
    ],
    documentationRisks: [
      'Study reports not itemizing nerves/muscles tested to support code construction',
      'Toxin wastage and unit documentation incomplete',
      'Prolonged visit time not documented despite qualifying visits',
      'Infusion monitoring documentation gaps for time-based codes',
    ],
    denialCauses: [
      'EMG/NCS construction and unit edits',
      'Toxin and infusion authorization lapses per cycle',
      'Medical-necessity denials on EEG monitoring duration',
      'Site-of-care policies redirecting infusions from office suites',
    ],
    codingConsiderations: [
      'Nerve conduction code selection depends on total study counts — the report is the source of truth and must be itemized',
      'Drug units for toxins and biologics must reconcile to purchased inventory including documented wastage',
    ],
    payerChallenges: [
      'Authorization on nearly every high-value neurologic therapy',
      'Site-of-care steering for infusions affecting practice revenue',
    ],
    kpis: [
      'Diagnostic study denial rate',
      'Toxin/infusion units billed versus purchased (reconciliation)',
      'Prolonged-service capture rate on qualifying visits',
      'Authorization continuity on therapy programs',
    ],
    relatedServices: ['prior-authorization-support', 'medical-coding', 'underpayment-identification', 'denial-management'],
    relatedSpecialties: ['neurosurgery-medical-billing', 'pain-management-billing', 'sleep-medicine-billing'],
    relatedLocations: ['houston-medical-billing', 'dallas-medical-billing', 'austin-medical-billing'],
    relatedGuides: ['prior-authorization', 'medical-necessity-denials', 'net-collection-rate'],
    faqs: [
      {
        question: 'Our EMG claims keep getting adjusted downward — why?',
        answer:
          'Payer edits compare billed study codes against expected construction rules, and claims whose units or combinations look inconsistent with typical patterns get adjusted or denied. The fix is coding directly from itemized study reports and appealing adjustments with the report attached — patterns of correct construction also reduce future edits.',
      },
      {
        question: 'Can you manage the authorization load for our infusion patients?',
        answer:
          'Yes — each therapy cycle carries its own authorization window, unit limits, and renewal requirements, and one missed renewal can strand a five-figure drug claim. We calendar renewals per patient per therapy and reconcile billed units against authorized units before claims go out.',
      },
    ],
  },
  {
    slug: 'neurosurgery-medical-billing',
    title: 'Neurosurgery',
    specialtyName: 'Neurosurgery',
    seoTitle: 'Neurosurgery Billing Services in Texas',
    metaDescription:
      'Neurosurgery billing: complex spine and cranial coding, co-surgeon claims, 90-day globals, and high-dollar authorization management.',
    h1: 'Neurosurgery Medical Billing Services',
    summary:
      'Billing for neurosurgical practices — few claims, enormous stakes: multi-level spine coding, co-surgeon and assistant rules, and authorizations where one miss costs five figures.',
    intro: [
      'Neurosurgery billing inverts the usual volume logic: a modest number of claims carries the practice, so each one deserves case-level attention. Spine procedures code by approach, levels, and instrumentation with add-on structures payers scrutinize; cranial cases bring co-surgeon and assistant-at-surgery rules; and everything high-value sits behind prior authorization.',
      'Our neurosurgery billing treats each surgical claim as a case file: coded from the operative note with add-ons verified, authorization matched to the performed procedure, co-surgeon claims coordinated across practices, and 90-day globals calendared for the follow-up period.',
    ],
    billingComplexity: [
      'Multi-level spine coding stacks base codes with per-level add-ons for decompression, fusion, and instrumentation — documentation must support every level billed, and payers reprice aggressively when it does not. Authorizations are procedure-specific: surgery that evolves intraoperatively beyond what was authorized needs same-window communication or the difference is denied. Co-surgeon and assistant modifiers carry payer-specific eligibility rules by procedure that must be verified case by case.',
    ],
    serviceCategories: [
      'Complex spine surgery: decompression, fusion, instrumentation',
      'Cranial procedures and tumor resections',
      'Stereotactic radiosurgery collaboration',
      'Neurotrauma and emergency coverage cases',
      'Spinal cord stimulator implantation',
    ],
    documentationRisks: [
      'Operative notes not itemizing levels and techniques per level billed',
      'Authorization scope narrower than procedure actually performed',
      'Co-surgeon roles not documented distinctly by each surgeon',
      'Global-period visits and returns to OR untracked over 90 days',
    ],
    denialCauses: [
      'Level and add-on denials against operative documentation',
      'Authorization scope mismatches after intraoperative changes',
      'Co-surgeon/assistant eligibility denials by procedure',
      'Out-of-network emergency cases stalled in negotiation',
    ],
    codingConsiderations: [
      'Spine add-on structures require the operative note to read like the claim — level counts, instrumentation extent, and approach must align exactly',
      'Emergency and trauma cases invoke separate billing rights and dispute processes when out-of-network, including federal surprise-billing procedures',
    ],
    payerChallenges: [
      'High-dollar claim review programs and routine documentation requests',
      'Authorization scope rigidity against surgical reality',
    ],
    kpis: [
      'Average days from surgery to payment',
      'Authorization-match rate on performed procedures',
      'Per-case reimbursement variance against expected',
      'Global-period leakage (unbilled billable services)',
    ],
    relatedServices: ['prior-authorization-support', 'claims-appeals', 'underpayment-identification', 'medical-coding'],
    relatedSpecialties: ['orthopedic-medical-billing', 'neurology-medical-billing', 'anesthesiology-medical-billing'],
    relatedLocations: ['houston-medical-billing', 'dallas-medical-billing', 'fort-worth-medical-billing'],
    relatedGuides: ['prior-authorization', 'denial-management', 'medical-necessity-denials'],
    faqs: [
      {
        question: 'The payer paid our fusion but denied the instrumentation add-ons — is that normal?',
        answer:
          'It is common, and often wrong. Add-on denials usually cite documentation or bundling logic; when the operative note itemizes the instrumentation and levels, appeals with the note and coding citations succeed regularly. We treat every surgical claim adjustment as a case to review, not a posting event.',
      },
      {
        question: 'What happens when surgery goes beyond what was authorized?',
        answer:
          'Best practice is intraoperative-change communication to the payer within its allowed window, followed by documentation-supported claims. Where the payer denies the difference anyway, appeal rights and — for emergencies — surprise-billing protections may apply. We manage that sequence case by case.',
      },
    ],
  },
  {
    slug: 'oncology-medical-billing',
    title: 'Oncology',
    specialtyName: 'Oncology',
    seoTitle: 'Oncology Medical Billing Services in Texas',
    metaDescription:
      'Oncology billing: chemotherapy drug and administration claims, buy-and-bill reconciliation, treatment authorizations, and financial toxicity workflows.',
    h1: 'Oncology Medical Billing Services',
    summary:
      'Billing for oncology practices — where drug margins, infusion coding hierarchies, and per-cycle authorizations make billing precision a clinical-operations issue.',
    intro: [
      'Oncology billing carries the highest dollar density in outpatient medicine: buy-and-bill drug claims where units, wastage, and NDC details decide five-figure reimbursements; infusion administration coding with hierarchy rules for initial, sequential, and concurrent services; and authorization requirements tracking each regimen, cycle, and dose change.',
      'Our oncology billing runs at that stakes level: drug claims reconciled against pharmacy purchases, administration coding built from infusion records, authorizations tracked per protocol with dose-change updates, and patient financial coordination that respects what treatment costs families.',
    ],
    billingComplexity: [
      'Drug billing errors are the expensive ones — units off by a factor, undocumented wastage, NDC mismatches — and payers audit oncology drug claims specifically. Administration coding follows a strict hierarchy (initial versus sequential versus concurrent, time-based) built from start/stop documentation. Authorizations attach to regimens and doses: protocol changes mid-treatment require authorization updates or subsequent cycles deny, at chemotherapy prices.',
    ],
    serviceCategories: [
      'Chemotherapy and immunotherapy infusion services',
      'Buy-and-bill drug management',
      'Injection and supportive-care administration',
      'Treatment planning and complex E/M',
      'Oral oncolytic coordination with specialty pharmacy',
    ],
    documentationRisks: [
      'Infusion start/stop times incomplete for time-based administration codes',
      'Wastage not documented to payer-required specificity',
      'Regimen changes not synchronized with authorization updates',
    ],
    denialCauses: [
      'Drug unit and NDC edits on high-dollar claims',
      'Authorization mismatches after protocol or dose changes',
      'Administration hierarchy coding errors',
      'Site-of-care and specialty-pharmacy steering conflicts',
    ],
    codingConsiderations: [
      'Units are billed in the code’s defined increments, not milligrams — conversion errors are a classic five-figure mistake in both directions',
      'Concurrent and sequential infusion combinations must mirror the documented timeline exactly',
    ],
    payerChallenges: [
      'Per-cycle authorization with dose-level specificity',
      'White-bagging and site-of-care policies attacking buy-and-bill economics',
    ],
    kpis: [
      'Drug revenue capture versus purchase cost (margin integrity)',
      'Units-billed-versus-dispensed reconciliation exceptions',
      'Authorization continuity across treatment cycles',
      'High-dollar claim days-to-payment',
    ],
    relatedServices: ['prior-authorization-support', 'payment-posting', 'underpayment-identification', 'denial-management'],
    relatedSpecialties: ['hematology-medical-billing', 'radiology-medical-billing', 'infectious-disease-medical-billing'],
    relatedLocations: ['houston-medical-billing', 'dallas-medical-billing', 'san-antonio-medical-billing'],
    relatedGuides: ['prior-authorization', 'payment-posting', 'net-collection-rate'],
    faqs: [
      {
        question: 'How do you protect our drug margins?',
        answer:
          'Reconciliation and precision: billed units reconciled against pharmacy dispensing records claim by claim, wastage documented to payer requirements, NDCs verified, and underpayments on drug claims worked as their own queue — because a two-percent error rate on oncology drug revenue is a large number.',
      },
      {
        question: 'A payer wants our infusions moved to hospital or home infusion — can billing help?',
        answer:
          'Site-of-care policies are contract and advocacy issues as much as billing ones. We document the clinical and access case per patient where exceptions processes exist, track which payers apply steering, and give leadership the revenue-impact data for contracting conversations.',
      },
    ],
  },
  {
    slug: 'hematology-medical-billing',
    title: 'Hematology',
    specialtyName: 'Hematology',
    seoTitle: 'Hematology Billing Services in Texas',
    metaDescription:
      'Hematology billing: infusion and injection claims, factor products, long-visit E/M, and lab-intensive monitoring billed with specialty accuracy.',
    h1: 'Hematology Medical Billing Services',
    summary:
      'Billing for hematology practices — benign and malignant — where high-cost products, chronic infusion schedules, and monitoring-heavy care define the revenue pattern.',
    intro: [
      'Hematology spans two billing worlds: malignant hematology sharing oncology’s drug-and-infusion intensity, and benign hematology — anemia management, anticoagulation, iron infusions, factor products for bleeding disorders — with its own chronic-care billing rhythm and some of medicine’s most expensive products per dose.',
      'Our hematology billing covers both: infusion suites reconciled like oncology, factor and specialty products billed with the unit precision their prices demand, and the recurring lab-and-visit monitoring engine billed cleanly at volume.',
    ],
    billingComplexity: [
      'Iron infusions, IVIG, and clotting factor sit high on payer radar: authorization criteria, unit documentation, and site-of-care policies apply at full intensity, and IVIG in particular faces indication-by-indication coverage rules. Chronic infusion schedules mean authorization renewals are a permanent operational layer, and monitoring labs must connect to documented indications to survive frequency edits.',
    ],
    serviceCategories: [
      'Therapeutic infusions: iron, IVIG, biologics',
      'Clotting factor and bleeding disorder management',
      'Malignant hematology treatment programs',
      'Anticoagulation management services',
      'Bone marrow biopsy procedures',
    ],
    documentationRisks: [
      'Indication documentation not meeting product-specific coverage policies',
      'Unit and wastage records incomplete on high-cost products',
      'Recurring lab orders without refreshed clinical rationale',
    ],
    denialCauses: [
      'Product-specific medical-necessity denials (IVIG, iron, factor)',
      'Authorization renewal lapses on chronic schedules',
      'Lab frequency edits on monitoring panels',
      'Unit-price edits on factor products',
    ],
    codingConsiderations: [
      'Factor units bill in product-defined increments at extreme unit prices — reconciliation to dispensing is non-negotiable',
      'IVIG coverage varies by diagnosis; the billed indication must match policy-listed conditions',
    ],
    payerChallenges: [
      'Indication-tiered coverage policies per product',
      'Site-of-care steering for chronic infusions',
    ],
    kpis: [
      'Product revenue capture versus acquisition',
      'Authorization renewal on-time rate',
      'Infusion claim first-pass rate',
      'Monitoring lab denial rate',
    ],
    relatedServices: ['prior-authorization-support', 'payment-posting', 'underpayment-identification', 'denial-management'],
    relatedSpecialties: ['oncology-medical-billing', 'infectious-disease-medical-billing', 'rheumatology-medical-billing'],
    relatedLocations: ['houston-medical-billing', 'dallas-medical-billing', 'austin-medical-billing'],
    relatedGuides: ['prior-authorization', 'medical-necessity-denials', 'payment-posting'],
    faqs: [
      {
        question: 'IVIG denials cite medical necessity even with authorization — how?',
        answer:
          'Authorization confirms the request met criteria at approval; claims still adjudicate against the policy, and mismatches between billed diagnosis, dose, or interval and the authorized parameters trigger denials. We align claims to the authorization exactly and appeal with policy citations where the payer moved the target.',
      },
      {
        question: 'Can you handle factor product billing for our bleeding disorder patients?',
        answer:
          'Yes — factor billing is unit-precision work at extreme prices, with assay documentation, per-product increments, and payer-specific requirements. Every factor claim reconciles to dispensing records before submission in our workflow.',
      },
    ],
  },
  {
    slug: 'obgyn-medical-billing',
    title: 'OB/GYN',
    specialtyName: 'OB/GYN',
    seoTitle: 'OB/GYN Medical Billing Services in Texas',
    metaDescription:
      'OB/GYN billing: global maternity packages, delivery claims, GYN surgery coding, and Texas Medicaid maternity rules handled with specialty fluency.',
    h1: 'OB/GYN Medical Billing Services',
    summary:
      'Billing for OB/GYN practices — global maternity packages with their timing and transfer complications, GYN procedures, and the Medicaid-heavy Texas maternity landscape.',
    intro: [
      'Obstetric billing is built around the global maternity package — antepartum care, delivery, and postpartum bundled into one claim whose rules break whenever reality intervenes: patients transferring in or out mid-pregnancy, coverage changing before delivery, complications requiring separately billable care, or multiple providers sharing the episode.',
      'Our OB/GYN billing manages the package lifecycle patient by patient — visit counts tracked, transfers split correctly, non-global services unbundled where rules allow — alongside disciplined GYN surgical and office procedure billing.',
    ],
    billingComplexity: [
      'Global maternity claims fail at the edges: how many antepartum visits occurred before a transfer decides whether the package or itemized codes apply; coverage changes mid-pregnancy (common with Texas Medicaid enrollment timing) split the episode across payers; and complication care must be documented as outside routine antepartum care to bill separately. Texas adds a large Medicaid maternity share with MCO variation and postpartum coverage windows that have changed in recent years.',
    ],
    serviceCategories: [
      'Global obstetric care and deliveries',
      'High-risk pregnancy management',
      'GYN surgery: hysterectomy, laparoscopy, hysteroscopy',
      'Office procedures: colposcopy, LEEP, IUD services',
      'Well-woman and preventive visits',
    ],
    documentationRisks: [
      'Antepartum visit counts untracked for package-versus-itemized decisions',
      'Complication visits not documented as distinct from routine care',
      'Delivery notes missing elements for delivery-type coding',
    ],
    denialCauses: [
      'Global package disputes on transfers and split episodes',
      'Mid-pregnancy coverage changes fragmenting the claim',
      'IUD device-and-insertion billing errors',
      'Medicaid MCO maternity rule variation',
    ],
    codingConsiderations: [
      'Package versus itemized antepartum coding turns on documented visit counts — the tracking must exist from the first OB visit',
      'Delivery coding differentiates by type and by what the same physician’s group provided across the episode',
    ],
    payerChallenges: [
      'Texas Medicaid maternity volume across multiple MCOs',
      'Postpartum coverage window rules affecting late-episode claims',
    ],
    kpis: [
      'Global claim first-pass rate',
      'Split-episode recovery completeness',
      'IUD and device revenue capture',
      'Medicaid maternity days-to-payment',
    ],
    relatedServices: ['medical-billing', 'insurance-eligibility-verification', 'medical-coding', 'denial-management'],
    relatedSpecialties: ['family-medicine-medical-billing', 'general-surgery-medical-billing', 'primary-care-medical-billing'],
    relatedLocations: ['houston-medical-billing', 'san-antonio-medical-billing', 'mcallen-medical-billing'],
    relatedGuides: ['coordination-of-benefits', 'insurance-eligibility-verification', 'clean-claim-rate'],
    faqs: [
      {
        question: 'A patient transferred to us at 28 weeks — how does the maternity billing work?',
        answer:
          'The episode splits: the prior practice bills its antepartum visits itemized (or partial package where payer rules define one), and your practice bills for the care it provides — potentially delivery-plus-postpartum with itemized antepartum, depending on visit counts and the payer’s package rules. The key is documented visit counts from day one; we track them per patient.',
      },
      {
        question: 'Why did the payer deny visits during a pregnancy as “included in global”?',
        answer:
          'Payers default everything in the window into the package unless documentation and coding mark it as outside routine antepartum care — complications, unrelated problems, or high-risk services beyond the package definition. We code those encounters with the distinctions payers require and appeal package-swallowed claims with the notes.',
      },
    ],
  },
  {
    slug: 'urology-medical-billing',
    title: 'Urology',
    specialtyName: 'Urology',
    seoTitle: 'Urology Medical Billing Services in Texas',
    metaDescription:
      'Urology billing: office procedures, stone and oncology surgery claims, in-office pathology and imaging, and diagnostic test billing for urology groups.',
    h1: 'Urology Medical Billing Services',
    summary:
      'Billing for urology practices — dense office procedure schedules, surgical claims with globals, and ancillary lines (imaging, pathology, lithotripsy) each with their own rules.',
    intro: [
      'Urology mixes clinic-based procedures (cystoscopy, biopsies, injections, catheter services) with major surgery and a distinctive ancillary footprint — in-office imaging, pathology on biopsy volume, lithotripsy arrangements — producing claims across nearly every billing category medicine has.',
      'Our urology billing keeps the categories straight: office procedures with same-day E/M handled defensibly, surgical globals calendared, biopsy pathology flows billed correctly between entities, and advanced therapeutics (oncology injections, biologics) run with authorization discipline.',
    ],
    billingComplexity: [
      'Cystoscopy-based procedure families carry bundling relationships payers edit heavily, and office procedures alongside E/M visits invite the same modifier-25 scrutiny dermatology sees. Prostate biopsy pathology involves specimen-count billing that has drawn national audit attention — construction must match the pathology report exactly. Advanced prostate cancer therapeutics bring buy-and-bill economics into the urology office with oncology-grade authorization requirements.',
    ],
    serviceCategories: [
      'Office cystoscopy and procedure clinics',
      'Prostate biopsy programs with pathology',
      'Stone management: lithotripsy, ureteroscopy',
      'Urologic oncology surgery and therapeutics',
      'Urodynamics and incontinence procedures',
    ],
    documentationRisks: [
      'Specimen counts in claims diverging from pathology reports',
      'Same-day E/M with procedures thinly differentiated',
      'Urodynamics component documentation incomplete',
    ],
    denialCauses: [
      'Bundling edits across cystoscopy procedure families',
      'Specimen-count and pathology construction errors',
      'Authorization gaps on oncology therapeutics',
      'Multiple-procedure reductions unposted or unverified',
    ],
    codingConsiderations: [
      'Biopsy specimen billing must mirror the pathology report’s specimen handling exactly — a documented federal enforcement focus in past years',
      'Stone procedures by approach and location carry distinct globals and combination rules',
    ],
    payerChallenges: [
      'Authorization programs on high-value therapeutics',
      'Site-of-service differentials between office and ASC procedures',
    ],
    kpis: [
      'Office procedure claim first-pass rate',
      'Pathology billing accuracy (specimen reconciliation)',
      'Surgical global leakage rate',
      'Therapeutic drug margin integrity',
    ],
    relatedServices: ['medical-coding', 'prior-authorization-support', 'payment-posting', 'billing-audit'],
    relatedSpecialties: ['oncology-medical-billing', 'nephrology-medical-billing', 'pathology-medical-billing'],
    relatedLocations: ['dallas-medical-billing', 'houston-medical-billing', 'fort-worth-medical-billing'],
    relatedGuides: ['medical-necessity-denials', 'payment-posting', 'denial-management'],
    faqs: [
      {
        question: 'How should we bill prostate biopsies with multiple cores?',
        answer:
          'Directly from the pathology report’s specimen structure — how cores were submitted and examined governs the professional and technical pathology billing, and mismatches between claim construction and the report have been an enforcement target historically. Our workflow reconciles the two documents before submission; this is educational guidance, and current coding policy should be verified per payer.',
      },
      {
        question: 'Do you handle the drug side of advanced prostate cancer treatment?',
        answer:
          'Yes — office-administered oncology therapeutics in urology follow buy-and-bill mechanics: unit precision, authorization per cycle, and margin reconciliation against acquisition. We run them with the same controls as an oncology infusion suite.',
      },
    ],
  },
  {
    slug: 'nephrology-medical-billing',
    title: 'Nephrology',
    specialtyName: 'Nephrology',
    seoTitle: 'Nephrology Billing Services in Texas',
    metaDescription:
      'Nephrology billing: monthly dialysis MCP claims, CKD visit programs, hospital rounding capture, and transplant follow-up billed accurately.',
    h1: 'Nephrology Medical Billing Services',
    summary:
      'Billing for nephrology practices — the monthly dialysis capitation system with its visit-count mechanics, plus CKD management, hospital rounding, and access-related procedures.',
    intro: [
      'Nephrology has a billing structure no other specialty shares: outpatient dialysis physician services bill as monthly capitated payments (MCP) tiered by patient age and the number of face-to-face visits delivered that month — turning visit tracking across dialysis units into the practice’s core revenue mechanic. Around it sit CKD clinic programs, dense hospital rounding, and transplant follow-up.',
      'Our nephrology billing runs the MCP machine precisely — visits counted per patient per month across facilities, tier assignments verified, partial-month rules applied for hospitalizations and transitions — while capturing the rounding and clinic revenue practices commonly leak.',
    ],
    billingComplexity: [
      'MCP billing turns on documented visit counts per calendar month, with tier differences worth real money and partial-month scenarios (hospital admissions, modality changes, patient transfers, transplant) each having specific rules. Hospital rounding at nephrology intensity — daily AKI and dialysis rounds across facilities — is chronically undercaptured without a disciplined charge-capture workflow reaching every hospital day.',
    ],
    serviceCategories: [
      'Monthly dialysis management (MCP) across facilities',
      'CKD staging and management clinics',
      'Hospital nephrology and AKI consultation',
      'Home dialysis program management',
      'Transplant referral and follow-up care',
    ],
    documentationRisks: [
      'Dialysis-unit visits not documented to the standard the visit count requires',
      'Partial-month events untracked against MCP rules',
      'Hospital rounding days missing charges entirely',
    ],
    denialCauses: [
      'MCP tier and visit-count discrepancies',
      'Overlaps between MCP and separately billed services',
      'Hospital claim denials for concurrent-care documentation',
      'Home dialysis month construction errors',
    ],
    codingConsiderations: [
      'MCP codes tier by age and monthly visit count — the tracking system is the revenue system',
      'Services inside versus outside the monthly capitation must be classified correctly to avoid both leakage and overlap denials',
    ],
    payerChallenges: [
      'Medicare dominance making its dialysis billing rules the operational baseline',
      'MA plan variation on top of traditional Medicare structures',
    ],
    kpis: [
      'MCP capture rate: eligible patient-months billed at correct tier',
      'Dialysis visit-count documentation completeness',
      'Hospital rounding charge capture rate',
      'CKD program visit revenue trend',
    ],
    relatedServices: ['charge-entry', 'medical-billing', 'practice-financial-reporting', 'billing-audit'],
    relatedSpecialties: ['internal-medicine-medical-billing', 'urology-medical-billing', 'endocrinology-medical-billing'],
    relatedLocations: ['houston-medical-billing', 'dallas-medical-billing', 'el-paso-medical-billing'],
    relatedGuides: ['medical-billing-process', 'clean-claim-rate', 'net-collection-rate'],
    faqs: [
      {
        question: 'How do you make sure we bill the right MCP tier every month?',
        answer:
          'With a per-patient monthly visit ledger reconciled against dialysis unit schedules and physician documentation before month-end billing. Patients one visit short of a higher tier get flagged while the month is still open — that is operationally legitimate visibility, and it is worth real revenue at panel scale.',
      },
      {
        question: 'We suspect we miss hospital charges — is that common in nephrology?',
        answer:
          'Extremely. Nephrology rounding spans multiple hospitals with daily visits and frequent cross-coverage, and charges captured on paper or memory leak constantly. We reconcile hospital census data against captured charges so every rounding day is billed or explained.',
      },
    ],
  },
];
