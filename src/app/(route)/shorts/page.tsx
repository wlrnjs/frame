"use client";

import React from "react";
import Image from "next/image";
import Download from "@/icon/Download";
import Share from "@/icon/Share";
import Report from "@/icon/Report";
import { HeartOutline } from "@/icon/Heart";
import ArrowDown from "@/icon/ArrowDown";
import ArrowUp from "@/icon/ArrowUp";
import useIsMobile from "@/utils/dom/isMobile";

const Page = () => {
  const isMobile = useIsMobile();

  const Action = [
    {
      icon: <HeartOutline />,
      count: 0,
      text: "개",
    },
    {
      icon: <Download />,
      count: 0,
      text: "회",
    },
    {
      icon: <Share />,
      count: 0,
      text: "회",
    },
    {
      icon: <Report />,
      text: "신고",
    },
  ];

  const ArrowButton = [
    {
      icon: <ArrowUp />,
    },
    {
      icon: <ArrowDown />,
    },
  ];

  return (
    <div className="w-full min-h-screen custom-margin layout-container">
      <div className="flex-center gap-5">
        <div className="relative w-[500px] h-[700px]">
          <Image
            src={"/BlackPhoto.JPG"}
            alt="black photo"
            fill
            className="rounded-[5px] object-contain"
          />
          <div className="absolute bottom-[-120px] left-full ml-2 -translate-y-1/2 flex flex-col items-center gap-2">
            <div className="flex flex-col-center gap-2 p-5">
              {Action.map((action, index) => (
                <div key={index} className="flex-col-center gap-[1px]">
                  <div className="w-10 h-10 rounded-full bg-black/20 flex-center pointer">
                    {action.icon}
                  </div>
                  <p>
                    {action.count}
                    {action.text}
                  </p>
                </div>
              ))}
            </div>
            {!isMobile && (
              <div className="flex flex-col gap-5">
                {ArrowButton.map((button, index) => (
                  <button
                    key={index}
                    className="w-10 h-10 rounded-full flex-center pointer bg-black/20"
                  >
                    {button.icon}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
