"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRightIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import Hamburger from "../icons/hamburger.svg";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-blue-950">
      <nav className="text-white text-2xl lg:text-2xl md:text-xl sm:text-lg w-full h-auto flex flex-row items-center justify-between py-3 px-4 sm:px-8 md:px-16 lg:px-36">
        {/* Logo */}
        <div id="Home" className="mb-2">
          <Link
            href="/"
            className="font-semibold text-xl sm:text-2xl md:text-2xl lg:text-3xl flex items-center gap-4 sm:gap-6 md:gap-8 relative"
          >
            <Image
              src="/vectors/nav_logo.svg"
              alt="SPARK Hub Logo"
              width={32}
              height={32}
              priority
              className="absolute sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
            />
            <Image
              id="Logo_Glow"
              src="/vectors/nav_logo.svg"
              alt="SPARK Hub Logo Glow"
              width={32}
              height={32}
              className="relative blur-sm opacity-60 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
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
            className="transform transition-all duration-300 ease-in-out hover:glow-2xl hover:glow-white text-sm md:text-base lg:text-xl"
          >
            About Us
          </Link>
          <Link
            href="/officers"
            className="transform transition-all duration-300 ease-in-out hover:glow-2xl hover:glow-white text-sm md:text-base lg:text-xl"
          >
            Team
          </Link>
          <Link
            id="Contact"
            href=""
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
            <XMarkIcon className="h-6 w-6" />
          ) : (
            // <Bars3Icon className="h-6 w-6" />
            <Image
              src={Hamburger}
              width={35}
              height={35}
              alt="hamburger icon"
            />
          )}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary-dark border-t border-white border-opacity-20">
          <div className="px-4 py-4 space-y-4">
            <Link
              href="/about"
              className="block text-white hover:text-accent transition-colors duration-300 py-2 text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/officers"
              className="block text-white hover:text-accent transition-colors duration-300 py-2 text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              href=""
              className="block py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <button className="text-accent bg-white bg-opacity-5 backdrop-blur-3xl w-full px-4 py-3 flex flex-row items-center justify-center gap-3 border rounded-2xl text-lg">
                <div>Contact Us</div>
                <div>
                  <ArrowRightIcon
                    strokeWidth={4}
                    className="h-5 stroke-accent"
                  />
                </div>
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
