"use client";

import ShareModal from "@/components/ui/modal/ShareModal";
import DeleteModal from "@/components/ui/modal/DeleteModal";
import ReportModal from "@/components/ui/modal/ReportModal";
import ActionButtons from "./ActionButtons";
import { useModal } from "@/hooks/ui/useModal";
import React from "react";
import { formatDate } from "@/utils/date/dateUtils";
import { cn } from "@/utils";
import useUserId from "@/hooks/useUserId";
import { formatCategory } from "@/utils/text/formatCategory";
import Link from "next/link";

interface user {
  nickname: string;
}

interface DetailData {
  title: string;
  description: string;
  users: user;
  created_at: string;
  location: string;
  category: string;
  views: number;
  camera_info: string;
  post_id: number;
  user_id: string;
  img_urls: string[];
}

interface DetailContainerProps {
  data: DetailData;
}

const DetailContainer = ({ data }: DetailContainerProps) => {
  const user = useUserId();
  const isMine = data?.user_id === user;

  const {
    isOpen: isShareModalOpen,
    openModal: openShareModal,
    closeModal: closeShareModal,
  } = useModal();

  const {
    isOpen: isDeleteModalOpen,
    openModal: openDeleteModal,
    closeModal: closeDeleteModal,
  } = useModal();

  const {
    isOpen: isReportModalOpen,
    openModal: openReportModal,
    closeModal: closeReportModal,
  } = useModal();

  if (!data) {
    return (
      <div className="max-w-full min-w-[380px] h-[720px] bg-black text-white p-8 rounded-[5px] shadow-lg flex flex-col gap-8 sticky top-[110px]">
        Loading... (임시)
      </div>
    );
  }

  const {
    title,
    description,
    users,
    created_at,
    location,
    category,
    views,
    camera_info,
    post_id,
  } = data;

  const handleShareClick = openShareModal;
  const handleDeleteClick = openDeleteModal;
  const handleReportClick = openReportModal;

  const metaTag = [
    {
      name: "업로드",
      content: formatDate(created_at),
    },
    {
      name: "장소",
      content: location || "장소 정보 없음",
    },
    {
      name: "카테고리",
      content: formatCategory(category),
    },
    {
      name: "조회수",
      content: views || 0,
    },
    {
      name: "카메라 정보",
      content: camera_info || "카메라 정보 없음",
    },
  ];

  return (
    <div
      className={cn(
        "max-w-full min-w-[380px] h-fit p-8 rounded-[5px] flex flex-col gap-8 mx-28",
        "mobile:w-full mobile:gap-2 mobile:mx-0"
      )}
    >
      {/* 이미지 및 액션 */}
      <div className="flex flex-col gap-3 justify-between items-start">
        {/* 제목 및 설명 */}
        <div className={cn("flex flex-col gap-2", "mobile:gap-1")}>
          <h1
            className={cn(
              "text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] text-left",
              "mobile:text-2xl"
            )}
          >
            {title}
          </h1>
          <p className="text-[#111418] text-base font-normal leading-normal">
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {/* 작성자 정보 */}
        <div className="w-full flex flex-col items-start justify-between text-sm font-semibold">
          <div className="w-full grid grid-cols-6 border-t border-gray-300 py-4">
            <p className="col-span-1 text-[#60758a] text-sm font-normal leading-normal">
              작성자
            </p>
            <Link
              href={`/user/${users.nickname}`}
              className="col-span-5 text-[#111418] text-sm font-normal leading-normal"
            >
              {users.nickname}
            </Link>
          </div>
          {metaTag.map((tag, idx) => (
            <div
              key={idx}
              className={cn(
                "w-full grid grid-cols-6 border-t border-gray-300 py-4",
                "mobile:grid-cols-2 mobile:py-2"
              )}
            >
              <p className="col-span-1 text-[#60758a] text-sm font-normal leading-normal">
                {tag.name}
              </p>
              <p className="col-span-5 text-[#111418] text-sm font-normal leading-normal">
                {tag.content}
              </p>
            </div>
          ))}
        </div>

        <ActionButtons
          onShareClick={handleShareClick}
          onDeleteClick={handleDeleteClick}
          onReportClick={handleReportClick}
          id={post_id}
          imgData={data?.img_urls}
          isMine={isMine}
        />
      </div>

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={closeShareModal}
        imgData={data?.img_urls}
      />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        id={post_id}
        type="posts"
      />

      <ReportModal
        isOpen={isReportModalOpen}
        onClose={closeReportModal}
        commentId={post_id.toString()}
        type="posts"
      />
    </div>
  );
};

export default DetailContainer;
