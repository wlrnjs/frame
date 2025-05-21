"use client";

import React, { useState } from "react";
import InputField from "./InputField";
import AutoCompleteInput from "./AutoCompleteInput";
import { cn } from "@/utils";
import usePostWrite from "@/hooks/api/write/usePostWrite";
import usePostImg from "@/hooks/api/write/usePostImg";
import { postPostsProps } from "@/service/write/postWrite";
import useUserId from "@/hooks/useUserId";
import { useToast } from "@/hooks/useToast";
import { supabase } from "@/service/lib/supabaseClient";

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

interface PhotoInfoContainerProps {
  images?: File[];
}

const PhotoInfoContainer = ({ images }: PhotoInfoContainerProps = {}) => {
  const TAGS = ["#풍경", "#인물", "#감성", "#여행", "#도시", "#자연"];
  const postWriteMutation = usePostWrite();
  const postImgMutation = usePostImg();
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
  });
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
    setSelectedTags((prev) => [...prev, tag]);
  };

  const handleInputChange =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userId) {
      toast.error("로그인 후 사용 가능합니다.");
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
        onSuccess: async (postId) => {
          // 게시글 작성 성공 후 이미지 업로드
          if (images && images.length > 0) {
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

              postImgMutation.mutate({
                posts_id: postId,
                image_url: publicUrlData.publicUrl,
              });
            }
            toast.success("게시글과 이미지가 성공적으로 업로드되었습니다.");
          }
        },
        onError: () => {
          toast.error("게시글 업로드에 실패했습니다.");
        },
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex flex-col gap-8", "mobile:w-full")}
    >
      <div
        className={cn(
          "max-w-full min-w-[380px] min-h-[720px] bg-black text-white p-8 rounded-[5px] shadow-lg flex flex-col gap-8 sticky top-[120px]",
          "mobile:max-w-full mobile:top-0"
        )}
      >
        <FormSection title="기본 정보">
          <InputField
            label="제목"
            placeholder="제목을 입력해주세요. (최대 30자)"
            value={formData.title}
            onChange={handleInputChange("title")}
          />
          <InputField
            label="내용"
            placeholder="간단한 설명을 추가해주세요. (최대 100자)"
            isTextarea
            value={formData.description}
            onChange={handleInputChange("description")}
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
          올리기
        </button>
      </div>
    </form>
  );
};

export default PhotoInfoContainer;
