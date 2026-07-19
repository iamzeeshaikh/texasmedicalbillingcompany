import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Markdown collections: knowledge-center guides and blog posts.
 * Strict schemas — missing SEO fields fail the build.
 */

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string().min(3).max(90),
    seoTitle: z.string().min(20).max(70),
    metaDescription: z.string().min(70).max(170),
    summary: z.string().min(60).max(360),
    category: z.enum(['fundamentals', 'metrics', 'process', 'denials', 'forms-documents']),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    reviewedDate: z.coerce.date().optional(),
    /** Author/reviewer reference real profiles only; company authorship default. */
    author: z.string().default('tmbc-editorial'),
    reviewer: z.string().optional(),
    relatedServices: z.array(z.string()).default([]),
    relatedGuides: z.array(z.string()).default([]),
    relatedSolutions: z.array(z.string()).default([]),
    sources: z
      .array(z.object({ label: z.string(), url: z.string().url() }))
      .default([]),
    indexable: z.boolean().default(true),
    complianceReviewRequired: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().min(3).max(110),
    seoTitle: z.string().min(20).max(70),
    metaDescription: z.string().min(70).max(170),
    summary: z.string().min(60).max(360),
    category: z.enum(['revenue-cycle', 'practice-management', 'payer-news', 'texas-healthcare']),
    tags: z.array(z.string()).max(4).default([]),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('tmbc-editorial'),
    reviewer: z.string().optional(),
    relatedServices: z.array(z.string()).default([]),
    relatedGuides: z.array(z.string()).default([]),
    sources: z
      .array(z.object({ label: z.string(), url: z.string().url() }))
      .default([]),
    indexable: z.boolean().default(true),
  }),
});

/**
 * Authors: ONLY real people or the company editorial identity.
 * Do not invent people — `isPerson: false` entries render as organization
 * authorship (no Person schema). Real team profiles get added when real
 * team information exists (see COMPLIANCE-REVIEW.md).
 */
const authors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/authors' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    isPerson: z.boolean().default(false),
    bio: z.string(),
    /** Hidden until real person data exists. */
    published: z.boolean().default(false),
  }),
});

export const collections = { guides, blog, authors };
