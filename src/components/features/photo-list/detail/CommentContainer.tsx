"use client";

import CommentItem from "@/components/common/CommentItem";
import EmptyComment from "@/components/common/EmptyComment";
import useGetComments from "@/hooks/api/comments/useGetComments";
import usePostComment from "@/hooks/api/comments/usePostComment";
import { CommentType } from "@/types/CommentType";
import { cn } from "@/utils";
import React, { useState } from "react";
import useUserId from "@/hooks/useUserId";

interface CommentContainerProps {
  isEvent?: boolean;
  id?: string; // 이벤트 댓글 수정 후 삭제
}

const CommentContainer = ({ isEvent = false, id }: CommentContainerProps) => {
  const userId = useUserId();
  const [comment, setComment] = useState<string>("");

  const { data: comments } = useGetComments(id!);
  const { mutate: postComment, isPending } = usePostComment();

  const onSubmit = () => {
    if (!comment || !userId) return;
    postComment({ id: id!, userId: userId!, content: comment });
    setComment("");
  };

  return (
    <div
      className={cn(
        "w-full h-[650px] bg-black rounded-lg shadow-md p-6 flex flex-col justify-between",
        isEvent ? "p-0" : "p-6"
      )}
    >
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
              comment_like={comment.comment_like}
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
        <button className="px-3 py-1 text-sm text-gray-500 hover:text-white">
          이전
        </button>
        <button className="w-8 h-8 rounded bg-white text-black text-sm">
          1
        </button>
        <button className="w-8 h-8 rounded text-gray-300 hover:bg-gray-700 text-sm">
          2
        </button>
        <button className="w-8 h-8 rounded text-gray-300 hover:bg-gray-700 text-sm">
          3
        </button>
        <span className="text-gray-500">...</span>
        <button className="w-8 h-8 rounded text-gray-300 hover:bg-gray-700 text-sm">
          10
        </button>
        <button className="px-3 py-1 text-sm text-gray-500 hover:text-white">
          다음
        </button>
      </div>
    </div>
  );
};

export default CommentContainer;
