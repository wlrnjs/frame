import React from "react";
import { cn } from "@/utils";

interface LensLogoProps {
  width?: string;
  className?: string;
}

const AdminLogo = ({ width = "200", className = "" }: LensLogoProps) => {
  return (
    <svg
      width={width}
      height="80"
      viewBox="0 0 200 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-white pointer", className)}
    >
      {/* FRAME text with hashtag */}
      <text
        x="100"
        y="45"
        fontFamily="Arial, sans-serif"
        fontSize="32"
        fontWeight="bold"
        fill="currentColor"
        textAnchor="middle"
      >
        FRAME
      </text>
      <text
        x="100"
        y="65"
        fontFamily="Arial, sans-serif"
        fontSize="22"
        fontWeight="bold"
        fill="currentColor"
        textAnchor="middle"
      >
        ADMIN
      </text>
    </svg>
  );
};

export default AdminLogo;
