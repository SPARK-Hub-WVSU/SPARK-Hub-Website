// app/events/page.tsx
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import EventsClient from "./EventsClient";

// Revalidate every 60 seconds (optional)
export const revalidate = 60;

export default async function EventsPage() {
  // Fetch data from Sanity
  const articles = await client.fetch(POSTS_QUERY);

  return <EventsClient initialArticles={articles} />;
}
