import Link from "next/link";
import Image from "next/image";
import Forms from "@/components/ui/Footer_Forms";

export default function Footer() {
  return (
    <footer className="bg-[url('/bg/footer_bg.png')] bg-cover bg-center bg-no-repeat w-full min-h-screen">
      <nav className="text-white text-xl w-auto h-auto flex flex-row justify-between py-20 px-36">
        {/* Logo */}
        <div id="Logo" className="flex flex-col gap-6">
          <div className="flex items-center gap-6">
            <Image
              width={60}
              height={60}
              src="/vectors/footer_logo.svg"
              alt="SPARK HUB Logo"
              priority
            />
            <div className="font-bold text-5xl flex gap-5">
              <h1 className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                SPARK
              </h1>
              <h1 className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                HUB
              </h1>
            </div>
          </div>
          <p className="font-medium">
            IGNITING INNOVATION <br /> INNOVATING THE FUTURE
          </p>
        </div>

        {/* Navigation Links */}
        <div
          id="Links"
          className="flex flex-row gap-20 justify-center max-w-xl"
        >
          {/* Home */}
          <div id="Home" className="flex flex-col gap-4">
            <div className="font-semibold transform transition-all duration-300 ease-in-out hover:glow-md hover:glow-white">
              <Link href="/"> Home </Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="" className="hover:glow-2xl hover:glow-white">
                Mission
              </Link>
              <Link href="" className="hover:glow-2xl hover:glow-white">
                Vision
              </Link>
              <Link href="" className="hover:glow-2xl hover:glow-white">
                Recent <br /> News
              </Link>
            </div>
          </div>

          {/* About */}
          <div id="About" className="flex flex-col gap-4">
            <div className="font-semibold transform transition-all duration-300 ease-in-out hover:glow-md hover:glow-white">
              <Link href="/about"> About Us </Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="" className="hover:glow-2xl hover:glow-white">
                Section
              </Link>
              <Link href="" className="hover:glow-2xl hover:glow-white">
                Section
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div id="Contact" className="flex flex-col gap-4">
            <div className="font-semibold transform transition-all duration-300 ease-in-out hover:glow-md hover:glow-white">
              <Link href=""> Contacts </Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="" className="hover:glow-2xl hover:glow-white">
                Facebook
              </Link>
              <Link href="" className="hover:glow-2xl hover:glow-white">
                Email
              </Link>
            </div>
          </div>

          {/* Team */}
          <div id="Team" className="flex flex-col gap-4">
            <div className="font-semibold transform transition-all duration-300 ease-in-out hover:glow-md hover:glow-white">
              <Link href="/officers"> Team </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Divider */}
      <hr
        id="Line"
        className="flex border-t-1 border-white border-opacity-40 py-12 mx-36"
      />

      {/* Contact Form */}
      <section id="Connect" className="flex flex-row justify-between px-36">
        <div id="Stay" className="flex flex-col gap-8">
          <h1 className="text-accent text-6xl font-semibold">
            Stay in <br /> Touch!
          </h1>
          <p className="text-white">
            Ready to spark innovation? <br /> Get in Touch!
          </p>
        </div>
        <Forms />
      </section>

      <section
        id="Copy_Right"
        className="flex flex-row justify-between items-center px-36 pb-40"
      >
        <p className="text-white font-medium text-xl">
          © 2025 SPARK HUB. All rights reserved
        </p>

        <div id="FB_GM" className="flex flex-row gap-10 relative">
          <Link
            href=""
            className="relative hover:scale-105 hover:brightness-105"
          >
            <Image
              src="/icons/facebook.svg"
              alt="Facebook"
              width={32}
              height={32}
              className="absolute z-10 shadow-inner"
            />
            <Image
              src="/icons/facebook.svg"
              alt="Facebook Shadow"
              width={32}
              height={32}
              className="relative saturate-0 brightness-0 blur-md opacity-80"
            />
          </Link>

          <Link
            href=""
            className="relative hover:scale-105 hover:brightness-105"
          >
            <Image
              src="/icons/gmail.svg"
              alt="Gmail"
              width={32}
              height={32}
              className="absolute z-10 shadow-inner"
            />
            <Image
              src="/icons/gmail.svg"
              alt="Gmail Shadow 1"
              width={32}
              height={32}
              className="absolute z-0 saturate-0 brightness-0 blur-md"
            />
            <Image
              src="/icons/gmail.svg"
              alt="Gmail Shadow 2"
              width={32}
              height={32}
              className="relative z-0 saturate-0 brightness-0 blur-md opacity-10"
            />
          </Link>
        </div>
      </section>
    </footer>
  );
}
