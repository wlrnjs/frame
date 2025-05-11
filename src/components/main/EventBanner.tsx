import Link from "next/link";
import React from "react";

const EventBanner = () => {
  return (
    <div className="w-full h-[162px] flex items-center justify-between bg-black text-white mt-10 layout-container">
      <div className="flex flex-col gap-4">
        <p className="font-bold text-[24px] tracking-[-0.04em]">
          현재 진행중인 이벤트
        </p>
        <p className="text-[18px] tracking-[-0.02em] text-white/80">
          지금 이벤트를 확인하세요
        </p>
      </div>
      <Link href={"/"}>
        <button className="w-[200px] h-[50px] rounded-[5px] text-[18px] border-2 border-[#4B4B4B] text-white hover:bg-[#1F1F1F] transition-all duration-300">
          보러가기
        </button>
      </Link>
    </div>
  );
};

export default EventBanner;
