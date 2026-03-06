import React from "react";

const variantStyles = {
  primary: "resume-button",
  secondary: "resume-button",
  success: "resume-button",
  danger: "resume-button",
  outline: "resume-button"
};

const sizeStyles = {
  small: "px-3 py-1.5 text-xs",
  medium: "px-4 py-2 text-sm",
  large: "px-6 py-3 text-base"
};

type VariantType = keyof typeof variantStyles;
type SizeType = keyof typeof sizeStyles;

interface ButtonProps {
  title: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: VariantType;
  disabled?: boolean;
  size?: SizeType;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  variant = "primary",
  disabled = false,
  size = "medium",
  type = "button",
  className = ""
}) => {
  const baseStyles =
    "mono rounded-xl font-semibold uppercase tracking-[0.11em] transition-all duration-200 hover:cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-50";

  const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`.trim();

  return (
    <button type={type} className={buttonStyles} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
};

export default Button;
