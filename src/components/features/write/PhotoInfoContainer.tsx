"use client";

import React, { useState } from "react";
import InputField from "./InputField";
import AutoCompleteInput from "./AutoCompleteInput";
import { postPostsProps } from "@/service/write/postWrite";
import { supabase } from "@/service/lib/supabaseClient";
import usePostWrite from "@/hooks/api/write/usePostWrite";
import useUserId from "@/hooks/useUserId";
import { useToast } from "@/hooks/ui/useToast";
import FormSection from "./FormSection";
import { PHOTO_CATEGORIES } from "@/constants/CATEGORY";
import { cn } from "@/utils";

// 임시, 리펙토링 필요

interface PhotoInfoContainerProps {
  images?: File[];
}

const PhotoInfoContainer = ({ images }: PhotoInfoContainerProps = {}) => {
  const postWriteMutation = usePostWrite();
  const userId = useUserId();
  const toast = useToast();

  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [formData, setFormData] = useState<postPostsProps>({
    title: "",
    description: "",
    category: "",
    location: "",
    camera_info: "",
    user_id: userId || "",
    img_urls: [],
  });
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // 자동완성 입력
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setInput(value);

    if (value.trim() === "") {
      setSuggestions([]);
    } else {
      setSuggestions(PHOTO_CATEGORIES.filter((tag) => tag.includes(value)));
    }
  };

  // 태그 선택
  const handleSelect = (tag: string) => {
    setSelectedTags((prev) => [...prev, tag]);
    setInput("");
    setSuggestions([]);
  };

  // 폼 입력
  const handleInputChange =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  // 폼 제출
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userId) {
      toast.error("로그인 후 사용 가능합니다.");
      return;
    }

    // 필수 입력 항목 검사
    if (
      !formData.title ||
      formData.title.trim() === "" ||
      !formData.description ||
      formData.description.trim() === "" ||
      !selectedTags.length
    ) {
      toast.error("제목, 설명, 카테고리는 필수 입력 항목입니다.");
      return;
    }

    // 이미지가 업로드되지 않은 경우 경고 메시지 표시
    if (!images || images.length === 0) {
      toast.error("이미지를 업로드해주세요.");
      return;
    }

    postWriteMutation.mutate(
      {
        ...formData,
        category: selectedTags[0] || "",
        user_id: userId,
      },
      {
        onSuccess: async () => {
          if (images && images.length > 0) {
            const imgUrls: string[] = [];

            for (const image of images) {
              const { data, error } = await supabase.storage
                .from("users-upload-photos")
                .upload(`images/${Date.now()}_${image.name}`, image);

              if (error) {
                toast.error("이미지 업로드에 실패했습니다.");
                continue;
              }

              const { data: publicUrlData } = supabase.storage
                .from("users-upload-photos")
                .getPublicUrl(data.path);

              imgUrls.push(publicUrlData.publicUrl);
            }

            postWriteMutation.mutate({
              ...formData,
              category: selectedTags[0] || "",
              user_id: userId,
              img_urls: imgUrls,
            });
          }
        },
      }
    );
  };

  // 태그 삭제
  const handleRemove = (tag: string) => {
    setSelectedTags((prev) => prev.filter((t) => t !== tag));
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8">
      <div
        className={cn(
          "w-full h-fit bg-black text-white p-8 rounded-[5px] shadow-lg flex flex-col gap-8 sticky top-[120px]",
          "mobile:gap-4"
        )}
      >
        {/* 업로드된 이미지 수 표시 */}
        <div className="text-sm text-gray-400">
          {images && images.length > 0
            ? `${images.length}개의 이미지가 업로드됨`
            : "이미지를 업로드해주세요"}
        </div>
        <FormSection title="기본 정보">
          <InputField
            label="제목"
            placeholder="제목을 입력해주세요. (최대 50자)"
            value={formData.title}
            onChange={handleInputChange("title")}
            required
          />
          <InputField
            label="내용"
            placeholder="간단한 설명을 추가해주세요. (최대 400자)"
            isTextarea
            value={formData.description}
            onChange={handleInputChange("description")}
            required
          />
          <AutoCompleteInput
            label="카테고리"
            value={input}
            onChange={handleChange}
            suggestions={suggestions}
            onSelect={handleSelect}
            selectedTags={selectedTags}
            onRemove={handleRemove}
          />
        </FormSection>
        <FormSection title="사진 정보" showDivider>
          <InputField
            label="장소"
            placeholder="예: 서울, 한국"
            value={formData.location}
            onChange={handleInputChange("location")}
          />
          <InputField
            label="카메라 정보"
            placeholder="예: Canon EOS R6, 50px"
            value={formData.camera_info}
            onChange={handleInputChange("camera_info")}
          />
        </FormSection>
        <button
          type="submit"
          className="w-full h-[40px] bg-gray-920 border border-gray-870 rounded-[5px] hover:bg-black transition-all duration-300 ease-out"
        >
          업로드
        </button>
      </div>
    </form>
  );
};

export default PhotoInfoContainer;
