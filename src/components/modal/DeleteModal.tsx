"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";

interface DeleteModalProps {
  onOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteModal = ({ onOpen, onClose, onConfirm }: DeleteModalProps) => {
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

  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!onOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm z-50 transition-opacity duration-300"
      onClick={handleBackgroundClick}
    >
      <div
        className="relative bg-black text-white rounded-xl p-6 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto border border-white/20 shadow-2xl transform transition-transform duration-300 scale-100"
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
            정말로 삭제하시겠습니까?
          </h2>

          {/* 버튼 그룹 */}
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={onConfirm}
              className="w-1/2 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              확인
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

export default DeleteModal;
