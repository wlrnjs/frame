"use client";

import useGetNoticeList from "@/hooks/api/support/useGetNoticeList";
import { cn } from "@/utils";
import React, { useState } from "react";
import { SupportItemType } from "@/types/Support";
import SupportItem from "@/components/features/support/SupportItem";

const NoticeListPage = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const { data: noticeList } = useGetNoticeList();

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
          {noticeList?.map((data: SupportItemType) => (
            <SupportItem
              key={data.id}
              data={data}
              toggleOpen={toggleOpen}
              openId={openId}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NoticeListPage;
