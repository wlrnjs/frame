"use client";

import React, { useState } from "react";
import UserProfileHeader from "@/components/profile/UserProfileHeader";
import UserCameraAndLinks from "@/components/profile/UserCameraAndLinks";
import UserTabs from "@/components/profile/UserTabs";
import PostGrid from "@/components/profile/PostGrid";

const MyPage = () => {
  const [activeTab, setActiveTab] = useState("posts");

  const btnStyle =
    "h-[40px] bg-gray-920 border border-gray-870 rounded-[5px] px-4 py-2 text-sm text-white hover:bg-black transition-all duration-300 ease-out";

  const handleProfileEdit = () => {
    console.log("프로필 편집");
  };

  return (
    <div className="w-full min-h-screen custom-margin layout-container">
      <div className="w-full">
        {/* 프로필 섹션 */}
        <div className="bg-black rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <UserProfileHeader />
              <UserCameraAndLinks />
            </div>
            <div className="flex gap-4">
              <button className={btnStyle} onClick={handleProfileEdit}>
                프로필 편집
              </button>
            </div>
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
    </div>
  );
};

export default MyPage;
