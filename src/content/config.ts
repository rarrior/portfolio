import { defineCollection, z } from 'astro:content';

const experiencesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    period: z.string(),
    role: z.string(),
    company: z.string(),
    description: z.string(),
    achievements: z.array(z.string()),
    technologies: z.array(z.string()),
    order: z.number(),
  }),
});

export const collections = {
  experiences: experiencesCollection,
};
