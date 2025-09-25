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
      className={`relative w-36 h-44 sm:w-[21rem] sm:h-[25rem] border-2 border-[#3783945C] rounded-[1.5rem] sm:rounded-[3.625rem] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-visible ${offsetClass} z-20`}
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

      <div className="absolute bottom-1 sm:bottom-3 left-1/2 -translate-x-1/2 bg-white w-[94%] sm:w-[95%] py-1 sm:py-3 rounded-xl sm:rounded-3xl flex flex-col sm:flex-row items-center sm:items-center gap-0 sm:px-0"
        >
        <div className="relative group sm:ml-2 sm:bg-cyan-700 flex-shrink-0 h-5 sm:h-11 flex items-center justify-center px-2 sm:px-4 max-w-full rounded-lg">
          <span className="text-cyan-700 sm:text-white text-xs sm:text-lg font-medium truncate">
            {name.split(" ")[0]}
          </span>
          {name.length > name.split(" ")[0].length && (
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-50 opacity-0 group-hover:opacity-100 transition-opacity">
              {name}
            </span>
          )}
        </div>

        {position && (
          <div className="text-black sm:ml-3 text-[0.65rem] sm:text-sm font-medium leading-tight text-center sm:text-left break-words max-w-full">
            {position}
          </div>
        )}
      </div>
    </div >
  );
};

export default OfficerCard;
