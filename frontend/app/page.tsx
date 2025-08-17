import Hero from "@/components/sections/Hero_Section";
import Home_About from "@/components/sections/Home_About";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section*/}
      <section id="Hero_Section">
          <Hero />
      </section>

      {/* About Spark*/}
      <section id="Home_About">
          <Home_About />
      </section>

      { /* Mission */}
      <section id="Mission"
          className="bg-[url('/bg/mission_bg.png')] bg-cover bg-center bg-no-repeat py-96 px-36 text-slate-900">
          <div id="Our_Mission"
               className="bg-white rounded-[5rem] border border-black flex justify-between px-24 py-20 bg-opacity-20 backdrop-blur-[10px] mb-24">
                { /* Our Mission */}
                <div id="Title"
                    className="flex flex-col gap-5 mt-56">
                  <h1
                    className="text-8xl">
                    Our
                  </h1>
                  <h1 
                    className="text-8xl font-semibold">
                    Mission
                  </h1>
                  <hr
                    className="border-t-4 border-slate-900 w-40">
                  </hr>

                  { /* SPARK Commitment */}
                  <div id="Caption"
                    className="flex flex-cols gap-5 w-[36rem] text-xl items-center">
                    <Image
                        width={74}
                        height={74}
                        src="\vectors\mission_graphic.svg"
                        alt="mission graphics"
                    />

                    <p 
                      className="">
                      <strong> SPARK HUB </strong> 
                      is commited to empower young
                      student innovators and future leaders.
                    </p>
                  </div>
                </div>

                { /* SPARK Mission */}
                <div id="SPARK_Mission"
                      className="flex flex-col gap-6 w-fit ml-20">
                    <div id="Transforming"
                         className="flex flex-row items-center gap-5">
                      <Image
                        width={40}
                        height={40}
                        src="\icons\transforming.svg"
                        alt="transforming icon"
                        className="drop-shadow-md"
                      />

                      <p id="Descripition"
                      >
                        <strong>Transforming ideas </strong>
                        into reality by creating projects.
                      </p>
                    </div>

                    <div id="Fostering"
                         className="flex flex-row items-center gap-5">
                      <Image
                        width={40}
                        height={40}
                        src="\icons\fostering.svg"
                        alt="transforming icon"
                        className="drop-shadow-md"
                      />

                      <p id="Descripition"
                      >
                        <strong>Fostering tech and business skills </strong>
                        through disciplinary training.
                      </p>
                    </div>

                    <div id="Nurturing"
                         className="flex flex-row items-center gap-5">
                      <Image
                        width={40}
                        height={40}
                        src="\icons\nurturing.svg"
                        alt="transforming icon"
                        className="drop-shadow-md"
                      />

                      <p id="Descripition"
                      >
                        <strong>Nurturing an ecosystem </strong>
                        that drives global comeptence and innovation.
                      </p>
                    </div>
                </div>
          </div>
      </section>

      { /* Vision */}
      <section id="Vision"
               className="bg-[url('/bg/vision_bg.png')] bg-cover bg-center bg-no-repeat py-44 px-36 text-slate-900">
        <div id="Our_Vision"
             className="bg-white rounded-[5rem] border border-black flex justify-between px-24 py-20 bg-opacity-20 backdrop-blur-[10px] mb-24">
            <div id="Content"
                 className="flex flex-col text-center py-40 mx-auto gap-5">
                <div id="Title"
                     className="flex gap-5 justify-center">
                  <h1
                    className="text-8xl">
                    Our
                  </h1>
                  <h1 
                    className="text-8xl font-semibold">
                    Vision
                  </h1>
                </div>

                <hr
                  className="border-t-4 border-slate-900 w-40 ml-60">
                </hr>

                <div id="Caption"
                      className="mx-auto">
                  <p 
                    className="mt-8 w-[34rem] text-2xl">
                    <strong> SPARK HUB </strong> 
                        envisions leading the Innovation 
                        Center for Youth in Western Visayas
                  </p>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
