"use client";

import Close from "@/icon/Close";
import React from "react";
import { createPortal } from "react-dom";
import { useToast } from "@/hooks/ui/useToast";
import Image from "next/image";
import { DetailImgData } from "@/components/features/photo-list/detail/DetailContainer";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  imgData: DetailImgData[];
}

const ShareModal = ({ isOpen, onClose, imgData }: ShareModalProps) => {
  const toast = useToast();

  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("링크가 복사되었습니다!");
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay" onClick={handleBackgroundClick}>
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
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-white">공유하기</h2>

          {/* 공유 콘텐츠 미리보기 */}
          {imgData.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full">
              {imgData.map((img, index) => (
                <div
                  key={index}
                  className="relative w-full aspect-square overflow-hidden rounded-lg border border-white/20"
                >
                  <Image
                    src={img.image_url}
                    alt={`image-${index}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-white">이미지를 찾을 수 없습니다.</p>
          )}

          {/* 공유 옵션: 링크 복사 버튼 */}
          <div className="flex justify-center">
            <button
              onClick={handleCopyLink}
              className="flex flex-col items-center gap-2 text-white hover:text-gray-300 transition-colors"
            >
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
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
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium">링크 복사</span>
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ShareModal;
