import { cn } from "@/utils";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Event } from "@/types/Event";

// 메인 이벤트 컴포넌트
const MainEventCard = ({ event }: { event: Event }) => (
  <Link
    href={`/event/detail?id=${event.event_id}`}
    className={cn(
      "relative w-1/2 h-96 bg-gray-800 mb-12 overflow-hidden rounded-lg",
      "mobile:w-full mobile:h-64"
    )}
  >
    <Image
      src={event.image_url}
      alt={event.title}
      fill
      className="object-cover hover:scale-105 transition-all duration-300 ease-out"
    />
  </Link>
);

export default MainEventCard;
