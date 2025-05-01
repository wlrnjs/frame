import React from "react";
import Image from "next/image";

const ImageCard = () => {
  return (
    <div className="w-[240px] h-[371px] flex flex-col gap-2 items-center justify-around">
      <div className="w-full h-2/3 bg-[#D9D9D9] rounded-[5px] overflow-hidden">
        <Image
          src={"/BlackPhoto.JPG"}
          alt="img"
          width={240}
          height={320}
          className="object-cover"
        />
      </div>
      <div className="w-full h-1/3 bg-[#D9D9D9] rounded-[5px] flex flex-col justify-center items-start gap-[20px] px-3">
        <p className="font-bold text-[20px] leading-[10px] tracking-[-0.02em] text-main">
          This is Title
        </p>
        <div className="flex flex-col gap-2">
          <p className="text-[18px] leading-[10px] tracking-[-0.02em] text-sub">
            This is SubTitle
          </p>
          <p className="text-[14px] leading-[10px] tracking-[-0.02em] text-sub">
            This is category
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
