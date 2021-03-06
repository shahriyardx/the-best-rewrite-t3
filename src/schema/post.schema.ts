import z from "zod";

export const PostSchema = z.object({
  title: z.string(),
  short_description: z.string().max(256),
  content: z.string(),
  visibility: z.enum(["PUBLIC", "PRIVATE", "UNLISTED"]),
  category_id: z.string().uuid(),
});

export const PostUpdateSchema = z.object({
  title: z.string(),
  short_description: z.string().max(256),
  content: z.string(),
  visibility: z.enum(["PUBLIC", "PRIVATE", "UNLISTED"]),
  category_id: z.string().uuid(),
  post_id: z.string().uuid(),
});

export type PostInput = z.TypeOf<typeof PostSchema>;
export type PostUpdateInput = z.TypeOf<typeof PostUpdateSchema>;
