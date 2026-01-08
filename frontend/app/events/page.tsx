"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import Tag from "./Tag";
import { ARTICLES } from "@/data/articles";
import { ArrowDown } from "lucide-react";

const TAGS: string[] = [
  "Competition",
  "Announcement",
  "Event",
  "Partnership",
  "Achievement",
  "Networking",
];

const ROWS: string[][] = [
  ["Competition", "Announcement", "Event"],
  ["Partnership", "Achievement"],
  ["Networking"],
];

const Page = () => {
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  const STEP = isMobile ? 3 : 6;
  const articlesRef = useRef<HTMLDivElement | null>(null);
  const prevVisibleRef = useRef<number>(visibleCount);
  const prevIsMobile = useRef<boolean | null>(null);

  // Detect screen size
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

  // Toggle tag active state
  const toggleTag = (tag: string) => {
    setActiveTags((prev) => {
      const newSet = new Set(prev);
      newSet.has(tag) ? newSet.delete(tag) : newSet.add(tag);
      return newSet;
    });
  };

  const renderTags = (tags: string[]) =>
    tags.map((tag) => (
      <Tag
        key={tag}
        label={tag}
        active={activeTags.has(tag)}
        onClick={() => toggleTag(tag)}
      />
    ));

  // Search
  const [searchQuery, setSearchQuery] = useState("");
  const titleFilteredArticles = ARTICLES.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Move matching articles to the top, keep all articles
  const sortedArticles = [...titleFilteredArticles].sort((a, b) => {
    const aMatch = a.tags.some((tag) => activeTags.has(tag));
    const bMatch = b.tags.some((tag) => activeTags.has(tag));
    return aMatch === bMatch ? 0 : aMatch ? -1 : 1;
  });

  const visibleArticles = sortedArticles.slice(0, visibleCount);

  // Load more articles incrementally
  const handleLoadMore = () => {
    prevVisibleRef.current = visibleCount;
    setVisibleCount((prev) => Math.min(prev + STEP, sortedArticles.length));
  };

  // Show less (reset to base count)
  const handleShowLess = () => {
    const newCount = isMobile ? 3 : 6;
    setVisibleCount(newCount);
    prevVisibleRef.current = newCount;
  };

  const canLoadMore = visibleCount < sortedArticles.length;

  return (
    <>
      <div className="border-t-2 border-gray-300" />

      {/* Header */}
      <section className="pt-20 flex flex-col items-center text-center">
        <div className="pb-12">
          <h1 className="font-medium text-3xl sm:text-4xl md:text-6xl text-[#152731]">
            See the Latest News on{" "}
            <strong className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#152731] to-[#0AAB80]">
              SPARK HUB
            </strong>
          </h1>
        </div>

        {/* Search */}
        <div className="relative w-[clamp(5rem,80vw,52rem)]">
          <svg
            className="absolute left-6 top-1/2 -translate-y-1/2 h-4 sm:h-5 text-metallic pointer-events-none"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
            />
          </svg>

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full bg-[#378394]/35 text-metallic font-medium pl-14 sm:pl-16 py-2 sm:py-3 lg:py-4 text-sm sm:text-lg lg:text-xl focus:outline-none placeholder-metallic"
            placeholder="Search..."
          />
        </div>

        {/* Mobile tags */}
        <div className="w-[clamp(7rem,90vw,50rem)] pt-6 flex flex-col gap-2 sm:hidden">
          {ROWS.map((row, i) => (
            <div key={i} className="flex justify-center gap-2">
              {renderTags(row)}
            </div>
          ))}
        </div>

        {/* Desktop tags */}
        <div className="hidden sm:flex w-[clamp(7rem,90vw,50rem)] pt-8 flex-wrap justify-center gap-4">
          {renderTags(TAGS)}
        </div>
      </section>

      {/* Articles */}
      <section
        ref={articlesRef}
        className="mx-6 md:mx-12 lg:mx-40 grid grid-cols-1 md:grid-cols-3 gap-6 mt-14"
      >
        {visibleArticles.map((article) => (
          <Link
            key={article.id}
            href={`/events/${article.id}`}
            className="flex flex-col"
          >
            <div className="h-[clamp(8rem,30vh,25rem)] rounded-3xl overflow-hidden bg-gray-200">
              {article.image && (
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover"
                />
              )}
            </div>

            <div className="px-4 pt-3">
              <h2 className="font-semibold text-[clamp(1.5rem,2vw,2.3rem)] text-[#2E2E2E]">
                {article.title}
              </h2>

              <p className="text-[#2E2E2E] font-medium text-sm sm:text-lg">
                {article.excerpt}
              </p>

              <div className="flex flex-wrap gap-3 pt-2 pb-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-lg font-medium text-xs sm:text-sm bg-gray-400 text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span className="text-sm text-gray-500 font-medium">
                {article.date}
              </span>
            </div>
          </Link>
        ))}
      </section>

      {/* Load More / Show Less */}
      {sortedArticles.length > (isMobile ? 3 : 6) && (
        <div className="text-center py-6 sm:py-20">
          {canLoadMore ? (
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 text-sm sm:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#152731] to-[#0AAB80]"
            >
              Load More
              <ArrowDown
                className="h-[min(1.5rem,2.5vh)] text-[#0AAA7F]"
                strokeWidth={2}
              />
            </button>
          ) : (
            <button
              onClick={handleShowLess}
              className="inline-flex items-center gap-2 text-sm sm:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#152731] to-[#0AAB80]"
            >
              Show Less
              <ArrowDown
                className="h-[min(1.5rem,2.5vh)] text-[#0AAA7F] rotate-180"
                strokeWidth={2}
              />
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Page;
