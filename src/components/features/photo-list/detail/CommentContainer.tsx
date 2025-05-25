import CommentItem from "@/components/common/CommentItem";
import { cn } from "@/utils";
import React from "react";

interface CommentContainerProps {
  isEvent?: boolean;
}

const CommentContainer = ({ isEvent = false }: CommentContainerProps) => {
  return (
    <div
      className={cn(
        "w-full h-[650px] bg-black rounded-lg shadow-md p-6 flex flex-col justify-between",
        isEvent ? "p-0" : "p-6"
      )}
    >
      {/* 댓글 리스트 */}
      <div className="overflow-y-auto flex-1 space-y-4 pr-2">
        <CommentItem
          name="이영희"
          created_at="방금 전"
          comment="좋아요 눌렀어요"
          comment_like={42}
        />
      </div>

      {/* 댓글 입력 필드 */}
      <div className="mt-4 flex items-center space-x-2">
        <input
          type="text"
          className="w-full px-4 py-2 bg-black text-white rounded-lg placeholder-white border border-white"
          placeholder="댓글을 작성해주세요..."
        />
        <button className="px-4 py-2 bg-black text-white rounded-lg text-nowrap border border-white">
          입력
        </button>
      </div>

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
