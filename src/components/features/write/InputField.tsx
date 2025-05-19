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
}

const InputField = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  isTextarea = false,
}: InputFieldProps) => (
  <label className="flex flex-col gap-1">
    <span className="text-xs font-medium text-white">{label}</span>
    {isTextarea ? (
      <textarea
        maxLength={100}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full h-24 rounded-md px-4 py-3 bg-gray-920 text-sm text-white border border-gray-870 focus:outline-none transition-colors resize-none placeholder:text-sm placeholder:text-white/50"
      />
    ) : (
      <input
        maxLength={30}
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

export default InputField;
