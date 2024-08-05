"use client";

import getBorderColorbyState from "@/components/LabelSelectInput/methods/getColorByState/index.ts";
import getOutlineByState from "@/components/LabelSelectInput/methods/getOutlineByState/index.ts";
import { LabelSelectInputProps } from "@/components/LabelSelectInput/types.ts";
import Select from "react-select";
import { useId } from "react";

const LabelSelectInput = ({
  className,
  id,
  name,
  label,
  errorMessage,
  options,
  onChange,
  value,
  ...props
}: LabelSelectInputProps) => {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className={`block text-sm font-medium leading-6 ${errorMessage ? "text-red-500" : "text-gray-900"}`}
      >
        {label}
      </label>
      <div className="mt-2">
        <Select
          instanceId={useId()}
          styles={{
            container: (baseStyles) => ({
              ...baseStyles,
              height: "36px",
            }),
            control: (baseStyles, { isFocused }) => {
              const controlStyles = {
                ...baseStyles,
                height: "36px",
                boxShadow: "none",
                borderWidth: "1px",
                outline: getOutlineByState(isFocused),
                borderRadius: "6px",
                "&:hover": { borderColor: "none" },
              };

              if (typeof baseStyles?.borderColor === "string") {
                return {
                  ...controlStyles,
                  borderColor: getBorderColorbyState({
                    isFocused,
                    error: errorMessage,
                    defaultBorderColor: baseStyles?.borderColor,
                  }),
                };
              }

              return controlStyles;
            },
            option: (baseStyles) => ({
              ...baseStyles,
              height: "36px",
            }),
          }}
          id={id}
          name={name}
          options={options}
          // TODO FIND TS SOLUTION
          onChange={(option) => onChange && onChange(option.value)}
          value={options.find((option) => option.value === value)}
          {...props}
        />
      </div>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default LabelSelectInput;
