import { Check } from "lucide-react";

type TagProps = {
  label: string;
  active?: boolean;
  onClick?: () => void;
};

const Tag = ({ label, active = false, onClick }: TagProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        inline-flex items-center gap-2 px-4 py-1 rounded-full border transition-all duration-200 border-[#152731]/20
        ${active
          ? " bg-[linear-gradient(90deg,rgba(55,131,148,1)_0%,rgba(10,170,127,0.91)_100%)] text-white"
          : " bg-[#378394]/20 text-metallic hover:bg-[#378394]/30"}
      `}
    >
      {active && (
        <Check
          className="w-[22px] h-[22px]"
          strokeWidth={3}
        />
      )}

      <span className="font-medium text-xl">
        {label}
      </span>
    </button>
  );
};

export default Tag;
