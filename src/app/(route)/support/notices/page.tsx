"use client";

import useGetNoticeList from "@/hooks/api/support/useGetNoticeList";
import { cn } from "@/utils";
import { formatDate } from "@/utils/date/dateUtils";
import React, { useState } from "react";

type Notice = {
  id: number;
  title: string;
  content: string;
  created_at: string;
};

const NoticeListPage = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const { data: noticeList } = useGetNoticeList();
  console.log(noticeList);

  const toggleOpen = (id: number) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="w-full min-h-screen bg-white text-black layout-container custom-margin py-12">
      <div className="max-w-4xl mx-auto">
        <h1
          className={cn(
            "text-3xl font-bold mb-8 border-b pb-4",
            "mobile:text-2xl"
          )}
        >
          공지사항
        </h1>

        <ul className="space-y-4">
          {noticeList?.map((notice: Notice) => (
            <li key={notice.id}>
              <button
                onClick={() => toggleOpen(notice.id)}
                className="w-full text-left border rounded-xl p-4 hover:bg-gray-50 transition"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{notice.title}</span>
                  <span className="text-sm text-gray-500">
                    {formatDate(notice.created_at)}
                  </span>
                </div>

                {/* 본문 드롭다운 */}
                {openId === notice.id && (
                  <div className="mt-4 text-sm whitespace-pre-wrap text-gray-700">
                    {notice.content}
                  </div>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NoticeListPage;
