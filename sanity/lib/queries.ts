import { defineQuery } from "next-sanity";

export const POSTS_QUERY =
  defineQuery(`*[_type == "post"] | order(publishedAt desc) {
  "id": slug.current,
  title,
  excerpt,
  "date": publishedAt,
  tags,
  image,
  content
}`);

export const POST_BY_SLUG_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0] {
  "id": slug.current,
  title,
  excerpt,
  "date": publishedAt,
  tags,
  image,
  content
}`);

export const RECENT_POST_QUERY =
  defineQuery(`*[_type == "post"] | order(publishedAt desc)[0] {
  "id": slug.current,
  title,
  excerpt,
  "date": publishedAt,
  image,
  "body": content
}`);
