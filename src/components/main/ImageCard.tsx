import React from "react";
import Image from "next/image";
import Link from "next/link";

const ImageCard = () => {
  return (
    <Link href={"/category/detail"}>
      <div className="w-[240px] h-[371px] flex flex-col gap-2 items-center justify-around pointer">
        <div className="w-full h-4/5 bg-[#D9D9D9] rounded-[5px] overflow-hidden relative group">
          <Image
            src={"/BlackPhoto.JPG"}
            alt="img"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white px-4 text-center">
            <p className="font-bold text-[20px] leading-[24px]">
              This is Title
            </p>
            <p className="text-[16px] leading-[20px]">This is SubTitle</p>
            <p className="text-[14px] leading-[18px]">자연 | 닉네임</p>
          </div>
        </div>
        <div className="w-full h-[80px] bg-[#D9D9D9] rounded-[5px] flex flex-col justify-center items-start gap-2 px-3">
          <p className="font-bold text-[20px] leading-[24px] tracking-[-0.02em] text-main">
            This is Title
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-[18px] leading-[22px] tracking-[-0.02em] text-sub">
              This is SubTitle
            </p>
            <div className="flex items-center gap-2 text-[14px] leading-[18px] text-sub">
              <span>This is category</span>
              <span>|</span>
              <span>닉네임</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ImageCard;
