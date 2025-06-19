import { ReactElement } from "react";

interface ButtonProps {
  text: string;
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  startIcon?: ReactElement;
  extraClasses?: string;
  OnClickFn?: () => void;
}

const variantStyle = {
  primary:
    "bg-black text-white hover:bg-white hover:text-black hover:outline hover:outline-2 hover:outline-white",
  secondary:
    "bg-black text-white hover:bg-white-600 hover:text-white hover:outline hover:outline-2 hover:outline-white",
};

const sizeStyle = {
  sm: "py-2 px-4 text-sm",
  md: "py-3 px-6 text-base",
  lg: "py-4 px-8 text-lg",
};

const Button = ({
  text,
  variant,
  size,
  startIcon,
  extraClasses = "",
  OnClickFn,
}: ButtonProps) => {
  return (
    <button
      onClick={OnClickFn}
      className={`rounded-xl w-fit flex items-center justify-center gap-2 transition-all duration-300 font-medium shadow-md ${variantStyle[variant]} ${sizeStyle[size]} ${extraClasses}`}
    >
      {startIcon && <span className="flex items-center">{startIcon}</span>}
      {text}
    </button>
  );
};

export default Button;
