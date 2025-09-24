type Variant = "yellow" | "teal";

interface CircleProps {
  variant?: Variant;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  yellow: "bg-gradient-to-b from-yellow-400 to-yellow-400/60",
  teal: "bg-gradient-to-b from-teal-400 via-teal-400 to-teal-400",
};

export const Circle: React.FC<CircleProps> = ({
  variant = "yellow",
  className = "",
}) => {
  return (
    <div
      className={`rotate-[-123.15deg] rounded-full ${variantClasses[variant]} ${className}`}
    />
  );
};
