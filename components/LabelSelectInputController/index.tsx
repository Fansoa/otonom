"use client";

import { Controller, useFormContext } from "react-hook-form";
import LabelSelectInput from "@/components/LabelSelectInput/index.tsx";
import { LabelSelectInputControllerProps } from "@/components/LabelSelectInputController/types.ts";

const LabelSelectInputController = ({
  className,
  id,
  name,
  label,
  options,
  ...props
}: LabelSelectInputControllerProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <LabelSelectInput
          className={className}
          id={id}
          label={label}
          onChange={onChange}
          value={value}
          options={options}
          errorMessage={error?.message}
          {...props}
        />
      )}
    />
  );
};

export default LabelSelectInputController;
