import React from "react";
import Image from "next/image";

const MainAnimation = () => {
  return (
    <div className="w-full h-[calc(100vh-10px)] py-10">
      <div className="w-full h-full flex flex-col gap-20 items-center justify-end">
        <Image
          src="/BlackPhoto.JPG"
          alt="BlackPhoto"
          width={350}
          height={450}
          className="rounded-[5px] shadow-sm"
        />
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
