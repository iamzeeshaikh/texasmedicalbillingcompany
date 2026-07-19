/**
 * Central data module: parses ALL typed content data through Zod schemas
 * at build time. Invalid entries, duplicate slugs, duplicate SEO titles,
 * or duplicate meta descriptions FAIL THE BUILD (by design — see §29 of
 * the content model docs).
 */
import { z } from 'astro/zod';
import {
  serviceSchema,
  specialtySchema,
  locationSchema,
  softwareSchema,
  payerSchema,
  solutionSchema,
  costSchema,
  comparisonSchema,
  comboSchema,
} from '../lib/content-schemas';
import { servicesCore } from './services-core';
import { servicesExtended } from './services-extended';
import { specialties1 } from './specialties-1';
import { specialties2 } from './specialties-2';
import { specialties3 } from './specialties-3';
import { locationsHouston } from './locations-houston';
import { locationsDfw } from './locations-dfw';
import { locationsCentral } from './locations-central';
import { locationsWest } from './locations-west';
import { software as softwareRaw } from './software';
import { payers as payersRaw } from './payers';
import { solutions as solutionsRaw } from './solutions';
import { cost as costRaw } from './cost';
import { comparisons as comparisonsRaw } from './comparisons';
import { combos as combosRaw } from './combos';

function parseAll<S extends z.ZodTypeAny>(
  schema: S,
  entries: unknown[],
  label: string,
): z.output<S>[] {
  return entries.map((entry, i) => {
    const result = schema.safeParse(entry);
    if (!result.success) {
      const slug = (entry as { slug?: string })?.slug ?? `index ${i}`;
      throw new Error(
        `[content] Invalid ${label} entry "${slug}":\n${result.error.issues
          .map((iss) => `  - ${iss.path.join('.')}: ${iss.message}`)
          .join('\n')}`,
      );
    }
    return result.data;
  });
}

export const services = parseAll(serviceSchema, [...servicesCore, ...servicesExtended], 'service');
export const specialties = parseAll(
  specialtySchema,
  [...specialties1, ...specialties2, ...specialties3],
  'specialty',
);
export const locations = parseAll(
  locationSchema,
  [...locationsHouston, ...locationsDfw, ...locationsCentral, ...locationsWest],
  'location',
);
export const software = parseAll(softwareSchema, softwareRaw, 'software');
export const payers = parseAll(payerSchema, payersRaw, 'payer');
export const solutions = parseAll(solutionSchema, solutionsRaw, 'solution');
export const costPages = parseAll(costSchema, costRaw, 'cost');
export const comparisons = parseAll(comparisonSchema, comparisonsRaw, 'comparison');
export const combos = parseAll(comboSchema, combosRaw, 'combo');

/* ---- Cross-collection uniqueness checks (build fails on violation) ---- */

interface SeoEntry {
  slug: string;
  seoTitle: string;
  metaDescription: string;
}

const allSeoEntries: { hub: string; entry: SeoEntry }[] = [
  ...services.map((e) => ({ hub: 'services', entry: e })),
  ...specialties.map((e) => ({ hub: 'specialties', entry: e })),
  ...locations.map((e) => ({ hub: 'locations', entry: e })),
  ...software.map((e) => ({ hub: 'software', entry: e })),
  ...payers.map((e) => ({ hub: 'payers', entry: e })),
  ...solutions.map((e) => ({ hub: 'solutions', entry: e })),
  ...costPages.map((e) => ({ hub: 'cost', entry: e })),
  ...comparisons.map((e) => ({ hub: 'compare', entry: e })),
];

function assertUnique(field: keyof SeoEntry, label: string) {
  const seen = new Map<string, string>();
  for (const { hub, entry } of allSeoEntries) {
    const key = entry[field].toLowerCase().trim();
    const id = `${hub}/${entry.slug}`;
    const prior = seen.get(key);
    if (prior) {
      throw new Error(`[content] Duplicate ${label}: "${entry[field]}" used by ${prior} and ${id}`);
    }
    seen.set(key, id);
  }
}

