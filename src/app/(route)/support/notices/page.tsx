"use client";

import useGetNoticeList from "@/hooks/api/support/useGetNoticeList";
import { cn } from "@/utils";
import React, { useState } from "react";
import { SupportItemType } from "@/types/Support";
import SupportItem from "@/components/features/support/SupportItem";
import Pagination from "@/components/common/Pagination";
import ArrowLeft from "@/icon/ArrowLeft";
import Link from "next/link";

const NoticeListPage = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const limit = 5;

  const { data: noticeList } = useGetNoticeList({ page, limit });

  const totalPages = Math.ceil((noticeList?.count || 0) / limit);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const toggleOpen = (id: number) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="w-full min-h-screen bg-white text-black layout-container custom-margin py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 border-b pb-4">
          <div className="flex items-center gap-1">
            <Link href="/support" aria-label="고객센터 이동">
              <ArrowLeft />
            </Link>
            <h1 className={cn("text-3xl font-bold", "mobile:text-2xl")}>
              공지사항
            </h1>
          </div>
        </div>

        <ul className="space-y-4">
          {noticeList?.data?.map((data: SupportItemType) => (
            <SupportItem
              key={data.id}
              data={data}
              toggleOpen={toggleOpen}
              openId={openId}
            />
          ))}
        </ul>

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default NoticeListPage;
