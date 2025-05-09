"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useGetMainImg } from "@/service/hooks/main/useGetMainImg";
import { gsap } from "gsap";

const MainAnimation = () => {
  const { data: imageUrls } = useGetMainImg();

  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageUrls?.length || !imageContainerRef.current) return;

    const tl = gsap.timeline({ repeat: -1 });

    imageUrls.forEach((_, index) => {
      const image = imageContainerRef.current?.children[
        index
      ] as HTMLImageElement;

      tl.to(image, {
        duration: 0.5,
        opacity: 1,
        x: 0,
        ease: "sine.out",
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
  }, [imageUrls]);

  return (
    <div className="w-full h-[calc(100vh-20px)]">
      <div className="w-full h-full flex flex-col gap-20 items-center justify-end">
        <div
          ref={imageContainerRef}
          className="w-[400px] h-[550px] relative overflow-hidden"
        >
          {imageUrls?.map((url, index) => (
            <Image
              key={index}
              src={url}
              alt={`main-img-${index}`}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-contain opacity-0 translate-x-full"
            />
          ))}
        </div>
        <div className="w-full flex items-start justify-end text-white">
          <div className="w-1/2 flex flex-col gap-[10px] items-start justify-center">
            <p className="text-[25px] leading-[20px] tracking-[-0.02em] text-main font-bold">
              TITLE
            </p>
            <p className="text-[18px] leading-[20px] tracking-[-0.02em] text-sub">
              SubTitle SubTitle SubTitle
            </p>
          </div>
          <div className="w-1/2 flex flex-col text-end">
            <p className="text-sub">CATEGORY CATEGORY CATEGORY</p>
            <p className="text-main">CATEGORY CATEGORY CATEGORY</p>
            <p className="text-sub">CATEGORY CATEGORY CATEGORY</p>
            <p className="text-sub">CATEGORY CATEGORY CATEGORY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAnimation;
