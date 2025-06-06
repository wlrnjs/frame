"use client";

import { HeartFilled, HeartOutline } from "@/icon/Heart";
import Download from "@/icon/Download";
import Share from "@/icon/Share";
import Edit from "@/icon/Edit";
import Report from "@/icon/Report";
import Delete from "@/icon/Delete";
import React from "react";
import usePostLikeToggle from "@/hooks/api/photo-list/detail/usePostLikeToggle";
import useUserId from "@/hooks/useUserId";
import { useToast } from "@/hooks/ui/useToast";
import useGetLikeToggle from "@/hooks/api/photo-list/detail/useGetLikeToggle";
import useDeleteLikeToggle from "@/hooks/api/photo-list/detail/useDeleteLikeToggle";
import { cn } from "@/utils";

const labelStyle =
  "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer";

interface LikeToggle {
  created_at: string;
  id: string;
  post_id: string;
  user_id: string;
}

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  aria: string;
  onClick?: () => void;
}

interface ActionButtonsProps {
  onShareClick: () => void;
  onDeleteClick: () => void;
  onReportClick: () => void;
  id: number;
  imgData: string[];
  isMine: boolean;
}

const ActionButtons = ({
  onShareClick,
  onDeleteClick,
  onReportClick,
  id,
  imgData,
  isMine,
}: ActionButtonsProps) => {
  const userId = useUserId();
  const { error: toastError } = useToast();

  const { data: likeToggle } = useGetLikeToggle(id);
  const { mutate: postLikeToggle, isPending } = usePostLikeToggle();
  const { mutate: deleteLikeToggle, isPending: deleteLikeTogglePending } =
    useDeleteLikeToggle();
  const myLike = likeToggle?.some(
    (like: LikeToggle) => like.user_id === userId
  );

  const handleLikeClick = () => {
    if (!userId) {
      toastError("로그인 후 사용 가능합니다.");
      return;
    }
    if (myLike) {
      deleteLikeToggle({ post_id: id });
    } else {
      postLikeToggle({ post_id: id });
    }
  };

  // 다운로드 로직
  const handleDownloadClick = async () => {
    try {
      for (let i = 0; i < imgData.length; i++) {
        const imageUrl = imgData[i];
        const response = await fetch(imageUrl, { mode: "cors" });
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = `image_${i + 1}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        window.URL.revokeObjectURL(blobUrl);
      }
    } catch (error) {
      console.error("이미지 다운로드 실패:", error);
    }
  };

  const actionButtons: ActionButtonProps[] = [
    {
      icon: myLike ? <HeartOutline /> : <HeartFilled />,
      label: "좋아요",
      aria: "좋아요",
      onClick: handleLikeClick,
    },
    {
      icon: <Download />,
      label: "다운로드",
      aria: "다운로드",
      onClick: handleDownloadClick,
    },
    { icon: <Share />, label: "공유하기", aria: "공유", onClick: onShareClick },
    {
      icon: <Report />,
      label: "신고하기",
      aria: "신고",
      onClick: onReportClick,
    },
    ...(isMine ? [{ icon: <Edit />, label: "수정하기", aria: "수정" }] : []),
  ];

  return (
    <div
      className={cn(
        "flex gap-5 py-5 w-fit h-[50px] items-center justify-center rounded-[15px] mt-5",
        "mobile:gap-4"
      )}
    >
      {actionButtons.map((action, index) => (
        <div key={index} className="relative group flex items-center">
          <button
            aria-label={action.aria}
            onClick={action.onClick}
            disabled={isPending || deleteLikeTogglePending}
            className="focus:outline-none flex items-center gap-2"
          >
            {action.icon}
            {action.label === "좋아요" && (
              <p className="text-black">{likeToggle?.length || 0}</p>
            )}
          </button>
          <div className={labelStyle}>{action.label}</div>
        </div>
      ))}
      {isMine && (
        <div className="relative group flex items-center">
          <button
            aria-label="삭제"
            onClick={onDeleteClick}
            className="focus:outline-none"
          >
            <Delete />
          </button>
          <div className={labelStyle}>삭제하기</div>
        </div>
      )}
    </div>
  );
};

export default ActionButtons;
