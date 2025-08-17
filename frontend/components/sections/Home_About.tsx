import Image from "next/image";
import Link from "next/link";

export default function Home_About() {
  return (
    <section id="Home_About"
             className="bg-[url('/bg/home_about_bg.png')] bg-cover bg-center bg-no-repeat max-w-full pb-48 pt-[2rem]">

        {/* About Spark*/}
        <div id="About_SPARK"
             className="flex flex-col p-36 mt-20">
            
            <div id="Upper_Part"
                 className="flex flex-row justify-between w-full">
                <div id="Title"
                 className="flex flex-row gap-5">
                    <h1 className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent text-6xl font-medium">
                    About
                    </h1>

                    {/* Spark Typography */}
                    <div id="SPARK_Typorgraphy" className="font-bold text-6xl flex gap-5">
                        <h1 className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                        SPARK
                        </h1>
                        <h1 className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                        HUB
                        </h1>
                    </div>
                </div>

                {/* Spark About */}
                <div id="Info"
                     className="text-2xl max-w-md">
                    <p className="text-white"> 
                        <strong className="text-accent"> SPARK Hub </strong> is the technopreneurship center at <strong>West Visayas State University</strong>, where innovators, 
                        entrepreneurs and creatives 
                        come together.
                    </p>

                    <Link
                        href="/officers">
                        <div className="transform transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-105 font-semibold text-xl text-white bg-gradient-to-r from-cyan-600 to-teal-400 mt-4 w-3/4 rounded-xl py-4 text-center">
                            Meet the Team
                        </div>   
                    </Link>
                 
                </div>
            </div>

            <div id="Lower_Part"
                className="flex flex-row relative">
                {/* Image Card */}
                <div id="Image_Card"
                    className="bg-[url('/bg/home_image_card_gradient.png')] bg-cover bg-center bg-no-repeat rounded-[2rem] w-fit -mt-32">
                    <Image
                        width={750}
                        height={750}
                        src="/images/home_img_card.png"
                        alt="home image card"
                        className="p-7 border-2 border-white border-opacity-5 rounded-[2rem] backdrop-blur-[90px]"
                    />
                </div>

                {/* Right Card */}
                <div id="Right_Card"
                    className="absolute flex bg-[url('/bg/home_right_card_gradient.png')] bg-cover bg-center bg-no-repeat w-fit left-96 ml-[19rem] mt-44 ">     
                    <div id="Right_Card_Info"
                         className="py-8 px-6 bg-white bg-opacity-5 rounded-[2rem] backdrop-blur-[90px] border-2 border-white border-opacity-5 transform transition-all duration-300 ease-in-out hover:scale-105">
                        <h1 className="text-white text-3xl">
                            Our Commitment
                        </h1>
                        <h2 className="text-white text-lg opacity-50 mb-10"> 
                            We care about:
                        </h2>

                        <div id="Commitment"
                            className="grid grid-cols-2 gap-12">
                            <div id="Collaboration"
                                className="flex flex-row items-center gap-5">
                                <Image
                                    width={60}
                                    height={60}
                                    src="/icons/collaboration.svg"
                                    alt="collaboration"
                                    className="absolute glow-md glow-amber-300"
                                />

                                <Image
                                    width={60}
                                    height={60}
                                    src="/icons/collaboration.svg"
                                    alt="collaboration"
                                    className="relative drop-shadow-[-10px_10px_18px_#000000]"
                                />                                
                                <div id="Collab_Title"
                                    className="flex flex-col gap-1">
                                    <h1 className="text-xl text-accent">
                                        Collaboration 
                                    </h1>
                                    <p className="text-white opacity-50 font-light"> 
                                        with people
                                    </p>                                    
                                </div>
                            </div>

                            <div id="Innovate"
                                className="flex flex-row items-center gap-5">
                                <Image
                                    width={60}
                                    height={60}
                                    src="/icons/innovate.svg"
                                    alt="collaboration"
                                    className="absolute glow-md glow-amber-300"
                                />

                                <Image
                                    width={60}
                                    height={60}
                                    src="/icons/innovate.svg"
                                    alt="collaboration"
                                    className="relative drop-shadow-[-10px_10px_18px_#000000]"
                                />                                
                                <div id="Innov_Title"
                                    className="flex flex-col gap-1">
                                    <h1 className="text-xl text-accent">
                                        Innovate 
                                    </h1>
                                    <p className="text-white opacity-50 font-light"> 
                                        for the future
                                    </p>                                    
                                </div>
                            </div>  

                            <div id="Research"
                                className="flex flex-row items-center gap-5">
                                <Image
                                    width={60}
                                    height={60}
                                    src="/icons/research.svg"
                                    alt="collaboration"
                                    className="absolute glow-lg glow-accent"
                                />

                                <Image
                                    width={60}
                                    height={60}
                                    src="/icons/research.svg"
                                    alt="collaboration"
                                    className="relative drop-shadow-[-10px_10px_18px_#000000]"
                                />                                
                                <div id="Collab_Title"
                                    className="flex flex-col gap-1">
                                    <h1 className="text-xl text-accent">
                                        Research
                                    </h1>
                                    <p className="text-white opacity-50 font-light"> 
                                        with a purpose
                                    </p>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}