import React from "react";
import OfficerCard from "./OfficerCard";

interface OfficersGridProps {
  cards: {
    offset?: string;
    name: string;
    position: string;
    image?: string;
  }[];
}

export default function OfficersGrid({ cards }: OfficersGridProps) {
  return (
    <section className="sm:max-w-6xl mx-auto pt-10 sm:pt-24 sm:pb-72 pb-24">
      <div
        className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-y-4 sm:gap-y-10 sm:gap-x-10 justify-items-center"
      >
        {cards.map((c, i) => (
          <OfficerCard
            key={c.name + i}
            index={i}
            name={c.name}
            position={c.position}
            image={c.image}
          />
        ))}
      </div>
    </section>
  );
}