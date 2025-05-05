"use client";

import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ThirdSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const panels = gsap.utils.toArray<HTMLElement>(".panel");

    panels.forEach((panel, i) => {
      gsap.fromTo(
        panel,
        { xPercent: i * 100 },
        {
          xPercent: (i - 1) * 100,
          ease: "none",
          scrollTrigger: {
            trigger: panel,
            start: "top top",
            scrub: true,
            pin: true,
            pinSpacing: true,
            markers: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="w-full overflow-hidden h-[500px]" ref={containerRef}>
      <div className="flex w-max h-full">
        <div className="panel w-screen h-full flex-shrink-0 bg-slate-950">
          첫번째
        </div>
        <div className="panel w-screen h-full flex-shrink-0 bg-slate-600">
          두번째
        </div>
        <div className="panel w-screen h-full flex-shrink-0 bg-black">
          세번째
        </div>
        <div className="panel w-screen h-full flex-shrink-0 bg-slate-900">
          네번째
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
