"use client";

import React, { useState } from "react";
import useGetFeedbackList from "@/hooks/api/support/useGetFeedbackList";
import FeedbackModal from "@/components/ui/modal/FeedbackModal";
import { cn } from "@/utils";
import { SupportItemType } from "@/types/Support";
import SupportItem from "@/components/features/support/SupportItem";

const FeedbackListPage = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 5;

  const { data: feedbackList } = useGetFeedbackList({ page, limit });

  const totalPages = Math.ceil((feedbackList?.count || 0) / limit);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
  };

  const groupSize = 5;
  const visiblePageGroup = Math.floor((page - 1) / groupSize);
  const startPage = visiblePageGroup * groupSize + 1;
  const endPage = Math.min(startPage + groupSize - 1, totalPages);

  const toggleOpen = (id: number) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="w-full min-h-screen bg-white text-black layout-container custom-margin py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8 border-b pb-4">
          <h1 className={cn("text-3xl font-bold", "mobile:text-2xl")}>
            개선 요청
          </h1>
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

        {/* 총 페이지가 1보다 클 때만 페이지네이션 표시 */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className="px-4 py-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              이전
            </button>
            {Array.from({ length: endPage - startPage + 1 }, (_, i) => {
              const pageNumber = startPage + i;
              return (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={cn(
                    "px-4 py-2 border rounded hover:bg-gray-100",
                    page === pageNumber && "bg-black text-white hover:bg-black"
                  )}
                >
                  {pageNumber}
                </button>
              );
            })}
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
              className="px-4 py-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              다음
            </button>
          </div>
        )}
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
