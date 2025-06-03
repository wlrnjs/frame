import { useToast } from "@/hooks/ui/useToast";
import React, { useState, useCallback } from "react";

interface AutoCompleteInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  suggestions: string[];
  onSelect: (tag: string) => void;
  selectedTags: string[];
  onRemove: (tag: string) => void;
}

const AutoCompleteInput = ({
  label,
  value,
  onChange,
  suggestions,
  onSelect,
  selectedTags,
  onRemove,
}: AutoCompleteInputProps) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const toast = useToast();

  // 키보드 이벤트 핸들러
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (suggestions.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % suggestions.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex(
          (prev) => (prev - 1 + suggestions.length) % suggestions.length
        );
      } else if (e.key === "Enter" && activeIndex >= 0) {
        e.preventDefault();
        const selected = suggestions[activeIndex];
        if (!selectedTags.includes(selected)) {
          onSelect(selected);
        } else {
          toast.error("이미 선택된 태그입니다.");
        }
        setActiveIndex(-1);
      }
    },
    [activeIndex, suggestions, onSelect, selectedTags, toast]
  );

  return (
    <label className="w-full flex flex-col gap-2 relative">
      <span className="text-base font-medium text-white">
        {label}
        <span className="text-red-500">*</span>
      </span>
      <div className="flex gap-2 flex-wrap items-center">
        {selectedTags.map((tag) => (
          <p
            key={tag}
            className="h-[22px] px-2 py-1 rounded-[5px] bg-gray-870 text-xs text-white cursor-pointer hover:bg-gray-850 transition-colors"
            onClick={() => onRemove(tag)}
            title="클릭하여 삭제"
          >
            {tag}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder="#태그 입력"
        className="w-full h-12 rounded-md px-4 bg-gray-920 text-sm text-white border border-gray-870 focus:outline-none transition-colors placeholder:text-sm placeholder:text-white/50"
      />
      {suggestions.length > 0 && (
        <ul className="absolute top-[6rem] left-0 w-full h-fit overflow-y-scroll bg-gray-920 rounded-md shadow-lg mt-2 z-10 border border-gray-870">
          {suggestions.map((tag, index) => (
            <li
              key={tag}
              className={`px-4 py-2 text-sm text-white transition-colors cursor-pointer ${
                index === activeIndex ? "bg-gray-850" : "hover:bg-gray-850"
              }`}
              onClick={() => {
                if (!selectedTags.includes(tag)) {
                  onSelect(tag);
                } else {
                  toast.error("이미 선택된 태그입니다.");
                }
              }}
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </label>
  );
};

export default React.memo(AutoCompleteInput);
