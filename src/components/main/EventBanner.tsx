import Link from "next/link";
import React from "react";

const EventBanner = () => {
  return (
    <div className="w-full h-[162px] flex items-center justify-between border-2 border-[#4B4B4B] rounded-[5px] px-10 bg-black text-white">
      <div className="flex flex-col gap-4">
        <p className="font-bold text-[24px] tracking-[-0.04em]">
          가장 조회수가 많은 사진
        </p>
        <p className="text-[18px] tracking-[-0.02em] text-white/80">
          지금 인기 사진을 확인하세요
        </p>
      </div>
      <Link href={"/"}>
        <button className="w-[200px] h-[50px] rounded-[5px] text-[18px] border-2 border-[#4B4B4B] bg-[#1F1F1F] text-white hover:bg-black transition-all duration-300">
          보러가기
        </button>
      </Link>
    </div>
  );
};

export default EventBanner;
