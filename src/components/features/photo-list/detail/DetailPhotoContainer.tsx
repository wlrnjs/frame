"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Square from "@/icon/Square";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import DetailImageModal from "@/components/ui/modal/DetailImageModal";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper-custom.css";
import { cn } from "@/utils";
import Spinner from "@/icon/Spinner";

interface DetailPhotoContainerProps {
  img_url: string | string[];
  isLoading?: boolean;
}

const DetailPhotoContainer = ({
  img_url,
  isLoading,
}: DetailPhotoContainerProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageUrl, setCurrentImageUrl] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    if (Array.isArray(img_url)) {
      if (img_url.length > 0) {
        setCurrentImageUrl(img_url[0]);
      }
    } else if (typeof img_url === "string") {
      setCurrentImageUrl(img_url);
    }
  }, [img_url]);

  // detail page에 사진이 여러장 있는지 확인 (Swiper 사용)
  const hasMultiplePhotos = Array.isArray(img_url) && img_url.length > 1;

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

  // 로딩 (변경 필요)
  if (isLoading) {
    return (
      <div className="w-full h-[720px] flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "w-full h-[720px] flex flex-col items-center gap-2 select-none",
        "mobile:h-fit"
      )}
    >
      <div
        className="relative w-full aspect-[4/3] overflow-hidden rounded-md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={hasMultiplePhotos}
          pagination={hasMultiplePhotos ? { clickable: true } : false}
          onSlideChange={(swiper) => {
            if (Array.isArray(img_url)) {
              setCurrentImageUrl(img_url[swiper.activeIndex]);
            }
          }}
          className="w-full h-full"
          style={swiperWrapperStyle}
        >
          {(Array.isArray(img_url) ? img_url : [img_url]).map((photo) => (
            <SwiperSlide key={photo}>
              <div className="relative w-full h-full">
                {photo && (
                  <Image
                    src={photo}
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
                  onClick={() => setIsModalOpen(true)}
                >
                  <Square />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <DetailImageModal
        onOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        img_url={currentImageUrl!}
      />
    </div>
  );
};

export default React.memo(DetailPhotoContainer);
