// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// 2. Define your collection(s)
const projectCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    videoUrl: z.string().url(),
    attachedFiles: z.array(z.string().url()),
    repositoryLink: z.string().url().optional(),
    description: z.object({
      problem: z.string(),
      solution: z.string(),
      expertice: z.string(),
    }),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  project: projectCollection,
};
