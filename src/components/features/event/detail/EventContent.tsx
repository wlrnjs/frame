import { EventItemType } from "@/types/EventItemType";
import { cn } from "@/utils";
import React from "react";

const EventContent = ({ event }: { event: EventItemType }) => (
  <section
    className={cn(
      "text-lg tracking-[-0.02em] min-h-[200px]",
      "mobile:text-sm mobile:min-h-fit"
    )}
  >
    <p className="whitespace-pre-wrap">{event?.description}</p>
  </section>
);

export default EventContent;
