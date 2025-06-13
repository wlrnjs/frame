"use client";

import { cn } from "@/utils";
import React, { useState } from "react";
import Image from "next/image";
import { HeartOutline } from "@/icon/Heart";

const ACTIVITY_TYPE = [
  {
    name: "모두",
    value: "all",
  },
  {
    name: "게시글",
    value: "post",
  },
  {
    name: "댓글",
    value: "comment",
  },
  {
    name: "좋아요",
    value: "like",
  },
  {
    name: "이벤트 참여",
    value: "event_participation",
  },
  {
    name: "이벤트 댓글",
    value: "event_comment",
  },
];

const Page = () => {
  const [activityType, setActivityType] = useState("all");

  return (
    <div className="w-full flex flex-col gap-5">
      <h1 className="">내 활동내역</h1>
      <div className="w-full h-fit flex flex-col gap-3">
        {/* 게시글 버튼 */}
        <div className="flex items-start">
          {ACTIVITY_TYPE.map((activity) => (
            <button
              key={activity.value}
              className={cn(
                "px-5 py-2 border-b-2 duration-300 ease-out hover:border-purple-700",
                activity.value === activityType
                  ? "border-black"
                  : "border-gray-300"
              )}
              onClick={() => setActivityType(activity.value)}
            >
              {activity.name}
            </button>
          ))}
        </div>
        <div className="flex gap-3 items-start justify-start flex-nowrap">
          {/* 게시글 아이템 */}
          <div className="flex">
            <Image
              src="/BlackPhoto.JPG"
              alt="black photo"
              width={120}
              height={120}
              className="rounded-[5px]"
            />
          </div>

          {/* 댓글 아이템 */}
          <div className="">
            <Image
              src="/IMG_7115.JPG"
              alt="black photo"
              width={200}
              height={200}
              className="rounded-[5px]"
            />
            <h1>제목이 들어갈 부분</h1>
            <p>내가 쓴 댓글이 들어갈 부분</p>
          </div>

          {/* 좋아요 아이템 */}
          <div className="relative w-[200px] h-[200px]">
            <Image
              src="/IMG_7115.JPG"
              alt="black photo"
              width={200}
              height={200}
              className="rounded-[5px]"
            />
            <div className="absolute top-2 right-2">
              <HeartOutline fill="white" />
            </div>
          </div>

          {/* 이벤트 참여 아이템 */}
          <div className="relative w-[200px] h-[200px]">
            <Image
              src="/IMG_7115.JPG"
              alt="black photo"
              width={200}
              height={200}
              className="rounded-[5px]"
            />
            <div className="absolute top-2 right-2">
              <HeartOutline fill="white" />
            </div>
            <h1>이벤트 제목이 들어갈 부분</h1>
          </div>

          {/* 이벤트 댓글 아이템 */}
          <div className="">
            <Image
              src="/IMG_7115.JPG"
              alt="black photo"
              width={200}
              height={200}
              className="rounded-[5px]"
            />
            <h1>이벤트 제목이 들어갈 부분</h1>
            <p>내가 쓴 댓글이 들어갈 부분</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
