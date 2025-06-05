import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils";
import { ListItemType } from "@/types/ListType";
import { formatCategory } from "@/utils/text/formatCategory";

interface ImageCardProps {
  className?: string;
  data: ListItemType;
}

const ImageCard = ({ className = "", data }: ImageCardProps) => {
  return (
    <Link
      href={`/photo-list/detail?id=${data?.post_id}`}
      className={cn("w-full group fade-up", className)}
    >
      <div className="w-full flex flex-col gap-1 hover-slide">
        <div className="w-full aspect-[3/4] bg-gray-350 rounded-[5px] overflow-hidden relative">
          {data?.img_urls && (
            <Image
              src={data?.img_urls[0]}
              alt="image"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
        </div>
        <p className="text-sm text-gray-600 leading-5 line-clamp-1">
          {formatCategory(data?.category)}
        </p>
        <div className="w-full">
          <p className="text-base font-bold truncate leading-5">
            {data?.title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ImageCard;
