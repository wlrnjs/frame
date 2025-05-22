import { cn } from "@/utils";
import { formatDate, formatTime, getEventStatus } from "@/utils/date/dateUtils";
import React from "react";
import { EventItemType } from "@/types/EventItemType";

interface EventMetaProps {
  event: EventItemType;
}

const EventMeta = ({ event }: EventMetaProps) => (
  <div
    className={cn(
      "flex gap-2",
      "mobile:text-xs mobile:text-nowrap mobile:flex-col mobile:gap-1"
    )}
  >
    <div className="flex gap-2">
      <span>{getEventStatus(event?.expires_at)}</span>
      <span>{formatTime(event?.created_at)}</span>
      <span>조회수 4</span>
      <span>댓글 0</span>
      <span className="flex gap-1">
        참여자<span>{event?.join_count}</span>
      </span>
    </div>
    <div>
      <span>
        {`이벤트 기한: ${formatDate(event?.created_at)} ~ ${formatDate(
          event?.expires_at
        )}`}
      </span>
    </div>
  </div>
);

export default EventMeta;
