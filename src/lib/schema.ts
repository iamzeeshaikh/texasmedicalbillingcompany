/**
 * Reusable JSON-LD builders.
 *
 * Rules (see COMPLIANCE-REVIEW.md):
 * - No LocalBusiness with a fabricated address.
 * - No Review / AggregateRating without genuine reviews.
 * - Person schema only for real, named people.
 * - One Organization entity sitewide (same @id everywhere).
 */
import { SITE, CONTACT } from '../config/site';

const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;

export function organizationSchema() {
  const org: Record<string, unknown> = {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE.name,
    url: `${SITE.url}/`,
    description: SITE.description,
    areaServed: {
      '@type': 'State',
      name: 'Texas',
    },
    knowsAbout: [
      'Medical billing',
      'Revenue cycle management',
      'Medical coding support',
      'Provider credentialing',
      'Denial management',
      'Accounts receivable follow-up',
    ],
  };
  // ContactPoint only when a real phone/email exists (no fabricated numbers).
  if (!CONTACT.isPlaceholder && CONTACT.phone) {
    org.contactPoint = {
      '@type': 'ContactPoint',
      telephone: CONTACT.phone,
      contactType: 'sales',
      areaServed: 'US-TX',
      availableLanguage: 'English',
    };
  } else if (CONTACT.email) {
    org.contactPoint = {
      '@type': 'ContactPoint',
      email: CONTACT.email,
      contactType: 'sales',
      areaServed: 'US-TX',
      availableLanguage: 'English',
    };
  }
  return org;
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE.url}/`,
    name: SITE.name,
    publisher: { '@id': ORG_ID },
    inLanguage: SITE.language,
  };
}

export function webPageSchema(opts: {
  url: string;
  title: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    '@type': 'WebPage',
    '@id': `${opts.url}#webpage`,
    url: opts.url,
    name: opts.title,
    description: opts.description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    inLanguage: SITE.language,
    ...(opts.datePublished ? { datePublished: opts.datePublished } : {}),
    ...(opts.dateModified ? { dateModified: opts.dateModified } : {}),
  };
}

export function breadcrumbSchema(items: { name: string; url?: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  };
}

export function serviceSchema(opts: { name: string; description: string; url: string }) {
  return {
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'State', name: 'Texas' },
    serviceType: 'Medical billing and revenue cycle management',
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  if (!faqs.length) return null;
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function articleSchema(opts: {
  url: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  isBlogPosting?: boolean;
}) {
  return {
    '@type': opts.isBlogPosting ? 'BlogPosting' : 'Article',
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    mainEntityOfPage: opts.url,
    datePublished: opts.datePublished,
    ...(opts.dateModified ? { dateModified: opts.dateModified } : {}),
    // Person schema only for real named authors; otherwise the organization.
    author: opts.authorName
      ? { '@type': 'Person', name: opts.authorName }
      : { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    inLanguage: SITE.language,
  };
}

export function itemListSchema(items: { name: string; url: string }[]) {
  return {
    '@type': 'ItemList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

/** Wrap one or more schema nodes in a single @graph document. */
export function graph(...nodes: (Record<string, unknown> | null | undefined)[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes.filter(Boolean),
  };
}
