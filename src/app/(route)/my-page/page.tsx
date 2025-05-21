"use client";

import React, { useState } from "react";
import UserProfileHeader from "@/components/features/profile/UserProfileHeader";
import UserCameraAndLinks from "@/components/features/profile/UserCameraAndLinks";
import UserTabs from "@/components/features/profile/UserTabs";
import PostGrid from "@/components/features/profile/PostGrid";
import ProfileEditModal from "@/components/ui/modal/ProfileEditModal";
import Edit from "@/icon/Edit";
import { useToast } from "@/hooks/useToast";
import { cn } from "@/utils";

const MyPage = () => {
  const initialProfileData = {
    profileImage: "",
    nickname: "",
    favoriteCategory: "",
    camera: "",
    lens: "",
    urls: [],
  };
  const [activeTab, setActiveTab] = useState("posts");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toast = useToast();

  const btnStyle = cn(
    "absolute right-6 top-3 h-[40px] bg-gray-920 border border-gray-870 rounded-[5px] px-4 py-2 text-sm text-white hover:bg-black transition-all duration-300 ease-out flex items-center gap-2",
    "mobile:right-4 mobile:top-2 mobile:h-[30px] mobile:text-xs mobile:px-2 mobile:py-1"
  );

  const handleProfileEdit = () => {
    setIsModalOpen(true);
  };

  const handleSave = (data: {
    profileImage: string;
    nickname: string;
    favoriteCategory: string;
    camera: string;
    lens: string;
    urls: { name: string; url: string }[];
  }) => {
    console.log("저장된 데이터:", data);
    toast.success("프로필이 저장되었습니다.");
    setIsModalOpen(false);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full min-h-fit custom-margin layout-container">
      <div className="w-full">
        {/* 프로필 섹션 */}
        <div
          className={cn(
            "relative bg-black rounded-lg shadow-lg p-6 mb-6",
            "mobile:p-4"
          )}
        >
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <UserProfileHeader isMyPage />
              <UserCameraAndLinks />
            </div>

            <button className={btnStyle} onClick={handleProfileEdit}>
              <Edit size="16" />
              프로필 편집
            </button>
          </div>
        </div>

        {/* 탭 섹션 */}
        <div className="bg-black rounded-lg shadow-lg">
          <UserTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* 탭 콘텐츠 */}
          <div className={cn("p-6", "mobile:p-1")}>
            {activeTab === "posts" && (
              <div className="flex flex-col gap-[20px]">
                <PostGrid />
                <PostGrid />
              </div>
            )}
            {activeTab === "liked" && (
              <div className="flex flex-col gap-[20px]">
                <PostGrid />
                <PostGrid />
              </div>
            )}
          </div>
        </div>
      </div>
      <ProfileEditModal
        isOpen={isModalOpen}
        onClose={handleClose}
        onSave={handleSave}
        currentData={initialProfileData}
      />
    </div>
  );
};

export default MyPage;
