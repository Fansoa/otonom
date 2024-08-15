import { LabelInputProps } from "@/components/LabelInput/types.ts";

const LabelInput = ({
  className,
  id,
  name,
  inputType,
  label,
  placeholder,
  errorMessage,
  onChange,
  value,
  ...props
}: LabelInputProps) => {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className={`block text-sm font-medium leading-6 ${errorMessage ? "text-red-500" : "text-gray-900"}`}
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={inputType || "text"}
          placeholder={placeholder}
          className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${errorMessage ? "ring-red-500" : "ring-gray-300"} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2 focus:outline-0 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200`}
          onChange={onChange}
          value={value}
          {...props}
        />
      </div>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default LabelInput;
