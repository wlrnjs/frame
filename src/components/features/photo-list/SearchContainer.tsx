import React from "react";
import { cn } from "@/utils";

const SearchContainer = () => {
  return (
    <div
      className={cn(
        "min-w-[300px] h-[500px] bg-black text-white p-4 rounded-md sticky top-[110px] space-y-6",
        "mobile:max-w-full mobile:min-w-0 mobile:h-fit mobile:p-6 mobile:sticky mobile:top-0"
      )}
    >
      {/* 검색 인풋 */}
      <div className="mobile:flex mobile:gap-5 mobile:items-center">
        <label className="text-sm font-semibold text-nowrap">검색</label>
        <input
          type="text"
          placeholder="사진 제목 또는 #태그 검색"
          className="mt-2 w-full px-3 py-2 rounded bg-zinc-900 text-sm text-white placeholder-gray-400 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-white"
        />
      </div>

      {/* 기준 선택 */}
      <div>
        <label className="text-sm font-semibold">기준 선택</label>
        <div
          className={cn(
            "mt-2 space-y-1 text-sm",
            "mobile:space-y-0 mobile:grid mobile:grid-cols-3 mobile:gap-x-2 mobile:gap-y-1"
          )}
        >
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
        <div
          className={cn(
            "mt-2 text-sm space-y-1",
            "mobile:grid mobile:grid-cols-3 mobile:gap-x-2 mobile:gap-y-1"
          )}
        >
          {["풍경", "감성", "여행", "도시", "자연", "인물", "예술", "흑백"].map(
            (label) => (
              <label key={label} className="flex items-center gap-2">
                <input type="checkbox" className="accent-white" />
                {label}
              </label>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchContainer;
