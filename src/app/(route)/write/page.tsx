"use client";

import AddPhotoContainer from "@/components/write/AddPhotoContainer";
import PhotoInfoContainer from "@/components/write/PhotoInfoContainer";
import React, { useState } from "react";

const Page = () => {
  const [images, setImages] = useState<File[]>([]);

  // 이미지 업로드 에러 해결 (사이즈 제한 이슈)

  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center gap-20 custom-margin layout-container">
      <div className="w-full h-full flex gap-10 justify-center items-start">
        <AddPhotoContainer images={images} setImages={setImages} />
        <PhotoInfoContainer images={images} />
      </div>
    </div>
  );
};

export default Page;
