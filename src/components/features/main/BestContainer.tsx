import React from "react";
import Image from "next/image";
import { cn } from "@/utils";

const BestContainer = () => {
  return (
    <div className="w-full h-screen bg-black flex-col-center gap-5">
      <h1
        className={cn(
          "text-white text-3xl tracking-[-0.04em]",
          "mobile:text-[25px]"
        )}
      >
        현재 가장 주목받고 있는 이미지
      </h1>
      <div
        className={cn(
          "w-[350px] h-[550px] relative rounded-lg shadow-lg overflow-hidden pointer",
          "mobile:w-[350px] mobile:h-[350px]"
        )}
      >
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

export default BestContainer;
