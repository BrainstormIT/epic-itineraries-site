import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  author: z.string().default('Edwin van Leeuwen'),
  publishDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: postSchema,
});

const inspiration = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/inspiration' }),
  schema: postSchema,
});

export const collections = { blog, inspiration };
