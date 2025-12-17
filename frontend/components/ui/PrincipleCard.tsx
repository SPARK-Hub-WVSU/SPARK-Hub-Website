"use client";

import React from "react";

interface CardProps {
  letter?: string;
  title?: string;
  description?: string;
}

export default function Card({
  letter,
  title,
  description,
}: CardProps) {
  return (
    <div
      className="
        relative w-[17rem] h-[23rem]
        rounded-2xl
        border border-white/30
        backdrop-blur-sm
        shadow-md

        bg-gradient-to-t
        from-[#E3EDED]/40
        via-[#D2D8CA]/20
        to-[#B6D2D8]/60

        flex flex-col justify-center text-center
        transition-all duration-300 ease-in-out
        hover:shadow-lg hover:scale-[1.02] hover:backdrop-blur-lg
        "
    >
      {/* Glow backdrop */}
      <div
        aria-hidden
        className="
          absolute inset-0 rounded-2xl
          bg-yellow-300/20 blur-2xl
          opacity-0 transition-opacity duration-300
          group-hover:opacity-100
        "
      />

      <div className="relative px-5">
        {/* Letter */}
        <p className="font-bold text-[12rem] leading-none mb-[-1rem]">
          <span className="bg-gradient-to-b from-white via-yellow-300 via-50% to-white transition-all duration-250 ease-in-out hover:glow-lg hover:glow-yellow-300 bg-clip-text text-transparent drop-shadow-lg">
            {letter}
          </span>
        </p>

        {/* Text content */}
        <div className="space-y-3 pt-2">
          <p className="text-teal-600 font-semibold text-2xl tracking-wide">
            {title?.toUpperCase()}
          </p>
          <p className="text-black text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
