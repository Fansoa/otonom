import { ButtonProps } from "@/components/Button/types.ts";

const Button = ({ className, label, onClick, ...props }: ButtonProps) => {
  return (
    <button
      className={`${className} flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600`}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
