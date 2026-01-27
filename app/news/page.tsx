// app/news/page.tsx
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import NewsClient from "./NewsClient";

// Revalidate every 60 seconds (optional)
export const revalidate = 60;

export default async function NewsPage() {
  // Fetch data from Sanity
  const articles = await client.fetch(POSTS_QUERY);

  return <NewsClient initialArticles={articles} />;
}
