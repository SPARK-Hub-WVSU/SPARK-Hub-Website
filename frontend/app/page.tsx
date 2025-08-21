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

      {/* Mission */}
      <section
        id="Mission"
        className="md:bg-[url('/bg/mission_bg.png')] bg-[url('/bg/mobile_mission_bg.png')] bg-cover bg-center bg-no-repeat md:py-96 py-32 md:px-36 px-9 text-slate-900 flex flex-col items-center justify-center"
      >
        <div
          id="Our_Mission"
          className="bg-white md:rounded-[5rem] rounded-[1rem] border border-black md:flex md:justify-between md:px-24 px-5 py-10 bg-opacity-20 backdrop-blur-[10px] md:mb-24 md:max-w-full max-w-[420px] min-w-[360px] justify-center"
        >
          {/* Our Mission */}
          <div
            id="Title"
            className="flex flex-col md:gap-5 gap-3 md:mt-56 mt-0"
          >
            <h1 className="md:text-8xl text-[2rem]">Our</h1>
            <h1 className="md:text-8xl text-[2rem] font-semibold md:-mt-0 -mt-3">
              Mission
            </h1>
            <hr className="md:border-t-4 border-t-2 border-slate-900 md:w-40 w-20"></hr>

            {/* SPARK Commitment */}
            <div
              id="Caption"
              className="flex flex-cols md:gap-5 gap-0 md:w-[36rem] w-fill md:text-xl text-[10px] md:-ml-0 -ml-4 md:-mt-0 -mt-3 items-center"
            >
              <Image
                width={74}
                height={74}
                src="\vectors\mission_graphic.svg"
                alt="mission graphics"
                className="md:scale-100 scale-50"
              />

              <p className="md-ml-0 -ml-2">
                <strong> SPARK HUB </strong>
                is commited to empower young student innovators and future
                leaders.
              </p>
            </div>
          </div>

          {/* SPARK Mission */}
          <div
            id="SPARK_Mission"
            className="flex flex-col gap-6 w-fit md:ml-20 ml-10 md:text-sm text-[10px] md:mt-0 mt-9"
          >
            <div
              id="Transforming"
              className="flex flex-row items-center md:gap-5 gap-2"
            >
              <Image
                width={40}
                height={40}
                src="\icons\transforming.svg"
                alt="transforming icon"
                className="drop-shadow-md md:scale-100 scale-75"
              />

              <p id="Descripition">
                <strong>Transforming ideas </strong>
                into reality by creating projects.
              </p>
            </div>

            <div
              id="Nurturing"
              className="flex flex-row items-center md:gap-5 gap-2"
            >
              <Image
                width={40}
                height={40}
                src="\icons\nurturing.svg"
                alt="transforming icon"
                className="drop-shadow-md md:scale-100 scale-75"
              />

              <p id="Descripition">
                <strong>Nurturing an ecosystem </strong>
                that drives global comeptence and innovation.
              </p>
            </div>

            <div
              id="Fostering"
              className="flex flex-row items-center md:gap-5 gap-2"
            >
              <Image
                width={40}
                height={40}
                src="\icons\fostering.svg"
                alt="transforming icon"
                className="drop-shadow-md md:scale-100 scale-75"
              />

              <p id="Descripition">
                <strong>Fostering tech and business skills </strong>
                through disciplinary training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section
        id="Vision"
        className="bg-[url('/bg/vision_bg.png')] bg-cover bg-center bg-no-repeat py-44 px-36 text-slate-900"
      >
        <div
          id="Our_Vision"
          className="bg-white rounded-[5rem] border border-black flex justify-between px-24 py-20 bg-opacity-20 backdrop-blur-[10px] mb-32"
        >
          <div
            id="Content"
            className="flex flex-col text-center py-40 mx-auto gap-5"
          >
            <div id="Title" className="flex gap-5 justify-center">
              <h1 className="text-8xl">Our</h1>
              <h1 className="text-8xl font-semibold">Vision</h1>
            </div>

            <hr className="border-t-4 border-slate-900 w-40 ml-60"></hr>

            <div id="Caption" className="mx-auto">
              <p className="mt-8 w-[34rem] text-2xl">
                <strong> SPARK HUB </strong>
                envisions leading the Innovation Center for Youth in Western
                Visayas
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
