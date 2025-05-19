"use client";

import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";

interface InquiryModalProps {
  onOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, content: string) => void;
}

const InquiryModal = ({ onOpen, onClose, onSubmit }: InquiryModalProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (onOpen) {
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
  }, [onOpen, onClose]);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // 높이 초기화
      textarea.style.height = `${textarea.scrollHeight}px`; // 내용에 맞게 높이 조정
    }
  }, [content]);

  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = () => {
    if (title.trim() && content.trim()) {
      onSubmit(title, content);
      setTitle("");
      setContent("");
      onClose();
    } else {
      alert("제목과 내용을 입력해주세요.");
    }
  };

  if (!onOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm z-50 transition-opacity duration-300"
      onClick={handleBackgroundClick}
    >
      <div
        className="relative bg-black text-white rounded-xl p-6 max-w-md w-full mx-4 max-h-[90vh] h-auto overflow-y-auto border border-white/20 shadow-2xl transform transition-transform duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 버튼 (오른쪽 상단) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          aria-label="모달 닫기"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* 모달 콘텐츠 */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-white text-center">
            1:1 문의하기
          </h2>

          {/* 폼 */}
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="제목 (최대 20자)"
              maxLength={20}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 bg-black border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors"
            />
            <textarea
              ref={textareaRef}
              placeholder="문의 내용 (최대 200자)"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
              maxLength={200}
              className="w-full p-2 bg-black border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors resize-none"
            />
          </div>

          {/* 버튼 그룹 */}
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={handleSubmit}
              className="w-1/2 py-2.5 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
            >
              제출
            </button>
            <button
              onClick={onClose}
              className="w-1/2 py-2.5 bg-black border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors"
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

export default InquiryModal;
