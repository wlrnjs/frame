"use client";

import Close from "@/icon/Close";
import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (reason: string, description: string) => void;
}

const ReportModal = ({ isOpen, onClose, onSubmit }: ReportModalProps) => {
  const [reason, setReason] = useState("");
  const [description, setDescription] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

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

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [description]);

  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = () => {
    if (reason.trim() && description.trim()) {
      onSubmit(reason, description);
      setReason("");
      setDescription("");
      onClose();
    } else {
      alert("신고 사유와 설명을 입력해주세요.");
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm z-50 transition-opacity duration-300"
      onClick={handleBackgroundClick}
    >
      <div
        className="relative bg-black text-white rounded-[5px] p-6 max-w-md w-full mx-4 max-h-[90vh] h-auto overflow-y-auto border border-white/20 shadow-2xl transform transition-transform duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 버튼 (오른쪽 상단) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          aria-label="모달 닫기"
        >
          <Close />
        </button>

        {/* 모달 콘텐츠 */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-white text-center">신고하기</h2>

          {/* 폼 */}
          <div className="flex flex-col gap-4">
            <div className="relative">
              <select
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full p-2 bg-black border border-white/30 rounded-[5px] text-white appearance-none focus:outline-none focus:border-white/50 transition-colors"
              >
                <option value="" disabled>
                  신고 사유 선택
                </option>
                <option value="inappropriate_content">부적절한 콘텐츠</option>
                <option value="spam">스팸</option>
                <option value="harassment">괴롭힘</option>
                <option value="other">기타</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-white">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            <textarea
              ref={textareaRef}
              placeholder="신고 설명"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              maxLength={200}
              className="w-full p-2 bg-black border border-white/30 rounded-[5px] text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors resize-none"
            />
          </div>

          {/* 버튼 그룹 */}
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={handleSubmit}
              className="w-1/2 py-2.5 bg-white text-black rounded-[5px] hover:bg-gray-200 transition-colors"
            >
              제출
            </button>
            <button
              onClick={onClose}
              className="w-1/2 py-2.5 bg-black border border-white/30 text-white rounded-[5px] hover:bg-white/10 transition-colors"
            >
              취소
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ReportModal;
