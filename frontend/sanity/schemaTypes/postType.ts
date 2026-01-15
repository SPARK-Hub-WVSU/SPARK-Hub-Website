// sanity/schemaTypes/postType.ts
import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "excerpt", type: "text", rows: 3 }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      title: "Published At",
    }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({ name: "content", type: "array", of: [{ type: "block" }] }),
  ],
});
