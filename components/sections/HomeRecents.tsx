import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { RECENT_POST_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export default async function Recents() {
  // Fetch the single latest article
  const article = await client.fetch(RECENT_POST_QUERY);

  // If no articles exist yet, we can return null or a placeholder
  if (!article) return null;

  // Optional: Simple reading time calculation (avg 200 words per minute)
  const wordCount = JSON.stringify(article.body).split(/\s+/g).length;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <section id="Recents_Section" className="">
      <div
        id="layout"
        className="xl:max-w-[1175px] flex md:flex-row flex-col md:justify-between justify-center mx-auto xl:px-0 lg:px-32 px-9 lg:mt-20 lg:mb-36 py-32 lg:gap-24 md:gap-12 gap-8"
      >
        <div id="title" className="flex flex-col lg:w-80 w-72 gap-2">
          <h1 className="lg:text-6xl md:text-5xl text-4xl lg:leading-tight md:leading-tight">
            <span className="text-[#2E2E2E]">Recent</span> <br />
            <strong className="text-primary">News and Events</strong>
          </h1>
          <hr className="md:border-t-4 border-t-2 md:w-44 w-20 border-primary" />
          <h3 className="lg:text-2xl md:text-xl text-lg lg:leading-tight md:leading-tight lg:mt-5 lg:w-72">
            Highlights from recent events and activities.
          </h3>
        </div>

        {/* Link to the dynamic slug */}
        <div
          // href={`/news/${article.id}`}
          id="thumbnail"
          className="group flex flex-col md:gap-5 gap-4 text-[#2E2E2E] lg:max-w-[700px]"
        >
          <div className="relative w-full aspect-video rounded-xl overflow-hidden">
            {article.image && (
              <Link href={`/news/${article.id}`}>
                <Image
                  fill
                  src={urlFor(article.image).width(800).url()}
                  alt={article.title}
                  className="object-cover hover:scale-[1.01] transition-transform duration-500"
                />
              </Link>
            )}
          </div>

          <div className="relative w-fit">
            <h2
              id="article_title"
              className="md:text-4xl text-xl font-medium relative hover:underline"
            >
              <Link href={`/news/${article.id}`}>{article.title}</Link>
            </h2>
          </div>

          <p
            id="artilce_headline"
            className="lg:text-xl md:text-lg text-sm overflow-hidden line-clamp-2"
          >
            {article.excerpt}
          </p>

          <p
            id="date_time_group"
            className="flex flex-col lg:text-xl md:text-lg text-xs"
          >
            <span id="time_read" className="font-semibold text-primary">
              {readingTime} Min Read
            </span>
            <span id="date_posted">
              {new Date(article.date).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
          </p>
          <hr />
        </div>
      </div>
    </section>
  );
}
