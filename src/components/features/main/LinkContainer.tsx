"use client";

import React from "react";
import LinkItem from "./LinkItem";
import useFadeUpAnimation from "@/hooks/ui/useFadeUpAnimation";
import { cn } from "@/utils";

const LinkContainer = () => {
  const items = [
    {
      href: "/photo-list",
      imgSrc: "/BlackPhoto.JPG",
      title: "List",
      description: "See More",
    },
    {
      href: "/write",
      imgSrc: "/City.jpg",
      title: "Write",
      description: "Write Your Photo",
    },
    {
      href: "/support",
      imgSrc: "/Height.JPG",
      title: "Support",
      description: "Need Support?",
    },
  ];

  const animationClass = useFadeUpAnimation({
    targetClass: "fade-up-link",
    start: "top 90%",
    duration: 0.8,
  });

  return (
    <div
      className={cn(
        "w-full h-[700px] flex-center gap-10 custom-margin layout-container",
        "mobile:h-[500px] mobile:gap-1"
      )}
    >
      {items.map((item) => (
        <LinkItem
          key={item.href}
          href={item.href}
          imgSrc={item.imgSrc}
          title={item.title}
          description={item.description}
          className={animationClass}
        />
      ))}
    </div>
  );
};

export default LinkContainer;
