import React from "react";

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  maxLength?: number;
  isTextarea?: boolean;
}

const InputField = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  maxLength,
  isTextarea = false,
}: InputFieldProps) => (
  <label className="flex flex-col gap-1">
    <span className="text-[12px] font-medium text-white">{label}</span>
    {isTextarea ? (
      <textarea
        maxLength={maxLength}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full h-24 rounded-md px-4 py-3 bg-[#1F1F1F] text-[14px] text-white border border-[#4B4B4B] focus:border-white focus:ring-2 focus:ring-white/20 transition-colors resize-none placeholder:text-[14px] placeholder:text-white/50"
      />
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full h-12 rounded-md px-4 bg-[#1F1F1F] text-[14px] text-white border border-[#4B4B4B] focus:border-white focus:ring-2 focus:ring-white/20 transition-colors placeholder:text-[14px] placeholder:text-white/50"
      />
    )}
  </label>
);

export default InputField;
