import React from "react";
import Image from "next/image";
import { ListItemType } from "@/types/ListType";
import Link from "next/link";

interface PostGridItemProps {
  data: ListItemType;
}

const PostGridItem = ({ data }: PostGridItemProps) => {
  console.log(data);
  return (
    <Link
      href={`/photo-list/detail?id=${data.post_id}`}
      className="rounded-lg overflow-hidden pointer"
    >
      <Image
        src={data.img_urls.length > 0 ? data.img_urls[0] : "/BlackPhoto.JPG"}
        alt={data.title}
        width={120}
        height={80}
        layout="responsive"
        className="object-cover hover:bg-black hover:opacity-85 hover:scale-105 duration-300"
      />
    </Link>
  );
};

export default PostGridItem;
