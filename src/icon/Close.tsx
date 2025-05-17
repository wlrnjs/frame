import React from "react";

interface CloseProps {
  size?: string;
}

const Close = ({ size = "5" }: CloseProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-${size} h-${size}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export default Close;
