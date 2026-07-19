/**
 * Main navigation configuration.
 * Mega menus show curated high-priority pages plus a link to each hub —
 * never the full page inventory. Keep each column ≤ 7 links.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface NavColumn {
  heading: string;
  links: NavLink[];
}

export interface NavItem {
  label: string;
  href: string;
  columns?: NavColumn[];
  hubLabel?: string;
}

export const MAIN_NAV: NavItem[] = [
  {
    label: 'Services',
    href: '/services/',
    hubLabel: 'View all medical billing services',
    columns: [
      {
        heading: 'Core Billing',
        links: [
          { label: 'Medical Billing Services', href: '/services/medical-billing/' },
          { label: 'Revenue Cycle Management', href: '/services/revenue-cycle-management/' },
          { label: 'Medical Coding', href: '/services/medical-coding/' },
          { label: 'Claims Submission', href: '/services/claims-submission/' },
          { label: 'Payment Posting', href: '/services/payment-posting/' },
        ],
      },
      {
        heading: 'Revenue Recovery',
        links: [
          { label: 'Denial Management', href: '/services/denial-management/' },
          { label: 'AR Follow-Up', href: '/services/accounts-receivable-follow-up/' },
          { label: 'Old AR Recovery', href: '/services/old-ar-recovery/' },
          { label: 'Claims Appeals', href: '/services/claims-appeals/' },
          { label: 'Underpayment Identification', href: '/services/underpayment-identification/' },
        ],
      },
      {
        heading: 'Front-End & Support',
        links: [
          { label: 'Provider Credentialing', href: '/services/credentialing/' },
          { label: 'Eligibility Verification', href: '/services/insurance-eligibility-verification/' },
          { label: 'Prior Authorization Support', href: '/services/prior-authorization-support/' },
          { label: 'Billing Audit', href: '/services/billing-audit/' },
          { label: 'Small Practice Billing', href: '/services/small-practice-medical-billing/' },
        ],
      },
    ],
  },
  {
    label: 'Specialties',
    href: '/specialties/',
    hubLabel: 'View all specialties',
    columns: [
      {
        heading: 'High Volume',
        links: [
          { label: 'Cardiology', href: '/specialties/cardiology-medical-billing/' },
          { label: 'Orthopedics', href: '/specialties/orthopedic-medical-billing/' },
          { label: 'Family Medicine', href: '/specialties/family-medicine-medical-billing/' },
          { label: 'Internal Medicine', href: '/specialties/internal-medicine-medical-billing/' },
          { label: 'Pediatrics', href: '/specialties/pediatric-medical-billing/' },
        ],
      },
      {
        heading: 'Behavioral & Therapy',
        links: [
          { label: 'Psychiatry', href: '/specialties/psychiatry-medical-billing/' },
          { label: 'Behavioral Health', href: '/specialties/behavioral-health-billing/' },
          { label: 'Mental Health', href: '/specialties/mental-health-billing/' },
          { label: 'Physical Therapy', href: '/specialties/physical-therapy-billing/' },
          { label: 'Chiropractic', href: '/specialties/chiropractic-billing/' },
        ],
      },
      {
        heading: 'Surgical & Facility',
        links: [
          { label: 'Pain Management', href: '/specialties/pain-management-billing/' },
          { label: 'General Surgery', href: '/specialties/general-surgery-medical-billing/' },
          { label: 'Ambulatory Surgery Centers', href: '/specialties/ambulatory-surgery-center-billing/' },
          { label: 'Urgent Care', href: '/specialties/urgent-care-billing/' },
          { label: 'Telemedicine', href: '/specialties/telemedicine-billing/' },
        ],
      },
    ],
  },
  {
    label: 'Locations',
    href: '/locations/',
    hubLabel: 'View all Texas locations',
    columns: [
      {
        heading: 'Major Metros',
        links: [
          { label: 'Houston', href: '/locations/houston-medical-billing/' },
          { label: 'Dallas', href: '/locations/dallas-medical-billing/' },
          { label: 'Austin', href: '/locations/austin-medical-billing/' },
          { label: 'San Antonio', href: '/locations/san-antonio-medical-billing/' },
          { label: 'Fort Worth', href: '/locations/fort-worth-medical-billing/' },
        ],
      },
      {
        heading: 'Growing Markets',
        links: [
          { label: 'El Paso', href: '/locations/el-paso-medical-billing/' },
          { label: 'Plano', href: '/locations/plano-medical-billing/' },
          { label: 'Frisco', href: '/locations/frisco-medical-billing/' },
          { label: 'McKinney', href: '/locations/mckinney-medical-billing/' },
          { label: 'The Woodlands', href: '/locations/the-woodlands-medical-billing/' },
        ],
      },
      {
        heading: 'Regional Centers',
        links: [
          { label: 'Lubbock', href: '/locations/lubbock-medical-billing/' },
          { label: 'Corpus Christi', href: '/locations/corpus-christi-medical-billing/' },
          { label: 'McAllen', href: '/locations/mcallen-medical-billing/' },
          { label: 'Tyler', href: '/locations/tyler-medical-billing/' },
          { label: 'Amarillo', href: '/locations/amarillo-medical-billing/' },
        ],
      },
    ],
  },
  {
    label: 'Resources',
    href: '/resources/',
    hubLabel: 'View all resources',
    columns: [
      {
        heading: 'Knowledge Center',
        links: [
          { label: 'Guides Library', href: '/guides/' },
          { label: 'Guide to Medical Billing', href: '/guides/medical-billing/' },
          { label: 'Guide to RCM', href: '/guides/revenue-cycle-management/' },
          { label: 'Denial Management Guide', href: '/guides/denial-management/' },
          { label: 'Blog & Insights', href: '/blog/' },
        ],
      },
      {
        heading: 'Problems We Solve',
        links: [
          { label: 'All Solutions', href: '/solutions/' },
          { label: 'High Claim Denial Rate', href: '/solutions/high-claim-denial-rate/' },
          { label: 'AR Over 90 Days', href: '/solutions/accounts-receivable-over-90-days/' },
          { label: 'Slow Insurance Payments', href: '/solutions/slow-insurance-payments/' },
          { label: 'Revenue Leakage', href: '/solutions/revenue-leakage/' },
        ],
      },
      {
        heading: 'Cost & Comparisons',
        links: [
          { label: 'Medical Billing Cost', href: '/cost/medical-billing-cost/' },
          { label: 'Pricing Models', href: '/cost/medical-billing-pricing-models/' },
          { label: 'In-House vs Outsourced', href: '/compare/in-house-vs-outsourced-medical-billing/' },
          { label: 'Payer Resources', href: '/payers/' },
          { label: 'Software Support', href: '/software/' },
        ],
      },
    ],
  },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];
