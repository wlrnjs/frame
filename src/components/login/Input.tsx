import React from "react";

interface InputProps {
  label: string;
  placeholder: string;
  id: string;
  type?: "text" | "password" | "email";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  description?: string;
}

const Input = ({
  label,
  placeholder,
  id,
  type = "text",
  value,
  onChange,
  description,
}: InputProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        className="w-full h-[45px] rounded-[5px] px-5 bg-black text-white"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {description && (
        <p className="text-[14px] text-black/80 tracking-[-0.06em] pl-0.5">
          {description}
        </p>
      )}
    </div>
  );
};

export default Input;
