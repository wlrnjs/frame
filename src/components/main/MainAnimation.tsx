import React from "react";
import Image from "next/image";

const MainAnimation = () => {
  return (
    <div className="w-full h-full py-10">
      <div className="w-full h-full flex flex-col gap-20 items-center justify-end">
        <Image
          src="/BlackPhoto.JPG"
          alt="BlackPhoto"
          width={300}
          height={400}
          className="rounded-[5px] shadow-sm"
        />
        <div className="w-full flex items-center justify-end text-white">
          <div className="w-1/2 flex flex-col">
            <p className="text-sub">CATEGORY CATEGORY CATEGORY</p>
            <p className="text-main">CATEGORY CATEGORY CATEGORY</p>
            <p className="text-sub">CATEGORY CATEGORY CATEGORY</p>
            <p className="text-sub">CATEGORY CATEGORY CATEGORY</p>
          </div>
          <div className="w-1/2 flex flex-col text-end">
            <p className="text-sub">CATEGORY CATEGORY CATEGORY</p>
            <p className="text-main">CATEGORY CATEGORY CATEGORY</p>
            <p className="text-sub">CATEGORY CATEGORY CATEGORY</p>
            <p className="text-sub">CATEGORY CATEGORY CATEGORY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAnimation;
