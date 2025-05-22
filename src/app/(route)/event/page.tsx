"use client";

import useGetEvents from "@/hooks/api/event/useGetEvents";
import { cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Event } from "@/types/Event";

const EventPage = () => {
  const { data: events } = useGetEvents();

  console.log(events);

  return (
    <div className="w-full min-h-screen text-black custom-margin layout-container">
      <main className="w-full flex flex-col items-center">
        {/* 이벤트 타이틀 */}
        <h2 className={cn("font-semibold text-3xl mb-8", "mobile:text-2xl")}>
          진행중인 이벤트
        </h2>

        {/* 메인 이벤트 이미지 */}
        {events?.[0] && (
          <Link
            href={`/event/detail?id=${events[0].event_id}`}
            className={cn(
              "relative w-1/2 h-96 bg-gray-800 mb-12 overflow-hidden",
              "mobile:w-full mobile:h-64"
            )}
          >
            <Image
              src={events[0].image_url}
              alt={events[0].title}
              fill
              className="object-cover hover:scale-105 transition-all duration-300 ease-out"
            />
          </Link>
        )}

        {/* 이벤트 갤러리 섹션 */}
        <section className="w-full py-5">
          <h3 className={cn("text-xl mb-4", "mobile:text-lg")}>
            다가오는 이벤트
          </h3>
          <div
            className={cn(
              "grid grid-cols-3 gap-4",
              "mobile:grid-cols-1 mobile:gap-1"
            )}
          >
            {events?.map((event: Event, index: number) => (
              <Link
                href={`/event/detail?id=${event.event_id}`}
                key={index}
                className="relative w-full h-56 bg-gray-800 overflow-hidden"
              >
                {event.image_url && (
                  <Image
                    src={event.image_url}
                    alt={event.title}
                    fill
                    className="object-cover hover:scale-105 transition-all duration-300 ease-out"
                  />
                )}
              </Link>
            ))}
          </div>
        </section>
        {/* 종료된 이벤트 섹션 */}
        <section className="w-full py-5">
          <h3 className={cn("text-xl mb-4", "mobile:text-lg")}>
            종료된 이벤트
          </h3>
          <div
            className={cn(
              "grid grid-cols-3 gap-4",
              "mobile:grid-cols-1 mobile:gap-1"
            )}
          >
            {events?.map((event: Event, index: number) => (
              <Link
                href={`/event/detail?id=${event.event_id}`}
                key={index}
                className="relative w-full h-56 overflow-hidden"
              >
                {event.image_url && (
                  <Image
                    src={event.image_url}
                    alt={event.title}
                    fill
                    className="object-cover hover:scale-105 transition-all duration-300 ease-out grayscale"
                  />
                )}
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  종료됨
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default EventPage;
