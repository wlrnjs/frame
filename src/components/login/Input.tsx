import React from "react";

interface InputProps {
  label: string;
  placeholder: string;
  id: string;
  type?: "text" | "password" | "email";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  label,
  placeholder,
  id,
  type = "text",
  value,
  onChange,
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
    </div>
  );
};

export default Input;
