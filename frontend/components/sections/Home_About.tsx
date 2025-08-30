import Image from "next/image";
import Link from "next/link";

export default function Home_About() {
  return (
    <section
      id="Home_About"
      className="bg-[#022A34] md:bg-[url('/bg/home_about_bg.png')] bg-[url('/bg/mobile_home_about_bg.png')] bg-cover bg-center bg-no-repeat md:max-w-full min-h-screen md:pb-48 md:pt-[2rem] flex flex-col items-center justify-center"
    >
      {/* About Spark*/}
      <div
        id="About_SPARK"
        className="flex xl:flex-row flex-col md:p-0 lg:px-32 md:px-16 sm:px-16 px-9 md:py-24 sm:py-36 py-14 md:mt-20 md:gap-16 md:max-w-full"
      >
        <div id="Upper_Part" className="flex flex-col w-full">
          <div id="Title" className="flex md:flex-row flex-col md:gap-5">
            {/* Spark Typography */}
            <div>
              <div
                id="SPARK_Typorgraphy"
                className="font-bold sm:text-6xl text-3xl flex"
              >
                <h1>
                  <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent font-medium">
                    About
                  </span>
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent sm:ml-5 ml-3">
                    SPARK
                  </span>
                  <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text lg:ml-[1.5rem] sm:ml-[1.25rem] ml-[0.5rem] text-transparent">
                    HUB
                  </span>
                </h1>
              </div>
              <hr className="sm:border-t-4 border-t-2 border-yellow-500 sm:ml-52 ml-[6.5rem] sm:w-[21rem] w-[11rem] sm:mt-3 mt-0"></hr>
            </div>
          </div>

          {/* Image Card */}
          <div className="xl:w-fit w-[90%]">
            <div
              id="Image_Card"
              className="bg-[url('/bg/home_image_card_gradient.png')] bg-cover bg-center bg-no-repeat md:rounded-[2rem] rounded-[1rem] w-fit 2xl:mt-10 xl:mt-8 md:mt-10 mt-4"
            >
              <Image
                width={720}
                height={720}
                src="/images/home_img_card.png"
                alt="home image card"
                className="md:p-7 p-2 border-2 border-white border-opacity-5 md:rounded-[2rem] rounded-[1rem] backdrop-blur-[90px]"
              />
            </div>
          </div>

          {/* Right Card */}
          <div className="flex 2xl:ml-[41rem] xl:ml-[33rem] ml-[25%] md:mb-0 mb-7">
            <div
              id="Right_Card"
              className="bg-[url('/bg/home_right_card_gradient.png')] md:rounded-[2rem] rounded-[1rem] bg-cover bg-center bg-no-repeat xl:w-max lg:w-full md:w-max w-full 2xl:-mt-56 xl:-mt-48 lg:-mt-24 md:-mt-14 -mt-10"
            >
              <div
                id="Right_Card_Info"
                className="md:p-5 px-3 py-2 bg-white bg-opacity-5 md:rounded-[2rem] rounded-[1rem] backdrop-blur-[90px] md:border-2 border-[1.75px] border-white border-opacity-5 transform transition-all duration-300 ease-in-out hover:scale-105"
              >
                <h2 className="text-white md:text-3xl text-sm">
                  Our Commitment
                </h2>
                <p className="text-white md:text-lg text-[10px] md:mb-10 mb-4">
                  We care about:
                </p>

                <div
                  id="Commitment"
                  className="grid sm:grid-cols-2 md:gap-12 md:-ml-0 -ml-2"
                >
                  <div
                    id="Collaboration"
                    className="w-full flex flex-row items-center md:gap-5 gap-1"
                  >
                    <Image
                      width={60}
                      height={60}
                      src="/icons/collaboration.svg"
                      alt="collaboration"
                      className="relative w-fit md:scale-100 scale-75 drop-shadow-[-10px_10px_18px_#000000] transition-all duration-300 ease-in-out hover:glow-lg hover:glow-amber-300"
                    />
                    <div id="Collab_Title" className="flex flex-col md:gap-1">
                      <p className="md:text-xl text-sm text-accent">
                        Collaboration
                      </p>
                      <p className="text-white md:text-md text-[12px] font-light">
                        with people
                      </p>
                    </div>
                  </div>

                  <div
                    id="Innovate"
                    className="flex flex-row items-center md:gap-5 gap-2"
                  >
                    <Image
                      width={60}
                      height={60}
                      src="/icons/innovate.svg"
                      alt="collaboration"
                      className="relative md:scale-100 scale-75 w-fit drop-shadow-[-10px_10px_18px_#000000] 
                                        transition-all duration-300 ease-in-out hover:glow-lg hover:glow-amber-300"
                    />
                    <div id="Innov_Title" className="flex flex-col md:gap-1">
                      <p className="md:text-xl text-sm text-accent">Innovate</p>
                      <p className="text-white md:text-md text-[12px] font-light">
                        for the future
                      </p>
                    </div>
                  </div>

                  <div
                    id="Research"
                    className="flex flex-row items-center md:gap-5 gap-2"
                  >
                    <Image
                      width={60}
                      height={60}
                      src="/icons/research.svg"
                      alt="collaboration"
                      className="relative md:scale-100 scale-75 w-fit drop-shadow-[-10px_10px_18px_#000000] transition-all duration-300 ease-in-out hover:glow-lg hover:glow-amber-300"
                    />
                    <div id="Collab_Title" className="flex flex-col md:gap-1">
                      <p className="md:text-xl text-sm text-accent">Research</p>
                      <p className="text-white md:text-md text-[12px] font-light">
                        with a purpose
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="Lower_Part" className="flex flex-col">
          {/* Spark About */}
          <div
            id="Info"
            className="md:text-2xl 2xl:max-w-2xl 2xl:-ml-[25rem] xl:-ml-[17.5rem] lg:-ml-0"
          >
            <p className="text-white">
              <strong className="text-accent"> SPARK Hub </strong> is the
              technopreneurship center at{" "}
              <strong>West Visayas State University</strong>, where innovators,
              entrepreneurs and creatives come together.
            </p>

            <Link
              className="flex xl:ml-[0%] lg:ml-[60%] ml-[50%]"
              href="/officers"
            >
              <div className="transform transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-105 font-semibold md:text-xl text-white bg-gradient-to-r from-cyan-600 to-teal-400 xl:mt-4 lg:mt-8 mt-4 2xl:w-96 lg:w-full md:w-96 w-full rounded-xl md:py-4 py-2 text-center">
                Meet the Team
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
