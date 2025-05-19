import React from "react";

interface SubmitBtnProps {
  title: string;
  disabled?: boolean;
}

const SubmitBtn = ({ title, disabled = false }: SubmitBtnProps) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`w-full h-[45px] rounded-[5px] mt-1 transition-all ${
        disabled
          ? "bg-gray-400 text-white cursor-not-allowed"
          : "bg-black text-white hover:bg-neutral-900"
      }`}
    >
      {title}
    </button>
  );
};

export default SubmitBtn;
