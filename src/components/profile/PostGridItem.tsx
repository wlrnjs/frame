import React from "react";
import Image from "next/image";

interface PostGridItemProps {
  src: string;
  alt: string;
}

const PostGridItem = ({ src, alt }: PostGridItemProps) => {
  return (
    <div className="rounded-lg overflow-hidden pointer">
      <Image
        src={src}
        alt={alt}
        width={120}
        height={80}
        layout="responsive"
        className="object-cover hover:bg-black hover:opacity-85 hover:scale-105 duration-300"
      />
    </div>
  );
};

export default PostGridItem;
