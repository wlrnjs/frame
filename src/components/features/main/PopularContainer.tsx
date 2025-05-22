"use client";

import React from "react";
import ImageCard from "./ImageCard";
import useFadeUpAnimation from "@/hooks/ui/useFadeUpAnimation";
import { cn } from "@/utils";

const PopularContainer = () => {
  const animationClass = useFadeUpAnimation({ targetClass: "fade-up-popular" });

  return (
    <div
      className={cn(
        "w-full h-auto layout-container my-44 text-start flex flex-col gap-24",
        "mobile:my-24 mobile:gap-14"
      )}
    >
      <div
        className={cn(
          "flex items-center pb-5 justify-between border-b-[2px] border-black font-semibold"
        )}
      >
        <h1
          className={cn("flex items-start text-[25px]", "mobile:text-[18px]")}
        >
          가장 인기있는 사진 30장
        </h1>
        <p
          className={cn(
            "text-sm pointer",
            "mobile:text-[15px] mobile:text-end"
          )}
        >
          전체보기
        </p>
      </div>

      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6",
          "mobile:grid-cols-2"
        )}
      >
        {[...Array(6)].map((_, i) => (
          <ImageCard key={i} className={animationClass} />
        ))}
      </div>
    </div>
  );
};

export default PopularContainer;
