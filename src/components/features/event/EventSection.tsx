import { cn } from "@/utils";
import React from "react";
import EventListCard from "./EventListCard";
import { EventItemType } from "@/types/EventItemType";

interface EventSectionProps {
  title: string;
  events: EventItemType[];
  isExpired?: boolean;
}

// 이벤트 섹션 컴포넌트
const EventSection = ({
  title,
  events,
  isExpired = false,
}: EventSectionProps) => {
  if (!events || events.length === 0) return null;

  return (
    <section className="w-full py-5">
      <h3 className={cn("text-xl mb-4", "mobile:text-lg")}>{title}</h3>
      <div
        className={cn(
          "grid grid-cols-3 gap-4",
          "mobile:grid-cols-1 mobile:gap-1"
        )}
      >
        {events.map((event: EventItemType, index: number) => (
          <EventListCard
            key={`${event.event_id}-${index}`}
            event={event}
            isExpired={isExpired}
          />
        ))}
      </div>
    </section>
  );
};

export default EventSection;
