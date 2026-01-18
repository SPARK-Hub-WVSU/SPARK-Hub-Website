// sanity/schemaTypes/postType.ts
import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      type: "text",
      rows: 3,
      description: "A short summary for the article cards.",
    }),
    defineField({
      name: "publishedAt",
      title: "Display Date",
      type: "date", // Matches your "01 Aug 2025" style
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "tags",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: { layout: "tags" },
    }),
    defineField({
      name: "content",
      title: "Body Content",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
    }),
  ],
});
