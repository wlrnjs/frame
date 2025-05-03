"use client";

import React, { useState } from "react";
import UserProfileHeader from "@/components/profile/UserProfileHeader";
import UserCameraAndLinks from "@/components/profile/UserCameraAndLinks";
import PostGrid from "@/components/profile/PostGrid";
import LikedImageGrid from "@/components/profile/LikedImageGrid";
import UserTabs from "@/components/profile/UserTabs";

const UserProfilePage = () => {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <div className="w-full min-h-screen pt-[120px] pb-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-neutral-900 rounded-lg shadow-lg p-6 mb-6">
          <UserProfileHeader />
          <UserCameraAndLinks />
        </div>

        {/* Tabs */}
        <div className="bg-neutral-900 rounded-lg shadow-lg">
          <UserTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "posts" && <PostGrid />}
            {activeTab === "liked" && <LikedImageGrid />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
