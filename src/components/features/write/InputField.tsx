import React from "react";

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  isTextarea?: boolean;
  required?: boolean;
}

const InputField = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  isTextarea = false,
  required = false,
}: InputFieldProps) => (
  <label className="w-full h-full flex flex-col gap-1">
    <span className="text-base font-medium text-white">
      {label}
      {required && <span className="text-red-500 ml-[5px]">*</span>}
    </span>
    {isTextarea ? (
      <textarea
        maxLength={400}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full min-h-[96px] rounded-md px-4 py-3 bg-gray-920 text-sm text-white border border-gray-870 focus:outline-none transition-colors resize-none placeholder:text-sm placeholder:text-white/50"
      />
    ) : (
      <input
        maxLength={50}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoFocus
        className="w-full h-12 rounded-md px-4 bg-gray-920 text-sm text-white border border-gray-870 focus:outline-none transition-colors placeholder:text-sm placeholder:text-white/50"
      />
    )}
  </label>
);

export default React.memo(InputField);
