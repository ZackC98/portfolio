import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    slug: z.string(),
    github: z.string().optional(),
    featured: z.boolean().optional(),
  }),
});

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    slug: z.string(),
  }),
});

export const collections = {
  projects,
  posts,
};