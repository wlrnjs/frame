"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import useUserId from "@/hooks/useUserId";
import { cn } from "@/utils";
import useGetEventDetail from "@/hooks/api/event/useGetEventDetail";
import EventImage from "./EventImage";
import { useEventJoinLogic } from "@/hooks/api/event/useEventJoinLogic";
import EventMeta from "./EventMeta";
import EventContent from "./EventContent";
import EventJoinButton from "./EventJoinButton";
import CommentContainer from "../../photo-list/detail/CommentContainer";

// 로딩 스피너 컴포넌트 (임시)
const LoadingSpinner = () => (
  <div className="w-full min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
  </div>
);

// 에러 바운더리 컴포넌트 (임시)
const ErrorFallback = ({ error }: { error?: string }) => (
  <div className="w-full min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h2 className="text-xl font-bold mb-2">오류가 발생했습니다</h2>
      <p className="text-gray-600">{error || "페이지를 불러올 수 없습니다."}</p>
    </div>
  </div>
);

const EventDetailPage = () => {
  const params = useSearchParams();
  const id = params.get("id") as string;
  const userId = useUserId() as string;

  const { data: event, isLoading, error } = useGetEventDetail(id);
  const {
    hasJoined,
    isLoading: joinLoading,
    handleJoinToggle,
  } = useEventJoinLogic(id, userId);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error || !event) {
    return <ErrorFallback error="이벤트 정보를 불러올 수 없습니다." />;
  }

  return (
    <article className="w-full min-h-screen custom-margin layout-container">
      {event.image_url && <EventImage imageUrl={event.image_url} />}

      <div
        className={cn(
          "flex flex-col gap-4 bg-black text-white p-20",
          "mobile:p-4 mobile:gap-2"
        )}
      >
        <h1 className={cn("text-3xl", "mobile:text-xl")}>{event.title}</h1>

        <EventMeta event={event} />

        <hr className="border-gray-600" />

        <EventContent event={event} />

        <EventJoinButton
          hasJoined={hasJoined}
          isLoading={joinLoading}
          onJoin={handleJoinToggle}
        />
      </div>

      <CommentContainer isEvent id={id} type="event" />
    </article>
  );
};

export default EventDetailPage;
