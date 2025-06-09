import { EventItemType } from "@/types/EventItemType";

export default function categorizeEvents(events: EventItemType[]) {
    const today = new Date();

    const ongoing: EventItemType[] = [];
    const upcoming: EventItemType[] = [];
    const ended: EventItemType[] = [];

    events.forEach((event) => {
      const createdAt = new Date(event.created_at);
      const expiresAt = new Date(event.expires_at);

      if (createdAt <= today && today <= expiresAt) {
        ongoing.push(event);
      } else if (today < createdAt) {
        upcoming.push(event);
      } else if (expiresAt < today) {
        ended.push(event);
      }
    });

    return {
      ongoing,
      upcoming,
      ended,
    };
}