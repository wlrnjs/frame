"use client";

import React, { useEffect } from "react";
import Question from "@/icon/Question";
import Image from "next/image";
import { createPortal } from "react-dom";
import { ProfileData } from "@/types/ProfileData";

const styles = {
  inputBaseClass:
    "w-full bg-neutral-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500",
  fileInputClass:
    "text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-neutral-700 file:text-white hover:file:bg-neutral-600",
  sectionLabelClass: "block text-sm mb-1",
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

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center modal-overlay"
      onClick={handleBackgroundClick}
    >
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
        <div className="mb-4">
          <label className={styles.sectionLabelClass}>프로필 이미지</label>
          <div className="flex items-center gap-3">
            <Image
              src="/avatar.png"
              alt="Profile"
              width={64}
              height={64}
              className="w-16 h-16 rounded-full object-cover"
            />
            <input
              type="file"
              accept="image/*"
              className={styles.fileInputClass}
            />
          </div>
        </div>

        {/* 닉네임 */}
        <div className="mb-4">
          <label className={styles.sectionLabelClass}>닉네임</label>
          <input type="text" value="wlrnjs" className={styles.inputBaseClass} />
        </div>

        {/* 이메일 (읽기 전용) */}
        <div className="mb-4">
          <label className={styles.sectionLabelClass}>이메일</label>
          <input
            type="text"
            value="twlrnjs7336@naver.com"
            disabled
            readOnly
            className="w-full bg-neutral-600 rounded px-3 py-2 text-gray-400 cursor-not-allowed"
          />
        </div>

        {/* 가입일 (읽기 전용) */}
        <div className="mb-4">
          <label className={styles.sectionLabelClass}>가입일</label>
          <input
            type="text"
            value="2025.05.04"
            disabled
            readOnly
            className="w-full bg-neutral-600 rounded px-3 py-2 text-gray-400 cursor-not-allowed"
          />
        </div>

        {/* 좋아하는 카테고리 */}
        <div className="mb-4">
          <label className={styles.sectionLabelClass}>좋아하는 카테고리</label>
          <input
            type="text"
            value="Photography"
            className={styles.inputBaseClass}
            placeholder="예: Photography, Tech"
          />
        </div>

        {/* 주력 카메라 세팅 */}
        <div className="mb-4">
          <label className={styles.sectionLabelClass}>주력 카메라 세팅</label>
          <div className="space-y-2">
            <input
              type="text"
              value="FUJIFILM X100V"
              placeholder="Camera"
              className={styles.inputBaseClass}
            />
            <input
              type="text"
              value="23mm f/2"
              placeholder="Lens"
              className={styles.inputBaseClass}
            />
          </div>
        </div>

        {/* URL 연결 */}
        <div className="mb-4">
          <label className={styles.sectionLabelClass}>
            URL 연결 (최대 3개)
          </label>
          <div className="space-y-2">
            {/* URL 1 */}
            <div className="flex gap-2 items-center">
              <input
                type="text"
                value="Instagram"
                placeholder="이름 (예: Instagram)"
                className="w-1/2 bg-neutral-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="url"
                value="https://instagram.com/user"
                placeholder="URL"
                className="w-1/2 bg-neutral-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* URL 2 */}
            <div className="flex gap-2 items-center">
              <input
                type="text"
                value="Github"
                placeholder="이름 (예: Github)"
                className="w-1/2 bg-neutral-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="url"
                value="https://github.com/user"
                placeholder="URL"
                className="w-1/2 bg-neutral-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* URL 3 */}
            <div className="flex gap-2 items-center">
              <input
                type="text"
                value=""
                placeholder="이름 (예: Website)"
                className="w-1/2 bg-neutral-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="url"
                value=""
                placeholder="URL"
                className="w-1/2 bg-neutral-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* 버튼 */}
        <div className="flex justify-end gap-2">
          <button className="px-4 py-2 bg-neutral-600 rounded hover:bg-neutral-500">
            취소
          </button>
          <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500">
            저장
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProfileEditModal;
