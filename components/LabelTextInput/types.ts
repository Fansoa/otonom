import { ChangeEventHandler } from "react";

export type LabelTextInputProps = {
  className?: string;
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  onChange?: ChangeEventHandler;
  value?: string;
};
