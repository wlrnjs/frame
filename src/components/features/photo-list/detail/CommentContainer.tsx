"use client";

import CommentItem from "@/components/common/CommentItem";
import EmptyComment from "@/components/common/EmptyComment";
import useGetComment from "@/hooks/api/comments/useGetComment";
import usePostComment from "@/hooks/api/comments/usePostComment";
import { CommentType } from "@/types/CommentType";
import { cn } from "@/utils";
import React, { useState } from "react";
import useUserId from "@/hooks/useUserId";

interface CommentContainerProps {
  id: string;
  type: "post" | "event";
}

const CommentContainer = ({ id, type }: CommentContainerProps) => {
  const userId = useUserId();
  const [comment, setComment] = useState<string>("");

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const { data: commentsData } = useGetComment(id, type, currentPage, pageSize);
  const comments = commentsData?.comments || [];
  const { mutate: postComment, isPending } = usePostComment();

  const onSubmit = () => {
    if (!comment || !userId) return;
    postComment({ id, userId, content: comment, type });
    setComment("");
  };

  return (
    <div
      className={cn(
        "w-full h-fit bg-black shadow-md p-6 flex flex-col justify-between",
        type === "event" ? "rounded-0" : "rounded-lg"
      )}
    >
      <div className="flex gap-2 items-center p-6 justify-start">
        <h2 className={cn("text-2xl text-white", "mobile:text-xl")}>댓글</h2>
        <span className="text-gray-500">
          총 {commentsData?.totalCount || 0}개
        </span>
      </div>
      {/* 댓글 리스트 */}
      <div className="overflow-y-auto flex-1 space-y-4 pr-2">
        {comments?.length === 0 ? (
          <EmptyComment />
        ) : (
          comments?.map((comment: CommentType) => (
            <CommentItem
              key={comment.id}
              name={comment.users.nickname}
              created_at={comment.created_at}
              comment={comment.content}
              isMine={comment.user_id === userId}
              comment_id={String(comment.id)}
              user_id={comment.user_id}
              type={type}
              postId={id}
              onDeleteSuccess={() => {
                setCurrentPage(1);
              }}
            />
          ))
        )}
      </div>

      {/* 댓글 입력 필드 */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="mt-4 flex items-center space-x-2"
      >
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full px-4 py-2 bg-black text-white rounded-lg placeholder-white border border-white focus:outline-none focus:border-white"
          placeholder="댓글을 작성해주세요..."
        />
        <button
          type="submit"
          disabled={isPending}
          className={cn(
            "px-4 py-2 bg-black text-white rounded-lg text-nowrap border border-white",
            isPending && "cursor-not-allowed"
          )}
        >
          입력
        </button>
      </form>

      {/* 페이지네이션 */}
      <div className="mt-4 flex-center gap-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 text-sm text-white hover:text-gray-500 disabled:opacity-30 transition-colors"
        >
          이전
        </button>

        {/* 페이지 번호들 */}
        {(() => {
          const totalPages = commentsData?.totalPages || 1;
          const pageNumbers = [];

          const startPage = Math.max(1, currentPage - 1);
          const endPage = Math.min(totalPages, currentPage + 1);

          for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
          }

          return (
            <>
              {startPage > 1 && (
                <>
                  <button
                    onClick={() => setCurrentPage(1)}
                    className={`w-8 h-8 rounded text-sm ${
                      currentPage === 1
                        ? "bg-white text-black"
                        : "text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    1
                  </button>
                  {startPage > 2 && <span className="text-gray-500">...</span>}
                </>
              )}

              {pageNumbers.map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-8 h-8 rounded text-sm ${
                    pageNum === currentPage
                      ? "bg-white text-black"
                      : "text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              {endPage < totalPages && (
                <>
                  {endPage < totalPages - 1 && (
                    <span className="text-gray-500">...</span>
                  )}
                  <button
                    onClick={() => setCurrentPage(totalPages)}
                    className={`w-8 h-8 rounded text-sm ${
                      currentPage === totalPages
                        ? "bg-white text-black"
                        : "text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    {totalPages}
                  </button>
                </>
              )}
            </>
          );
        })()}

        <button
          onClick={() =>
            setCurrentPage((prev) =>
              Math.min(prev + 1, commentsData?.totalPages || 1)
            )
          }
          disabled={
            !commentsData?.totalPages || currentPage >= commentsData.totalPages
          }
          className="px-3 py-1 text-sm text-white hover:text-gray-500 disabled:opacity-30 transition-colors"
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default CommentContainer;
