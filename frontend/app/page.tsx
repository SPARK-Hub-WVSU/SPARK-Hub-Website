import Hero from "@/components/sections/Hero_Section";
import Home_About from "@/components/sections/Home_About";
import Image from "next/image";
import { Circle } from "@/components/ui/Vision_Mission_Circle";

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
        className="md:py-96 py-48 lg:px-36 sm:px-16 px-9 text-slate-900 flex flex-col items-center justify-center"
      >
        {/* Background Circles */}
        <div className="relative">
          <div className="absolute md:-top-[23rem] -top-[7rem] md:left-[23rem] left-[8rem]">
            <Circle className="md:w-[470px] w-[160px] md:h-[470px] h-[160px]"/>
          </div>
          <div className="absolute md:top-[15rem] top-[4rem] md:-left-[13rem]">
            <Circle className="md:w-[465px] w-[105px] md:h-[465px] h-[105px]"/> 
          </div>
          <div className="absolute md:-top-[5rem] top-[0.25rem] md:left-[8rem] left-[4rem]">
            <Circle className="md:w-[245px] w-[58px] md:h-[245px] h-[58px]"/> 
          </div>
          <div className="absolute md:top-[16rem] top-[3rem] md:left-[18rem] left-[8rem]">
            <Circle className="md:w-[160px] w-[48px] md:h-[160px] h-[48px]"/>
          </div>
          <div className="absolute md:block hidden md:top-[25rem] md:left-[29rem]">
            <Circle className="md:w-[100px] w-[105px] md:h-[100px] h-[105px]"/> 
          </div>
          <div className="absolute md:top-[28rem] top-[19rem] md:right-[28rem] right-[8rem]">
            <Circle variant="teal" className="md:w-[470px] w-[350px] md:h-[470px] h-[350px]" /> 
          </div>
          <div className="absolute md:top-[18rem] top-[25rem] md:right-[15rem] -right-[3rem]">
            <Circle variant="teal" className="md:w-[265px] w-[120px] md:h-[265px] h-[120px]"/>
          </div>
          <div className="absolute md:-top-[5rem] top-[15rem] md:right-[10rem] right-[6rem]">
            <Circle variant="teal" className="md:w-[200px] w-[75px] md:h-[200px] h-[75px]" /> 
          </div>
          <div className="absolute md:top-[10rem] top-[6rem] md:right-[32rem] right-[3rem]">
            <Circle variant="teal" className="md:w-[130px] w-[55px] md:h-[130px] h-[55px]"/> 
          </div>
        </div>

        <div
          id="Our_Mission"
          className="bg-white md:rounded-[5rem] rounded-[1rem] border border-black border-opacity-30 xl:flex xl:justify-between md:px-24 px-5 py-10 bg-opacity-20 md:backdrop-blur-[10px] backdrop-blur-[5px] md:max-w-[1175px] min-w-[280px] w-full justify-center"
        >
          {/* Our Mission */}
          <div
            id="Title"
            className="flex flex-col md:gap-5 gap-3 md:mt-56 mt-0"
          >
            <h1 className="md:text-8xl text-[2rem]">
              Our
              <span className="font-semibold md:-mt-0 -mt-3">
                <br /> Mission
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
          </ul>
        </div>
      </section>

      {/* Vision */}
      <section
        id="Vision"
        className="md:py-96 py-48 lg:px-36 sm:px-16 px-9 text-slate-900 flex flex-col items-center justify-center"
      >
          {/* Background Circles */}
          <div className="relative">
            <div className="absolute md:top-[4rem] top-[4rem] md:-left-[7rem] -left-[1rem]">
              <Circle className="md:w-[414px] w-[110px] md:h-[414px] h-[110px]"/>
            </div>
            <div className="absolute md:top-[30rem] top-[12rem] md:left-[30rem] left-[8rem]">
              <Circle className="md:w-[257px] w-[75px] md:h-[257px] h-[75px]"/> 
            </div>
            <div className="absolute md:-top-[5rem] top-[1rem] md:-left-[20rem] right-[2rem]">
              <Circle className="md:w-[210px] w-[60px] md:h-[210px] h-[60px]"/> 
            </div>
            <div className="absolute md:top-[8rem] top-[5rem] md:left-[24rem] left-[8rem]">
              <Circle className="md:w-[160px] w-[48px] md:h-[160px] h-[48px]"/>
            </div>
            <div className="absolute md:top-[22rem] top-[9rem] md:left-[23rem] left-[7rem]">
              <Circle className="md:w-[105px] w-[30px] md:h-[105px] h-[30px]"/> 
            </div>
            <div className="absolute md:top-[32rem] top-[14rem] md:-right-[3rem] right-[0rem]">
              <Circle variant="teal" className="md:w-[300px] w-[105px] md:h-[300px] h-[105px]"/>
            </div>
            <div className="absolute md:top-[18rem] top-[10rem] md:-left-[34rem] -left-[10rem]">
              <Circle variant="teal" className="md:w-[200px] w-[56px] md:h-[200px] h-[56px]" /> 
            </div>
            <div className="absolute md:-top-[3rem] top-[5.5rem] md:-left-[32rem] -left-[11rem]">
              <Circle variant="teal" className="md:w-[130px] w-[37px] md:h-[130px] h-[37px]"/> 
            </div>
          </div>
        <div
          id="Our_Vision"
          className="bg-white md:rounded-[5rem] rounded-[1rem] border border-black border-opacity-30 md:flex md:justify-between md:px-24 px-5 py-10 bg-opacity-20 md:backdrop-blur-[10px] backdrop-blur-[5px] md:max-w-[1175px] min-w-[280px] w-full justify-center"
        >
          <div
            id="Content"
            className="flex flex-col text-center md:py-40 py-10 mx-auto md:gap-5 w-full"
          >
            <div id="Title" className="flex md:gap-5 gap-3 justify-center">
              <h1 className="md:text-8xl text-[2rem]">
                Our
                <span className="font-semibold md:-mt-0 -mt-3 md:ml-[1.5rem] ml-[0.75rem]">
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
