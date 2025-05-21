"use client";

import React, { useState } from "react";
import UserProfileHeader from "@/components/features/profile/UserProfileHeader";
import UserCameraAndLinks from "@/components/features/profile/UserCameraAndLinks";
import PostGrid from "@/components/features/profile/PostGrid";
import UserTabs from "@/components/features/profile/UserTabs";
import { cn } from "@/utils";

const UserProfilePage = () => {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <div className="w-full min-h-fit custom-margin layout-container">
      <div className="w-full">
        <div
          className={cn("bg-black rounded-lg shadow-lg p-6 mb-6", "mobile:p-4")}
        >
          <UserProfileHeader />
          <UserCameraAndLinks />
        </div>

        {/* Tabs */}
        <div className="bg-black rounded-lg shadow-lg">
          <UserTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Tab Content */}
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
    </div>
  );
};

export default UserProfilePage;
