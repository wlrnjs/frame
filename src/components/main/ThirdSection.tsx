"use client";

import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ThirdSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const sections = gsap.utils.toArray(".panel");
    if (!container) return;

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top 30%",
        scrub: true,
        pin: true,
        snap: 1 / (sections.length - 1),
        markers: true,
        end: () => "+=" + container.offsetWidth,
      },
    });
  }, []);

  return (
    <div className="w-full overflow-hidden h-screen" ref={containerRef}>
      <div className="flex w-[400vw] h-full">
        <div className="panel w-screen h-full flex-shrink-0 bg-slate-950 text-white">
          첫번째
        </div>
        <div className="panel w-screen h-full flex-shrink-0 bg-slate-600 text-white">
          두번째
        </div>
        <div className="panel w-screen h-full flex-shrink-0 bg-black text-white">
          세번째
        </div>
        <div className="panel w-screen h-full flex-shrink-0 bg-slate-900 text-white">
          네번째
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
