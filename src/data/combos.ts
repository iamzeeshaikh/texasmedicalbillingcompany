/**
 * Specialty × City programmatic combination pages.
 *
 * ⚠️ QUALITY GATE — READ PROGRAMMATIC-SEO.md BEFORE ADDING ENTRIES.
 * These pages are intentionally FEW. Each entry must contain genuine,
 * unique specialty-in-city insight (min 3 substantial paragraphs enforced
 * by schema). `indexable` defaults to FALSE — pages must EARN indexation
 * by meeting the documented content bar. Do not mass-generate.
 */
import type { z } from 'astro/zod';
import type { comboSchema } from '../lib/content-schemas';

type ComboInput = z.input<typeof comboSchema>;

export const combos: ComboInput[] = [
  {
    specialtySlug: 'cardiology-medical-billing',
    citySlug: 'dallas-medical-billing',
    seoTitle: 'Cardiology Medical Billing in Dallas, TX',
    metaDescription:
      'Cardiology billing support for Dallas practices: imaging authorizations, MA-plan density, and hospital-system coordination in the metroplex market.',
    h1: 'Cardiology Medical Billing in Dallas',
    uniqueInsights: [
      'Dallas cardiology practices operate in one of the country’s most system-coordinated cardiac markets: UT Southwestern’s academic cardiology, Baylor Scott & White’s heart hospital infrastructure, and Medical City’s cardiovascular programs shape referral flows and facility relationships across the metroplex. For independent cardiology groups, that means professional-fee billing constantly interfaces with facility claims — cath lab cases, device implants, and imaging performed across multiple systems’ facilities, each relationship carrying its own coordination requirements for clean claims.',
      'The metroplex’s Medicare Advantage density hits cardiology harder than most specialties: Dallas County’s senior enrollment spreads across many MA products, and cardiac imaging, device monitoring, and interventional procedures sit squarely on those plans’ authorization lists. A Dallas cardiology practice may manage authorization workflows across a dozen MA products simultaneously — plan-level requirement tracking is not optional administrative polish here; it is the difference between a paid cath schedule and a denial inventory.',
      'Commercial payer behavior in the Dallas market adds its own layer: the region’s large employers are heavily self-funded, and radiology benefit managers gate advanced cardiac imaging (CTA, nuclear studies, cardiac MR) for most commercial members. Practices that build indication documentation to the RBM criteria before ordering — rather than appealing after denial — run measurably cleaner imaging revenue, and that workflow discipline is what we implement as standard for Dallas cardiology clients.',
    ],
    localConsiderations: [
      'Multi-system facility relationships requiring per-system claim coordination',
      'High MA product density with cardiology-heavy authorization lists',
      'RBM-gated advanced imaging across self-funded commercial plans',
      'Competitive specialist market where administrative reputation affects referrals',
    ],
    indexable: true,
    faqs: [
      {
        question: 'Do you work with cardiology practices affiliated with multiple Dallas hospital systems?',
        answer:
          'Yes — that is the standard shape of Dallas cardiology: privileges and cases across two or three systems, with professional claims needing coordination against each facility context. We manage the per-system claim logistics as routine workflow.',
      },
      {
        question: 'How do you handle the MA authorization load for a Dallas cardiology group?',
        answer:
          'With plan-level requirement tables maintained per MA product, authorization verification before scheduling for listed services, and denial tracking by plan so patterns surface early. The load is real but manageable as a system — unmanageable only as improvisation.',
      },
    ],
  },
  {
    specialtySlug: 'orthopedic-medical-billing',
    citySlug: 'houston-medical-billing',
    seoTitle: 'Orthopedic Medical Billing in Houston, TX',
    metaDescription:
      'Orthopedic billing support for Houston practices: workers’ comp volume, ASC coordination, and energy-industry payer patterns in the Houston market.',
    h1: 'Orthopedic Medical Billing in Houston',
    uniqueInsights: [
      'Houston orthopedics carries a workers’ compensation load few other markets match: the Ship Channel’s industrial corridor, the port, and the energy sector’s field operations generate steady occupational injury volume — fractures, crush injuries, repetitive-strain cases — flowing through Texas DWC rules with their own fee guidelines, preauthorization lists, and dispute deadlines. Houston orthopedic practices that treat comp as a distinct billing discipline (rather than commercial claims with extra forms) capture a revenue stream that generalist billing reliably leaks.',
      'The metro’s ASC density shapes surgical billing economics: Houston’s ambulatory surgery market is among the nation’s largest, and orthopedic cases — arthroscopy, sports medicine procedures, increasingly outpatient joint replacement — split between hospital systems and physician-invested ASCs. Professional claims must coordinate with whichever facility context each case runs in, and for surgeon-owners, the interplay between professional fees, facility economics, and payer steering policies makes per-case revenue analysis genuinely three-dimensional.',
      'Houston’s payer mix gives orthopedics a distinctive commercial profile: energy-sector employer plans are typically rich but self-funded with active steering (imaging to freestanding centers, surgery to preferred facilities), while the metro’s enormous Medicaid managed care volume brings pediatric orthopedics and trauma follow-up under MCO rules. The same practice may bill a refinery worker’s comp fracture, an engineer’s self-funded-plan ACL reconstruction, and a Medicaid pediatric clubfoot series in one morning — three rulebooks, one schedule, and the billing operation must run all three natively.',
    ],
    localConsiderations: [
      'Industrial workers’ comp volume under DWC mechanics',
      'Dense ASC market with facility-coordination billing',
      'Self-funded energy-sector plans with active steering policies',
      'Large Medicaid MCO volume in pediatric and trauma orthopedics',
    ],
    indexable: true,
    faqs: [
      {
        question: 'How much of Houston orthopedic revenue typically runs through workers’ comp?',
        answer:
          'It varies widely by practice location and referral base — corridor-adjacent practices can see comp constitute a substantial share, while suburban sports-medicine practices see little. What is consistent: whatever the share, comp billed under commercial habits underperforms, and comp billed under DWC discipline pays reliably.',
      },
      {
        question: 'Do you support surgeon-owned ASC billing alongside professional fees?',
        answer:
          'Yes — we run facility billing for ASCs and professional billing for surgeons, separately or together, with the claim coordination between them handled explicitly. For surgeon-investors, our reporting can show per-case economics across both revenue streams.',
      },
    ],
  },
];
