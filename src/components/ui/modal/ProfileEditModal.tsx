"use client";

import React, { useEffect, useState } from "react";
import Question from "@/icon/Question";
import { createPortal } from "react-dom";
import { cn } from "@/utils";
import EditInput from "@/components/features/my-page/EditInput";
import UrlInput from "@/components/features/my-page/UrlInput";
import ProfileImageInput from "@/components/features/my-page/ProfileImageInput";
import { User } from "@/types/UserType";
import { formatDate } from "@/utils/date/dateUtils";

const buttonStyles = {
  base: "rounded text-white px-4 py-2 font-semibold transition-colors",
  cancel: "bg-red-600 hover:bg-red-500",
  save: "bg-neutral-600 hover:bg-neutral-500",
};

interface ProfileEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: {
    profileImage: string;
    nickname: string;
    favoriteCategory: string;
    camera: string;
    lens: string;
    urls: { name: string; url: string }[];
  }) => void;
  data: User;
}

const ProfileEditModal: React.FC<ProfileEditModalProps> = ({
  isOpen,
  onClose,
  // onSave,
  data,
}) => {
  const [urlInputs, setUrlInputs] = useState([
    { name: "Instagram", url: "https://instagram.com/user" },
    { name: "Github", url: "https://github.com/user" },
    { name: "", url: "" },
  ]);

  const [nickname, setNickname] = useState(data?.nickname);
  const [category, setCategory] = useState(data?.category || "카테고리 미설정");
  const [camera, setCamera] = useState(data?.camera || "카메라 미설정");
  const [lens, setLens] = useState(data?.lens || "렌즈 미설정");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";

      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          onClose();
        }
      };
      window.addEventListener("keydown", handleEscape);

      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleEscape);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleChange = (
    index: number,
    field: "name" | "url",
    value: string
  ) => {
    const newInputs = [...urlInputs];
    newInputs[index][field] = value;
    setUrlInputs(newInputs);
  };

  return createPortal(
    <div className="modal-overlay" onClick={handleBackgroundClick}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-neutral-800 rounded-lg p-6 w-full max-w-md text-white"
      >
        {/* 모달 헤더 */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">프로필 편집</h2>
          <button className="text-white hover:text-gray-300">
            <Question />
          </button>
        </div>

        {/* 프로필 이미지 */}
        <ProfileImageInput
          label="프로필 이미지"
          imageUrl={data?.profile_image || "/avatar.png"}
          onChange={() => {}}
        />

        {/* 닉네임 */}
        <EditInput label="닉네임" value={nickname} onChange={setNickname} />

        {/* 이메일 (읽기 전용) */}
        <EditInput
          label="이메일"
          value={data?.email || "이메일 미설정"}
          isDisabled
        />

        {/* 가입일 (읽기 전용) */}
        <EditInput
          label="가입일"
          value={formatDate(data?.created_at || "")}
          isDisabled
        />

        {/* 좋아하는 카테고리 */}
        <EditInput
          label="좋아하는 카테고리"
          value={category}
          onChange={setCategory}
        />

        {/* 주력 카메라 세팅 */}
        <EditInput
          label="주력 카메라 세팅"
          value={camera}
          value2={lens}
          placeholder2="Lens"
          isCamera
          onChange={setCamera}
          onChange2={setLens}
        />

        {/* URL 연결 */}
        <div className="mb-4">
          <label className="block text-sm mb-1">URL 연결 (최대 3개)</label>
          <div className="space-y-2">
            {urlInputs.map((input, index) => (
              <UrlInput
                key={index}
                value={input}
                index={index}
                onChange={handleChange}
              />
            ))}
          </div>
        </div>

        {/* 버튼 */}
        <div className="flex justify-between">
          <button className={cn(buttonStyles.base, buttonStyles.cancel)}>
            취소
          </button>
          <button className={cn(buttonStyles.base, buttonStyles.save)}>
            저장
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProfileEditModal;
