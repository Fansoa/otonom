import { buttonStyles } from "@/components/Button/button.styles.ts";
import { ButtonProps } from "@/components/Button/types.ts";

const Button = ({
  className,
  label,
  onClick,
  variant,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${className && className} ${variant ? buttonStyles[variant] : buttonStyles.primary}`}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
