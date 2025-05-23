"use client";

import React from "react";
import InputField from "./InputField";
import AutoCompleteInput from "./AutoCompleteInput";
import FormSection from "./FormSection";
import { cn } from "@/utils";
import usePostWrite from "@/hooks/api/write/usePostWrite";
import usePostImg from "@/hooks/api/write/usePostImg";
import useUserId from "@/hooks/useUserId";
import { useToast } from "@/hooks/ui/useToast";
import usePhotoForm from "@/hooks/ui/write/usePhotoForm";
import { uploadImages } from "@/utils/write/uploadImage";

interface PhotoInfoContainerProps {
  images?: File[];
}

const btnStyle =
  "w-full h-[40px] bg-gray-920 border border-gray-870 rounded-[5px] hover:bg-black transition-all duration-300 ease-out";

const PhotoInfoContainer = ({ images }: PhotoInfoContainerProps = {}) => {
  const userId = useUserId();
  const toast = useToast();
  const postWriteMutation = usePostWrite();
  const postImgMutation = usePostImg();

  const {
    input,
    suggestions,
    formData,
    selectedTags,
    handleAutoCompleteChange,
    handleFormChange: formChangeHandler,
    setSelectedTags,
  } = usePhotoForm(userId);

  const handleSelectTag = (tag: string) => {
    setSelectedTags((prev) => [...prev, tag]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userId) {
      toast.error("로그인 후 사용 가능합니다.");
      return;
    }

    if (!images || images.length === 0) {
      toast.error("이미지를 업로드해주세요.");
      return;
    }

    try {
      const postData = {
        ...formData,
        category: selectedTags[0] || "",
        user_id: userId,
      };

      const result = await postWriteMutation.mutateAsync(postData);

      if (result && result.postId) {
        await uploadImages({
          images,
          postId: result.postId,
          postImgMutation,
          toast,
        });
      }
    } catch (error) {
      console.error("폼 제출 중 에러 발생:", error);
      toast.error("게시글 업로드에 실패했습니다.");
    }
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
            onChange={formChangeHandler("title")}
          />
          <InputField
            label="내용"
            placeholder="간단한 설명을 추가해주세요. (최대 100자)"
            isTextarea
            value={formData.description}
            onChange={formChangeHandler("description")}
          />
          <AutoCompleteInput
            label="카테고리"
            value={input}
            onChange={(e) => handleAutoCompleteChange(e.target.value)}
            suggestions={suggestions}
            onSelect={handleSelectTag}
          />
        </FormSection>

        <FormSection title="사진 정보" showDivider>
          <InputField
            label="장소"
            placeholder="예: 서울, 한국"
            value={formData.location}
            onChange={formChangeHandler("location")}
          />
          <InputField
            label="카메라 정보"
            placeholder="예: Canon EOS R6, 50px"
            value={formData.camera_info}
            onChange={formChangeHandler("camera_info")}
          />
        </FormSection>

        <button type="submit" className={btnStyle}>
          올리기
        </button>
      </div>
    </form>
  );
};

export default PhotoInfoContainer;
