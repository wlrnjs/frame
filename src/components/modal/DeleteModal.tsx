"use client";

import Close from "@/icon/Close";
import React from "react";
import { createPortal } from "react-dom";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteModal = ({ isOpen, onClose, onConfirm }: DeleteModalProps) => {
  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center modal-overlay"
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
          <Close />
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
