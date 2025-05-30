import React from "react";

const Spinner: React.FC = () => {
  // Opacity 배열을 미리 정의하여 각 바에 순차적으로 적용
  const opacities = [
    "opacity-100",
    "opacity-90",
    "opacity-80",
    "opacity-70",
    "opacity-60",
    "opacity-50",
    "opacity-40",
    "opacity-30",
    "opacity-25",
    "opacity-20",
    "opacity-15",
    "opacity-10",
  ];

  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      className="block mx-auto animate-spin"
    >
      {/* 12개의 직선 바(bar)를 360도에 걸쳐 배치 */}
      {[...Array(12)].map((_, i) => (
        <rect
          key={i}
          x="24"
          y="10"
          width="2"
          height="10"
          fill="#000000"
          transform={`rotate(${i * 30} 25 25)`}
          className={`origin-center ${opacities[i]}`}
        />
      ))}
    </svg>
  );
};

export default Spinner;
