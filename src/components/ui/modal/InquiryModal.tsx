"use client";

import Close from "@/icon/Close";
import { cn } from "@/utils";
import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { useToast } from "@/hooks/ui/useToast";
import usePostInquiry from "@/hooks/api/support/usePostInquiry";
import useUserId from "@/hooks/useUserId";

interface InquiryModalProps {
  onOpen: boolean;
  onClose: () => void;
}

const InquiryModal = ({ onOpen, onClose }: InquiryModalProps) => {
  const user = useUserId();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [email, setEmail] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const toast = useToast();
  const { mutate } = usePostInquiry();

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
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [content]);

  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  // 이메일 유효성 검사 로직
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (!user && !isValidEmail(email)) {
      toast.error("이메일 형식이 올바르지 않습니다.");
      return;
    }

    if (title.trim() && content.trim() && (!user ? email.trim() : true)) {
      mutate({ email, title, content });
      setTitle("");
      setContent("");
      onClose();
    } else if (!user && !email.trim()) {
      toast.error("이메일, 제목, 내용은 필수입니다.");
    } else {
      toast.error("제목, 내용은 필수입니다.");
    }
  };

  if (!onOpen) return null;

  const buttons = [
    {
      label: "취소",
      onClick: onClose,
      className: "text-gray-700 hover:bg-gray-100 mobile:border",
    },
    {
      label: "제출",
      onClick: handleSubmit,
      className: "text-white bg-black hover:bg-gray-800",
    },
  ];

  const buttonStyle =
    "px-4 py-2 text-sm font-medium rounded-md transition-colors mobile:w-1/2";
  const inputStyle =
    "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent";

  return createPortal(
    <div className="modal-overlay" onClick={handleBackgroundClick}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "bg-white p-6 rounded-lg max-w-[800px] w-full",
          "mobile:max-w-full mobile:h-full mobile:rounded-none"
        )}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">1:1 문의하기</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black"
            aria-label="모달 닫기"
          >
            <Close />
          </button>
        </div>
        <div
          className={cn(
            "flex flex-col gap-4",
            "mobile:h-full mobile:justify-between mobile:pb-10"
          )}
        >
          {/* 폼 */}
          <div className="flex flex-col gap-4">
            {!user && (
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="이메일을 입력해주세요."
                  className={inputStyle}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            )}
            <input
              type="text"
              placeholder="제목 (최대 20자)"
              maxLength={20}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={inputStyle}
            />
            <textarea
              ref={textareaRef}
              placeholder="문의 내용 (최대 200자)"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
              maxLength={200}
              className={cn(inputStyle, "resize-none mobile:h-[500px]")}
            />
          </div>

          {/* 버튼 그룹 */}
          <div
            className={cn("flex justify-end gap-3", "mobile:justify-center")}
          >
            {buttons.map((btn) => (
              <button
                key={btn.label}
                onClick={btn.onClick}
                className={cn(btn.className, buttonStyle)}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default InquiryModal;
