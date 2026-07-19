/**
 * Zod schemas for typed data modules (services, specialties, locations,
 * software, payers, solutions, cost, comparisons).
 *
 * These are parsed at build time in src/data/index.ts — invalid or
 * duplicate content FAILS THE BUILD. Markdown collections (guides, blog)
 * are validated separately in src/content.config.ts.
 */
import { z } from 'astro/zod';

export const faqSchema = z.object({
  question: z.string().min(10),
  answer: z.string().min(40),
});

export const sectionSchema = z.object({
  heading: z.string().min(3),
  body: z.array(z.string().min(40)).min(1),
  bullets: z.array(z.string().min(3)).optional(),
});

export const stepSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(30),
});

/** Fields every routable data entry must provide. */
export const baseEntrySchema = z.object({
  slug: z
    .string()
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slugs must be lowercase kebab-case'),
  title: z.string().min(3).max(90),
  seoTitle: z.string().min(20).max(70),
  metaDescription: z.string().min(70).max(170),
  h1: z.string().min(10).max(110),
  summary: z.string().min(60).max(360),
  /** Intro paragraphs rendered under the H1. */
  intro: z.array(z.string().min(80)).min(1),
  faqs: z.array(faqSchema).min(2),
  indexable: z.boolean().default(true),
  featured: z.boolean().default(false),
  /** Marks entries whose claims need owner/compliance sign-off pre-launch. */
  complianceReviewRequired: z.boolean().default(false),
  complianceTopics: z.array(z.string()).default([]),
});

export const serviceSchema = baseEntrySchema.extend({
  category: z.enum(['core', 'recovery', 'front-end', 'analysis', 'practice-type']),
  problemsAddressed: z.array(z.string().min(20)).min(3),
  included: z.array(z.string().min(10)).min(4),
  processSteps: z.array(stepSchema).min(3),
  metrics: z.array(z.object({ name: z.string(), description: z.string().min(30) })).min(2),
  suitableFor: z.array(z.string().min(10)).min(2),
  considerations: z.array(z.string().min(30)).min(2),
  relatedServices: z.array(z.string()).min(2),
  relatedSpecialties: z.array(z.string()).default([]),
  relatedSolutions: z.array(z.string()).default([]),
  relatedGuides: z.array(z.string()).default([]),
});

export const specialtySchema = baseEntrySchema.extend({
  specialtyName: z.string().min(3),
  /** Paragraphs on why billing for this specialty is complex. */
  billingComplexity: z.array(z.string().min(80)).min(1),
  serviceCategories: z.array(z.string().min(5)).min(3),
  documentationRisks: z.array(z.string().min(20)).min(3),
  denialCauses: z.array(z.string().min(20)).min(3),
  codingConsiderations: z.array(z.string().min(20)).min(2),
  payerChallenges: z.array(z.string().min(20)).min(2),
  kpis: z.array(z.string().min(10)).min(3),
  relatedServices: z.array(z.string()).min(3),
  relatedSpecialties: z.array(z.string()).min(2),
  relatedLocations: z.array(z.string()).default([]),
  relatedGuides: z.array(z.string()).default([]),
});

export const locationSchema = baseEntrySchema.extend({
  cityName: z.string().min(3),
  region: z.string().min(3),
  /** City-specific healthcare market context — must be real, verifiable, and
   * materially different between cities (anti-doorway rule). */
  marketContext: z.array(z.string().min(80)).min(2),
  practiceTypes: z.array(z.string().min(5)).min(4),
  challenges: z.array(z.string().min(20)).min(3),
  surroundingAreas: z.array(z.string().min(3)).min(2),
  relatedSpecialties: z.array(z.string()).min(2),
  nearbyLocations: z.array(z.string()).default([]),
});

export const softwareSchema = baseEntrySchema.extend({
  platformName: z.string().min(2),
  typicalWorkflow: z.array(z.string().min(20)).min(3),
  accessControls: z.array(z.string().min(20)).min(2),
  implementationConsiderations: z.array(z.string().min(20)).min(3),
  trainingNeeds: z.array(z.string().min(20)).min(2),
  relatedSpecialties: z.array(z.string()).default([]),
  relatedServices: z.array(z.string()).min(2),
});

export const payerSchema = baseEntrySchema.extend({
  payerName: z.string().min(3),
  sections: z.array(sectionSchema).min(3),
  /** Editable source links — owner should verify before launch. */
  sources: z.array(z.object({ label: z.string(), url: z.string().url() })).min(1),
  relatedServices: z.array(z.string()).min(2),
  relatedGuides: z.array(z.string()).default([]),
});

export const solutionSchema = baseEntrySchema.extend({
  symptoms: z.array(z.string().min(15)).min(3),
  causes: z.array(z.string().min(15)).min(3),
  impact: z.array(z.string().min(15)).min(2),
  diagnostics: z.array(z.string().min(15)).min(2),
  practicalSteps: z.array(stepSchema).min(3),
  outsourcedHelp: z.array(z.string().min(80)).min(1),
  relatedServices: z.array(z.string()).min(2),
  relatedSolutions: z.array(z.string()).min(1),
  relatedGuides: z.array(z.string()).default([]),
});

export const costSchema = baseEntrySchema.extend({
  sections: z.array(sectionSchema).min(3),
  pricingFactors: z.array(z.string().min(10)).min(4),
  relatedServices: z.array(z.string()).min(2),
  relatedCostPages: z.array(z.string()).min(1),
});

export const comparisonSchema = baseEntrySchema.extend({
  optionA: z.string().min(3),
  optionB: z.string().min(3),
  comparisonRows: z
    .array(z.object({ factor: z.string(), a: z.string().min(15), b: z.string().min(15) }))
    .min(5),
  whenOptionA: z.array(z.string().min(20)).min(3),
  whenOptionB: z.array(z.string().min(20)).min(3),
  tradeoffs: z.array(z.string().min(30)).min(3),
  relatedServices: z.array(z.string()).min(1),
  relatedComparisons: z.array(z.string()).min(1),
});

/** Programmatic specialty×city combination pages — strict quality gate. */
export const comboSchema = z.object({
  specialtySlug: z.string(),
  citySlug: z.string(),
  seoTitle: z.string().min(20).max(70),
  metaDescription: z.string().min(70).max(170),
  h1: z.string().min(10).max(110),
  /** Unique local+specialty insight — REQUIRED, min 3 substantial paragraphs.
   * This is the quality gate: no unique insight, no page. */
  uniqueInsights: z.array(z.string().min(120)).min(3),
  localConsiderations: z.array(z.string().min(20)).min(3),
  faqs: z.array(faqSchema).min(2),
  /** Defaults to FALSE — combo pages must earn indexation. */
  indexable: z.boolean().default(false),
});

export type Faq = z.infer<typeof faqSchema>;
export type ContentSection = z.infer<typeof sectionSchema>;
export type Step = z.infer<typeof stepSchema>;
export type ServiceEntry = z.infer<typeof serviceSchema>;
export type SpecialtyEntry = z.infer<typeof specialtySchema>;
export type LocationEntry = z.infer<typeof locationSchema>;
export type SoftwareEntry = z.infer<typeof softwareSchema>;
export type PayerEntry = z.infer<typeof payerSchema>;
export type SolutionEntry = z.infer<typeof solutionSchema>;
export type CostEntry = z.infer<typeof costSchema>;
export type ComparisonEntry = z.infer<typeof comparisonSchema>;
export type ComboEntry = z.infer<typeof comboSchema>;
