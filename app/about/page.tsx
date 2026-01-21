// app/about/page.tsx
import Image from "next/image";
import PrincipleCard from "@/components/ui/PrincipleCard";
import { client } from "@/sanity/lib/client";
import { INITIATIVES_QUERY } from "@/sanity/lib/queries";
import { ImageCard, ArticleCard } from "@/components/ui/InitiativeCards";
import FoundersSection from "@/components/sections/Founders";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableTextBlock } from "next-sanity";

interface Initiative {
  id: string;
  title: string;
  excerpt: string;
  image: SanityImageSource;
}

export default async function About() {
  const initiatives = await client.fetch(INITIATIVES_QUERY);

  return (
    <>
      <main className="bg-primary-dark bg-[url('/bg/officers_bg.webp')] bg-cover bg-center bg-no-repeat sm:min-h-screen lg:-mt-30 -mt-40 px-3">
        {/* ... Hero Section remains same ... */}
        <div className="flex flex-col gap-y-20 justify-center text-center py-24 sm:py-52 md:py-72">
          <h1 className="font-bold justify-center text-center text-5xl md:text-8xl gap-x-2 md:gap-x-5 md:mt-0 mt-16 flex flex-row">
            <span className="text-white flex flex-row justify-center items-center">
              AB
              <div className="relative size-16 md:size-32">
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
          <p className="text-white font-bold md:text-xl text-md italic">
            SPARK Hub is the technopreneurship center at WVSU.
          </p>
        </div>
      </main>

      <section
        id="principles"
        className="bg-white bg-[url('/bg/about-middle-bg.webp')] bg-contain md:bg-cover bg-top bg-no-repeat min-h-screen px-3"
      >
        <h2 className="flex text-center justify-center md:py-20 md:text-8xl py-12 text-4xl px-4 font-bold text-metallic">
          PRINCIPLES
        </h2>
        <ul className="py-5 flex lg:flex-row flex-col items-center justify-center -space-x-3">
          {/* S - High */}
          <li className="flex lg:mt-0 mt-5">
            <PrincipleCard
              letter="S"
              title="STUDENT CENTRICITY"
              description="Putting students first in technology, innovation, and entrepreneurship."
            />
          </li>

          {/* P - Low (Pushed down via wrapper) */}
          <li className="lg:mt-48 mt-5 z-10">
            <PrincipleCard
              letter="P"
              title="PASSION FOR INNOVATION"
              description="Embracing creativity and breakthrough solutions for societal progress."
            />
          </li>

          {/* A - High */}
          <li className="flex lg:mt-0 mt-5">
            <PrincipleCard
              letter="A"
              title="ADVANCEMENT THROUGH COLLABORATION"
              description="Achieving greater impact through inclusive teamwork and partnerships."
            />
          </li>

          {/* R - Low (Pushed down via wrapper) */}
          <li className="lg:mt-48 mt-5 z-10">
            <PrincipleCard
              letter="R"
              title="RESILIENCE AND ADAPTABILITY"
              description="Embracing change, overcoming obstacles, and continuous growth."
            />
          </li>

          {/* K - High */}
          <li className="flex md:mt-0 mt-5">
            <PrincipleCard
              letter="K"
              title="KNOWLEDGE & SKILL DEVELOPMENT"
              description="Fostering continuous learning for technical expertise and entrepreneurial mindset."
            />
          </li>
        </ul>
      </section>

      {/* Initiatives Section */}
      <section
        id="about-initiatives"
        className="flex md:flex-row flex-col-reverse md:gap-x-5 gap-x-0 sm:gap-y-5 min-h-screen md:px-8 px-3 py-10 justify-between"
      >
        <ul className="h-full w-full flex flex-col gap-y-3">
          {initiatives.map((item: Initiative, i: number) => {
            // 'any' replaced with 'Initiative'
            const isEven = i % 2 === 0;
            const href = `/events/${item.id}`;

            return (
              <li
                key={item.id}
                className={`${
                  isEven ? "md:ml-9 md:justify-start" : "md:mr-9 md:justify-end"
                } flex flex-row justify-center gap-x-3`}
              >
                {isEven ? (
                  <ImageCard title={item.title} image={item.image} />
                ) : (
                  <ArticleCard href={href} article={item.excerpt} />
                )}

                {isEven ? (
                  <ArticleCard href={href} article={item.excerpt} />
                ) : (
                  <ImageCard title={item.title} image={item.image} />
                )}
              </li>
            );
          })}
        </ul>
        <div className="min-w-fit h-fit mb-7 md:text-5xl text-3xl text-end flex flex-col">
          <h2>
            SPARK Hub&apos;s <br />
            <em className="text-accent">
              <strong>INITIATIVES</strong>
            </em>
          </h2>
          <hr className="my-5 w-36 h-1 bg-accent border-0 ms-auto" />
          <small className="text-end text-xl">
            Empower Ideas <br /> into Action
          </small>
        </div>
      </section>

      {/* The Interactive Client Component */}
      <FoundersSection />
    </>
  );
}
