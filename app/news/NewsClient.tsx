// app/news/NewsClient.tsx
"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import Tag from "./Tag";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
// import { Image } from "sanity";

// Match the type from your GROQ query
interface SanityArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  image: typeof Image;
}

const TAGS = [
  "Competition",
  "Announcement",
  "Event",
  "Partnership",
  "Achievement",
  "Networking",
];

export default function NewsClient({
  initialArticles,
}: {
  initialArticles: SanityArticle[];
}) {
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");

  const STEP = isMobile ? 3 : 6;
  const articlesRef = useRef<HTMLDivElement | null>(null);
  const prevVisibleRef = useRef<number>(visibleCount);
  const prevIsMobile = useRef<boolean | null>(null);

  useEffect(() => {
    const checkScreen = () => {
      const mobile = window.innerWidth < 640;
      if (prevIsMobile.current !== mobile) {
        setIsMobile(mobile);
        setVisibleCount(mobile ? 3 : 6);
        prevVisibleRef.current = mobile ? 3 : 6;
        prevIsMobile.current = mobile;
      }
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(tag)) {
        newSet.delete(tag);
      } else {
        newSet.add(tag);
      }
      return newSet;
    });
  };

  const titleFilteredArticles = initialArticles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const sortedArticles = [...titleFilteredArticles].sort((a, b) => {
    const aMatch = a.tags?.some((tag) => activeTags.has(tag));
    const bMatch = b.tags?.some((tag) => activeTags.has(tag));
    return aMatch === bMatch ? 0 : aMatch ? -1 : 1;
  });

  const visibleArticles = sortedArticles.slice(0, visibleCount);

  const handleLoadMore = () => {
    prevVisibleRef.current = visibleCount;
    setVisibleCount((prev) => Math.min(prev + STEP, sortedArticles.length));
  };

  const handleShowLess = () => {
    setVisibleCount(isMobile ? 3 : 6);
  };

  return (
    <>
      <div className="border-t-2 border-gray-300" />
      {/* ... Header and Search sections stay the same ... */}
      <section className="pt-20 flex flex-col items-center text-center">
        <div className="pb-12">
          <h1 className="font-medium text-3xl sm:text-4xl md:text-6xl text-[#152731]">
            See the Latest News on{" "}
            <strong className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#152731] to-[#0AAB80]">
              SPARK HUB
            </strong>
          </h1>
        </div>

        <div className="relative w-[clamp(5rem,80vw,52rem)]">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full bg-[#378394]/35 text-metallic font-medium pl-14 py-2 sm:py-4 text-sm sm:text-xl focus:outline-none placeholder-metallic"
            placeholder="Search..."
          />
        </div>

        <div className="pt-8 flex flex-wrap justify-center gap-4">
          {TAGS.map((tag) => (
            <Tag
              key={tag}
              label={tag}
              active={activeTags.has(tag)}
              onClick={() => toggleTag(tag)}
            />
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section
        ref={articlesRef}
        className="my-14 mx-6 md:mx-40 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {visibleArticles.map((article) => (
          <Link
            key={article.id}
            href={`/news/${article.id}`}
            className="flex flex-col"
          >
            <div className="relative h-[clamp(8rem,30vh,25rem)] rounded-3xl overflow-hidden bg-gray-200">
              {article.image && (
                <Image
                  src={urlFor(article.image).width(600).url()} // Best Practice: Dynamic sizing
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>

            <div className="px-4 pt-3">
              <h2 className="font-semibold text-xl text-[#2E2E2E]">
                {article.title}
              </h2>
              <p className="text-[#2E2E2E] line-clamp-2">{article.excerpt}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {article.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-lg text-xs bg-gray-100 hover:bg-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-sm text-gray-500">
                {new Date(article.date).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </Link>
        ))}
      </section>

      {/* Load More Button */}
      {sortedArticles.length > (isMobile ? 3 : 6) && (
        <div className="text-center py-20">
          <button
            onClick={
              visibleCount < sortedArticles.length
                ? handleLoadMore
                : handleShowLess
            }
            className="text-xl font-medium text-[#0AAB80]"
          >
            {visibleCount < sortedArticles.length ? "Load More" : "Show Less"}
          </button>
        </div>
      )}
    </>
  );
}
