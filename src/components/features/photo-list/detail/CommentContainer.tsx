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
  isEvent?: boolean;
  id: string;
  type: "post" | "event";
}

const CommentContainer = ({
  isEvent = false,
  id,
  type,
}: CommentContainerProps) => {
  const userId = useUserId();
  const [comment, setComment] = useState<string>("");

  const { data: comments } = useGetComment(id, type);
  const { mutate: postComment, isPending } = usePostComment();

  const onSubmit = () => {
    if (!comment || !userId) return;
    postComment({ id: id!, userId: userId!, content: comment, type });
    setComment("");
  };

  return (
    <div
      className={cn(
        "w-full h-[650px] bg-black shadow-md p-6 flex flex-col justify-between",
        isEvent ? "rounded-0" : "rounded-lg"
      )}
    >
      <div className="flex gap-2 items-center p-6 justify-start">
        <h2 className={cn("text-2xl text-white", "mobile:text-xl")}>댓글</h2>
        <span className="text-gray-500">총 {comments?.length}개</span>
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
          onClick={() => console.log("클릭됨")}
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
