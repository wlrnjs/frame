"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useGetMainImg } from "@/hooks/api/main/useGetMainImg";
import { gsap } from "gsap";
import { cn } from "@/utils";

const MainAnimation = () => {
  const { data: mainImages = [] } = useGetMainImg();
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mainImages.length || !imageContainerRef.current) return;

    const tl = gsap.timeline({
      repeat: -1,
      onRepeat: () => {
        setCurrentIndex((prev) => (prev + 1) % mainImages.length);
      },
    });

    mainImages.forEach((_, index) => {
      const image = imageContainerRef.current?.children[
        index
      ] as HTMLImageElement;

      tl.to(image, {
        duration: 0.5,
        opacity: 1,
        x: 0,
        ease: "sine.out",
        onStart: () => setCurrentIndex(index),
      }).to(
        image,
        {
          duration: 0.5,
          opacity: 1,
          x: "-100%",
          ease: "sine.in",
        },
        "+=2"
      );
    });

    return () => {
      tl.kill();
    };
  }, [mainImages]);

  return (
    <div className="w-full h-[calc(100vh-40px)] layout-container">
      <div
        className={cn(
          "w-full h-full flex flex-col gap-20 items-center justify-end",
          "mobile:gap-10"
        )}
      >
        <div
          ref={imageContainerRef}
          className="w-[400px] h-[550px] relative overflow-hidden"
        >
          {mainImages?.map((item, index) => (
            <Image
              key={index}
              src={item.image_url}
              alt={item.title || `main-img-${index}`}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-contain opacity-0 translate-x-full"
            />
          ))}
        </div>
        <div className={cn("w-full flex items-start justify-end text-white")}>
          <div className="fade-in w-1/2 flex flex-col gap-[10px] items-start justify-center">
            <p className="text-[25px] leading-5 tracking-[-0.02em] text-black font-bold">
              {mainImages[currentIndex]?.title || "Loading..."}
            </p>
            <p className="text-lg leading-5 tracking-[-0.02em] text-black">
              {mainImages[currentIndex]?.content || "Loading..."}
            </p>
          </div>
          <div
            className={cn(
              "fade-in w-1/2 flex flex-col text-end",
              "mobile:text-[15px]"
            )}
          >
            <p className="text-black">CATEGORY CATEGORY CATEGORY</p>
            <p className="text-black">CATEGORY CATEGORY CATEGORY</p>
            <p className="text-black">CATEGORY CATEGORY CATEGORY</p>
            <p className="text-black">CATEGORY CATEGORY CATEGORY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAnimation;
