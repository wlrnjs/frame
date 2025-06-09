import Link from "next/link";
import React from "react";
import Image from "next/image";
import { EventItemType } from "@/types/EventItemType";

interface MainEventItemProps {
  event: EventItemType;
}

// 이벤트 카드 컴포넌트
const MainEventItem = ({ event }: MainEventItemProps) => {
  console.log("event: ", event);
  return (
    <Link
      href={`/event/detail?id=${event.event_id}`}
      className="relative w-full h-56 bg-gray-800 overflow-hidden"
    >
      <Image
        src={event.image_url}
        alt="Event Thumbnail"
        fill
        className="object-cover hover:scale-105 transition-all duration-300 ease-out"
      />
      {/* {event.image_url && (
        <Image
          src={event.image_url}
          alt="Event Thumbnail"
          fill
          className="object-cover hover:scale-105 transition-all duration-300 ease-out"
        />
      )} */}
    </Link>
  );
};

export default MainEventItem;
