"use client";

import { useState } from "react";
import Tag from "./Tag";

const TAGS: string[] = [
  "Competition",
  "Announcement",
  "Event",
  "Partnership",
  "Achievement",
  "Networking",
];

const Page = () => {
  // multiple selected tags
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag) 
        : [...prev, tag]
    );
  };

  return (
    <>
      <div className="border-t-2 border-gray-300" />

      <section className="pt-20 flex flex-col items-center">
        <div className="pb-12">
          <h1 className="font-medium text-6xl text-[#152731]">
            See the Latest News on{" "}
            <strong className="text-[#0AAB80]">SPARK HUB</strong>
          </h1>
        </div>

        {/* Search */}
        <div className="relative w-[52rem]">
          <svg
            className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-metallic pointer-events-none"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
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
            className="rounded-full bg-[#378394]/35 w-full h-16 text-metallic pl-16 font-medium text-xl focus:outline-none placeholder-metallic"
            placeholder="Search..."
          />
        </div>

        <div className="w-[48rem] pt-8 flex flex-wrap gap-4 justify-center">
          {TAGS.map((tag) => (
            <Tag
              key={tag}
              label={tag}
              active={activeTags.includes(tag)}
              onClick={() => toggleTag(tag)}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Page;
