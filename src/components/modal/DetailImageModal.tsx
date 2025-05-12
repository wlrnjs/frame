"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Close from "@/icon/Close";

interface DetailImageModalProps {
  onOpen: boolean;
  onClose: () => void;
}

const DetailImageModal = ({ onOpen, onClose }: DetailImageModalProps) => {
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

  if (!onOpen) return null;

  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm z-50"
      onClick={handleBackgroundClick}
    >
      <div
        className="relative bg-white rounded-lg p-6 max-w-3xl w-full max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 버튼 */}
        <button
          className="absolute top-1 right-3 text-gray-600 hover:text-gray-900 text-2xl"
          onClick={onClose}
          aria-label="Close modal"
        >
          <Close />
        </button>

        {/* 이미지 */}
        <div className="relative w-full aspect-[4/3] mb-4">
          <Image
            src="/IMG_7115.JPG"
            alt="modal-image"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>,
    document.body
  );
};

export default DetailImageModal;
