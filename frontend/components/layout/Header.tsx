"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isDarkHeader =
    pathname.startsWith("/events") || pathname.startsWith("/contact");

  const textColor = isDarkHeader ? "text-metallic" : "text-white";
  const logoWrapperBg = isDarkHeader
    ? "bg-gradient-to-b from-black via-teal-950 to-cyan-700"
    : "bg-transparent";

  return (
    <header className="relative z-10 bg-transparent">
      <nav className="w-full flex items-center justify-between text-white md:py-3 sm:px-12 px-6 md:px-16 lg:px-36 sm:my-7 my-5">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-4 sm:gap-6 md:gap-8 relative"
        >
          <div className={`rounded-xl overflow-hidden ${logoWrapperBg}`}>
            <Image
              src="/vectors/nav_logo_dark.svg"
              alt="SPARK Hub Logo"
              width={45}
              height={45}
              priority
              className="pt-2 px-1 w-9 h-9 sm:w-12 sm:h-12 xl:w-16 xl:h-16"
            />
          </div>

          <h1
            className={`hidden sm:block tracking-wide font-semibold text-xl sm:text-2xl md:text-2xl lg:text-3xl ${textColor}`}
          >
            SPARK HUB
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div
          className={`hidden md:flex items-center gap-4 lg:gap-10 font-medium tracking-wide ${textColor}`}
        >
          {["Events", "About Us", "Team"].map((label, i) => {
            const href =
              label === "Events"
                ? "/events"
                : label === "About Us"
                  ? "/about"
                  : "/officers";

            return (
              <Link
                key={i}
                href={href}
                className="relative group text-sm md:text-base lg:text-xl transition-all duration-300"
              >
                <span className="relative z-10">{label}</span>
                <span className="absolute left-0 bottom-[-0.40rem] w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </Link>
            );
          })}

          {/* Contact Button */}
          <Link href="/contact" className="hover:scale-105 transition-all">
            <button
              className={`flex items-center gap-2 lg:gap-3 px-3 py-2 md:px-5 md:py-3 lg:px-7 lg:py-5 rounded-2xl lg:rounded-3xl border text-sm md:text-base lg:text-xl backdrop-blur-3xl
                ${
                  isDarkHeader
                    ? "bg-metallic text-white border-[#1DE5B0]"
                    : "bg-white bg-opacity-20 text-accent"
                }`}
            >
              <span>Contact Us</span>
              <ArrowRightIcon
                strokeWidth={4}
                className={`h-4 md:h-5 lg:h-6 ${
                  isDarkHeader ? "stroke-white" : "stroke-accent"
                }`}
              />
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6 text-black" />
          ) : (
            <Image
              src={
                isDarkHeader
                  ? "/icons/dark-hamburger.svg"
                  : "/icons/hamburger.svg"
              }
              width={42}
              height={42}
              alt="menu"
              className="shadow-xl"
            />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <>
        {/* Backdrop */}
        <div
          className={`
      fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden
      transition-opacity duration-300
      ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
    `}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`
      fixed top-[4.5rem] left-1/2 z-50 w-[90%] max-w-sm -translate-x-1/2 md:hidden
      transform transition-all duration-300 ease-out
      ${
        isMobileMenuOpen
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
      }
    `}
        >
          <div className="rounded-2xl bg-white shadow-2xl overflow-hidden">
            <div className="flex flex-col divide-y">
              {[
                { label: "Events", href: "/events" },
                { label: "About Us", href: "/about" },
                { label: "Team", href: "/officers" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="
              px-6 py-4 text-lg font-medium text-[#152731]
              transition-all duration-200
              hover:bg-accent/10 hover:text-accent
              active:scale-[0.98]
            "
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </>
    </header>
  );
}
