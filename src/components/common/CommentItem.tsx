import { formatDate } from "@/utils/date/dateUtils";
import React from "react";

interface CommentItemProps {
  name: string;
  created_at: string;
  comment: string;
  comment_like: number;
}

const CommentItem = ({
  name,
  created_at,
  comment,
  comment_like,
}: CommentItemProps) => {
  return (
    <div className="border-b border-gray-700 pb-4 px-2 sm:px-4 flex flex-col gap-1">
      {/* 유저 정보 */}
      <div className="flex items-center gap-2 text-sm text-gray-300">
        <span className="font-semibold text-white">{name}</span>
        <span className="text-gray-500 text-xs">{formatDate(created_at)}</span>
      </div>

      {/* 댓글 본문 */}
      <p className="text-gray-200 text-sm leading-relaxed">{comment}</p>

      {/* 하단 정보 */}
      <div className="flex items-center justify-between">
        <p className="text-xs text-gray-500 flex items-center gap-2">
          좋아요{" "}
          <span className="text-gray-500 font-medium">{comment_like}</span>
        </p>
        <button className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-800 hover:bg-gray-700 text-xs text-white transition-colors">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          좋아요
        </button>
      </div>
    </div>
  );
};

export default CommentItem;
