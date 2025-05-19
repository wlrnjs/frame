import React from "react";

const SearchContainer = () => {
  return (
    <div className="min-w-[300px] h-[500px] bg-black text-white p-4 rounded-md sticky top-[110px] space-y-6">
      {/* 검색 인풋 */}
      <div>
        <label className="text-sm font-semibold">검색</label>
        <input
          type="text"
          placeholder="사진 제목 또는 태그"
          className="mt-2 w-full px-3 py-2 rounded bg-zinc-900 text-sm text-white placeholder-gray-400 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-white"
        />
      </div>

      {/* 기준 선택 */}
      <div>
        <label className="text-sm font-semibold">기준 선택</label>
        <div className="mt-2 space-y-1 text-sm">
          <label className="flex items-center gap-2">
            <input type="radio" name="range" className="accent-white" />
            일간
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="range" className="accent-white" />
            월간
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="range" className="accent-white" />
            연간
          </label>
        </div>
      </div>

      {/* 카테고리 */}
      <div>
        <label className="text-sm font-semibold">카테고리</label>
        <div className="mt-2 space-y-1 text-sm">
          {["자연", "인물", "예술", "동물", "흑백"].map((label) => (
            <label key={label} className="flex items-center gap-2">
              <input type="checkbox" className="accent-white" />
              {label}
            </label>
          ))}
        </div>
      </div>

      {/* 페이지네이션 */}
      <div className="pt-4 border-t border-zinc-700">
        <div className="flex justify-between text-sm text-gray-400">
          <button className="hover:text-white">◀ 이전</button>
          <button className="hover:text-white">다음 ▶</button>
        </div>
      </div>
    </div>
  );
};

export default SearchContainer;
