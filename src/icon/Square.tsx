import React from "react";

const Square = () => {
  const cornerLength = 2;
  const strokeWidth = 0.5;
  const size = 7;

  return (
    <svg width="25" height="25" viewBox={`0 0 ${size} ${size}`}>
      {/* 좌상단 모서리 */}
      <line
        x1="0.5"
        y1="0.5"
        x2={0.5 + cornerLength}
        y2="0.5"
        stroke="white"
        strokeWidth={strokeWidth}
      />
      <line
        x1="0.5"
        y1="0.5"
        x2="0.5"
        y2={0.5 + cornerLength}
        stroke="white"
        strokeWidth={strokeWidth}
      />

      {/* 우상단 모서리 */}
      <line
        x1={size - 0.5 - cornerLength}
        y1="0.5"
        x2={size - 0.5}
        y2="0.5"
        stroke="white"
        strokeWidth={strokeWidth}
      />
      <line
        x1={size - 0.5}
        y1="0.5"
        x2={size - 0.5}
        y2={0.5 + cornerLength}
        stroke="white"
        strokeWidth={strokeWidth}
      />

      {/* 좌하단 모서리 */}
      <line
        x1="0.5"
        y1={size - 0.5 - cornerLength}
        x2="0.5"
        y2={size - 0.5}
        stroke="white"
        strokeWidth={strokeWidth}
      />
      <line
        x1="0.5"
        y1={size - 0.5}
        x2={0.5 + cornerLength}
        y2={size - 0.5}
        stroke="white"
        strokeWidth={strokeWidth}
      />

      {/* 우하단 모서리 */}
      <line
        x1={size - 0.5 - cornerLength}
        y1={size - 0.5}
        x2={size - 0.5}
        y2={size - 0.5}
        stroke="white"
        strokeWidth={strokeWidth}
      />
      <line
        x1={size - 0.5}
        y1={size - 0.5 - cornerLength}
        x2={size - 0.5}
        y2={size - 0.5}
        stroke="white"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default Square;
