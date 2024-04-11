import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    publish_date: z.coerce.date(),
    updated_date: z.coerce.date().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = { blog };
