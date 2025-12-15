// components/ui/Mission_Vision_Background_Circles.tsx
import React from "react";
import { Circle, Variant } from "./Circle";

type CircleConfig = {
  pos: string;
  size: string;
  variant?: Variant;
  className?: string;
};

const Mcircles: CircleConfig[] = [
  {
    pos: "md:-top-[23rem] -top-[7rem] md:left-[23rem] left-[8rem]",
    size: "md:w-[470px] w-[160px] md:h-[470px] h-[160px]",
  },
  {
    pos: "md:top-[15rem] top-[4rem] md:-left-[13rem]",
    size: "md:w-[465px] w-[105px] md:h-[465px] h-[105px]",
  },
  {
    pos: "md:-top-[5rem] top-[0.25rem] md:left-[8rem] left-[4rem]",
    size: "md:w-[245px] w-[58px] md:h-[245px] h-[58px]",
  },
  {
    pos: "md:top-[16rem] top-[3rem] md:left-[18rem] left-[8rem]",
    size: "md:w-[160px] w-[48px] md:h-[160px] h-[48px]",
  },
  {
    pos: "md:block hidden md:top-[25rem] md:left-[29rem]",
    size: "md:w-[105px] md:h-[105px]",
  },
  {
    pos: "md:top-[28rem] top-[19rem] md:right-[28rem] right-[8rem]",
    size: "md:w-[470px] w-[350px] md:h-[470px] h-[350px]",
    variant: "teal",
  },
  {
    pos: "md:top-[18rem] top-[25rem] md:right-[15rem] -right-[3rem]",
    size: "md:w-[265px] w-[120px] md:h-[265px] h-[120px]",
    variant: "teal",
  },
  {
    pos: "md:-top-[5rem] top-[15rem] md:right-[10rem] right-[6rem]",
    size: "md:w-[200px] w-[75px] md:h-[200px] h-[75px]",
    variant: "teal",
  },
  {
    pos: "md:top-[10rem] top-[6rem] md:right-[32rem] right-[3rem]",
    size: "md:w-[130px] w-[55px] md:h-[130px] h-[55px]",
    variant: "teal",
  },
];

const Vcircles: CircleConfig[] = [
  {
    pos: "md:top-[4rem] top-[4rem] md:-left-[7rem] -left-[1rem]",
    size: "md:w-[414px] w-[110px] md:h-[414px] h-[110px]",
  },
  {
    pos: "md:top-[30rem] top-[12rem] md:left-[30rem] left-[8rem]",
    size: "md:w-[257px] w-[75px] md:h-[257px] h-[75px]",
  },
  {
    pos: "md:-top-[5rem] top-[1rem] md:-left-[20rem] right-[2rem]",
    size: "md:w-[210px] w-[60px] md:h-[210px] h-[60px]",
  },
  {
    pos: "md:top-[8rem] top-[5rem] md:left-[24rem] left-[8rem]",
    size: "md:w-[160px] w-[48px] md:h-[160px] h-[48px]",
  },
  {
    pos: "md:top-[22rem] top-[9rem] md:left-[23rem] left-[7rem]",
    size: "md:w-[105px] w-[30px] md:h-[105px] h-[30px]",
  },
  {
    pos: "md:top-[32rem] top-[14rem] md:-right-[3rem] right-[0rem]",
    size: "md:w-[300px] w-[105px] md:h-[300px] h-[105px]",
    variant: "teal",
  },
  {
    pos: "md:top-[18rem] top-[10rem] md:-left-[34rem] -left-[10rem]",
    size: "md:w-[200px] w-[56px] md:h-[200px] h-[56px]",
    variant: "teal",
  },
  {
    pos: "md:-top-[3rem] top-[5.5rem] md:-left-[32rem] -left-[11rem]",
    size: "md:w-[130px] w-[37px] md:h-[130px] h-[37px]",
    variant: "teal",
  },
];

export const MissionCircles = () => {
  return (
    <div className="relative" aria-hidden="true">
      {Mcircles.map(({ pos, size, variant }, i) => (
        <Circle
          key={i}
          variant={variant}
          className={`absolute ${pos} ${size} rotate-[-123.15deg]`}
        />
      ))}
    </div>
  );
};

export const VisionCircles = () => {
  return (
    <div className="relative" aria-hidden="true">
      {Vcircles.map(({ pos, size, variant }, i) => (
        <Circle
          key={i}
          variant={variant}
          className={`absolute ${pos} ${size} rotate-[-123.15deg]`}
        />
      ))}
    </div>
  );
};
