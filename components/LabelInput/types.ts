import { ChangeEventHandler } from "react";

export type LabelTextInputProps = {
  className?: string;
  id?: string;
  name?: string;
  inputType?: "text" | "number";
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  onChange?: ChangeEventHandler;
  value?: string | number;
};
