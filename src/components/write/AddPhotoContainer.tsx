import React from "react";
import Image from "next/image";

const AddPhotoContainer = () => {
  return (
    <div className="w-full flex flex-col items-center gap-2 min-w-[920px]">
      <div className="relative w-full aspect-[4/3] bg-black overflow-hidden rounded-md">
        <Image
          src={"/BlackPhoto.JPG"}
          alt="info-img"
          fill
          className="object-contain p-5"
        />
      </div>
      <div className="w-full h-[92px] bg-black rounded-[5px] p-3 flex items-center justify-start">
        <div className="w-[75px] h-[75px] rounded-md border border-white flex-center text-[20px] text-white font-light border-custom-dotted">
          <p>+</p>
        </div>
      </div>
    </div>
  );
};

export default AddPhotoContainer;
