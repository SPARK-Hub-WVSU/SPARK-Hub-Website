import Image from "next/image";

export default function Home() {
  return (
    <section id ="Hero_Section" className="bg-[url('/bg/hero_bg.png')] bg-cover bg-center bg-no-repeat max-w-full -mt-32 pt-28">
        {/* Hero */}
        <div id="Title"
             className="flex flex-col items-center px-36">
          
          {/* Upper-Part */}
          <div id="Upper_Part"
               className="grid grid-cols-3 place-items-center max-w-5xl"
          >
            <Image
              height={290}
              width={290}
              src="/vectors/wifi.svg"
              alt="wifi"
              className="opacity-65 mt-32 mr-20 transition-all duration-300 ease-in-out hover:opacity-100 hover:glow-sm hover:glow-white"
            />

            <div id="Logo">
              <Image
                width={120}
                height={120}
                src="/vectors/hero_logo.svg"
                alt="SPARK HUB Logo"
                className="flex mt-48 transition-all duration-300 ease-in-out hover:glow-md hover:glow-amber-300"
              />  
            </div>

            <Image
              height={400}
              width={400}
              src="/vectors/computer.svg"
              alt="computer"
              className="opacity-65 mr-60 m-4 transition-all duration-300 ease-in-out hover:opacity-100 hover:glow-sm hover:glow-white"
            />
          </div>

          {/* Spark Typography */}
          <div id="SPARK_Typorgraphy" className="font-bold text-9xl flex gap-5 -mt-5 mb-16">
            <h1 className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              SPARK
            </h1>
            <h1 className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              HUB
            </h1>
          </div>

          {/* Tag Line */}
          <div id="Tag Line">
            <div className="text-white text-3xl flex flex-row gap-4">
              <h1 className="font-bold"> 
                CREATE 
              </h1> — 
              <h1 className="font-bold"> 
                COLLABORATE
              </h1> — 
              <h1 className="font-bold"> 
                EMPOWER
              </h1>
            </div>
          </div>

          {/* Lower-Part */}
          <div id="Lower_Part"
               className="grid grid-cols-3 place-items-center max-w-6xl mb-56"
          >
            <Image
              height={290}
              width={290}
              src="/vectors/people.svg"
              alt="wifi"
              className="opacity-65 mr-32 -mt-5 ml-1 transition-all duration-300 ease-in-out hover:opacity-100 hover:glow-sm hover:glow-white"
            />
               
            <h2 className="text-xl text-white italic">
              Turning ideas into impactful solutions
            </h2>
          </div>

        </div>
    </section>
  );
}
