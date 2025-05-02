import React from "react";

interface SubmitBtnProps {
  title: string;
}

const SubmitBtn = ({ title }: SubmitBtnProps) => {
  return (
    <button
      type="submit"
      className="w-full h-[45px] bg-black text-white rounded-[5px] mt-2"
    >
      {title}
    </button>
  );
};

export default SubmitBtn;
