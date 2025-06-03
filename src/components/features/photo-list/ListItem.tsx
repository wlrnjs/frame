import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ListItemType } from "@/types/ListType";
import { cn } from "@/utils";
import { formatCategory } from "@/utils/text/formatCategory";

interface ListItemProps {
  data: ListItemType;
  id?: string;
}

const ListItem = ({ data, id }: ListItemProps) => {
  const [imageRatio, setImageRatio] = useState<number>(0.75); // 기본 비율 3:4
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // 이미지 비율 계산을 위한 함수
  useEffect(() => {
    if (data?.img_urls?.[0]) {
      const img = new window.Image();
      img.src = data?.img_urls[0];

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
  }, [data]);

  return (
    <Link
      href={`/photo-list/detail?id=${data?.post_id}`}
      className={cn(
        "block w-full relative group overflow-hidden rounded-md pointer mb-4",
        data?.post_id?.toString() === id && "ring-4 ring-blue-400"
      )}
    >
      <div
        className="w-full relative"
        style={{ paddingTop: `${imageRatio * 100}%` }}
      >
        <Image
          src={data?.img_urls[0] || "/BlackPhoto.JPG"}
          alt="test_img"
          fill
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={cn(
            "object-cover transition-transform duration-300 group-hover:scale-105",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setIsLoaded(true)}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
          <h3 className="text-lg font-semibold line-clamp-1">{data?.title}</h3>
          <p className="text-sm mt-1 line-clamp-1">{data?.description}</p>
          <div className="text-xs mt-2 opacity-80 flex justify-between">
            <span>카테고리: {formatCategory(data?.category)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListItem;
