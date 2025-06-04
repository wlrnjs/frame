"use client";

import React from "react";
import ProfileEditModal from "@/components/ui/modal/ProfileEditModal";
import useGetUser from "@/hooks/api/my-page/useGetUser";
import useProfileTabs from "@/hooks/ui/my-page/useProfileTabs";
import useProfileEditModal from "@/hooks/ui/my-page/useProfileEditModal";
import ProfileSection from "@/components/features/my-page/ProfileSection";
import TabSection from "@/components/features/my-page/TabSection";

const MyPage = () => {
  // const { data: user, isLoading, error } = useGetUser();
  const { data: user } = useGetUser();
  console.log(user);
  const { activeTab, setActiveTab } = useProfileTabs();
  const { isModalOpen, openModal, closeModal } = useProfileEditModal();

  const userData = user?.[0];

  return (
    <div className="w-full min-h-fit custom-margin layout-container">
      <div className="w-full">
        <ProfileSection userData={userData} onEditClick={openModal} isMyPage />

        <TabSection
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          user_id={userData?.user_id}
        />
      </div>

      <ProfileEditModal
        isOpen={isModalOpen}
        onClose={closeModal}
        data={userData}
      />
    </div>
  );
};

export default MyPage;
