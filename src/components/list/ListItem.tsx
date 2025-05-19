import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ListItemType } from "@/app/(route)/photo-list/page";
import { ImgListType } from "@/app/(route)/photo-list/page";

interface ListItemProps {
  data: ListItemType;
  imgData: ImgListType[];
}

const ListItem = ({ data, imgData }: ListItemProps) => {
  const [imageRatio, setImageRatio] = useState<number>(0.75); // 기본 비율 3:4
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // 이미지 비율 계산을 위한 함수
  useEffect(() => {
    if (imgData?.[0]?.image_url) {
      const img = new window.Image();
      img.src = imgData[0].image_url;

      img.onload = () => {
        // 이미지 원래 비율 계산 (높이/너비)
        const ratio = img.height / img.width;
        setImageRatio(ratio);
        setIsLoaded(true);
      };

      img.onerror = () => {
        // 이미지 로드 실패 시 기본 비율 사용
        setIsLoaded(true);
      };
    } else {
      setIsLoaded(true);
    }
  }, [imgData]);

  return (
    <Link
      href={`/photo-list/detail?id=${data?.post_id}`}
      className="block w-full relative group overflow-hidden rounded-md pointer mb-4"
    >
      <div
        className="w-full relative"
        style={{ paddingTop: `${imageRatio * 100}%` }} // 동적 비율 적용
      >
        <Image
          src={imgData?.[0]?.image_url || "/BlackPhoto.JPG"}
          alt="test_img"
          fill
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
          <h3 className="text-lg font-semibold">{data?.title}</h3>
          <p className="text-sm mt-1">{data?.description}</p>
          <div className="text-xs mt-2 opacity-80 flex justify-between">
            <span>카테고리: {data?.category}</span>
            <span>닉네임: {data?.nickname}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListItem;
