import Image from "next/image";

export default function Recents() {
  return (
    <section id="Recents_Section" className="">
      {/* Layout */}
      <div
        id="layout"
        className="md:max-w-[1175px] md:flex justify-between mx-auto px-9 lg:mt-20 lg:mb-36 "
      >
        <div id="title">
          <h1 className="lg:text-6xl md:text-36 lg:w-80 lg:leading-tight">
            <span className="text-[#2E2E2E]">Recent</span> <br></br>
            <strong className="text-[#378394]">News and Events</strong>
          </h1>
          <hr className="md:border-t-4 md:w-44 border-[#378394]"></hr>
          <h3 className="lg:text-2xl lg:leading-tight lg:mt-5 lg:w-72">
            Highlights from recent events and activities.
          </h3>
        </div>
        <a
          href="#"
          id="thumbnail"
          className="flex flex-col gap-5 text-[#2E2E2E] lg:max-w-[700px]"
        >
          <Image
            width={700}
            height={400}
            src="/images/home_img_car.webp"
            alt="mission graphics"
            className="bg-black"
          />
          <h2 id="article_title" className="md:text-4xl font-medium">
            Article Title
          </h2>
          <p
            id="artilce_headline"
            className="md:text-xl overflow-hidden line-clamp-2"
          >
            The venue was buzzing with energy as students from WVSU Main and
            External Campuses came together for
          </p>
          <p id="date_time_group" className="flex flex-col md:text-xl ">
            <span id="time_read" className="font-semibold">
              8 Mins Read
            </span>
            <span id="date_posted">01 Aug 2025</span>
          </p>
          <hr></hr>
        </a>
      </div>
    </section>
  );
}
