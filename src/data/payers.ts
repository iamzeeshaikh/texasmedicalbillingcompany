/**
 * Payer resource entries — EDUCATIONAL ONLY. Validated in src/data/index.ts.
 *
 * Rules: No payer affiliation implied (template renders PAYER_DISCLAIMER on
 * every page). No reproduction of copyrighted payer documentation. Sources
 * are editable owner-verified links. All entries flagged for compliance
 * review before launch.
 */
import type { z } from 'astro/zod';
import type { payerSchema } from '../lib/content-schemas';

type PayerInput = z.input<typeof payerSchema>;

const compliance = {
  complianceReviewRequired: true,
  complianceTopics: ['payer', 'reimbursement'],
};

export const payers: PayerInput[] = [
  {
    slug: 'medicare-billing',
    title: 'Medicare',
    payerName: 'Medicare',
    seoTitle: 'Medicare Billing Guide for Texas Practices',
    metaDescription:
      'Educational guide to Medicare billing for Texas practices: enrollment, claim rules, wellness programs, and the MAC structure — with official sources.',
    h1: 'Medicare Billing for Texas Practices',
    summary:
      'An educational overview of billing traditional Medicare from a Texas practice: enrollment, claims processing through the MAC, coverage rules, and the programs senior care runs on.',
    intro: [
      'Traditional Medicare remains the single most consequential payer for most adult-medicine practices: its rules are public, its processing is consistent, and its coverage policies effectively set the baseline that other payers reference. Billing it well is less about negotiation than about knowing the published rulebook — enrollment, claim formats, coverage determinations, and documentation standards are all written down, which is both the opportunity and the obligation.',
    ],
    ...compliance,
    featured: true,
    sections: [
      {
        heading: 'How Medicare claims are processed in Texas',
        body: [
          'Traditional Medicare Part B claims from Texas practices are processed by the state’s Medicare Administrative Contractor (MAC) — the regional contractor that handles enrollment, claims adjudication, and local coverage policy for Jurisdiction H, which includes Texas. The MAC publishes local coverage determinations (LCDs), articles, and billing guidance that function as the operational rulebook alongside CMS’s national policies.',
          'Claims flow electronically on standard formats with defined timely-filing rules (generally one calendar year from date of service), and remittances return with standardized adjustment codes — a processing consistency that makes Medicare the payer where clean processes show their value most directly.',
        ],
      },
      {
        heading: 'Enrollment and participation',
        body: [
          'Billing Medicare requires provider enrollment through PECOS, with participation decisions (accepting assignment) affecting how patients are billed and what amounts may be collected. Revalidation cycles, practice-change reporting obligations, and ownership-disclosure requirements continue after initial enrollment — missed revalidations are a classic cause of sudden claim rejections.',
        ],
      },
      {
        heading: 'Coverage rules and medical necessity',
        body: [
          'Medicare coverage runs through national coverage determinations (NCDs), local coverage determinations (LCDs), and statutory exclusions. Services outside coverage rules require Advance Beneficiary Notices (ABNs) for the practice to bill the patient — making coverage-rule awareness a front-desk discipline, not just a billing one.',
          'Documentation standards matter operationally: Medicare review contractors audit against published documentation requirements, and services billed without supporting documentation are recoupable years later.',
        ],
      },
      {
        heading: 'Programs that structure senior primary care',
        body: [
          'Medicare pays for a family of structured programs — annual wellness visits, chronic care management, transitional care management, behavioral health integration, remote monitoring — each with eligibility, consent, time, and documentation requirements. Practices serving Medicare-heavy panels that run these programs compliantly typically capture materially more revenue per patient than those billing visits alone.',
        ],
      },
    ],
    sources: [
      { label: 'CMS — Medicare billing and enrollment (official)', url: 'https://www.cms.gov/medicare' },
      { label: 'Novitas Solutions — Texas MAC (Jurisdiction H)', url: 'https://www.novitas-solutions.com' },
    ],
    relatedServices: ['medical-billing', 'credentialing', 'denial-management'],
    relatedGuides: ['medical-billing', 'timely-filing-denials', 'medical-necessity-denials'],
    faqs: [
      {
        question: 'How long do we have to file Medicare claims?',
        answer:
          'Generally one calendar year from the date of service for traditional Medicare — among the most generous timely-filing windows in healthcare, which makes Medicare timely-filing write-offs almost always a process failure rather than a deadline problem. Verify current rules with CMS or the MAC, as exceptions and specifics apply.',
      },
      {
        question: 'Why did Medicare suddenly stop paying a provider it paid for years?',
        answer:
          'The most common cause is enrollment status: a missed revalidation, an unreported practice change, or a licensure data mismatch can deactivate enrollment without dramatic notice. Checking PECOS status is the first diagnostic step, and reactivation follows defined processes — but claims during deactivated periods are at real risk.',
      },
    ],
  },
  {
    slug: 'texas-medicaid-billing',
    title: 'Texas Medicaid',
    payerName: 'Texas Medicaid',
    seoTitle: 'Texas Medicaid Billing Guide for Practices',
    metaDescription:
      'Educational guide to Texas Medicaid billing: TMHP, managed care MCOs, enrollment, Texas Health Steps, and the realities of Medicaid revenue cycles.',
    h1: 'Texas Medicaid Billing for Practices',
    summary:
      'An educational overview of billing Texas Medicaid: the TMHP infrastructure, the managed-care MCO landscape that dominates the program, and the operational disciplines thin Medicaid margins demand.',
    intro: [
      'Texas Medicaid is enormous and fragmented: most beneficiaries receive care through managed care organizations (MCOs) under programs like STAR, STAR Kids, and STAR+PLUS, meaning "billing Medicaid" in Texas really means billing several distinct health plans under a shared program umbrella — each MCO with its own portals, claim behaviors, authorization rules, and provider relations, on top of the state’s TMHP administrative infrastructure.',
    ],
    ...compliance,
    featured: true,
    sections: [
      {
        heading: 'Program structure: TMHP and managed care',
        body: [
          'The Texas Medicaid & Healthcare Partnership (TMHP) administers provider enrollment and traditional fee-for-service functions, while the bulk of member care flows through contracted MCOs by service area. A practice’s operational reality is defined by which MCOs serve its region and populations — pediatric panels may span several plans, each processing claims differently.',
          'The Texas Medicaid Provider Procedures Manual, updated regularly, is the program’s official rulebook, supplemented by each MCO’s provider manuals.',
        ],
      },
      {
        heading: 'Enrollment and credentialing',
        body: [
          'Providers enroll through TMHP (PEMS) and then credential separately with each MCO whose members they serve — a two-layer process with its own timelines. Enrollment lapses or revalidation misses interrupt eligibility to bill all Medicaid volume simultaneously, making enrollment maintenance a high-stakes calendar discipline.',
        ],
      },
      {
        heading: 'Eligibility churn and verification',
        body: [
          'Medicaid eligibility changes monthly with member circumstances and periodic redetermination cycles, and members move between MCOs. Every-visit verification is the only defensible standard: yesterday’s eligible patient may hold different coverage today, and claims to the wrong plan or for lapsed coverage are pure preventable loss.',
        ],
      },
      {
        heading: 'Texas Health Steps and pediatric structure',
        body: [
          'Pediatric Medicaid runs on Texas Health Steps — the state’s EPSDT program — with checkup periodicity schedules, required screening components, and provider requirements that structure well-child billing. Vaccine billing follows Vaccines for Children program rules: state-supplied vaccine product, billable administration.',
        ],
      },
    ],
    sources: [
      { label: 'TMHP — Texas Medicaid provider portal (official)', url: 'https://www.tmhp.com' },
      { label: 'Texas HHS — Medicaid and CHIP programs', url: 'https://www.hhs.texas.gov/services/health/medicaid-chip' },
    ],
    relatedServices: ['medical-billing', 'insurance-eligibility-verification', 'credentialing'],
    relatedGuides: ['insurance-eligibility-verification', 'clean-claim-rate', 'denial-rate'],
    faqs: [
      {
        question: 'Why do identical claims pay differently across Medicaid MCOs?',
        answer:
          'Because MCOs are distinct plans with their own claim systems, edits, and configuration on top of state requirements — variation in processing behavior is structural, not an error you caused. The operational answer is plan-level tracking: know each MCO’s patterns, work denials per plan, and escalate genuine misprocessing through each plan’s defined channels.',
      },
      {
        question: 'Is Texas Medicaid worth the administrative effort at its rates?',
        answer:
          'That is a practice-level decision with real math: rates are low, but volume is steady, timely-filing and appeal rules are defined, and efficient billing operations protect the thin margin that exists. Practices serving Medicaid-heavy communities make it work through denial prevention and verification discipline — inefficiency, not the rates alone, is usually what makes Medicaid unprofitable.',
      },
    ],
  },
  {
    slug: 'bcbs-texas-billing',
    title: 'Blue Cross Blue Shield of Texas',
    payerName: 'Blue Cross and Blue Shield of Texas',
    seoTitle: 'BCBS of Texas Billing Guide for Practices',
    metaDescription:
      'Educational guide to billing Blue Cross Blue Shield of Texas: plan variety, BlueCard claims, authorization patterns, and operational notes.',
    h1: 'Blue Cross Blue Shield of Texas Billing',
    summary:
      'An educational overview of billing BCBSTX — the state’s largest commercial insurer — including its plan spectrum, the BlueCard program for out-of-state members, and common operational patterns.',
    intro: [
      'Blue Cross and Blue Shield of Texas is the state’s dominant commercial payer, and its scale means nearly every Texas practice bills it daily across a wide plan spectrum: employer PPOs and HMOs, marketplace products, Medicare Advantage, and Medicaid MCO participation — each product line with its own networks, authorization rules, and processing patterns under one brand.',
    ],
    ...compliance,
    sections: [
      {
        heading: 'One brand, many products',
        body: [
          'The BCBSTX card in a patient’s hand may represent fundamentally different coverage: fully insured employer plans, self-funded employer plans administered by the insurer (where the employer’s plan document controls benefits), individual marketplace products with narrow networks, or government-program plans. Verification that identifies the actual product — not just the brand — is the foundational discipline.',
        ],
      },
      {
        heading: 'BlueCard: out-of-state members',
        body: [
          'Members of other states’ Blue plans receive care in Texas through the BlueCard program: the Texas practice bills BCBSTX as the host plan, which coordinates with the member’s home plan. Claims follow host-plan submission rules while benefits derive from the home plan — a structure that works smoothly when member ID prefixes are captured accurately and stalls when they are not.',
        ],
      },
      {
        heading: 'Authorization and utilization management',
        body: [
          'Authorization requirements vary by product and service category, with advanced imaging, certain procedures, and specialty drugs commonly managed — sometimes through delegated utilization-management vendors. Requirements are product-specific and change; per-plan verification before scheduling remains the reliable practice.',
        ],
      },
    ],
    sources: [
      { label: 'BCBSTX — Provider resources (official)', url: 'https://www.bcbstx.com/provider' },
    ],
    relatedServices: ['insurance-eligibility-verification', 'prior-authorization-support', 'denial-management'],
    relatedGuides: ['insurance-eligibility-verification', 'coordination-of-benefits', 'denial-management'],
    faqs: [
      {
        question: 'Why does the same service pay differently for two BCBSTX patients?',
        answer:
          'Almost always different products: one may hold a fully insured PPO and the other a self-funded employer plan with customized benefits, or a narrow-network marketplace product. Brand-level assumptions cause the confusion; product-level verification resolves it before claims go out.',
      },
      {
        question: 'A patient has a Blue plan from another state — do we bill them or Texas?',
        answer:
          'Through BlueCard, out-of-state Blue members are billed to BCBSTX as the host plan, which coordinates with the member’s home plan — the three-character ID prefix routes everything, making accurate card capture the whole game. Claims sent to the home plan directly typically reject.',
      },
    ],
  },
  {
    slug: 'unitedhealthcare-billing',
    title: 'UnitedHealthcare',
    payerName: 'UnitedHealthcare',
    seoTitle: 'UnitedHealthcare Billing Guide for Texas Practices',
    metaDescription:
      'Educational guide to billing UnitedHealthcare in Texas: plan lines, authorization programs, claim edits, and operational patterns practices see.',
    h1: 'UnitedHealthcare Billing for Texas Practices',
    summary:
      'An educational overview of billing UnitedHealthcare: the national giant’s commercial, Medicare Advantage, and Medicaid lines in Texas, and the utilization-management intensity practices should plan for.',
    intro: [
      'UnitedHealthcare is the nation’s largest health insurer, and Texas practices meet it across every line: employer commercial plans, individual products, one of the state’s largest Medicare Advantage footprints, and Medicaid MCO participation. Operationally, UHC is known for active utilization management — authorization programs, claim edits, and review initiatives that reward practices with disciplined front-end and appeal workflows.',
    ],
    ...compliance,
    sections: [
      {
        heading: 'Plan lines in Texas',
        body: [
          'UHC’s Texas presence spans employer group plans (fully insured and self-funded ASO), individual coverage, UnitedHealthcare Medicare Advantage products with substantial senior enrollment, and Medicaid managed care participation — with provider-facing operations consolidated through its provider portal and standardized electronic workflows.',
        ],
      },
      {
        heading: 'Utilization management intensity',
        body: [
          'Practices should expect active management: prior authorization programs across service categories, claim-edit systems applying coding policies at scale, and periodic review initiatives affecting specific specialties or services. The operational response is systematic — requirements verified per plan before service, documentation built to policy standards, and denials appealed with evidence rather than absorbed.',
        ],
      },
      {
        heading: 'Working the relationship',
        body: [
          'UHC’s scale means its published policies, portal workflows, and electronic transactions are comprehensive — practices that engage them systematically (policy monitoring, portal-based authorizations and status checks, electronic appeals) navigate the payer far better than those working from habit and phone queues.',
        ],
      },
    ],
    sources: [
      { label: 'UnitedHealthcare — Provider portal and policies (official)', url: 'https://www.uhcprovider.com' },
    ],
    relatedServices: ['prior-authorization-support', 'denial-management', 'claims-appeals'],
    relatedGuides: ['prior-authorization', 'denial-rate', 'denial-management'],
    faqs: [
      {
        question: 'UHC denials feel more frequent than other payers — is that real?',
        answer:
          'UHC runs among the industry’s most active claim-edit and utilization-management programs, so practices commonly see more front-end friction — which makes prevention (verified authorizations, policy-aware coding) and systematic appeals disproportionately valuable. Track your own denial data by payer; patterns you can document are patterns you can contest and prevent.',
      },
      {
        question: 'Do UHC Medicare Advantage plans follow original Medicare rules?',
        answer:
          'MA plans must cover Medicare benefits but administer them with their own authorization requirements, networks, and processes — UHC’s MA products apply managed-care mechanics traditional Medicare never had. Verify plan-specific requirements rather than assuming Medicare’s rules travel with the beneficiary.',
      },
    ],
  },
  {
    slug: 'aetna-billing',
    title: 'Aetna',
    payerName: 'Aetna',
    seoTitle: 'Aetna Billing Guide for Texas Practices',
    metaDescription:
      'Educational guide to billing Aetna in Texas: CVS-era plan lines, authorization patterns, and operational notes for practices.',
    h1: 'Aetna Billing for Texas Practices',
    summary:
      'An educational overview of billing Aetna: the CVS Health-owned insurer’s commercial and Medicare lines in Texas, with the operational patterns practices encounter.',
    intro: [
      'Aetna — part of CVS Health — carries significant Texas presence across employer commercial plans, individual products, and a growing Medicare Advantage line, with the CVS relationship shaping pharmacy and care-delivery integration. For practices, Aetna billing follows the national-carrier pattern: product-level verification, published-policy awareness, and portal-based workflows determine how smoothly its claims run.',
    ],
    ...compliance,
    sections: [
      {
        heading: 'Plan presence in Texas',
        body: [
          'Aetna’s Texas book spans employer groups (heavily self-funded ASO among large employers), individual coverage, and Medicare Advantage products expanding with the market. Self-funded plans administered by Aetna follow employer plan documents — benefits vary by employer even under identical branding, keeping product-level verification essential.',
        ],
      },
      {
        heading: 'Authorization and clinical policy',
        body: [
          'Aetna publishes clinical policy bulletins that function as its medical-necessity rulebook — coverage criteria for procedures, therapies, and technologies that practices can and should consult before high-value services. Authorization requirements track these policies by product, with specialty-drug and advanced-imaging management common.',
        ],
      },
      {
        heading: 'Operational notes',
        body: [
          'Practices report standard national-carrier operations: electronic transactions through major clearinghouses, portal-based authorization and status workflows, and appeal processes with defined levels. The clinical policy bulletins’ public availability is genuinely useful — appeals built on the payer’s own published criteria argue from the strongest ground.',
        ],
      },
    ],
    sources: [
      { label: 'Aetna — Provider resources and clinical policy bulletins (official)', url: 'https://www.aetna.com/health-care-professionals.html' },
    ],
    relatedServices: ['prior-authorization-support', 'claims-appeals', 'insurance-eligibility-verification'],
    relatedGuides: ['medical-necessity-denials', 'prior-authorization', 'coordination-of-benefits'],
    faqs: [
      {
        question: 'What are Aetna clinical policy bulletins and why do they matter?',
        answer:
          'They are Aetna’s published coverage criteria — the documented standards its medical-necessity decisions reference. Consulting the relevant bulletin before high-value services tells you what documentation the payer expects, and citing it in appeals turns arguments into policy-compliance demonstrations. Publicly available criteria are a gift; use them.',
      },
      {
        question: 'Two Aetna patients, same employer size, different benefits — how?',
        answer:
          'Self-funding: large employers typically fund their own plans with Aetna administering, and each employer’s plan document sets its own benefits, exclusions, and rules. The Aetna card indicates the administrator, not the benefit design — verification per member remains the answer.',
      },
    ],
  },
  {
    slug: 'cigna-billing',
    title: 'Cigna Healthcare',
    payerName: 'Cigna Healthcare',
    seoTitle: 'Cigna Billing Guide for Texas Practices',
    metaDescription:
      'Educational guide to billing Cigna in Texas: employer-market focus, behavioral carve-in structure, and operational patterns for practices.',
    h1: 'Cigna Healthcare Billing for Texas Practices',
    summary:
      'An educational overview of billing Cigna: the employer-market specialist’s Texas presence, its behavioral health structure, and practice-level operational notes.',
    intro: [
      'Cigna Healthcare concentrates in the employer market — its Texas presence runs heavily through self-funded corporate plans it administers — with the operational patterns that focus implies: employer-specific benefit variation under one brand, national network structures, and behavioral health administered through its Evernorth organization.',
    ],
    ...compliance,
    sections: [
      {
        heading: 'Employer-market concentration',
        body: [
          'Cigna’s book skews toward self-funded employer plans, especially among large and multi-state employers — meaning benefits, networks, and even authorization rules can vary by employer group under identical card branding. Product and group-level verification is the operating discipline.',
        ],
      },
      {
        heading: 'Behavioral health through Evernorth',
        body: [
          'Cigna’s behavioral benefits run through its Evernorth Behavioral Health organization — historically a distinct network and administrative structure from medical benefits. Behavioral practices should verify network status and claim routing specifically for behavioral benefits rather than assuming medical-network participation carries over.',
        ],
      },
      {
        heading: 'Operational patterns',
        body: [
          'Practices encounter standard national-carrier mechanics: electronic transactions, portal workflows, published coverage policies, and defined appeal structures. Cigna’s employer concentration makes benefits investigation (plan documents, employer-specific rules) more consequential than with payers whose products are more standardized.',
        ],
      },
    ],
    sources: [
      { label: 'Cigna — Health care provider resources (official)', url: 'https://www.cigna.com/health-care-providers' },
    ],
    relatedServices: ['benefits-verification', 'insurance-eligibility-verification', 'denial-management'],
    relatedGuides: ['insurance-eligibility-verification', 'coordination-of-benefits', 'denial-management'],
    faqs: [
      {
        question: 'Our behavioral clinicians are in Cigna’s medical network — why are therapy claims rejecting?',
        answer:
          'Behavioral benefits route through Evernorth Behavioral Health with its own network participation — medical-network status does not automatically confer behavioral-network status, and claims route differently. Verify behavioral credentialing and routing specifically; it is the classic Cigna behavioral billing trap.',
      },
      {
        question: 'What should we verify for Cigna patients beyond eligibility?',
        answer:
          'The employer plan’s specifics: self-funded plans vary in covered services, authorization rules, and network tiers by employer. For planned high-value care, benefits investigation at the plan-document level prevents the surprises brand-level verification misses.',
      },
    ],
  },
  {
    slug: 'humana-billing',
    title: 'Humana',
    payerName: 'Humana',
    seoTitle: 'Humana Billing Guide for Texas Practices',
    metaDescription:
      'Educational guide to billing Humana in Texas: Medicare Advantage focus, authorization patterns, and senior-care billing operations.',
    h1: 'Humana Billing for Texas Practices',
    summary:
      'An educational overview of billing Humana: the Medicare Advantage specialist whose Texas senior enrollment makes its MA mechanics the heart of the relationship.',
    intro: [
      'Humana has focused its business overwhelmingly on Medicare — its commercial employer book was wound down, making it effectively a government-programs company whose Texas presence centers on one of the state’s largest Medicare Advantage memberships. For practices, billing Humana means MA mechanics: plan-specific authorization rules, MA claim processing, and the annual enrollment churn that reshuffles senior panels.',
    ],
    ...compliance,
    sections: [
      {
        heading: 'A Medicare-centered company',
        body: [
          'Humana’s strategic exit from employer commercial insurance leaves Medicare Advantage (and Medicare-adjacent lines like Part D) as its core — practices see Humana almost entirely through senior patients, making MA operational fluency the whole relationship.',
        ],
      },
      {
        heading: 'MA mechanics in practice',
        body: [
          'Humana MA plans administer Medicare benefits through managed-care structures: network tiers, prior authorization across service categories, and plan-level variation between the many products offered per county. Authorization verification per plan — not per brand — before services remains the reliable discipline, and CMS rules governing MA (including recent authorization-reform regulations) shape what plans may require.',
        ],
      },
      {
        heading: 'Annual enrollment dynamics',
        body: [
          'Medicare’s annual enrollment period moves members between MA plans and back to traditional Medicare every January — practices with Humana-heavy panels should expect yearly reshuffles requiring coverage re-verification, new authorization landscapes, and updated network confirmations across their senior population.',
        ],
      },
    ],
    sources: [
      { label: 'Humana — Provider resources (official)', url: 'https://www.humana.com/provider' },
      { label: 'CMS — Medicare Advantage program rules', url: 'https://www.cms.gov/medicare/health-drug-plans/health-plans' },
    ],
    relatedServices: ['insurance-eligibility-verification', 'prior-authorization-support', 'denial-management'],
    relatedGuides: ['prior-authorization', 'insurance-eligibility-verification', 'denial-rate'],
    faqs: [
      {
        question: 'Do Humana MA plans require authorization for services Medicare never did?',
        answer:
          'Yes — that is the structural difference of Medicare Advantage: plans may impose prior authorization within CMS’s regulatory limits, and Humana’s products do across various categories. Federal MA reforms have tightened authorization rules (continuity protections, decision timelines), but plan-specific verification before service remains essential.',
      },
      {
        question: 'How should we handle January for our Humana-heavy senior panel?',
        answer:
          'As a scheduled re-verification campaign: enrollment-period switching means January’s patients may hold different plans than December’s records show — different networks, authorizations, and copays. Practices that re-verify systematically each January keep their first quarter clean; those that trust old records fund the lesson.',
      },
    ],
  },
  {
    slug: 'tricare-billing',
    title: 'TRICARE',
    payerName: 'TRICARE',
    seoTitle: 'TRICARE Billing Guide for Texas Practices',
    metaDescription:
      'Educational guide to TRICARE billing in Texas: regional contractor structure, Prime and Select mechanics, referrals, and military-family billing.',
    h1: 'TRICARE Billing for Texas Practices',
    summary:
      'An educational overview of TRICARE billing: the military health benefit’s contractor structure, plan mechanics, and the operational fluency Texas’s enormous military presence demands.',
    intro: [
      'Texas hosts one of the nation’s largest military populations — Joint Base San Antonio, Fort Cavazos, Fort Bliss, Dyess, and more — making TRICARE fluency a genuine business requirement for practices in military markets. TRICARE operates unlike commercial insurance: a federal benefit administered through regional contractors, with plan types (Prime, Select, For Life) whose referral and authorization mechanics differ fundamentally.',
    ],
    ...compliance,
    sections: [
      {
        heading: 'Structure: the benefit and its contractors',
        body: [
          'TRICARE is the Defense Department’s health benefit, administered in the continental US through regional contracts — Texas falls in the region whose managed-care support contractor handles authorizations, claims, and provider relations. Contractor transitions happen periodically and reset operational details, so current-contractor awareness matters.',
        ],
      },
      {
        heading: 'Plan types drive the rules',
        body: [
          'TRICARE Prime operates as a managed-care model where care typically flows through military treatment facilities and referrals are required for most civilian specialty care; Select functions more like a PPO with self-referral; TRICARE for Life wraps Medicare for military retirees — Medicare pays primary, TRICARE secondary, with its own claim-flow mechanics. Billing failures usually trace to plan-type assumptions: a Prime beneficiary seen without required referral generates preventable denials.',
        ],
      },
      {
        heading: 'Operational notes for military markets',
        body: [
          'Network participation, authorization verification per beneficiary category, and PCS-season panel churn define TRICARE operations. Military families move on orders — coverage regions change, enrollments transfer, and summer PCS waves turn over panels — while deployment dynamics shift family care patterns. Practices in military markets build these rhythms into their workflows.',
        ],
      },
    ],
    sources: [
      { label: 'TRICARE — Official program site', url: 'https://www.tricare.mil' },
      { label: 'Humana Military — TRICARE East regional contractor', url: 'https://www.humanamilitary.com' },
    ],
    relatedServices: ['insurance-eligibility-verification', 'medical-billing', 'credentialing'],
    relatedGuides: ['insurance-eligibility-verification', 'coordination-of-benefits', 'claim-status-follow-up'],
    faqs: [
      {
        question: 'A TRICARE Prime patient self-referred to us — will the claim pay?',
        answer:
          'Likely not without the required referral: Prime’s managed-care model routes specialty care through referrals (typically originating from the military treatment facility or assigned PCM), and claims without them face point-of-service penalties or denials. Verify plan type and referral status before the visit — the beneficiary category determines everything.',
      },
      {
        question: 'How does TRICARE for Life work with Medicare?',
        answer:
          'Medicare pays primary and TRICARE for Life pays secondary for military retirees with both — claims flow to Medicare first, then cross over to TRICARE, generally automatically when systems are aligned. The practice’s job is accurate dual-coverage capture and correct claim sequencing; done right, TFL is among the smoothest secondary payers.',
      },
    ],
  },
  {
    slug: 'texas-workers-compensation-billing',
    title: 'Texas Workers’ Compensation',
    payerName: 'Texas Workers’ Compensation',
    seoTitle: 'Texas Workers’ Comp Billing Guide for Practices',
    metaDescription:
      'Educational guide to Texas workers’ compensation billing: DWC rules, fee guidelines, preauthorization, and dispute processes for treating practices.',
    h1: 'Texas Workers’ Compensation Billing',
    summary:
      'An educational overview of billing Texas workers’ comp: the DWC-regulated system’s fee guidelines, forms, preauthorization lists, and dispute machinery — a parallel billing universe with its own rules.',
    intro: [
      'Texas workers’ compensation is not health insurance — it is a regulated liability system administered under the Texas Department of Insurance, Division of Workers’ Compensation (DWC), with its own fee guidelines, billing forms, treatment guidelines, preauthorization requirements, and dispute processes. Practices that bill comp claims through commercial-insurance habits fail systematically; practices that learn the DWC rulebook find comp a workable, rules-based revenue stream.',
    ],
    ...compliance,
    complianceTopics: ['payer', 'legal', 'reimbursement'],
    sections: [
      {
        heading: 'The DWC system',
        body: [
          'Work injuries in subscribing employers’ workplaces flow through insurance carriers under DWC regulation: medical necessity follows adopted treatment guidelines, reimbursement follows DWC fee guidelines (largely Medicare-based methodologies with system-specific rules), and disagreements route through defined medical dispute resolution processes with deadlines that forfeit rights when missed.',
          'Texas’s non-subscriber quirk matters: employers may opt out of the comp system entirely, and their injury cases follow occupational-benefit plans or liability paths rather than DWC rules — intake must distinguish subscriber from non-subscriber cases from day one.',
        ],
      },
      {
        heading: 'Billing mechanics',
        body: [
          'Comp claims use designated billing forms and data requirements, flow to the carrier handling the specific claim (identified by claim number, adjuster, and employer — captured at intake or chased forever), and pay per fee guidelines regardless of charges. Preauthorization applies to a defined list of treatments and services; providing listed care without it forfeits payment in most circumstances.',
        ],
      },
      {
        heading: 'Disputes and the deadlines that rule them',
        body: [
          'Payment disputes (fee disagreements) and medical-necessity disputes follow separate DWC processes with strict filing windows. The system is genuinely rules-based: practices that document properly, bill per guidelines, and file disputes on time recover what the rules provide — informality is the only unrecoverable error.',
        ],
      },
    ],
    sources: [
      { label: 'TDI-DWC — Texas workers’ compensation (official)', url: 'https://www.tdi.texas.gov/wc/index.html' },
      { label: 'DWC — Medical fee guidelines', url: 'https://www.tdi.texas.gov/wc/mfg/index.html' },
    ],
    relatedServices: ['medical-billing', 'denial-management', 'claims-appeals'],
    relatedGuides: ['medical-necessity-denials', 'timely-filing-denials', 'denial-management'],
    faqs: [
      {
        question: 'Why do our comp claims pay less than we billed?',
        answer:
          'Comp pays per DWC fee guidelines, not billed charges — the guideline amount is the payment, and the discipline is verifying payments against guideline calculations rather than charges. Underpayments against the guideline are disputable through DWC processes with deadlines; charge-based expectations are simply the wrong frame.',
      },
      {
        question: 'An employer says they “don’t have workers’ comp” — what does that mean for billing?',
        answer:
          'Texas allows non-subscription: that employer’s injury cases fall outside DWC rules entirely, flowing instead through the employer’s occupational benefit plan (if any) or liability claims. Billing follows whatever that plan provides or becomes a liability/patient matter — completely different mechanics that intake must identify immediately.',
      },
    ],
  },
  {
    slug: 'commercial-insurance-billing',
    title: 'Commercial Insurance',
    payerName: 'Commercial Insurance',
    seoTitle: 'Commercial Insurance Billing Guide for Texas Practices',
    metaDescription:
      'Educational guide to commercial insurance billing: plan structures, self-funding, networks, and the operational disciplines that protect revenue.',
    h1: 'Commercial Insurance Billing Fundamentals',
    summary:
      'An educational overview of commercial insurance billing as a category: plan architectures, the self-funded majority, network mechanics, and the disciplines that apply across carriers.',
    intro: [
      'Commercial insurance — employer-sponsored and individual coverage — pays the strongest rates most practices see, through the most heterogeneous rulebook: thousands of plan designs across carriers, the self-funded majority where employers set their own benefits, network tiers, and cost-sharing structures that have shifted enormous responsibility onto patients. Billing it well is a set of disciplines that transcend any single carrier.',
    ],
    ...compliance,
    sections: [
      {
        heading: 'The self-funded reality',
        body: [
          'Most Americans with employer coverage are in self-funded plans: the employer bears the risk while a carrier administers, and the employer’s plan document — not the carrier’s standard products — controls benefits. This is why identical cards behave differently, why ERISA rather than state insurance law governs many disputes, and why benefits verification at the plan level matters for anything expensive.',
        ],
      },
      {
        heading: 'Networks and the deductible era',
        body: [
          'Network participation drives payment rates and patient cost-sharing, with narrow-network products making status verification per plan (not per carrier) essential. Meanwhile high-deductible designs have made patients the first payer for much of the year — moving revenue-protection emphasis to eligibility, estimates, and time-of-service collection.',
        ],
      },
      {
        heading: 'The disciplines that generalize',
        body: [
          'Across carriers, commercial billing rewards the same operational core: product-level verification, authorization checks before scheduled services, coding to documented policy, prompt-pay awareness (Texas’s prompt-payment statutes set carrier deadlines with penalties), and appeals built on plan language and published policies. Carrier-specific knowledge layers on top; the core is universal.',
        ],
      },
    ],
    sources: [
      { label: 'TDI — Texas insurance regulation and prompt-pay rules', url: 'https://www.tdi.texas.gov' },
      { label: 'DOL — ERISA and self-funded plan regulation', url: 'https://www.dol.gov/agencies/ebsa' },
    ],
    relatedServices: ['benefits-verification', 'underpayment-identification', 'patient-billing'],
    relatedGuides: ['coordination-of-benefits', 'patient-responsibility', 'explanation-of-benefits'],
    faqs: [
      {
        question: 'What are Texas prompt-pay rules and do they help us?',
        answer:
          'Texas statutes require insurers to pay, deny, or audit clean claims within defined deadlines, with penalties for violations — genuine leverage against slow payment, but applying mainly to state-regulated (fully insured) plans, not the self-funded majority governed by ERISA. Knowing which plans are which tells you where prompt-pay complaints have teeth.',
      },
      {
        question: 'Why has patient collection become as important as claim collection?',
        answer:
          'Because plan design moved the money: high deductibles make patients the effective primary payer early each year, and practices collecting only from insurers are billing a shrinking share of their own revenue. Verification, estimates, and time-of-service collection are now core commercial-billing disciplines, not front-desk niceties.',
      },
    ],
  },
  {
    slug: 'managed-care-billing',
    title: 'Managed Care',
    payerName: 'Managed Care',
    seoTitle: 'Managed Care Billing Guide for Texas Practices',
    metaDescription:
      'Educational guide to managed care billing: HMO/PPO mechanics, referrals, capitation basics, and delegated structures practices encounter.',
    h1: 'Managed Care Billing Fundamentals',
    summary:
      'An educational overview of managed care as a billing environment: the referral and authorization architectures, delegated entities, and payment models that define managed products across markets.',
    intro: [
      'Managed care is the architecture most American coverage now uses — networks, gatekeeping, utilization management, and payment models designed to control cost — appearing in commercial HMOs and PPOs, Medicare Advantage, and Medicaid MCOs alike. Billing within it means understanding the control structures: who must authorize what, which entity actually processes the claim, and how the payment model shapes the paperwork.',
    ],
    ...compliance,
    sections: [
      {
        heading: 'Control structures: referrals and authorization',
        body: [
          'Managed products control utilization through referral requirements (HMO-style gatekeeping through primary care), prior authorization lists, and concurrent review of ongoing care — with intensity varying by product type. The billing implication is front-end: control-structure compliance is established before service or the claim is compromised at birth.',
        ],
      },
      {
        heading: 'Delegation: who actually processes your claim',
        body: [
          'Managed care organizations frequently delegate functions — behavioral health to carve-out vendors, utilization management to specialty benefit managers, sometimes claims processing to delegated medical groups or IPAs. The practical skill is routing: identifying from the member’s plan which entity handles eligibility, authorization, and claims for each service type, because misrouted transactions simply vanish.',
        ],
      },
      {
        heading: 'Payment models and their billing shapes',
        body: [
          'Fee-for-service with managed controls remains most common, but capitation (per-member payments for defined services), case rates, and value-based hybrids appear across markets — each changing what claims mean: under capitation, encounter submission is data reporting that drives future rates rather than payment requests, making complete submission a financial obligation even without per-claim payment.',
        ],
      },
    ],
    sources: [
      { label: 'TDI — Managed care in Texas (official)', url: 'https://www.tdi.texas.gov/health/mcqa/index.html' },
    ],
    relatedServices: ['insurance-eligibility-verification', 'prior-authorization-support', 'medical-billing'],
    relatedGuides: ['prior-authorization', 'insurance-eligibility-verification', 'medical-claim-lifecycle'],
    faqs: [
      {
        question: 'Our claims to a managed plan keep vanishing — where do they go?',
        answer:
          'Usually to the wrong entity: delegated structures mean the brand on the card may not process your claim type — behavioral carve-outs, delegated medical groups, and benefit managers each maintain their own claim systems. Eligibility responses and plan documents identify the right recipient; routing discipline retrieves the vanishing claims.',
      },
      {
        question: 'We get capitation for some patients — why submit encounters at all?',
        answer:
          'Because encounters are the capitation system’s data bloodstream: they document delivered care, drive risk adjustment and future rates, satisfy contractual reporting duties, and support quality measurement. Skipping them because “we’re already paid” quietly erodes the rates and violates most capitation contracts.',
      },
    ],
  },
  {
    slug: 'medicare-advantage-billing',
    title: 'Medicare Advantage',
    payerName: 'Medicare Advantage',
    seoTitle: 'Medicare Advantage Billing Guide for Texas Practices',
    metaDescription:
      'Educational guide to Medicare Advantage billing: MA mechanics versus original Medicare, authorization rules, plan variation, and appeal rights.',
    h1: 'Medicare Advantage Billing for Practices',
    summary:
      'An educational overview of Medicare Advantage as a billing environment: how MA differs operationally from traditional Medicare, the plan-variation problem, and the appeal rights practices should actually use.',
    intro: [
      'Medicare Advantage now covers roughly half of Medicare beneficiaries — meaning “Medicare patients” increasingly means managed-care patients whose plans impose authorization requirements, network structures, and claim processing traditional Medicare never had. For practices, MA is best understood as its own payer category: Medicare’s benefit floor administered through commercial managed-care machinery, plan by plan.',
    ],
    ...compliance,
    featured: true,
    sections: [
      {
        heading: 'How MA differs from traditional Medicare operationally',
        body: [
          'MA plans must cover Medicare’s benefits but administer them independently: prior authorization across service categories (traditional Medicare requires almost none), plan networks with participation contracts, plan-specific claim systems and edits, and utilization review including concurrent review of facility stays. Every operational assumption from traditional Medicare requires re-verification per MA plan.',
        ],
      },
      {
        heading: 'The plan-variation problem',
        body: [
          'A single market may offer dozens of MA products across carriers, each with distinct authorization lists, referral rules, and processing behaviors — and annual enrollment moves patients between them every January. The workable response is plan-level operations: requirements tracked per product, denial patterns monitored per plan, and yearly re-verification campaigns across senior panels.',
        ],
      },
      {
        heading: 'Regulation and appeal rights worth using',
        body: [
          'CMS regulates MA meaningfully: recent federal rules have constrained authorization practices (decision timelines, continuity-of-care protections, criteria transparency), and MA appeal processes carry defined timelines with independent review levels. Practices that appeal MA denials systematically — especially clinically supported care denied on utilization grounds — see substantial overturn rates; absorbing MA denials silently leaves regulated rights unused.',
        ],
      },
    ],
    sources: [
      { label: 'CMS — Medicare Advantage program regulations (official)', url: 'https://www.cms.gov/medicare/health-drug-plans/health-plans' },
      { label: 'CMS — MA prior authorization final rules', url: 'https://www.cms.gov/newsroom' },
    ],
    relatedServices: ['prior-authorization-support', 'claims-appeals', 'denial-management'],
    relatedGuides: ['prior-authorization', 'denial-management', 'insurance-eligibility-verification'],
    faqs: [
      {
        question: 'Should we treat MA patients like Medicare patients or commercial patients?',
        answer:
          'Operationally, like commercial managed care wearing Medicare’s benefit rules: verify plan-specific authorization and network requirements as you would a commercial HMO, while knowing the coverage floor and appeal rights CMS regulation guarantees. The dangerous pattern is Medicare-style assumptions — no authorization checks, minimal verification — applied to plans built on managed-care mechanics.',
      },
      {
        question: 'Are MA denials worth appealing?',
        answer:
          'Demonstrably: published data has shown high overturn rates when MA denials are appealed, particularly for clinically supported services denied on utilization-management grounds — while the large majority of denials are never appealed at all. Systematic MA appeals are among the highest-yield activities in senior-care billing; the rights exist precisely to be used.',
      },
    ],
  },
];
