import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="">
      <nav className="text-white text-2xl w-full h-auto flex flex-row items-center justify-between py-5 px-36">
        {/* Logo */}
        <div id="Home" className="mb-2">
          <Link
            href="/"
            className="font-semibold text-3xl flex items-center gap-8 relative"
          >
            <Image
              src="/vectors/nav_logo.svg"
              alt="SPARK Hub Logo"
              width={48}
              height={48}
              priority
              className="absolute"
            />
            <Image
              id="Logo_Glow"
              src="/vectors/nav_logo.svg"
              alt="SPARK Hub Logo Glow"
              width={48}
              height={48}
              className="relative blur-sm opacity-60"
            />
            <h1>SPARK HUB</h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <div
          id="Content"
          className="flex flex-row gap-10 justify-center items-center"
        >
          <Link
            href="/about"
            className="transform transition-all duration-300 ease-in-out hover:glow-2xl hover:glow-white"
          >
            About Us
          </Link>
          <Link
            href="/officers"
            className="transform transition-all duration-300 ease-in-out hover:glow-2xl hover:glow-white"
          >
            Team
          </Link>
          <Link
            id="Contact"
            href=""
            className="transform transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-105"
          >
            <button className="text-accent bg-white bg-opacity-5 backdrop-blur-3xl w-auto px-7 py-5 flex flex-row items-center gap-3 border rounded-3xl">
              <div>Contact Us</div>
              <div>
                <ArrowRightIcon
                  strokeWidth={4}
                  className="mx-1 h-6 stroke-accent"
                />
              </div>
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
