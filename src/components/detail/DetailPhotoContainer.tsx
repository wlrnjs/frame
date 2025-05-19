"use client";

import React, { useState } from "react";
import Image from "next/image";
import Square from "@/icon/Square";
import DetailImageModal from "../modal/DetailImageModal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper-custom.css";

interface PhotoItem {
  id: string;
  image_url: string;
  posts_id: number;
}

interface DetailPhotoContainerProps {
  img_url: string | PhotoItem[];
  isLoading?: boolean;
}

const DetailPhotoContainer = ({
  img_url,
  isLoading,
}: DetailPhotoContainerProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageUrl, setCurrentImageUrl] = useState<string>(
    Array.isArray(img_url)
      ? img_url[0]?.image_url
      : img_url || "/BlackPhoto.JPG"
  );

  // detail page에 사진이 여러장 있는지 확인 (Swiper 사용)
  const hasMultiplePhotos = Array.isArray(img_url) && img_url.length > 0;

  // Swiper 추가 CSS 스타일 정의
  const swiperContainerStyle = {
    width: "100%",
    height: "100%",
    aspectRatio: "4/3",
    maxWidth: "100%",
    boxSizing: "border-box" as const,
  };

  // Swiper 전체 컨테이너 스타일
  const swiperWrapperStyle = {
    ...swiperContainerStyle,
    overflow: "hidden" as const,
  };
  console.log(img_url);

  // 로딩 (변경 필요)
  if (isLoading) {
    return (
      <div className="w-full h-[720px] bg-black text-white">Loading...</div>
    );
  }

  return (
    <div className="w-full h-[720px] flex flex-col items-center gap-2">
      {hasMultiplePhotos ? (
        <div className="relative w-full aspect-[4/3] bg-black overflow-hidden rounded-md">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={(swiper) => {
              if (Array.isArray(img_url)) {
                setCurrentImageUrl(img_url[swiper.activeIndex].image_url);
              }
            }}
            className="w-full h-full"
            style={swiperWrapperStyle}
          >
            {Array.isArray(img_url) &&
              img_url.map((photo) => (
                <SwiperSlide key={photo.id}>
                  <div
                    className="relative w-full h-full"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {photo?.image_url && (
                      <Image
                        src={photo?.image_url}
                        alt="carousel-img"
                        fill
                        className="object-contain p-5"
                      />
                    )}
                    <div
                      className={`absolute top-5 right-5 transition-all duration-300 ease-in-out pointer ${
                        isHovered
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-4 pointer-events-none"
                      }`}
                      onClick={() => {
                        setIsModalOpen(true);
                      }}
                    >
                      <Square />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      ) : (
        <div
          className="relative w-full aspect-[4/3] bg-black overflow-hidden rounded-md"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {!Array.isArray(img_url) && (
            <Image
              src={img_url}
              alt="info-img"
              fill
              className="object-contain p-5"
            />
          )}
          <div
            className={`absolute top-5 right-5 transition-all duration-300 ease-in-out pointer ${
              isHovered
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-4 pointer-events-none"
            }`}
            onClick={() => setIsModalOpen(true)}
          >
            <Square />
          </div>
        </div>
      )}
      <DetailImageModal
        onOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        img_url={currentImageUrl}
      />
    </div>
  );
};

export default DetailPhotoContainer;
