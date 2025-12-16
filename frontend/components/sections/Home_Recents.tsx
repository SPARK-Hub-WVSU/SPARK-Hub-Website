import Image from "next/image";
import Link from "next/link";

export default function Recents() {
  return (
    <section id="Recents_Section" className="">
      {/* Layout */}
      <div
        id="layout"
        className="xl:max-w-[1175px] flex md:flex-row flex-col md:justify-between justify-center mx-auto xl:px-0 lg:px-32 px-9 lg:mt-20 lg:mb-36 py-32 lg:gap-24 md:gap-12 gap-8"
      >
        <div id="title" className="flex flex-col lg:w-80 w-72 gap-2">
          <h1 className="lg:text-6xl md:text-5xl text-4xl lg:leading-tight md:leading-tight">
            <span className="text-[#2E2E2E]">Recent</span> <br></br>
            <strong className="text-[#378394]">News and Events</strong>
          </h1>
          <hr className="md:border-t-4 border-t-2 md:w-44 w-20 border-[#378394]"></hr>
          <h3 className="lg:text-2xl md:text-xl text-lg lg:leading-tight md:leading-tight lg:mt-5 lg:w-72">
            Highlights from recent events and activities.
          </h3>
        </div>

        <Link
          href="#"
          id="thumbnail"
          className="group flex flex-col md:gap-5 gap-4 text-[#2E2E2E] lg:max-w-[700px]"
        >
          <Image
            width={700}
            height={400}
            src="/images/home_img_car.webp"
            alt="mission graphics"
            className="bg-black max-w-[700px] w-full"
          />

          <div className="relative w-fit">
            <h2
              id="article_title"
              className="md:text-4xl text-xl font-medium relative"
            >
              Article Title
            </h2>
            <span className="absolute left-0 bottom-[-0.40rem] w-full h-1 bg-[#2E2E2E] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
          </div>

          <p
            id="artilce_headline"
            className="lg:text-xl md:text-lg text-sm overflow-hidden line-clamp-2"
          >
            The venue was buzzing with energy as students from WVSU Main and
            External Campuses came together for
          </p>
          <p
            id="date_time_group"
            className="flex flex-col lg:text-xl md:text-lg text-xs "
          >
            <span id="time_read" className="font-semibold">
              8 Mins Read
            </span>
            <span id="date_posted">01 Aug 2025</span>
          </p>
          <hr></hr>
        </Link>
      </div>
    </section>
  );
}
