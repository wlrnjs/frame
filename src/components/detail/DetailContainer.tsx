import React from "react";

const DetailContainer = () => {
  return (
    <div className="w-[350px] h-[690px] bg-black text-white p-10 rounded-[5px] shadow-lg flex flex-col gap-5 sticky top-[110px]">
      {/* 이미지 및 액션 */}
      <div className="flex flex-col gap-3 justify-between items-start">
        <div className="flex space-x-4">
          <button aria-label="좋아요">
            {/* 좋아요 SVG */}
            ❤️
          </button>
          <button aria-label="다운로드">
            {/* 다운로드 SVG */}
            ⬇️
          </button>
          <button aria-label="공유">
            {/* 공유 SVG */}
            📤
          </button>
          <button aria-label="수정">✏️</button>
          <button aria-label="삭제">🗑️</button>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">타이틀입니다.</h1>
          <p className="text-sm text-gray-400">간단한 설명입니다.</p>
        </div>
      </div>

      {/* 작성자 정보 */}
      <div className="flex flex-col gap-2 items-start justify-between border-t border-gray-700 pt-4 text-sm">
        <p>
          작성자: <span className="text-gray-300">닉네임 입니다.</span>
        </p>
        <p>
          업로드: <span className="text-gray-300">2025.05.03</span>
        </p>
        <p>
          장소: <span className="text-gray-300">서울, 한국</span>
        </p>
      </div>

      {/* 추가 정보 */}
      <div className="flex flex-col gap-4 text-sm text-gray-300">
        <p>
          <span className="font-semibold text-white">카테고리:</span> 풍경
        </p>
        <p>
          <span className="font-semibold text-white">조회수:</span> 123회
        </p>
        <p>
          <span className="font-semibold text-white">카메라 정보:</span> Canon
          EOS R6, 50mm
        </p>
      </div>
    </div>
  );
};

export default DetailContainer;
