import React from "react";
import Image from "next/image";

const ThirdSection = () => {
  return (
    <div className="w-full h-screen bg-black flex flex-col justify-center items-center">
      <h1 className="text-white text-3xl mb-6">현재 가장 주목받는 이미지</h1>
      <div className="w-[400px] h-[550px] relative rounded-lg shadow-lg overflow-hidden">
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
