import Link from "next/link";
import Image from "next/image";
import Forms from "@/components/ui/ContactForm";

export default function Footer() {
  return (
    <footer className="bg-[url('/bg/footer_bg.webp')] bg-cover bg-center bg-no-repeat w-full min-h-screen">
      <nav className="text-white text-xl w-auto h-auto flex flex-col lg:flex-row justify-between py-8 lg:py-20 px-4 lg:px-36">
        {/* Logo */}
        <div
          id="Logo"
          className="flex flex-col items-center lg:items-start gap-4 mb-8 lg:mb-0"
        >
          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-3 lg:gap-6">
            <Image
              width={40}
              height={40}
              src="/vectors/footer_logo.svg"
              alt="SPARK HUB Logo"
              priority
              className="size-40 lg:size-16"
            />
            <div className="font-bold text-5xl flex gap-2 lg:gap-5 text-center lg:text-left">
              <h1>
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent mr-2">
                  SPARK
                </span>
                <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                  HUB
                </span>
              </h1>
            </div>
          </div>

          <p className="font-medium text-center lg:text-left text-xl tracking-widest lg:tracking-widest">
            IGNITING INNOVATION <br /> INNOVATING THE FUTURE
          </p>
        </div>

        {/* Navigation Links */}
        <div
          id="Links"
          className="text-sm sm:text-base lg:text-lg grid grid-cols-3 lg:flex lg:flex-row gap-10 lg:gap-20 justify-items-start justify-center max-w-full lg:max-w-xl lg:text-left mx-auto lg:mx-0"
        >
          {/* Home */}
          <div
            id="Home"
            className="flex flex-col gap-3 lg:gap-5 translate-x-2 lg:translate-x-0"
          >
            <Link href="/">
              <span className="relative z-10 inline-block group">
                Home
                <span className="absolute left-0 bottom-[-0.25rem] w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </span>
            </Link>
            <div className="flex flex-col gap-3 lg:gap-5">
              <Link href="" className="hover:glow-2xl hover:glow-white">
                Mission
              </Link>
              <Link href="" className="hover:glow-2xl hover:glow-white">
                Vision
              </Link>
              <Link
                href=""
                className="hover:glow-2xl hover:glow-white text-left"
              >
                Recent <br /> News
              </Link>
            </div>
          </div>

          {/* About */}
          <div id="About" className="flex flex-col gap-3 lg:gap-5">
            <Link href="/">
              <span className="relative z-10 inline-block group">
                About Us
                <span className="absolute left-0 bottom-[-0.25rem] w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </span>
            </Link>
            <div className="flex flex-col gap-3 lg:gap-5 ">
              <Link href="" className="hover:glow-2xl hover:glow-white">
                Principles
              </Link>
              <Link href="" className="hover:glow-2xl hover:glow-white">
                Initiatives
              </Link>
              <Link href="" className="hover:glow-2xl hover:glow-white">
                Testimonials
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div id="Contact" className="flex flex-col gap-3 lg:gap-5">
            <Link href="/contact">
              <span className="relative z-10 inline-block group">
                Contacts
                <span className="absolute left-0 bottom-[-0.25rem] w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </span>
            </Link>
            <div className="flex flex-col gap-3 lg:gap-5">
              <Link
                href="https://www.facebook.com/WVSUSparkHub"
                className="hover:glow-2xl hover:glow-white"
              >
                Facebook
              </Link>
              <Link
                href="mailto:spark.hub@wvsu.edu.ph"
                className="hover:glow-2xl hover:glow-white"
              >
                Email
              </Link>
            </div>
          </div>

          {/* Officers */}
          <div
            id="Team"
            className="flex flex-col gap-3 lg:gap-5 translate-x-2 lg:translate-x-0"
          >
            <Link href="/officers">
              <span className="relative z-10 inline-block group">
                Officers
                <span className="absolute left-0 bottom-[-0.25rem] w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Divider */}
      <hr
        id="Line"
        className="border-t-1 border-white border-opacity-40 my-6 lg:my-12 mx-4 lg:mx-36"
      />

      {/* Contact Form */}
      <section
        id="Connect"
        className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0 px-4  lg:px-36"
      >
        <div
          id="Stay"
          className="flex flex-col gap-4 lg:gap-8 text-center lg:text-left"
        >
          <h1 className="text-accent text-3xl lg:text-6xl font-semibold">
            Stay in{" "}
            <span className="hidden lg:inline">
              <br />
            </span>{" "}
            Touch!
          </h1>
          <p className="text-white text-sm lg:text-xl hidden md:block">
            Ready to spark innovation? <br /> Get in Touch!
          </p>
        </div>
        <div className="w-full lg:w-auto">
          <Forms variant="footer" />
        </div>
      </section>

      <section
        id="Copy_Right"
        className="flex flex-col-reverse lg:flex-row justify-between items-center gap-20  px-4  lg:px-36 pb-20 lg:pb-40 pt-8 lg:pt-0"
      >
        <p className="text-white font-medium text-sm lg:text-xl text-center">
          © 2025 SPARK HUB. All rights reserved
        </p>

        <div id="FB_GM" className="flex flex-row gap-11 lg:gap-10 relative">
          <Link
            href="https://www.facebook.com/WVSUSparkHub"
            target="_blank"
            rel="noopener noreferrer"
            className="relative transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-105"
          >
            <Image
              src="/icons/facebook.svg"
              alt="Facebook"
              width={24}
              height={24}
              className="absolute z-10 shadow-inner w-12 h-12 lg:w-8 lg:h-8"
            />
            <Image
              src="/icons/facebook.svg"
              alt="Facebook Shadow"
              width={24}
              height={24}
              className="relative saturate-0 brightness-0 blur-md opacity-80 w-12 h-12 lg:w-8 lg:h-8"
            />
          </Link>

          <Link
            href="mailto:spark.hub@wvsu.edu.ph"
            className="relative transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-105"
          >
            <Image
              src="/icons/gmail.svg"
              alt="Gmail"
              width={24}
              height={24}
              className="absolute z-10 shadow-inner w-12 h-12 lg:w-8 lg:h-8"
            />
            <Image
              src="/icons/gmail.svg"
              alt="Gmail Shadow 1"
              width={24}
              height={24}
              className="absolute z-0 saturate-0 brightness-0 blur-md w-12 h-12 lg:w-8 lg:h-8"
            />
            <Image
              src="/icons/gmail.svg"
              alt="Gmail Shadow 2"
              width={24}
              height={24}
              className="relative z-0 saturate-0 brightness-0 blur-md opacity-10 w-12 h-12 lg:w-8 lg:h-8"
            />
          </Link>
        </div>
      </section>
    </footer>
  );
}
