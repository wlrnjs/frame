"use client";

import AddPhotoContainer from "@/components/features/write/AddPhotoContainer";
import PhotoInfoContainer from "@/components/features/write/PhotoInfoContainer";
import { cn } from "@/utils";
import React, { useState } from "react";

const Page = () => {
  const [images, setImages] = useState<File[]>([]);

  return (
    <div
      className={cn(
        "w-full min-h-screen flex flex-col justify-start items-center gap-20 custom-margin layout-container",
        "mobile:gap-5"
      )}
    >
      <div
        className={cn(
          "w-full h-full flex gap-10 justify-center items-start",
          "mobile:flex-col mobile:gap-5"
        )}
      >
        <AddPhotoContainer images={images} setImages={setImages} />
        <PhotoInfoContainer images={images} />
      </div>
    </div>
  );
};

export default Page;
