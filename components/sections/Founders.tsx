// components/FoundersSection.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Founding from "@/components/ui/Founding";
import { foundingTeam } from "@/data/founding";

export default function FoundersSection() {
  const [activeFounder, setActiveFounder] = useState(foundingTeam[0]);

  return (
    <section
      id="testimonials"
      className="flex flex-col items-center w-full min-h-[36rem] md:bg-gradient-to-br bg-gradient-to-b from-yellow-200 from-5% via-transparent via-70% to-primary-light md:pt-10 pt-5 py-10 md:py-0 md:gap-y-0 gap-y-5"
    >
      <div className="flex md:flex-row flex-col-reverse gap-x-20 justify-center w-full md:gap-y-0 gap-y-5">
        <div className="md:px-0 px-5 md:gap-y-5 gap-y-3 flex flex-col md:w-1/2 md:items-start items-center">
          <p className="font-bold md:text-7xl text-2xl text-primary">
            {activeFounder.name}
          </p>
          <p className="font-bold md:text-xl text-base text-primary tracking-wide md:text-start text-center">
            {activeFounder.title}
          </p>
          <p className="md:text-lg text-sm md:tracking-wide tracking-tight text-justify">
            {activeFounder.summary}
          </p>
        </div>

        <div className="bg-[url('/bg/founders_bg.webp')] bg-no-repeat bg-contain relative md:h-[40rem] h-[24rem] md:w-[32rem] w-full flex justify-center">
          <Image
            src={activeFounder.imageSrc}
            alt={activeFounder.name}
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-x-36 justify-items-center items-center md:w-full w-10/12 min-h-[12rem] md:h-36 p-6 md:p-0 bg-[#378394]/50 md:rounded-none rounded-2xl">
        {foundingTeam.map((member, key) => (
          <li key={key}>
            <Founding
              name={member.name}
              imageSrc={member.imageSrc}
              onClick={() => setActiveFounder(member)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
