"use client";

import React, { useState } from "react";
import Image from "next/image";
import Square from "@/icon/Square";
import DetailImageModal from "../modal/DetailImageModal";

const DetailPhotoContainer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full h-[720px] flex flex-col items-center gap-2">
      <div
        className="relative w-full aspect-[4/3] bg-black overflow-hidden rounded-md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src="/BlackPhoto.JPG"
          alt="info-img"
          fill
          className="object-contain p-5"
        />
        <div
          className={`absolute top-5 right-5 transition-all duration-300 ease-in-out ${
            isHovered
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-4 pointer-events-none"
          }`}
          style={{ cursor: "pointer" }}
          onClick={() => setIsModalOpen(true)}
        >
          <Square />
        </div>
      </div>
      <DetailImageModal
        onOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default DetailPhotoContainer;
