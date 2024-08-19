import { ComponentProps } from "react";

export type ButtonProps = ComponentProps<"button"> & {
  className?: string;
  label: string;
  onClick?: () => void;
};
