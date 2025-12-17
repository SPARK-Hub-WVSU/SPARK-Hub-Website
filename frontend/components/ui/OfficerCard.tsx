import React from "react";
import Image from "next/image";

interface OfficerCardProps {
  index?: number;
  name: string;
  position: string;
  image?: string;
}

const OfficerCard: React.FC<OfficerCardProps> = ({
  index = 0,
  name,
  position,
  image,
}) => {

  const offsetClass =
    index % 3 === 1
      ? "translate-sm-only"
      : "";

  return (
    <div
      className={`relative w-[9.5rem] h-48 sm:w-[21rem] sm:h-[26rem] border-2 border-[#3783945C] rounded-[1.5rem] sm:rounded-[3.625rem] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-visible ${offsetClass} z-20`}
    >
      {image ? (
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-[1.5rem] sm:rounded-[3.625rem]"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      ) : (
        <div className="absolute inset-0 rounded-[1.5rem] sm:rounded-[3.625rem] bg-gray-200" />
      )}

      <div className="absolute bottom-1 sm:bottom-3 left-1/2 -translate-x-1/2 bg-white w-[94%] sm:w-[95%] py-1 sm:py-2 rounded-xl sm:rounded-3xl flex flex-col items-center sm:items-center gap-0 sm:px-0"
      >
        <div className="relative group flex-shrink-0 min-h-4 sm:py-2 flex items-center justify-center px-2 sm:px-3 max-w-full rounded-lg">
          <div className="text-cyan-700 text-xs sm:hidden font-medium text-center leading-3">
            {(() => {
              const parts = name.trim().split(/\s+/);
              if (parts.length >= 2) {
                return `${parts[0]} ${parts[parts.length - 1]}`; 
              }
              return parts[0];
            })()}
          </div>

          <span className="hidden sm:inline text-cyan-700 text-lg font-semibold text-center leading-4 sm:pt-0">
            {name}
          </span>
        </div>

        {position && (
          <div className="text-black text-[0.65rem] sm:text-sm font-medium leading-tight text-center sm:text-left break-words max-w-full">
            {position}
          </div>
        )}
      </div>
    </div >
  );
};

export default OfficerCard;
