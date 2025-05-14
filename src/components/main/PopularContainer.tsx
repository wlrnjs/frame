"use client";

import React, { useEffect } from "react";
import ImageCard from "./ImageCard";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PopularContainer = () => {
  useEffect(() => {
    requestAnimationFrame(() => {
      const elements = gsap.utils.toArray(".fade-up") as HTMLElement[];

      gsap.fromTo(
        elements,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: elements[0],
            start: "top 80%",
            end: "bottom 80%",
            toggleActions: "play none none reverse",
            // markers: true,
          },
        }
      );

      ScrollTrigger.refresh();
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      // console.log(ScrollTrigger.getAll());
    };
  }, []);

  return (
    <div className="w-full h-auto layout-container my-44 text-start flex flex-col gap-24">
      <div className="flex items-center pb-5 justify-between border-b-[2px] border-black font-semibold">
        <h1 className="flex items-start text-[25px]">
          가장 인기있는 사진 30장
        </h1>
        <p className="text-sm pointer">전체보기</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {[...Array(6)].map((_, i) => (
          <ImageCard key={i} className="fade-up" />
        ))}
      </div>
    </div>
  );
};

export default PopularContainer;
