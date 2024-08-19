import { ChangeEventHandler, ComponentProps } from "react";

export type LabelInputProps = ComponentProps<"input"> & {
  className?: string;
  id?: string;
  name?: string;
  inputType?: "text" | "number" | "password" | "email";
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  onChange?: ChangeEventHandler;
  value?: string | number;
};
