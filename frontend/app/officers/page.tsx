"use client";
import React, { useState, useRef } from "react";
import OfficersGrid from "@/components/ui/Officers_grid";
import Image from "next/image";
import { officersByYear } from "@/data/officers";

export default function Officers() {
  const [year, setYear] = useState<"2025" | "2024" | "2023">("2025");
  const heroRef = useRef<HTMLDivElement>(null);

  const handleYearClick = (newYear: "2025" | "2024" | "2023") => {
    setYear(newYear);
    heroRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="bg-[#022A34] bg-[url('/bg/officers_bg.webp')] bg-cover bg-center bg-no-repeat sm:min-h-screen lg:-mt-30 -mt-40">
        <div className="flex justify-center text-center py-24 sm:py-52 md:py-72">
          <h1 className="font-bold text-4xl sm:text-6xl md:text-8xl  md:mt-0 mt-16 text-white">
            Meet the <br />
            <strong className="text-accent">TEAM</strong>
          </h1>
        </div>
      </section>

      <div className="relative min-h-screen w-full bg-white py-14">
        <Image
          src="/bg/excom-top_bg.webp"
          alt="excom bg"
          width={1920}
          height={600}
          className="absolute inset-0 w-full h-auto"
          sizes="100vw"
        />

        <header className="relative flex justify-center text-center">
          <h1
            ref={heroRef}
            className="font-bold text-4xl sm:text-6xl md:text-7xl text-metallic"
          >
            EXCOM <br />
            <strong className="text-accent font-sarina font-normal">
              {year}
            </strong>
          </h1>
        </header>

        <OfficersGrid cards={officersByYear[year]} />

        <Image
          src="/bg/excom-bottom_bg.webp"
          alt="excom bg"
          width={1920}
          height={600}
          className="absolute bottom-0 -left-16 w-full h-auto object-cover z-10"
          sizes="100vw"
        />

        <section className="relative justify-center flex flex-row gap-8 z-20 mt-4 font-medium text:sm sm:text-base">
          {["2025", "2024", "2023"].map((y) => (
            <button
              key={y}
              onClick={() => handleYearClick(y as any)}
              className={`pb-1 border-b-2 ${
                year === y ? "border-accent text-accent " : "border-transparent"
              }`}
            >
              {y}
            </button>
          ))}
        </section>
      </div>
    </>
  );
}
