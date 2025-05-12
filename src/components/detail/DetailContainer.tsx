"use client";

import ShareModal from "@/components/modal/ShareModal";
import DeleteModal from "@/components/modal/DeleteModal";
import ReportModal from "@/components/modal/ReportModal";
import ActionButtons from "./ActionButtons";
import { useModal } from "@/hooks/useModal";
import Link from "next/link";
import React from "react";

const DetailContainer = () => {
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

  const handleShareClick = openShareModal;
  const handleDeleteClick = openDeleteModal;
  const handleReportClick = openReportModal;

  const handleConfirmDelete = () => {
    closeDeleteModal();
  };

  return (
    <div className="max-w-full min-w-[380px] h-[720px] bg-black text-white p-8 rounded-[5px] shadow-lg flex flex-col gap-8 sticky top-[110px]">
      {/* 이미지 및 액션 */}
      <div className="flex flex-col gap-3 justify-between items-start">
        <ActionButtons
          onShareClick={handleShareClick}
          onDeleteClick={handleDeleteClick}
          onReportClick={handleReportClick}
        />

        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">타이틀입니다.</h1>
          <p className="text-sm text-gray-400">간단한 설명입니다.</p>
        </div>
      </div>

      {/* 작성자 정보 */}
      <div className="flex flex-col gap-2 items-start justify-between border-t border-gray-700 pt-4 text-sm">
        <p>
          작성자:
          <Link href={"/user-profile"}>
            <span className="text-gray-300 hover:underline decoration-offset-4 pointer">
              wlrnjs
            </span>
          </Link>
        </p>
        <p>
          업로드: <span className="text-gray-300">2025.05.03</span>
        </p>
        <p>
          장소: <span className="text-gray-300">서울, 한국</span>
        </p>
      </div>

      {/* 추가 정보 */}
      <div className="flex flex-col gap-4 text-sm text-gray-300">
        <p>
          <span className="font-semibold text-white">카테고리:</span> 풍경
        </p>
        <p>
          <span className="font-semibold text-white">조회수:</span> 123회
        </p>
        <p>
          <span className="font-semibold text-white">카메라 정보:</span> Canon
          EOS R6, 50mm
        </p>
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
          console.log('Report submitted:', { reason, description });
          closeReportModal();
        }}
      />
    </div>
  );
};

export default DetailContainer;
