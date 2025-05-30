import React from "react";
import { cn } from "@/utils";

interface LensLogoProps {
  className?: string;
  isLogin?: boolean;
}

const LOGO = ({ className = "", isLogin = false }: LensLogoProps) => {
  return (
    <svg
      width="200"
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
        #FRAME
      </text>
      {/* Small camera lens detail */}
      {!isLogin && <circle cx="180" cy="20" r="5" fill="currentColor" />}
    </svg>
  );
};

export default LOGO;
