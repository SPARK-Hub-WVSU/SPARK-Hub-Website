import Image from "next/image";
import PrincipleCard from "@/components/ui/PrincipleCard";
export default function About() {
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
        <h1 className="flex text-center justify-center md:py-20 md:text-8xl py-12 text-4xl px-4 font-bold text-metallic">PRINCIPLES</h1>
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
    </>
  );
}
