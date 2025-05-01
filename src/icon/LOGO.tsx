import React from "react";

interface LensLogoProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

const LOGO = ({ className = "", width = 200, height = 80 }: LensLogoProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 80"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-300 hover:scale-105 ${className}`}
    >
      <rect width="100%" height="100%" fill="transparent" />

      {/* L */}
      <path
        d="M 20 60 Q 18 40 20 20 Q 22 15 25 20 L 30 50 Q 32 60 35 60"
        stroke="#000"
        strokeWidth="2"
        fill="none"
      />

      {/* E */}
      <path
        d="M 50 60 Q 48 40 50 20 Q 52 15 55 20 L 65 20 Q 68 22 65 25 Q 60 30 55 35 L 65 35 Q 68 37 65 40 Q 60 45 55 50 L 65 50 Q 68 52 65 55 Q 62 58 60 60"
        stroke="#000"
        strokeWidth="2"
        fill="none"
      />

      {/* N */}
      <path
        d="M 80 60 Q 78 40 80 20 Q 82 15 85 20 L 95 60 Q 97 65 100 60 Q 98 40 100 20"
        stroke="#000"
        strokeWidth="2"
        fill="none"
      />

      {/* S */}
      <path
        d="M 120 30 Q 125 20 130 25 Q 135 30 130 35 Q 125 40 120 45 Q 115 50 120 55 Q 125 60 130 55"
        stroke="#000"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
};

export default LOGO;
