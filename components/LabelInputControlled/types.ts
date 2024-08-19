import { ComponentProps } from "react";

export type LabelInputControlledProps = ComponentProps<"input"> & {
  className?: string;
  id?: string;
  name: string;
  inputType?: "text" | "number" | "password" | "email";
  label?: string;
  placeholder?: string;
};
