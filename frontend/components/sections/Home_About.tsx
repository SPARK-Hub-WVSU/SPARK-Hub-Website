import Image from "next/image";
import Link from "next/link";

export default function Home_About() {
  return (
    <section id="Home_About"
             className="md:bg-[url('/bg/home_about_bg.png')] bg-[url('/bg/mobile_home_about_bg.png')] bg-cover bg-center bg-no-repeat md:max-w-full min-h-screen md:pb-48 md:pt-[2rem] flex flex-col items-center justify-center">
        {/* About Spark*/}
        <div id="About_SPARK"
             className="flex md:flex-row flex-col md:p-0 px-9 md:py-24 py-14 md:mt-20 md:gap-2 md:max-w-[1175px]">
            
            <div id="Upper_Part"
                 className="flex flex-col w-full">
                <div id="Title"
                 className="flex md:flex-row flex-col md:gap-5">
                    <h1 className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent md:text-6xl text-3xl font-medium">
                    About
                    </h1>

                    {/* Spark Typography */}                    
                    <div>
                        <div id="SPARK_Typorgraphy" className="font-bold md:text-6xl text-3xl flex md:gap-5 gap-2">
                            <h1 className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                            SPARK
                            </h1>
                            <h1 className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                            HUB
                            </h1>
                        </div>
                        <hr className="md:border-t-4 border-yellow-500 md:w-full w-[68%] md:mt-3 mt-0"></hr>
                    </div>

                </div>
                
                <div>
                    
                </div>
                {/* Image Card */}
                <div id="Image_Card"
                    className="bg-[url('/bg/home_image_card_gradient.png')] bg-cover bg-center bg-no-repeat md:rounded-[2rem] rounded-[1rem] md:w-fit w-[90%] md:mt-10 mt-4">
                    <Image
                        width={730}
                        height={730}
                        src="/images/home_img_card.png"
                        alt="home image card"
                        className="md:p-7 p-2 border-2 border-white border-opacity-5 md:rounded-[2rem] rounded-[1rem] backdrop-blur-[90px]"
                    />
                </div>

                {/* Right Card */}
                <div
                    className="flex md:ml-[41rem] ml-[25%] md:mb-0 mb-7">
                    <div id="Right_Card"
                        className="bg-[url('/bg/home_right_card_gradient.png')] md:rounded-[2rem] rounded-[1rem] bg-cover bg-center bg-no-repeat md:w-max w-full md:-mt-56 -mt-10">     
                        <div id="Right_Card_Info"
                            className="md:p-5 px-3 py-2 bg-white bg-opacity-5 md:rounded-[2rem] rounded-[1rem] backdrop-blur-[90px] md:border-2 border-[1.75px] border-white border-opacity-5 transform transition-all duration-300 ease-in-out hover:scale-105">
                            <h1 className="text-white md:text-3xl text-sm">
                                Our Commitment
                            </h1>
                            <h2 className="text-white md:text-lg text-[10px] opacity-50 md:mb-10 mb-4"> 
                                We care about:
                            </h2>

                            <div id="Commitment"
                                className="grid md:grid-cols-2 md:grid-rows-1 grid-rows-3 md:gap-12 md:-ml-0 -ml-2">
                                <div id="Collaboration" 
                                    className="w-full flex flex-row items-center md:gap-5 gap-1">
                                    <Image
                                        width={60}
                                        height={60}
                                        src="/icons/collaboration.svg"
                                        alt="collaboration"
                                        className="relative w-fit md:scale-100 scale-75 drop-shadow-[-10px_10px_18px_#000000] transition-all duration-300 ease-in-out hover:glow-lg hover:glow-amber-300"
                                    />                                
                                    <div id="Collab_Title"
                                        className="flex flex-col md:gap-1">
                                        <h1 className="md:text-xl text-sm text-accent">
                                            Collaboration 
                                        </h1>
                                        <p className="text-white md:text-md text-[10px] opacity-50 font-light"> 
                                            with people
                                        </p>                                    
                                    </div>
                                </div>

                                <div id="Innovate"
                                    className="flex flex-row items-center md:gap-5 gap-2">
                                    <Image
                                        width={60}
                                        height={60}
                                        src="/icons/innovate.svg"
                                        alt="collaboration"
                                        className="relative md:scale-100 scale-75 w-fit drop-shadow-[-10px_10px_18px_#000000] 
                                        transition-all duration-300 ease-in-out hover:glow-lg hover:glow-amber-300"
                                    />                                
                                    <div id="Innov_Title"
                                        className="flex flex-col md:gap-1">
                                        <h1 className="md:text-xl text-sm text-accent">
                                            Innovate 
                                        </h1>
                                        <p className="text-white md:text-md text-[10px] opacity-50 font-light"> 
                                            for the future
                                        </p>                                    
                                    </div>
                                </div>  

                                <div id="Research"
                                    className="flex flex-row items-center md:gap-5 gap-2">
                                    <Image
                                        width={60}
                                        height={60}
                                        src="/icons/research.svg"
                                        alt="collaboration"
                                        className="relative md:scale-100 scale-75 w-fit drop-shadow-[-10px_10px_18px_#000000] transition-all duration-300 ease-in-out hover:glow-lg hover:glow-amber-300"
                                    />                                
                                    <div id="Collab_Title"
                                        className="flex flex-col md:gap-1">
                                        <h1 className="md:text-xl text-sm text-accent">
                                            Research
                                        </h1>
                                        <p className="text-white md:text-md text-[10px] opacity-50 font-light"> 
                                            with a purpose
                                        </p>                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>

            </div>

            <div id="Lower_Part"
                className="flex flex-col">

                {/* Spark About */}
                <div id="Info"
                     className="md:text-2xl md:-ml-[25rem] max-w-3xl">
                    <p className="text-white"> 
                        <strong className="text-accent"> SPARK Hub </strong> is the technopreneurship center at <strong>West Visayas State University</strong>, where innovators, 
                        entrepreneurs and creatives 
                        come together.
                    </p>

                    <Link
                        className="flex md:ml-[0%] ml-[25%]"
                        href="/officers">
                        <div className="transform transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-105 font-semibold md:text-xl text-white bg-gradient-to-r from-cyan-600 to-teal-400 mt-4 md:w-3/4 w-full rounded-xl md:py-4 py-2 text-center">
                            Meet the Team
                        </div>   
                    </Link>
                 
                </div>
            </div>
        </div>
    </section>
  );
}