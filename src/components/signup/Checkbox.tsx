import React from "react";

interface CheckboxProps {
  title: string;
}

const Checkbox = ({ title }: CheckboxProps) => {
  return (
    <div className="flex gap-2 items-center justify-start">
      <input type="checkbox" id="terms" className="w-4 h-4" />
      <label
        htmlFor="terms"
        className="text-[14px] leading-[20px] tracking-[-0.04em] cursor-pointer select-none"
      >
        {title}
        <span className="ml-1">(필수)</span>
      </label>
    </div>
  );
};

export default Checkbox;
