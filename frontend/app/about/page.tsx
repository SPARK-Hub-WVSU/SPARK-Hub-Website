"use client";
import Image from "next/image";
import PrincipleCard from "@/components/ui/PrincipleCard";
import { ArticleCard, ImageCard } from "@/components/ui/InitiativeCards";
import { initiatives } from "@/data/initiatives";
import Founding from "@/components/ui/Founding";
import { useState } from "react";
import { foundingTeam } from "@/data/founding";
export default function About() {
  const [activeFounder, setActiveFounder] = useState(foundingTeam[0]);
  return (
    <>
      <section className="bg-primary-dark bg-[url('/bg/officers_bg.webp')] bg-cover bg-center bg-no-repeat sm:min-h-screen lg:-mt-30 -mt-40 px-3">
        <div className="flex flex-col gap-y-20 justify-center text-center py-24 sm:py-52 md:py-72">
          <h1 className="font-bold justify-center text-center text-5xl md:text-8xl gap-x-2 md:gap-x-5 md:mt-0 mt-16 flex flex-row">
            <span className="text-white flex flex-row justify-center items-center">
              AB
              <div className="relative size-16 md:size-32 transition-all duration-250 ease-in-out hover:glow-md hover:glow-white">
                <Image
                  src="/vectors/hero_logo.svg"
                  alt="Hero Logo"
                  fill
                  className="object-contain"
                />
              </div>
              UT
            </span>
            <span className="text-accent flex flex-row justify-center items-center">
              US
            </span>
          </h1>
          <p className="text-white font-bold md:text-xl sm:text-xs text-md">
            <i>SPARK Hub is the technopreneurship center at WVSU.</i>
          </p>
        </div>
      </section>
      <section className="bg-white bg-[url('/bg/about-middle-bg.webp')] bg-contain md:bg-cover bg-top bg-no-repeat min-h-screen px-3">
        <h2 className="flex text-center justify-center md:py-20 md:text-8xl py-12 text-4xl px-4 font-bold text-metallic">
          PRINCIPLES
        </h2>
        <div className="py-5 flex lg:flex-row flex-col items-center justify-center -space-x-3">
          {/* S - High */}
          <div className="flex lg:mt-0 mt-5">
            <PrincipleCard
              letter="S"
              title="STUDENT CENTRICITY"
              description="Putting students first in technology, innovation, and entrepreneurship."
            />
          </div>

          {/* P - Low (Pushed down via wrapper) */}
          <div className="lg:mt-48 mt-5 z-10">
            <PrincipleCard
              letter="P"
              title="PASSION FOR INNOVATION"
              description="Embracing creativity and breakthrough solutions for societal progress."
            />
          </div>

          {/* A - High */}
          <div className="flex lg:mt-0 mt-5">
            <PrincipleCard
              letter="A"
              title="ADVANCEMENT THROUGH COLLABORATION"
              description="Achieving greater impact through inclusive teamwork and partnerships."
            />
          </div>

          {/* R - Low (Pushed down via wrapper) */}
          <div className="lg:mt-48 mt-5 z-10">
            <PrincipleCard
              letter="R"
              title="RESILIENCE AND ADAPTABILITY"
              description="Embracing change, overcoming obstacles, and continuous growth."
            />
          </div>

          {/* K - High */}
          <div className="flex md:mt-0 mt-5">
            <PrincipleCard
              letter="K"
              title="KNOWLEDGE & SKILL DEVELOPMENT"
              description="Fostering continuous learning for technical expertise and entrepreneurial mindset."
            />
          </div>
        </div>
      </section>
      <section className="flex md:flex-row flex-col-reverse md:gap-x-5 gap-x-0 sm:gap-y-5 min-h-screen md:px-8 px-3 py-10 justify-between">
        <div className="h-full  w-full flex flex-col gap-y-3">
          {initiatives.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={item.title}
                className={`
              ${isEven ? "md:ml-9 md:justify-start" : "md:mr-9 md:justify-end"}
              flex flex-row justify-center gap-x-3
              min-h-fit min-w-fit
            `}
              >
                {/* LEFT SIDE */}
                {isEven ? (
                  <ImageCard
                    title={item.title}
                    description={item.caption}
                    imagePath={item.image}
                  />
                ) : (
                  <ArticleCard href="#" article={item.description} />
                )}

                {/* RIGHT SIDE */}
                {isEven ? (
                  <ArticleCard href="#" article={item.description} />
                ) : (
                  <ImageCard
                    title={item.title}
                    description={item.caption}
                    imagePath={item.image}
                  />
                )}
              </div>
            );
          })}
        </div>
        {/* INITIATIVES LABEL */}
        <div className="min-w-fit h-fit mb-7 md:text-5xl text-3xl text-end flex flex-col">
          <h2>
            SPARK Hub&apos;s <br />
            <i className="text-accent">
              <strong>INITIATIVES</strong>
            </i>
          </h2>
          <hr className="my-5 w-36 h-1 bg-accent border-0 ms-auto" />
          <small className="text-end text-xl">
            Empower Ideas <br /> into Action
          </small>
        </div>
      </section>

      <section className="flex flex-col items-center w-full min-h-[36rem] md:bg-gradient-to-br bg-gradient-to-b from-yellow-200 from-5% via-transparent via-70% to-primary-light md:pt-10 pt-5 py-10 md:py-0 md:gap-y-0 gap-y-5">
        {/* TOP DETAILS */}
        <div className="flex md:flex-row flex-col-reverse gap-x-20 justify-center w-full md:gap-y-0 gap-y-5">
          {/* DEETS */}
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

          {/* IMAGE */}
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

        {/* FOUNDERS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-x-36 justify-items-center items-center md:w-full w-10/12 min-h-[12rem] md:h-36 p-6 md:p-0 bg-[#378394]/50 md:rounded-none rounded-2xl">
          {foundingTeam.map((member) => (
            <Founding
              key={member.name}
              name={member.name}
              imageSrc={member.imageSrc}
              onClick={() => setActiveFounder(member)}
            />
          ))}
        </div>
      </section>
    </>
  );
}
