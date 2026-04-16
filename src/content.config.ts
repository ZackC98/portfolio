import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: new URL("./content/projects", import.meta.url) }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    description: z.string().optional(),
    date: z.string(),
    status: z.enum(["active", "live", "wip", "killed", "archived"]).optional(),
    summary: z.string().optional(),
    phase: z.number().optional(),
    stack: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
    liveUrl: z.string().optional(),
    githubUrl: z.string().optional(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: new URL("./content/posts", import.meta.url) }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    outcome: z.enum(["live", "wip", "killed", "archived"]).optional(),
    project: z.string().optional(),
  }),
});

export const collections = {
  projects,
  posts,
};
