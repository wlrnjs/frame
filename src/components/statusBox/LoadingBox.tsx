import React from "react";

const LoadingBox = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[200px] h-[200px] bg-black rounded-[5px] text-white">
        <p>로딩중...</p>
      </div>
    </div>
  );
};

export default LoadingBox;
