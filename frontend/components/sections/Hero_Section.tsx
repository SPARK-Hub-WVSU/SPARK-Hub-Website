import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="Hero_Section"
      className="bg-[#022A34] lg:bg-[url('/bg/hero_bg.png')] bg-[url('/bg/mobile_hero_bg.png')] bg-cover bg-center bg-no-repeat md:max-w-full min-h-screen lg:-mt-40 -mt-40 md:pt-96 pt-36 flex flex-col items-center justify-center"
    >
      {/* Hero */}
      <div
        id="Title"
        className="flex flex-col items-center lg:px-36 md:px-20 sm:px-16 px-9 md:-mt-56 mt-11 lg:max-w-[92rem] md:max-w-[45rem] sm:max-w-[38rem] max-w-[18.75rem]"
      >
        {/* Upper-Part */}
        <div
          id="Upper_Part"
          className="grid grid-cols-3 place-items-center md:max-w-3xl"
        >
          <Image
            height={290}
            width={290}
            src="/vectors/wifi.svg"
            alt="wifi"
            className="opacity-65 lg:mt-32 md:mt-36 mt-10 lg:mr-56 md:mr-44 sm:mr-3 mr-12 transition-all duration-300 ease-in-out hover:opacity-100 hover:glow-sm hover:glow-white"
          />

          <div
            id="Logo"
            className="relative lg:w-[7.5rem] md:w-[5.625rem] sm:w-[5rem] w-[3.5rem] lg:h-[9.375rem] md:h-[7.5rem] sm:h-[6rem] h-[4.5rem] "
          >
            <Image
              src="/vectors/hero_logo.svg"
              alt="SPARK HUB Logo"
              fill
              className="md:mt-24 sm:mt-12 mt-3 transition-all duration-300 ease-in-out hover:glow-md hover:glow-amber-300"
            />
          </div>

          <Image
            height={400}
            width={400}
            src="/vectors/computer.svg"
            alt="computer"
            className="opacity-65 lg:mr-[1.8rem] md:mr-10 sm:mr-5 mr-0 lg:mt-0 md:mt-16 -mt-6 m-4 lg:scale-150 md:scale-[140%] scale-150 transition-all duration-300 ease-in-out hover:opacity-100 hover:glow-sm hover:glow-white"
          />
        </div>

        {/* Spark Typography */}
        <div
          id="SPARK_Typorgraphy"
          className="font-bold lg:text-9xl md:text-8xl sm:text-7xl text-5xl flex gap-5 md:-mt-5 -mt-2 lg:mb-16 md:mb-8 mb-3"
        >
          <h1 className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
            SPARK
          </h1>
          <h1 className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            HUB
          </h1>
        </div>

        {/* Tag Line */}
        <div id="Tag Line">
          <div className="text-white lg:text-4xl sm:text-lg text-[0.75rem] flex flex-row md:gap-4 gap-2">
            <h1 className="font-bold">CREATE</h1> —
            <h1 className="font-bold">COLLABORATE</h1> —
            <h1 className="font-bold">EMPOWER</h1>
          </div>
        </div>

        {/* Lower-Part */}
        <div id="Lower Part" className="grid grid-cols-3 max-w-5xl">
          <div>
            <Image
              height={290}
              width={290}
              src="/vectors/people.svg"
              alt="people"
              className="xl:opacity-65 opacity-0 xl:-ml-32 lg:-ml-44 md:-ml-[5rem] lg:-mt-5 md:-mt-4 transition-all duration-300 ease-in-out hover:opacity-100 hover:glow-sm hover:glow-white"
            />

            <Image
              height={290}
              width={290}
              src="/vectors/mobile_people.svg"
              alt="wifi"
              className="xl:opacity-0 opacity-65 lg:-mt-[14.5rem] md:-mt-[10.8rem] sm:-mt-[10.3rem] -mt-[5rem] lg:-ml-[10.3rem] md:-ml-[3.3rem] sm:-ml-[3.5rem] -ml-[4.1rem] scale-50 transition-all duration-300 ease-in-out hover:opacity-100 hover:glow-sm hover:glow-white"
            />
          </div>

          <div className="flex justify-center md:mb-80 mb-52">
            <h2 className="lg:text-xl md:text-lg text-[0.75rem] lg:mt-14 md:mt-8 mt-4 flex text-center text-white italic md:relative absolute md:w-fit w-32">
              Turning ideas into impactful solutions
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
