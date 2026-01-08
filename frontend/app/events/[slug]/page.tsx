import { ARTICLES } from "@/data/articles";
import Image from "next/image";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ArticlePage({ params }: PageProps) {
  const article = ARTICLES.find((a) => a.id === params.slug);

  if (!article) {
    return <h1>Article not found</h1>;
  }

  return (
    <main className="mx-6 md:mx-40 max-w-full">
      {article.image && (
        <div className="w-full my-8">
          <Image
            src={article.image}
            alt="Image"
            width={1600}
            height={900}
            className="w-full h-auto"
            sizes="100vw"
            priority
          />
        </div>
      )}

      <h1 className="text-2xl md:text-6xl font-bold">{article.title}</h1>
      <p className="my-2">{article.date}</p>
      <div className="flex flex-wrap gap-2 my-6">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 md:px-5 py-1 rounded-lg bg-gray-200 text-sm md:text-md"
          >
            {tag}
          </span>
        ))}
      </div>
      <article className="text-sm md:text-lg mb-16 text-justify">
        {article.content}
      </article>
    </main>
  );
}
