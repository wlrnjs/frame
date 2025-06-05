"use client";

import React, { useState } from "react";
import useGetFeedbackList from "@/hooks/api/support/useGetFeedbackList";
import FeedbackModal from "@/components/ui/modal/FeedbackModal";
import Pagination from "@/components/common/Pagination";
import { cn } from "@/utils";
import { SupportItemType } from "@/types/Support";
import SupportItem from "@/components/features/support/SupportItem";
import ArrowLeft from "@/icon/ArrowLeft";
import Link from "next/link";

const FeedbackListPage = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 5;

  const { data: feedbackList } = useGetFeedbackList({ page, limit });

  const totalPages = Math.ceil((feedbackList?.count || 0) / limit);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const toggleOpen = (id: number) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="w-full min-h-screen bg-white text-black layout-container custom-margin py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8 border-b pb-4">
          <div className="flex items-center gap-1">
            <Link href="/support" aria-label="고객센터 이동">
              <ArrowLeft />
            </Link>
            <h1 className={cn("text-3xl font-bold", "mobile:text-2xl")}>
              개선 요청
            </h1>
          </div>
          <button
            className="text-black px-4 py-2 rounded border-black border hover:bg-black hover:text-white hover:border-transparent transition-colors"
            onClick={() => setIsModalOpen(true)}
          >
            새로운 요청하기
          </button>
        </div>

        <ul className="space-y-4">
          {feedbackList?.data?.map((data: SupportItemType) => (
            <SupportItem
              key={data.id}
              data={data}
              openId={openId}
              toggleOpen={toggleOpen}
            />
          )) || <li>데이터가 없습니다.</li>}
        </ul>

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>

      {isModalOpen && (
        <FeedbackModal
          onOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default FeedbackListPage;
