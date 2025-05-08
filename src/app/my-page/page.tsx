"use client";

import React, { useState } from "react";
import UserProfileHeader from "@/components/profile/UserProfileHeader";
import UserCameraAndLinks from "@/components/profile/UserCameraAndLinks";
import UserTabs from "@/components/profile/UserTabs";
import PostGrid from "@/components/profile/PostGrid";
import { useRouter } from "next/navigation";
import { supabase } from "@/service/lib/supabaseClient";

const MyPage = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      router.push("/");
    } catch (error) {
      console.error("로그아웃 중 오류 발생:", error);
      router.push("/");
    }
  };

  const btnStyle =
    "h-[40px] bg-[#1F1F1F] border border-[#4B4B4B] rounded-[5px] px-4 py-2 text-[14px] text-white hover:bg-black transition-all duration-300 ease-out";

  return (
    <div className="w-full min-h-screen custom-margin">
      <div className="max-w-full mx-[200px]">
        {/* 프로필 섹션 */}
        <div className="bg-black rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <UserProfileHeader />
              <UserCameraAndLinks />
            </div>
            <div className="flex gap-4">
              <button className={btnStyle}>프로필 편집</button>
              <button onClick={handleLogout} className={btnStyle}>
                로그아웃
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
