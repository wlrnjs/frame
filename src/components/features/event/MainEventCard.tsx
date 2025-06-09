"use client";

import { useState } from "react";
import { EventItemType } from "@/types/EventItemType";
import { cn } from "@/utils";
import MainEventItem from "./MainEventItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface MainEventCardProps {
  event: EventItemType[];
}

// 메인 이벤트 컴포넌트
const MainEventCard = ({ event }: MainEventCardProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h1 className={cn("font-semibold text-3xl mb-8", "mobile:text-2xl")}>
        진행중인 이벤트
      </h1>
      <div className="w-full">
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          navigation={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full h-fit"
        >
          {event.map((event: EventItemType, index: number) => (
            <SwiperSlide
              key={event.event_id}
              className={cn(
                "transition-transform duration-300 ease-in-out overflow-hidden rounded-lg",
                index === activeIndex
                  ? "scale-100 opacity-100"
                  : "scale-60 opacity-60"
              )}
            >
              <MainEventItem key={`${event.event_id}-${index}`} event={event} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default MainEventCard;
