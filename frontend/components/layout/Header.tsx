"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-transparent relative z-10">
      <nav className="text-white text-2xl lg:text-2xl md:text-xl sm:text-lg w-full h-auto flex flex-row items-center justify-between md:py-3 sm:px-12 px-6 md:px-16 lg:px-36 sm:my-7 my-5">
        {/* Logo */}
        <div id="Home" className="mb-2">
          <Link
            href="/"
            className="font-semibold text-xl sm:text-2xl md:text-2xl lg:text-3xl flex items-center gap-4 sm:gap-6 md:gap-8 relative"
          >
            <Image
              src="/vectors/nav_logo.svg"
              alt="SPARK Hub Logo"
              width={45}
              height={45}
              priority
              className="glow-xl glow-white w-9 h-9 sm:w-12 sm:h-12 xl:w-16 xl:h-16 mt-1.5"
            />
            <h1 className="hidden sm:block">SPARK HUB</h1>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div
          id="Content"
          className="hidden md:flex flex-row gap-4 lg:gap-10 justify-center items-center"
        >
          <Link
            href="/about"
            className="transform transition-all duration-300 ease-in-out text-sm md:text-base lg:text-xl relative group"
          >
            <span className="relative z-10">About Us</span>
            <span className="absolute left-0 bottom-[-0.40rem] w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
          </Link>
          <Link
            href="/officers"
            className="transform transition-all duration-300 ease-in-out text-sm md:text-base lg:text-xl relative group"
          >
            <span className="relative z-10">Team</span>
            <span className="absolute left-0 bottom-[-0.40rem] w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
          </Link>
          <Link
            id="Contact"
            href="/contact"
            className="transform transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-105"
          >
            <button className="text-accent bg-white bg-opacity-5 backdrop-blur-3xl w-auto px-3 py-2 md:px-5 md:py-3 lg:px-7 lg:py-5 flex flex-row items-center gap-2 lg:gap-3 border rounded-2xl lg:rounded-3xl text-sm md:text-base lg:text-xl">
              <div>Contact Us</div>
              <div>
                <ArrowRightIcon
                  strokeWidth={4}
                  className="mx-1 h-4 md:h-5 lg:h-6 stroke-accent"
                />
              </div>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="text-black h-6 w-6" />
          ) : (
            // <Bars3Icon className="h-6 w-6" />
            <Image
              src="/icons/hamburger.svg"
              width={42}
              height={42}
              alt="hamburger icon"
              className="shadow-xl"
            />
          )}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl">
          <div className="px-4 py-7 space-y-4">
            <Link
              href="/about"
              className="block text-black hover:text-accent transition-colors duration-300 text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/officers"
              className="block text-black hover:text-accent transition-colors duration-300 text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Officers
            </Link>
            <Link
              href="/contact"
              className="block text-black hover:text-accent transition-colors duration-300 text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
