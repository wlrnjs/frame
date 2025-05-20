import React from "react";

interface GnbProps {
  className?: string;
}

const GnbIcon = ({ className = "" }: GnbProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 26 26"
      fill="none"
      className={`w-10 h-10 ${className}`}
    >
      <path
        d="M20 7L4 7"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M20 12L4 12"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M20 17L4 17"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default GnbIcon;
