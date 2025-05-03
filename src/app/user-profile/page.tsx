"use client";

import React, { useState } from "react";
import UserProfileHeader from "@/components/profile/UserProfileHeader";
import UserCameraAndLinks from "@/components/profile/UserCameraAndLinks";
import PostGrid from "@/components/profile/PostGrid";
import UserTabs from "@/components/profile/UserTabs";

const UserProfilePage = () => {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <div className="w-full min-h-screen pt-[120px]">
      <div className="max-w-full px-4 mx-[180px]">
        <div className="bg-black rounded-lg shadow-lg p-6 mb-6">
          <UserProfileHeader />
          <UserCameraAndLinks />
        </div>

        {/* Tabs */}
        <div className="bg-black rounded-lg shadow-lg">
          <UserTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Tab Content */}
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

export default UserProfilePage;
