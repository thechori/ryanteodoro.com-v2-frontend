import React from "react";

const variantStyles = {
  primary:
    "bg-blue-600 dark:bg-orange-300 hover:bg-blue-700 text-white dark:text-black focus:ring-blue-500",
  secondary: "bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500",
  success: "bg-green-600 hover:bg-green-700 text-white focus:ring-green-500",
  danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
  outline:
    "border-2 border-blue-600 dark:border-orange-300 text-blue-600 dark:text-orange-300 hover:bg-blue-50 dark:hover:bg-transparent focus:ring-blue-500"
};

const sizeStyles = {
  small: "px-3 py-1.5 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg"
};

// Create types using keyof
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
  // base styles that all buttons share
  const baseStyles =
    "font-medium rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-offset-2 hover:opacity-50 hover:cursor-pointer transition-all";

  // disabled state
  const disabledStyles = "opacity-50 cursor-not-allowed";

  // combine all the styles
  const buttonStyles = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    ${disabled ? disabledStyles : ""}
    ${className}
  `.trim();

  return (
    <button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
