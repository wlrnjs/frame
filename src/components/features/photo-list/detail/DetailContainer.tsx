"use client";

import ShareModal from "@/components/ui/modal/ShareModal";
import DeleteModal from "@/components/ui/modal/DeleteModal";
import ReportModal from "@/components/ui/modal/ReportModal";
import ActionButtons from "./ActionButtons";
import { useModal } from "@/hooks/useModal";
import Link from "next/link";
import React from "react";
import { formatDate } from "@/utils/date/dateUtils";
import { cn } from "@/utils";

interface DetailData {
  title: string;
  description: string;
  nickname: string;
  created_at: string;
  location: string;
  category: string;
  view_count: number;
  camera_info: string;
  post_id: number;
}

export interface DetailImgData {
  id: string;
  image_url: string;
  posts_id: number;
}

interface DetailContainerProps {
  data: DetailData;
  imgData: DetailImgData[];
}

const DetailContainer = ({ data, imgData }: DetailContainerProps) => {
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
    // nickname,
    created_at,
    location,
    category,
    view_count,
    camera_info,
    post_id,
  } = data;

  const handleShareClick = openShareModal;
  const handleDeleteClick = openDeleteModal;
  const handleReportClick = openReportModal;

  const handleConfirmDelete = () => {
    closeDeleteModal();
  };

  return (
    <div
      className={cn(
        "max-w-full min-w-[380px] h-[720px] bg-black text-white p-8 rounded-[5px] shadow-lg flex flex-col gap-8 sticky top-[110px]",
        "mobile:max-w-[768px] mobile:w-full mobile:top-0 mobile:h-auto mobile:sticky mobile:gap-2"
      )}
    >
      {/* 이미지 및 액션 */}
      <div className="flex flex-col gap-3 justify-between items-start">
        <ActionButtons
          onShareClick={handleShareClick}
          onDeleteClick={handleDeleteClick}
          onReportClick={handleReportClick}
          post_id={post_id}
          imgData={imgData}
        />

        {/* 제목 및 설명 */}
        <div className={cn("flex flex-col gap-2", "mobile:gap-1")}>
          <h1 className={cn("text-3xl font-bold", "mobile:text-2xl")}>
            {title}
          </h1>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
      <hr className="border-gray-700" />
      <div
        className={cn(
          "flex flex-col gap-4",
          "mobile:flex-row mobile:items-center mobile:justify-start mobile:gap-5"
        )}
      >
        {/* 작성자 정보 */}
        <div className="flex flex-col gap-2 items-start justify-between pt-4 text-sm">
          <p className="flex items-center gap-1">
            작성자:
            <Link href={"/user-profile"}>
              <span className="text-gray-300 hover:underline decoration-offset-4 pointer">
                wlrnjs (임시)
              </span>
            </Link>
          </p>
          <p className="flex items-center gap-1">
            업로드:
            <span className="text-gray-300">{formatDate(created_at)}</span>
          </p>
          <p className="flex items-center gap-1">
            장소:<span className="text-gray-300">{location}</span>
          </p>
        </div>

        {/* 추가 정보 */}
        <div
          className={cn(
            "flex flex-col gap-2 text-sm text-gray-300",
            "mobile:pt-4"
          )}
        >
          <p className="flex items-center gap-1">
            <span className="font-semibold text-white">카테고리:</span>{" "}
            {category}
          </p>
          <p className="flex items-center gap-1">
            <span className="font-semibold text-white">조회수:</span>{" "}
            {view_count > 0 ? view_count : "0"}
          </p>
          <p className="flex items-center gap-1">
            <span className="font-semibold text-white">카메라 정보:</span>
            {camera_info}
          </p>
        </div>
      </div>

      <ShareModal isOpen={isShareModalOpen} onClose={closeShareModal} />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onConfirm={handleConfirmDelete}
      />

      <ReportModal
        isOpen={isReportModalOpen}
        onClose={closeReportModal}
        onSubmit={(reason, description) => {
          console.log("Report submitted:", { reason, description });
          closeReportModal();
        }}
      />
    </div>
  );
};

export default DetailContainer;
