"use client";

import Close from "@/icon/Close";
import React from "react";
import { createPortal } from "react-dom";
import { useToast } from "@/hooks/ui/useToast";
import Image from "next/image";
import { DetailImgData } from "@/components/features/photo-list/detail/DetailContainer";
import Link from "@/icon/Link";
import Kakao from "@/icon/Kakao";
import Instagram from "@/icon/Instagram";
import ShareModalIcon from "@/icon/ShareModalIcon";
import { cn } from "@/utils";

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

  const handleShareLink = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: "Frame", url: window.location.href });
      } catch (error) {
        if ((error as DOMException).name !== "AbortError") {
          toast.error("공유 중 문제가 발생했습니다.");
          console.error("공유 오류:", error);
        }
      }
    } else {
      toast.error("공유 기능을 지원하지 않습니다.");
    }
  };

  // TODO: 각 공유 함수 구현

  const ShareIcon = [
    {
      name: "카카오톡",
      icon: <Kakao />,
      onClick: handleCopyLink,
    },
    {
      name: "링크 복사",
      icon: <Link />,
      onClick: handleCopyLink,
    },
    {
      name: "공유하기",
      icon: <ShareModalIcon />,
      onClick: handleShareLink,
    },
    {
      name: "인스타그램",
      icon: <Instagram />,
      onClick: handleCopyLink,
    },
  ];

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
          <div className={cn("flex-center gap-5", "mobile:gap-5")}>
            {ShareIcon.map((icon, index) => (
              <button
                key={index}
                onClick={icon.onClick}
                className="flex flex-col items-center gap-2 text-white hover:text-gray-300 transition-colors"
              >
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
                  {icon.icon}
                </div>
                <span className="text-sm font-medium">{icon.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ShareModal;
