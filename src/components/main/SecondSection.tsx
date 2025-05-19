import React from "react";
import ImageCard from "./ImageCard";

const SecondSection = () => {
  return (
    <div className="w-full h-auto layout-container my-44 text-start flex flex-col gap-24">
      <div className="flex items-center pb-5 justify-between border-b-[2px] border-black font-semibold">
        <h1 className="flex items-start text-[25px]">가장 인기있는 사진 6장</h1>
        <p className="text-[14px] pointer">전체보기</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
    </div>
  );
};

export default SecondSection;
