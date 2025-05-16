"use client";

import CommentContainer from "@/components/detail/CommentContainer";
import Image from "next/image";
import React from "react";
import useGetEventDetail from "@/service/hooks/event/useGetEventDetail";
import { useSearchParams } from "next/navigation";
import { formatTime } from "@/utils/formatTime";
import { formatDate } from "@/utils/formatDate";

const Page = () => {
  const params = useSearchParams();
  const id = params.get("id");

  const { data: event } = useGetEventDetail(id!);

  return (
    <div className="w-full min-h-screen custom-margin layout-container">
      {event && (
        <div className="relative w-full h-[500px]">
          <Image src={event?.image_url} alt="Event Detail" fill priority />
        </div>
      )}
      <div className="flex flex-col gap-4 bg-black text-white p-20">
        <h2 className="text-3xl">{event?.title}</h2>
        <div className="flex gap-2">
          <p>진행중</p>
          <p>{formatTime(event?.created_at)}</p>
          <p>조회수 4</p>
          <p>댓글 0</p>
          <p>참여인원 0</p>
          <p>관리자</p>
          <p>{`이벤트 기한: ${formatDate(event?.created_at)} ~ ${formatDate(
            event?.expires_at
          )}`}</p>
        </div>
        <hr />
        <section className="text-lg tracking-[-0.02em]">
          <p>{event?.description}</p>
        </section>
        <button className="w-full h-[50px] bg-white text-black rounded-[5px] my-4">
          이벤트 참여하기
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
