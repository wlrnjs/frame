import React from "react";

const EmptyBox = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[200px] h-[200px] bg-black rounded-[5px] text-white">
        <p>데이터가 없습니다.</p>
      </div>
    </div>
  );
};

export default EmptyBox;
