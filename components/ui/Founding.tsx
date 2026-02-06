import Image from "next/image";

interface FoundingProps {
  name: string;
  imageSrc: string;
  onClick?: () => void;
}

const Founding = ({ name, imageSrc, onClick }: FoundingProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative overflow-hidden rounded-full bg-white size-24">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="cursor-pointer object-cover object-top"
          onClick={onClick}
        />
      </div>

      {/* Name Button */}
      <button
        onClick={onClick}
        className="cursor-pointer hover:underline text-white text-center md:text-md text-sm font-bold mt-2 uppercase"
      >
        {name}
      </button>
    </div>
  );
};

export default Founding;
