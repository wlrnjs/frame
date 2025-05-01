import Link from "next/link";
import React from "react";

const EventBanner = () => {
  return (
    <div className="w-full h-[162px] flex items-center justify-between border-2 rounded-[5px] px-10 bg-white">
      <div className="flex flex-col gap-4">
        <p className="font-bold text-[24px] leading-[20px] tracking-[-0.04em] text-main">
          가장 조회수가 많은
        </p>
        <p className="text-[18px] leading-[20px] tracking-[-0.02em] text-sub">
          가장 조회수가 많은
        </p>
      </div>
      <Link href={"/"}>
        <button className="w-[200px] h-[50px] rounded-[5px] text-[20px] border-2 bg-white">
          보러가기
        </button>
      </Link>
    </div>
  );
};

export default EventBanner;
