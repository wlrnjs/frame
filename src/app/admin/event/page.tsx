"use client";

import React, { useState } from "react";
import EventItem from "./_components/EventItem";
import EventAddModal from "./_components/EventAddModal";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold">이벤트 관리 페이지</h1>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">이벤트 목록</h2>
        <div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-yellow-300 px-4 py-2 rounded"
          >
            이벤트 생성
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <p className="w-[200px]">이벤트 이름</p>
          <p className="w-[200px]">이벤트 시작일</p>
          <p className="w-[200px]">이벤트 종료일</p>
          <p className="w-[200px]">이벤트 상태</p>
          <p className="w-[200px]">이벤트 수정</p>
        </div>
        <EventItem />
      </div>
      {isModalOpen && <EventAddModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Page;
