import Link from "next/link";
import React from "react";
import Image from "next/image";
import { EventItemType } from "@/types/EventItemType";

interface MainEventItemProps {
  event: EventItemType;
}

// 이벤트 카드 컴포넌트
const MainEventItem = ({ event }: MainEventItemProps) => {
  return (
    <Link
      href={`/event/detail?id=${event.event_id}`}
      className="relative w-full h-56 bg-gray-800 overflow-hidden select-none"
    >
      <Image
        src={event.image_url}
        alt="Event Thumbnail"
        width={500}
        height={300}
        priority
        className="object-cover hover:scale-105 transition-all duration-300 ease-out"
      />
    </Link>
  );
};

export default MainEventItem;
