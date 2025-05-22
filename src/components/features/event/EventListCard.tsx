import Link from "next/link";
import React from "react";
import Image from "next/image";
import { cn } from "@/utils";
import { Event } from "@/types/Event";

// 이벤트 카드 컴포넌트
const EventListCard = ({
  event,
  isExpired = false,
}: {
  event: Event;
  isExpired?: boolean;
}) => (
  <Link
    href={`/event/detail?id=${event.event_id}`}
    className="relative w-full h-56 bg-gray-800 overflow-hidden rounded-lg"
  >
    {event.image_url && (
      <Image
        src={event.image_url}
        alt={event.title}
        fill
        className={cn(
          "object-cover hover:scale-105 transition-all duration-300 ease-out",
          isExpired && "grayscale"
        )}
      />
    )}
    {isExpired && (
      <>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
          종료됨
        </div>
      </>
    )}
  </Link>
);

export default EventListCard;
