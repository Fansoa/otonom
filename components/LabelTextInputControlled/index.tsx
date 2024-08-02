import LabelTextInput from "@/components/LabelTextInput/index.tsx";
import { LabelTextInputControlledProps } from "@/components/LabelTextInputControlled/types.ts";
import { Controller, useFormContext } from "react-hook-form";

const LabelTextInputControlled = ({
  className,
  id,
  name,
  label,
  placeholder,
  ...props
}: LabelTextInputControlledProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <LabelTextInput
            className={className}
            id={id}
            name={name}
            label={label}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            errorMessage={error?.message}
            {...props}
          />
        );
      }}
    />
  );
};

export default LabelTextInputControlled;
