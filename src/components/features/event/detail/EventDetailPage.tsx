"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import useUserId from "@/hooks/useUserId";
import { cn } from "@/utils";
import useGetEventDetail from "@/hooks/api/event/useGetEventDetail";
import Image from "next/image";
import { useEventJoinLogic } from "@/hooks/api/event/useEventJoinLogic";
import EventMeta from "./EventMeta";
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
      <div
        className={cn(
          "relative mx-28 h-[500px]",
          "mobile:h-[240px] mobile:mx-0"
        )}
      >
        <Image
          src={event.image_url}
          alt="Event Detail"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div
        className={cn(
          "flex flex-col gap-4 bg-black text-white p-20 mx-28",
          "mobile:p-4 mobile:gap-2 mobile:mx-0"
        )}
      >
        <h1 className={cn("text-3xl", "mobile:text-xl")}>{event.title}</h1>

        <EventMeta event={event} />

        <hr className="border-gray-600" />

        <section
          className={cn(
            "text-lg tracking-[-0.02em] min-h-[200px]",
            "mobile:text-sm mobile:min-h-fit"
          )}
        >
          <p className="whitespace-pre-wrap">{event?.description}</p>
        </section>

        <EventJoinButton
          hasJoined={hasJoined}
          isLoading={joinLoading}
          onJoin={handleJoinToggle}
        />
      </div>

      <CommentContainer id={id} type="event" />
    </article>
  );
};

export default EventDetailPage;
