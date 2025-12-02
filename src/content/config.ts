import { defineCollection, z } from 'astro:content';

const experiences = defineCollection({
  schema: z.object({
    period: z.string(),
    role: z.string(),
    company: z.string(),
    img: z.string(),
    description: z.string(),
    achievements: z.array(z.string()),
    technologies: z.array(z.string()).optional(),
    order: z.number(),
  }),
});

export const collections = { experiences };
