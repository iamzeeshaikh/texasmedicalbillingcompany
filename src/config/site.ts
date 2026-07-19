/**
 * Centralized site configuration.
 *
 * ⚠️ OWNER REVIEW REQUIRED before launch:
 * Every value marked PLACEHOLDER below must be replaced with verified
 * business information. Do NOT launch with placeholder contact details.
 * Placeholders are intentionally formatted so they are obvious in QA and
 * are flagged by `npm run check:content`.
 */

export const SITE = {
  name: 'Texas Medical Billing Company',
  shortName: 'TMBC',
  domain: 'texasmedicalbillingcompany.com',
  url: 'https://texasmedicalbillingcompany.com',
  tagline: 'Medical Billing and Revenue Cycle Support for Texas Healthcare Practices',
  description:
    'Texas Medical Billing Company provides medical billing, revenue cycle management, coding support, credentialing, and denial management services for physicians and healthcare practices across Texas.',
  locale: 'en_US',
  language: 'en-US',
} as const;

/**
 * Contact details.
 * PLACEHOLDER values — replace before launch. `isPlaceholder: true` keeps
 * phone/address hidden in production output (components check this flag).
 */
export const CONTACT = {
  // Real contact details supplied by the owner 2026-07-19, so phone and the
  // schema telephone field now render. Flip back to true only if the number
  // is ever retired — components and schema.ts both gate on this flag.
  isPlaceholder: false,
  phone: '+1-469-562-4188',
  phoneDisplay: '(469) 562-4188',
  // Set by the owner 2026-07-19. Domain MX points at Namecheap email
  // forwarding (eforward1–5.registrar-servers.com), so the domain receives
  // mail — but this specific alias must exist in the forwarding rules or
  // messages bounce. Forwarding also cannot *send* as this address; a real
  // mailbox (Google Workspace or similar) is needed before launch, otherwise
  // client replies go out from a personal account.
  email: 'info@texasmedicalbillingcompany.com',
  address: null as null | {
    street: string;
    city: string;
    state: string;
    zip: string;
  }, // Do NOT fabricate a Texas address. Set only when a verified address exists.
  // City-level service area, set by the owner 2026-07-19. This is deliberately
  // NOT a street address and must not be rendered as one — no LocalBusiness
  // schema, no map, no "visit us". It states where the service area is
  // centred, which is how a remote service-area business is described.
  serviceArea: {
    city: 'Dallas',
    state: 'Texas',
    country: 'United States',
    note: 'Serving healthcare practices across Texas',
    appointmentOnly: true,
  },
  hours: 'Monday–Friday, 8:00 AM–6:00 PM Central Time', // REVIEW: confirm actual service hours
  consultationUrl: '/schedule-a-consultation/',
  legalName: 'Texas Medical Billing Company', // REVIEW: replace with registered legal entity name
  stateRegistration: '', // PLACEHOLDER — add state registration/filing info if required
} as const;

/** Social profiles — add real URLs when profiles exist; empty entries are not rendered. */
export const SOCIAL = {
  linkedin: '',
  facebook: '',
  twitter: '',
} as const;

/**
 * Analytics — all IDs come from environment variables; never hardcode.
 * See ENVIRONMENT-VARIABLES.md.
 */
export const ANALYTICS = {
  ga4Id: import.meta.env.PUBLIC_GA4_ID ?? '',
  clarityId: import.meta.env.PUBLIC_CLARITY_ID ?? '',
  gscVerification: import.meta.env.PUBLIC_GSC_VERIFICATION ?? '',
} as const;

/** Primary conversion CTAs used across the site. */
export const CTAS = {
  primary: { label: 'Request a Free Billing Assessment', href: '/free-billing-assessment/' },
  secondary: { label: 'Schedule a Consultation', href: '/schedule-a-consultation/' },
  pricing: { label: 'Request Pricing', href: '/pricing/#pricing-inquiry' },
  ar: { label: 'Discuss Your Accounts Receivable', href: '/contact/?topic=accounts-receivable' },
  review: { label: 'Get a Billing Workflow Review', href: '/free-billing-assessment/' },
} as const;

/** Sitewide legal/educational disclaimer (footer + resource pages). */
export const DISCLAIMER =
  'Information on this website is provided for general educational purposes only and does not constitute legal, medical, coding, reimbursement, payer, or compliance advice. Coding and payer requirements change frequently; verify current rules with official sources and qualified professionals before acting.';

export const PHI_WARNING =
  'Do not submit patient names, medical records, insurance details, or other protected health information through this form.';

export const PAYER_DISCLAIMER =
  'Texas Medical Billing Company is not affiliated with, endorsed by, or sponsored by the payer discussed on this page. Payer names are used for identification and educational purposes only.';

export const SOFTWARE_DISCLAIMER =
  'Texas Medical Billing Company is an independent billing service. We are not affiliated with, certified by, or endorsed by this software vendor. Our team can work within client-authorized systems and workflows, subject to access, security, and platform requirements.';