// Slugs must be unique within each hub (routes collide otherwise).
for (const [hub, list] of Object.entries({
  services,
  specialties,
  locations,
  software,
  payers,
  solutions,
  cost: costPages,
  compare: comparisons,
})) {
  const seen = new Set<string>();
  for (const entry of list as SeoEntry[]) {
    if (seen.has(entry.slug)) {
      throw new Error(`[content] Duplicate slug in ${hub}: "${entry.slug}"`);
    }
    seen.add(entry.slug);
  }
}

assertUnique('seoTitle', 'SEO title');
assertUnique('metaDescription', 'meta description');

/* ---- Relationship integrity: related* slugs must resolve ---- */

const slugSets: Record<string, Set<string>> = {
  services: new Set(services.map((s) => s.slug)),
  specialties: new Set(specialties.map((s) => s.slug)),
  locations: new Set(locations.map((s) => s.slug)),
  solutions: new Set(solutions.map((s) => s.slug)),
  cost: new Set(costPages.map((s) => s.slug)),
  compare: new Set(comparisons.map((s) => s.slug)),
};

function assertRefs(refs: string[] | undefined, target: keyof typeof slugSets, from: string) {
  for (const ref of refs ?? []) {
    if (!slugSets[target].has(ref)) {
      throw new Error(`[content] ${from} references missing ${target} slug "${ref}"`);
    }
  }
}

for (const s of services) {
  assertRefs(s.relatedServices, 'services', `service/${s.slug}`);
  assertRefs(s.relatedSpecialties, 'specialties', `service/${s.slug}`);
  assertRefs(s.relatedSolutions, 'solutions', `service/${s.slug}`);
}
for (const s of specialties) {
  assertRefs(s.relatedServices, 'services', `specialty/${s.slug}`);
  assertRefs(s.relatedSpecialties, 'specialties', `specialty/${s.slug}`);
  assertRefs(s.relatedLocations, 'locations', `specialty/${s.slug}`);
}
for (const l of locations) {
  assertRefs(l.relatedSpecialties, 'specialties', `location/${l.slug}`);
  assertRefs(l.nearbyLocations, 'locations', `location/${l.slug}`);
}
for (const s of software) {
  assertRefs(s.relatedServices, 'services', `software/${s.slug}`);
  assertRefs(s.relatedSpecialties, 'specialties', `software/${s.slug}`);
}
for (const p of payers) {
  assertRefs(p.relatedServices, 'services', `payer/${p.slug}`);
}
for (const s of solutions) {
  assertRefs(s.relatedServices, 'services', `solution/${s.slug}`);
  assertRefs(s.relatedSolutions, 'solutions', `solution/${s.slug}`);
}
for (const c of costPages) {
  assertRefs(c.relatedServices, 'services', `cost/${c.slug}`);
  assertRefs(c.relatedCostPages, 'cost', `cost/${c.slug}`);
}
for (const c of comparisons) {
  assertRefs(c.relatedServices, 'services', `compare/${c.slug}`);
  assertRefs(c.relatedComparisons, 'compare', `compare/${c.slug}`);
}
for (const combo of combos) {
  assertRefs([combo.specialtySlug], 'specialties', `combo`);
  assertRefs([combo.citySlug], 'locations', `combo`);
}

/* ---- Lookup helpers used by templates ---- */

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const getSpecialty = (slug: string) => specialties.find((s) => s.slug === slug);
export const getLocation = (slug: string) => locations.find((s) => s.slug === slug);
export const getSolution = (slug: string) => solutions.find((s) => s.slug === slug);
export const getCostPage = (slug: string) => costPages.find((s) => s.slug === slug);
export const getComparison = (slug: string) => comparisons.find((s) => s.slug === slug);
