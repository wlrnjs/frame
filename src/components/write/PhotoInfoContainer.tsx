"use client";

import React, { useState } from "react";
import InputField from "./InputField";
import AutoCompleteInput from "./AutoCompleteInput";
import { cn } from "@/utils";

interface FormSectionProps {
  title: string;
  children: React.ReactNode;
  showDivider?: boolean;
}

const FormSection = ({
  title,
  children,
  showDivider = false,
}: FormSectionProps) => (
  <div
    className={cn(
      "flex flex-col gap-4",
      showDivider ? "border-t border-gray-870 pt-6" : ""
    )}
  >
    <h2 className="text-base font-semibold text-white">{title}</h2>
    {children}
  </div>
);

const PhotoInfoContainer = () => {
  const TAGS = ["풍경", "인물", "감성", "여행", "도시", "자연"];

  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);

    if (value.trim() === "") {
      setSuggestions([]);
    } else {
      setSuggestions(TAGS.filter((tag) => tag.includes(value)));
    }
  };

  const handleSelect = (tag: string) => {
    setInput(tag);
    setSuggestions([]);
  };

  return (
    <div className="max-w-full min-w-[380px] min-h-[720px] bg-black text-white p-8 rounded-[5px] shadow-lg flex flex-col gap-8 sticky top-[120px]">
      <FormSection title="기본 정보">
        <InputField label="제목" placeholder="제목을 입력해주세요." />
        <InputField
          label="내용"
          placeholder="간단한 설명을 추가해주세요. (최대 100자)"
          maxLength={100}
          isTextarea
        />
        <AutoCompleteInput
          label="카테고리"
          value={input}
          onChange={handleChange}
          suggestions={suggestions}
          onSelect={handleSelect}
        />
      </FormSection>

      <FormSection title="사진 정보" showDivider>
        <InputField label="장소" placeholder="예: 서울, 한국" />
        <InputField label="카메라 정보" placeholder="예: Canon EOS R6, 50mm" />
      </FormSection>

      <FormSection title="업로드 정보">
        <InputField label="업로드 날짜" type="date" />
      </FormSection>
      <button
        type="submit"
        className="w-full h-[40px] bg-gray-920 border border-gray-870 rounded-[5px] hover:bg-black transition-all duration-300 ease-out"
      >
        올리기
      </button>
    </div>
  );
};

export default PhotoInfoContainer;
