import { cn } from "@/utils";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">내 문의 내역</h1>
        <button className="px-4 py-2 bg-black text-white rounded-[10px]">
          문의사항 작성하기
        </button>
      </div>
      <div className="flex flex-col gap-3 items-start justify-start flex-nowrap">
        {/* 문의 아이템 */}
        <Link
          href="/my-page/inquiries/1"
          className={cn(
            "w-full flex flex-col border px-4 py-2 rounded-[10px] text-white bg-slate-500",
            "hover:bg-slate-600 duration-300 ease-out"
          )}
        >
          <div className="flex gap-3 items-center justify-between">
            <div className="flex gap-2 items-center justify-center">
              <p>문의 제목이 들어갈 부분</p>
              <span className="text-[#FF0000] font-bold">[1]</span>
              <span className="text-[#587cff] font-bold">N</span>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <p className="bg-black px-2 py-1 rounded">답변대기</p>
            </div>
          </div>
          <p>2025년06월13일</p>
        </Link>
      </div>
    </div>
  );
};

export default page;
