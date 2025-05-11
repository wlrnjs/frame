import React from "react";
import Image from "next/image";
import Link from "next/link";

const ListItem = () => {
  return (
    <Link
      href={"/category/detail"}
      className="w-[215px] h-[300px] relative group overflow-hidden rounded-md pointer"
    >
      <div className="w-full h-full relative">
        <Image
          src={"/BlackPhoto.JPG"}
          alt="test_img"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
          <h3 className="text-lg font-semibold">사진 제목</h3>
          <p className="text-sm mt-1">간단한 설명 텍스트입니다.</p>
          <div className="text-xs mt-2 opacity-80 flex justify-between">
            <span>카테고리: 자연</span>
            <span>닉네임: 사용자</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListItem;
