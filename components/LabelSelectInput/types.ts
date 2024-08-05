type SelectOption = {
  label: string;
  value: string;
};

export type LabelSelectInputProps = {
  className?: string;
  id?: string;
  name?: string;
  label?: string;
  errorMessage?: string;
  onChange?: () => void;
  value?: SelectOption;
  options: SelectOption[];
};
