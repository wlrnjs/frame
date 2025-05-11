import React from "react";
import Image from "next/image";

const ThirdSection = () => {
  return (
    <div className="w-full h-screen bg-black flex-col-center gap-5">
      <h1 className="text-white text-[30px] tracking-[-0.04em]">
        현재 가장 주목받는 이미지
      </h1>
      <div className="w-[350px] h-[550px] relative rounded-lg shadow-lg overflow-hidden pointer">
        <Image
          src={"/BlackPhoto.JPG"}
          alt="image"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ThirdSection;
