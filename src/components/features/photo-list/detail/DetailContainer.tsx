"use client";

import ShareModal from "@/components/ui/modal/ShareModal";
import DeleteModal from "@/components/ui/modal/DeleteModal";
import ReportModal from "@/components/ui/modal/ReportModal";
import ActionButtons from "./ActionButtons";
import { useModal } from "@/hooks/ui/useModal";
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
  isMine: boolean;
}

const DetailContainer = ({ data, imgData, isMine }: DetailContainerProps) => {
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
          <h1 className={cn("text-3xl font-bold", "mobile:text-2xl")}>
            {title}
          </h1>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
      <hr className="border-gray-400" />
      <div className="flex flex-col gap-4">
        {/* 작성자 정보 */}
        <div className="flex flex-col gap-2 items-start justify-between pt-4 text-sm font-semibold">
          <p className="flex items-center gap-1">
            작성자:
            <Link href={"/user-profile"}>
              <span className="hover:underline decoration-offset-4 pointer">
                wlrnjs (임시)
              </span>
            </Link>
          </p>
          <p className="flex items-center gap-1">
            업로드:
            <span>{formatDate(created_at)}</span>
          </p>
          <p className="flex items-center gap-1">
            장소:<span>{location}</span>
          </p>
          <p className="flex items-center gap-1">
            <span className="font-semibold">카테고리:</span> {category}
          </p>
          <p className="flex items-center gap-1">
            <span className="font-semibold">조회수:</span>{" "}
            {view_count > 0 ? view_count : "0"}
          </p>
          <p className="flex items-center gap-1">
            <span className="font-semibold">카메라 정보:</span>
            {camera_info}
          </p>
        </div>

        <ActionButtons
          onShareClick={handleShareClick}
          onDeleteClick={handleDeleteClick}
          onReportClick={handleReportClick}
          id={post_id}
          imgData={imgData}
          isMine={isMine}
        />
      </div>

      <ShareModal isOpen={isShareModalOpen} onClose={closeShareModal} />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        title="게시글"
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
