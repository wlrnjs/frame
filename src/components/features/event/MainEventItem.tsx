import Link from "next/link";
import React from "react";
import Image from "next/image";
import { EventItemType } from "@/types/EventItemType";
import { formatDate } from "@/utils/date/dateUtils";
import { cn } from "@/utils";

interface MainEventItemProps {
  event: EventItemType;
}

// 이벤트 카드 컴포넌트
const MainEventItem = ({ event }: MainEventItemProps) => {
  const EventMeta = [
    {
      title: "제목",
      value: event?.title,
    },
    {
      title: "내용",
      value: event?.description,
    },
    {
      title: "기간",
      value: `${formatDate(event?.created_at)} ~ ${formatDate(
        event?.expires_at
      )}`,
    },
  ];

  return (
    <Link
      href={`/event/detail?id=${event.event_id}`}
      className="relative w-full h-56 bg-gray-800 overflow-hidden select-none group"
    >
      <Image
        src={event.image_url}
        alt="Event Thumbnail"
        width={500}
        height={300}
        priority
        className="object-cover hover:scale-105 transition-all duration-300 ease-out"
      />
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 p-4 text-white",
          "pc:opacity-0 pc:group-hover:opacity-100 pc:transition-opacity pc:duration-300",
          "mobile:opacity-100"
        )}
      >
        {EventMeta.map((meta, index) => (
          <p key={index} className="text-sm line-clamp-1">
            {meta.value}
          </p>
        ))}
      </div>
    </Link>
  );
};

export default MainEventItem;
