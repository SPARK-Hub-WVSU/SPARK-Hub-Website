// app/news/[slug]/page.tsx
import { client } from "@/sanity/lib/client";
import { POST_BY_SLUG_QUERY, POSTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";

interface PostQueryResult {
  id: string;
  title: string;
}

export async function generateStaticParams() {
  const posts = await client.fetch(POSTS_QUERY);
  return posts.map((post: PostQueryResult) => ({
    slug: post.id,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: PageProps) {
  // Await params in Next.js 15
  const { slug } = await params;

  // Fetch the specific article from Sanity
  const article = await client.fetch(POST_BY_SLUG_QUERY, { slug });

  if (!article) {
    notFound();
  }

  return (
    <main className="mx-6 md:mx-40 max-w-full">
      {article.image && (
        <div className="w-full my-8">
          <Image
            src={urlFor(article.image).width(1600).url()}
            alt={article.title}
            width={1600}
            height={900}
            className="w-full h-auto rounded-2xl"
            sizes="100vw"
            priority
          />
        </div>
      )}

      <h1 className="text-2xl md:text-6xl font-bold text-[#152731]">
        {article.title}
      </h1>

      <p className="my-2 text-gray-500 font-medium">
        {new Date(article.date).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </p>

      <div className="flex flex-wrap gap-2 my-6">
        {article.tags?.map((tag: string) => (
          <span
            key={tag}
            className="px-2 py-1 rounded-lg text-medium bg-gray-100 hover:bg-gray-200"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* PortableText renders the JSON blocks from Sanity.
          We wrap it in a 'prose' div for automatic styling.
      */}
      <article className="prose prose-slate prose-sm md:prose-lg max-w-none mb-16">
        <PortableText value={article.content} />
      </article>
    </main>
  );
}
