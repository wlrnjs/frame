"use client";

import React, { useEffect, useState } from "react";
import Question from "@/icon/Question";
import { createPortal } from "react-dom";
import { ProfileData } from "@/types/ProfileData";
import EditInput from "../my-page/EditInput";
import { cn } from "@/utils";
import UrlInput from "../my-page/UrlInput";
import ProfileImageInput from "../my-page/ProfileImageInput";

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
  currentData: ProfileData;
}

const ProfileEditModal: React.FC<ProfileEditModalProps> = ({
  isOpen,
  onClose,
  // onSave,
  // currentData,
}) => {
  const [urlInputs, setUrlInputs] = useState([
    { name: "Instagram", url: "https://instagram.com/user" },
    { name: "Github", url: "https://github.com/user" },
    { name: "", url: "" },
  ]);

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
          imageUrl="/avatar.png"
          onChange={() => {}}
        />

        {/* 닉네임 */}
        <EditInput label="닉네임" value="wlrnjs" />

        {/* 이메일 (읽기 전용) */}
        <EditInput label="이메일" value="twlrnjs7336@naver.com" isDisabled />

        {/* 가입일 (읽기 전용) */}
        <EditInput label="가입일" value="2025.05.04" isDisabled />

        {/* 좋아하는 카테고리 */}
        <EditInput label="좋아하는 카테고리" value="Photography" />

        {/* 주력 카메라 세팅 */}
        <EditInput
          label="주력 카메라 세팅"
          value="FUJIFILM X100V"
          value2="23mm f/2"
          placeholder2="Lens"
          isCamera
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
