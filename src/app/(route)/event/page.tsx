"use client";

import useGetEvents from "@/hooks/api/event/useGetEvents";
import { cn } from "@/utils";
import React from "react";
// import { Event } from "@/types/Event";
import EventListEmpty from "@/components/features/event/EventListEmpty";
import MainEventCard from "@/components/features/event/MainEventCard";
import EventSection from "@/components/features/event/EventSection";

// 로딩 상태 컴포넌트
const LoadingState = () => (
  <div className="w-full min-h-screen flex items-center justify-center">
    <div className="text-lg text-gray-600">이벤트를 불러오는 중...</div>
  </div>
);

// 에러 상태 컴포넌트
const ErrorState = ({ message }: { message?: string }) => (
  <div className="w-full min-h-screen flex items-center justify-center">
    <div className="text-lg text-red-600">
      {message || "이벤트를 불러오는데 실패했습니다."}
    </div>
  </div>
);

const EventPage = () => {
  const { data: events, isLoading, error } = useGetEvents();

  // const activeEvents = events?.filter((event: Event) => true) || [];

  // const upcomingEvents = events?.slice(1) || [];
  // const expiredEvents = events || [];

  if (isLoading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState message="이벤트 데이터를 불러올 수 없습니다." />;
  }
  if (!events || events.length === 0) {
    return <EventListEmpty />;
  }

  return (
    <div className="w-full min-h-screen text-black custom-margin layout-container">
      <main className="w-full flex flex-col items-center">
        {/* 이벤트 타이틀 */}
        <h1 className={cn("font-semibold text-3xl mb-8", "mobile:text-2xl")}>
          진행중인 이벤트
        </h1>

        {/* 메인 이벤트 */}
        {events[0] && <MainEventCard event={events[0]} />}

        {/* 다가오는 이벤트 섹션 */}
        <EventSection title="다가오는 이벤트" events={events} />

        {/* 종료된 이벤트 섹션 */}
        <EventSection title="종료된 이벤트" events={events} isExpired />
      </main>
    </div>
  );
};

export default EventPage;
