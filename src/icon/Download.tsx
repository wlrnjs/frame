import React from "react";

const Download = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* 아래로 향한 화살표 */}
    <path d="M12 3v12" />
    <polyline points="6 13 12 19 18 13" />
    {/* 하단 받침 바 */}
    <rect x="5" y="20" width="14" height="0.1" rx="0.5" />
  </svg>
);

export default Download;
