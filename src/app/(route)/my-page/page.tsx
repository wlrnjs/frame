"use client";

import React from "react";
import ProfileEditModal from "@/components/ui/modal/ProfileEditModal";
import useGetUser from "@/hooks/api/my-page/useGetUser";
import useProfileTabs from "@/components/features/my-page/useProfileTabs";
import useProfileEditModal from "@/components/features/my-page/useProfileEditModal";
import ProfileSection from "@/components/features/my-page/ProfileSection";
import TabSection from "@/components/features/my-page/TabSection";
// 메인 MyPage 컴포넌트
const MyPage = () => {
  // const { data: user, isLoading, error } = useGetUser();
  const { data: user } = useGetUser();
  const { activeTab, setActiveTab } = useProfileTabs();
  const { isModalOpen, openModal, closeModal } = useProfileEditModal();

  const userData = user?.[0];

  return (
    <div className="w-full min-h-fit custom-margin layout-container">
      <div className="w-full">
        {/* 프로필 섹션 */}
        <ProfileSection userData={userData} onEditClick={openModal} />

        {/* 탭 섹션 */}
        <TabSection activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* 프로필 편집 모달 */}
      <ProfileEditModal
        isOpen={isModalOpen}
        onClose={closeModal}
        data={userData}
      />
    </div>
  );
};

export default MyPage;
