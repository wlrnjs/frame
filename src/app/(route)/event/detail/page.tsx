"use client";

import CommentContainer from "@/components/features/photo-list/detail/CommentContainer";
import Image from "next/image";
import React from "react";
import useGetEventDetail from "@/hooks/api/event/useGetEventDetail";
import { useSearchParams } from "next/navigation";
import useGetEventJoin from "@/hooks/api/event/useGetEventJoin";
import useUserId from "@/hooks/useUserId";
import { cn } from "@/utils";
import { formatDate, formatTime, getEventStatus } from "@/utils/date/dateUtils";
import { Suspense } from "react";
import usePostEventJoin from "@/hooks/api/event/usePostEventJoin";
import useDeleteEventJoin from "@/hooks/api/event/useDeleteEventJoin";

const Page = () => {
  return (
    <Suspense fallback={""}>
      <EventDetailPage />
    </Suspense>
  );
};

const EventDetailPage = () => {
  const params = useSearchParams();
  const id = params.get("id");
  const userId = useUserId();

  const { data: event } = useGetEventDetail(id!);
  const { data: eventJoin } = useGetEventJoin(id!);

  const { mutate: postEventJoin, isPending: postEventJoinLoading } =
    usePostEventJoin();
  const { mutate: deleteEventJoin, isPending: deleteEventJoinLoading } =
    useDeleteEventJoin();

  const handleJoinButton = () => {
    if (eventJoin?.length) {
      deleteEventJoin({ id: id!, userId: userId! });
    } else {
      postEventJoin({ id: id!, userId: userId! });
    }
  };

  return (
    <div className="w-full min-h-screen custom-margin layout-container">
      {event?.image_url && (
        <div className={cn("relative w-full h-[500px]", "mobile:h-[240px]")}>
          <Image src={event?.image_url} alt="Event Detail" fill priority />
        </div>
      )}
      <div
        className={cn(
          "flex flex-col gap-4 bg-black text-white p-20",
          "mobile:p-4 mobile:gap-2"
        )}
      >
        <h2 className={cn("text-3xl", "mobile:text-xl")}>{event?.title}</h2>
        <div
          className={cn(
            "flex gap-2",
            "mobile:text-xs mobile:text-nowrap mobile:flex-col mobile:gap-1"
          )}
        >
          <div className="flex gap-2">
            <p>{getEventStatus(event?.expires_at)}</p>
            <p>{formatTime(event?.created_at)}</p>
            <p>조회수 4</p>
            <p>댓글 0</p>
            <p className="flex gap-1">
              참여자<span>{event?.join_count}</span>
            </p>
          </div>
          <div>
            <p>{`이벤트 기한: ${formatDate(event?.created_at)} ~ ${formatDate(
              event?.expires_at
            )}`}</p>
          </div>
        </div>
        <hr />
        <section className={cn("text-lg tracking-[-0.02em]", "mobile:text-sm")}>
          <p>{event?.description}</p>
        </section>
        <button
          onClick={handleJoinButton}
          disabled={postEventJoinLoading || deleteEventJoinLoading}
          className={cn(
            "w-full h-[50px] rounded-[5px] my-4",
            "mobile:h-[40px]",
            eventJoin?.length
              ? "bg-black text-white border border-white"
              : "bg-white text-black"
          )}
        >
          {eventJoin?.length ? "이벤트 참여 취소" : "이벤트 참여하기"}
        </button>
      </div>
      <div
        className={cn(
          "bg-black text-white px-20 pb-20 flex flex-col gap-4",
          "mobile:px-4"
        )}
      >
        <h1
          className={cn(
            "text-2xl mb-4 flex gap-2 items-center",
            "mobile:text-xl"
          )}
        >
          댓글
          <span className={cn("text-gray-500 text-lg", "mobile:text-sm")}>
            총 3개
          </span>
        </h1>
        <CommentContainer isEvent />
      </div>
    </div>
  );
};

export default Page;
