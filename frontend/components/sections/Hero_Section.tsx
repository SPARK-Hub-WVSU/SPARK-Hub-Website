import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="Hero_Section"
      className="md:bg-[url('/bg/hero_bg.png')] bg-[url('/bg/mobile_hero_bg.png')] bg-cover bg-center bg-no-repeat md:max-w-full min-h-screen md:-mt-32 -mt-40 md:pt-96 pt-36 flex flex-col items-center justify-center"
    >
      {/* Hero */}
      <div
        id="Title"
        className="flex flex-col items-center md:px-36 px-9 md:-mt-60 mt-11 md:max-w-[92rem] max-w-[300px]"
      >
        {/* Upper-Part */}
        <div
          id="Upper_Part"
          className="grid grid-cols-3 place-items-center md:max-w-5xl"
        >
          <Image
            height={290}
            width={290}
            src="/vectors/wifi.svg"
            alt="wifi"
            className="opacity-65 md:mt-32 mt-10 md:mr-20 mr-12 transition-all duration-300 ease-in-out hover:opacity-100 hover:glow-sm hover:glow-white"
          />

          <div
            id="Logo"
            className="relative md:w-[120px] md:h-[150px] w-[56px] h-[72px] "
          >
            <Image
              src="/vectors/hero_logo.svg"
              alt="SPARK HUB Logo"
              fill
              className="md:mt-24 mt-3 transition-all duration-300 ease-in-out hover:glow-md hover:glow-amber-300"
            />
          </div>

          <Image
            height={400}
            width={400}
            src="/vectors/computer.svg"
            alt="computer"
            className="opacity-65 md:mr-60 md:-mt-0 -mt-6 mr-0 m-4 md:scale-100 scale-150 transition-all duration-300 ease-in-out hover:opacity-100 hover:glow-sm hover:glow-white"
          />
        </div>

        {/* Spark Typography */}
        <div
          id="SPARK_Typorgraphy"
          className="font-bold md:text-9xl text-5xl flex gap-5 md:-mt-5 -mt-2 md:mb-16 mb-3"
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
          <div className="text-white md:text-3xl text-[12px] flex flex-row md:gap-4 gap-2">
            <h1 className="font-bold">CREATE</h1> —
            <h1 className="font-bold">COLLABORATE</h1> —
            <h1 className="font-bold">EMPOWER</h1>
          </div>
        </div>

        {/* Lower-Part */}
        <div
          id="Lower Part"
          className="grid grid-cols-3 md:max-w-[74.5rem] max-w-2xl"
        >
          <div>
            <Image
              height={290}
              width={290}
              src="/vectors/people.svg"
              alt="people"
              className="md:opacity-65 opacity-0 md:mr-[33rem] md:-mt-5 transition-all duration-300 ease-in-out hover:opacity-100 hover:glow-sm hover:glow-white"
            />

            <Image
              height={290}
              width={290}
              src="/vectors/mobile_people.svg"
              alt="wifi"
              className="md:opacity-0 opacity-65 -mt-[5rem] md:-ml-[3.8rem] -ml-[4rem] scale-50 transition-all duration-300 ease-in-out hover:opacity-100 hover:glow-sm hover:glow-white"
            />
          </div>

          <div className="flex justify-center md:mb-80 mb-96">
            <h2 className="md:text-xl text-[0.75rem] md:mt-14 mt-4 flex text-center text-white italic md:relative absolute md:w-fit w-32">
              Turning ideas into impactful solutions
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
