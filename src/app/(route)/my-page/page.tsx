"use client";

import React, { useState } from "react";
import UserProfileHeader from "@/components/profile/UserProfileHeader";
import UserCameraAndLinks from "@/components/profile/UserCameraAndLinks";
import UserTabs from "@/components/profile/UserTabs";
import PostGrid from "@/components/profile/PostGrid";
import ProfileEditModal from "@/components/modal/ProfileEditModal";
import Edit from "@/icon/Edit";
import { useToast } from "@/hooks/useToast";

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

  const btnStyle =
    "absolute right-6 top-3 h-[40px] bg-gray-920 border border-gray-870 rounded-[5px] px-4 py-2 text-sm text-white hover:bg-black transition-all duration-300 ease-out flex items-center gap-2";

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
    <div className="w-full min-h-screen custom-margin layout-container">
      <div className="w-full">
        {/* 프로필 섹션 */}
        <div className="relative bg-black rounded-lg shadow-lg p-6 mb-6">
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
          <div className="p-6 mb-20">
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
