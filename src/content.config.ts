import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const link = z.object({ label: z.string(), href: z.url() });

const projects = defineCollection({
  loader: glob({ pattern: '*.mdx', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** URL slug is the file name; `order` drives previous/next. */
      order: z.number(),
      tier: z.union([z.literal(1), z.literal(2)]),
      summary: z.string(),
      description: z.string().max(165),
      status: z.string(),
      license: z.string(),
      platform: z.string(),
      technologies: z.array(z.string()),
      links: z.array(link).min(1),
      images: z.array(z.object({ src: image(), alt: z.string() })).default([]),
    }),
});

const experiments = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/experiments' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        order: z.number(),
        summary: z.string(),
        status: z.string(),
        technologies: z.array(z.string()).default([]),
        links: z.array(link).default([]),
        notes: z.array(z.string()).min(1),
        credits: z.array(z.object({ name: z.string(), role: z.string(), href: z.url().optional() })).default([]),
        disclaimer: z.string().optional(),
        /** Either a built-in diagram or an image placed next to index.md. */
        diagram: z.enum(['pre-upscale', 'ad-quadratum']).optional(),
        image: z.object({ src: image(), alt: z.string() }).optional(),
      })
      .refine((d) => d.diagram || d.image, { message: 'An experiment needs a visual: `diagram` or `image`.' }),
});

export const collections = { projects, experiments };
