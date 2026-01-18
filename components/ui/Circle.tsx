// components/ui/Circle.tsx
import React from "react";

export type Variant = "yellow" | "teal";

export type CircleProps = {
  variant?: Variant;
  className?: string;
  r?: number;
  cx?: number;
  cy?: number;
  noiseOpacity?: number;
};

const gradients = {
  yellow: (
    <linearGradient id="yellowGradient" gradientTransform="rotate(90)">
      <stop offset="5%" stopColor="#facc15" />
      <stop offset="95%" stopColor="#facc15" stopOpacity={0.6} />
    </linearGradient>
  ),
  teal: (
    <linearGradient id="tealGradient" gradientTransform="rotate(90)">
      <stop offset="5%" stopColor="#2dd4bf" />
      <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0.6} />
    </linearGradient>
  ),
};

export const Circle: React.FC<CircleProps> = ({
  variant = "yellow",
  className = "",
  noiseOpacity = 0.15,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {gradients.yellow}
        {gradients.teal}

        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="10"
            numOctaves="8"
            stitchTiles="stitch"
          />
          <feComponentTransfer>
            <feFuncR type="discrete" tableValues="0 1" />
            <feFuncG type="discrete" tableValues="0 1" />
            <feFuncB type="discrete" tableValues="0 1" />
          </feComponentTransfer>
        </filter>

        <mask id="circleMask">
          <circle r="50" cx="50" cy="50" fill="white" />
        </mask>
      </defs>

      <circle r="50" cx="50" cy="50" fill={`url(#${variant}Gradient)`} />

      <rect
        x="0"
        y="0"
        width="100"
        height="100"
        filter="url(#noiseFilter)"
        fill="black"
        opacity={noiseOpacity}
        style={{ mixBlendMode: "multiply" }}
        mask="url(#circleMask)"
      />
    </svg>
  );
};
