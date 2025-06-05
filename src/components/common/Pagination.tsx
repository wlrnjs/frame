import React from "react";
import { cn } from "@/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  groupSize?: number;
  className?: string;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  groupSize = 5,
  className = "",
}: PaginationProps) => {
  // 총 페이지가 1 이하면 페이지네이션을 렌더링하지 않음
  if (totalPages <= 1) return null;

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    onPageChange(newPage);
  };

  const visiblePageGroup = Math.floor((currentPage - 1) / groupSize);
  const startPage = visiblePageGroup * groupSize + 1;
  const endPage = Math.min(startPage + groupSize - 1, totalPages);

  return (
    <div className={cn("flex justify-center mt-8 space-x-4", className)}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 disabled:hover:bg-transparent"
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
              currentPage === pageNumber && "bg-black text-white hover:bg-black"
            )}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 disabled:hover:bg-transparent"
      >
        다음
      </button>
    </div>
  );
};

export default Pagination;
