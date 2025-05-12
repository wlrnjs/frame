import React from "react";
import Image from "next/image";
import Link from "next/link";

const ImageCard = () => {
  return (
    <Link href={"/category/detail"} className="w-full group">
      <div className="w-full flex flex-col gap-1">
        <div className="w-full aspect-[3/4] bg-gray-350 rounded-[5px] overflow-hidden relative">
          <Image
            src={"/BlackPhoto.JPG"}
            alt="image"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
        </div>
        <p className="text-sm text-gray-600 leading-5">카테고리</p>
        <div className="w-full">
          <p className="text-base font-bold truncate leading-5">사진 제목</p>
        </div>
      </div>
    </Link>
  );
};

export default ImageCard;
