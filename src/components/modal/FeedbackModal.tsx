"use client";

import Close from "@/icon/Close";
import { cn } from "@/utils";
import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { useToast } from "@/hooks/useToast";

interface FeedbackModalProps {
  onOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, content: string) => void;
}

const FeedbackModal = ({ onOpen, onClose, onSubmit }: FeedbackModalProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const toast = useToast();

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

  const handleSubmit = () => {
    if (title.trim() && content.trim()) {
      onSubmit(title, content);
      setTitle("");
      setContent("");
      toast.success("개선요청이 접수되었습니다.");
      onClose();
    } else {
      toast.error("제목과 내용을 입력해주세요.");
    }
  };

  if (!onOpen) return null;

  const buttons = [
    {
      label: "취소",
      onClick: onClose,
      className: "text-gray-700 hover:bg-gray-100",
    },
    {
      label: "제출",
      onClick: handleSubmit,
      className: "text-white bg-black hover:bg-gray-800",
    },
  ];

  const buttonStyle =
    "px-4 py-2 text-sm font-medium rounded-md transition-colors";

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center modal-overlay bg-opacity-45"
      onClick={handleBackgroundClick}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-6 rounded-lg max-w-[800px] w-full"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">개선 요청 작성</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black"
            aria-label="모달 닫기"
          >
            <Close />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {/* 폼 */}
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="제목 (최대 30자)"
              maxLength={30}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
            <textarea
              ref={textareaRef}
              placeholder="개선하고 싶은 점이나 의견을 적어주세요 (최대 500자)"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={6}
              maxLength={500}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none"
            />
          </div>

          {/* 버튼 그룹 */}
          <div className="flex justify-end gap-3">
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

export default FeedbackModal;
