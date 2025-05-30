"use client";

import AddPhotoContainer from "@/components/features/write/AddPhotoContainer";
import PhotoInfoContainer from "@/components/features/write/PhotoInfoContainer";
import { cn } from "@/utils";
import React, { useState } from "react";

const Page = () => {
  const [images, setImages] = useState<File[]>([]);

  return (
    <div className="w-full min-h-screen custom-margin layout-container">
      <div
        className={cn(
          "w-full h-full flex flex-col gap-10 justify-center items-start",
          "mobile:gap-3"
        )}
      >
        <AddPhotoContainer images={images} setImages={setImages} />
        <PhotoInfoContainer images={images} />
      </div>
    </div>
  );
};

export default Page;
