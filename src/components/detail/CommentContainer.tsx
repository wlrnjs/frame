import React from "react";

const CommentContainer = () => {
  return (
    <div className="w-full h-[650px] bg-black rounded-lg shadow-md p-6 flex flex-col justify-between">
      {/* 댓글 리스트 */}
      <div className="overflow-y-auto flex-1 space-y-4 pr-2">
        {/* 댓글 아이템들 */}
        <div className="border-b pb-4">
          <div className="text-sm text-white">홍길동 · 2시간 전</div>
          <div className="mt-1 text-gray-300">이 사진 정말 멋지네요!</div>
        </div>
        <div className="border-b pb-4">
          <div className="text-sm text-white">김철수 · 1시간 전</div>
          <div className="mt-1 text-gray-300">구도가 인상적이에요.</div>
        </div>
        <div className="border-b pb-4">
          <div className="text-sm text-white">이영희 · 방금</div>
          <div className="mt-1 text-gray-300">좋아요 눌렀어요 :)</div>
        </div>
        {/* ...더 많은 댓글 */}
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
