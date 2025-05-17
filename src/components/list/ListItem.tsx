import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ListItemType } from "@/app/(route)/photo-list/page";

interface ListItemProps {
  data: ListItemType;
}

const ListItem = ({ data }: ListItemProps) => {
  return (
    <Link
      href={`/photo-list/detail?id=${data?.post_id}`}
      className="w-[215px] h-[300px] relative group overflow-hidden rounded-md pointer"
    >
      <div className="w-full h-full relative">
        <Image
          src={data?.img_url || "/BlackPhoto.JPG"}
          alt="test_img"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
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
