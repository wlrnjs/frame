"use client";

import CommentContainer from "@/components/detail/CommentContainer";
import Image from "next/image";
import React from "react";
import useGetEventDetail from "@/service/hooks/event/useGetEventDetail";
import { useSearchParams } from "next/navigation";
import usePostEventJoin from "@/service/hooks/event/usePostEventJoin";
import useDeleteEventJoin from "@/service/hooks/event/useDeleteEventJoin";
import useGetEventJoin from "@/service/hooks/event/useGetEventJoin";
import useUserId from "@/utils/useUserId";
import { cn } from "@/utils";
import { formatDate, formatTime, getEventStatus } from "@/utils/dateUtils";

const Page = () => {
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
        <div className="relative w-full h-[500px]">
          {/* 이미지 블러 효과 추가 필요 */}
          <Image src={event?.image_url} alt="Event Detail" fill priority />
        </div>
      )}
      <div className="flex flex-col gap-4 bg-black text-white p-20">
        <h2 className="text-3xl">{event?.title}</h2>
        <div className="flex gap-2">
          <p>{getEventStatus(event?.expires_at)}</p>
          <p>{formatTime(event?.created_at)}</p>
          <p>조회수 4</p>
          <p>댓글 0</p>
          <p className="flex gap-1">
            참여자<span>{event?.join_count}</span>
          </p>
          <p>{`이벤트 기한: ${formatDate(event?.created_at)} ~ ${formatDate(
            event?.expires_at
          )}`}</p>
        </div>
        <hr />
        <section className="text-lg tracking-[-0.02em]">
          <p>{event?.description}</p>
        </section>
        <button
          onClick={handleJoinButton}
          disabled={postEventJoinLoading || deleteEventJoinLoading}
          className={cn(
            "w-full h-[50px] rounded-[5px] my-4",
            eventJoin?.length
              ? "bg-black text-white border border-white"
              : "bg-white text-black"
          )}
        >
          {eventJoin?.length ? "이벤트 참여 취소" : "이벤트 참여하기"}
        </button>
      </div>
      <div className="bg-black text-white px-20 pb-20 flex flex-col gap-4">
        <h1 className="text-2xl mb-4 flex gap-2 items-center">
          댓글<span className="text-gray-500 text-lg">총 3개</span>
        </h1>
        <CommentContainer isEvent />
      </div>
    </div>
  );
};

export default Page;
