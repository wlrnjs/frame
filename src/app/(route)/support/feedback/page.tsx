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

  const totalPages = 10;
  const groupSize = 5;
  const visiblePageGroup = Math.floor((page - 1) / groupSize);
  const startPage = visiblePageGroup * groupSize + 1;
  const endPage = Math.min(startPage + groupSize - 1, totalPages);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
  };

  const { data: feedbackList = [] } = useGetFeedbackList({ page, limit: 5 });

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
          {feedbackList.map((data: SupportItemType) => (
            <SupportItem
              key={data.id}
              data={data}
              toggleOpen={toggleOpen}
              openId={openId}
            />
          ))}
        </ul>
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className="px-4 py-2 border rounded disabled:opacity-50"
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
                  "px-4 py-2 border rounded",
                  page === pageNumber && "bg-black text-white"
                )}
              >
                {pageNumber}
              </button>
            );
          })}
          <button
            onClick={() => handlePageChange(page + 1)}
            className="px-4 py-2 border rounded"
          >
            다음
          </button>
        </div>
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
