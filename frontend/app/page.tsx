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
        className="lg:bg-[url('/bg/mission_bg.png')] bg-[url('/bg/mobile_mission_bg.png')] bg-cover bg-center bg-no-repeat md:py-96 sm:py-80 py-32 lg:px-36 sm:px-16 px-9 text-slate-900 flex flex-col items-center justify-center"
      >
        <div
          id="Our_Mission"
          className="bg-white md:rounded-[5rem] rounded-[1rem] border border-black border-opacity-30 xl:flex xl:justify-between md:px-24 px-5 py-10 bg-opacity-20 backdrop-blur-[10px] md:mb-24 md:max-w-[1175px] min-w-[280px] w-full justify-center"
        >
          {/* Our Mission */}
          <div
            id="Title"
            className="flex flex-col md:gap-5 gap-3 md:mt-56 mt-0"
          >
            <h1
              className="md:text-8xl text-[2rem]">
              Our
              <span
                className="font-semibold md:-mt-0 -mt-3">
                  <br/> Mission
              </span>
            </h1>
            <hr className="md:border-t-4 border-slate-900 md:w-40 w-32"></hr>

            {/* SPARK Commitment */}
            <div
              id="Caption"
              className="flex flex-cols md:gap-5 gap-0 md:w-[36rem] w-fill md:text-xl text-[12px] md:-ml-0 -ml-4 md:-mt-0 -mt-3 items-center"
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
          <ul
            id="SPARK_Mission"
            className="flex flex-col gap-6 w-fit md:ml-16 ml-10 md:text-sm text-[12px] :mt-16 mt-9"
          >
            <li
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
            </li>

            <li
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
            </li>

            <li
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
            </li>
          </ul>
        </div>
      </section>

      {/* Vision */}
      <section
        id="Vision"
        className="lg:bg-[url('/bg/vision_bg.png')] bg-[url('/bg/mobile_vision_bg.png')] bg-cover bg-center bg-no-repeat md:py-96 sm:py-80 py-32 lg:px-36 sm:px-16 px-9 text-slate-900 flex flex-col items-center justify-center"
      >
        <div
          id="Our_Vision"
          className="bg-white md:rounded-[5rem] rounded-[1rem] border border-black border-opacity-30 md:flex md:justify-between md:px-24 px-5 py-10 bg-opacity-20 backdrop-blur-[10px] md:mb-24 md:max-w-[1175px] min-w-[280px] w-full justify-center"
        >
          <div
            id="Content"
            className="flex flex-col text-center md:py-40 py-10 mx-auto md:gap-5 w-full"
          >
            <div id="Title" className="flex md:gap-5 gap-3 justify-center">
              <h1
                className="md:text-8xl text-[2rem]">
                Our
                <span
                  className="font-semibold md:-mt-0 -mt-3 md:ml-[1.5rem] ml-[0.75rem]">
                    Vision
                </span>
              </h1>
            </div>

            <hr className="md:border-t-4 border-t-2 border-slate-900 md:w-40 w-12 lg:ml-[45%] md:ml-[43%] ml-[47%]"></hr>

            <div id="Caption" className="mx-auto">
              <p className="md:mt-8 mt-5 lg:w-[34rem] md:w-fit w-52 md:text-2xl text-[12px]">
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
