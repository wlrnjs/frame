import Check from "@/icon/Check";
import React, { useState } from "react";

interface CheckboxProps {
  title: string;
  id: string;
}

const Checkbox = ({ title, id }: CheckboxProps) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex gap-2 items-center justify-start">
      <div
        onClick={handleChange}
        className="w-4 h-4 border border-gray-870 rounded-[2px] flex items-center justify-center pointer"
      >
        {checked && <Check />}
      </div>
      <input
        type="checkbox"
        id={id}
        className="sr-only"
        checked={checked}
        onChange={handleChange}
      />
      <label
        htmlFor={id}
        className="text-sm leading-5 tracking-[-0.04em] pointer select-none"
      >
        {title}
        <span className="ml-1">(필수)</span>
      </label>
    </div>
  );
};

export default Checkbox;
