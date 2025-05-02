import React from "react";
import Image from "next/image";

const DetailPhotoContainer = () => {
  return (
    <div className="flex flex-col items-center gap-2 w-full max-w-[600px]">
      <div className="relative w-full aspect-[4/3] bg-black overflow-hidden rounded-md">
        <Image
          src={"/BlackPhoto.JPG"}
          alt="info-img"
          fill
          className="object-contain"
        />
      </div>
      <div className="w-full h-[92px] bg-black rounded-md"></div>
    </div>
  );
};

export default DetailPhotoContainer;
