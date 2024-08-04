"use client";

import LabelTextInput from "@/components/LabelInput/index.tsx";
import { LabelInputControlledProps } from "@/components/LabelInputControlled/types.ts";
import { Controller, useFormContext } from "react-hook-form";

const LabelInputControlled = ({
  className,
  id,
  name,
  inputType,
  label,
  placeholder,
  ...props
}: LabelInputControlledProps) => {
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
            inputType={inputType}
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

export default LabelInputControlled;
