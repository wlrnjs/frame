"use client";

import React from "react";
import ProfileSection from "@/components/features/my-page/ProfileSection";
import TabSection from "@/components/features/my-page/TabSection";
import useProfileTabs from "@/hooks/ui/my-page/useProfileTabs";

const UserProfilePage = () => {
  const { activeTab, setActiveTab } = useProfileTabs();

  // 임시 데이터
  const userData = {
    camera: "test",
    category: "test",
    created_at: "test",
    id: "test",
    is_admin: false,
    lens: "test",
    links: "test",
    nickname: "닉네임입니다",
    user_id: "test",
    profile_image: "test",
    email: "test",
    activity_score: "1200",
  };

  return (
    <div className="w-full min-h-fit custom-margin layout-container">
      <div className="w-full">
        {/* 프로필 섹션 */}
        <ProfileSection userData={userData} onEditClick={() => {}} />

        {/* 탭 섹션 */}
        <TabSection activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
};

export default UserProfilePage;
