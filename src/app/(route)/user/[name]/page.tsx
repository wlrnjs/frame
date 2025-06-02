"use client";

import React from "react";
import ProfileSection from "@/components/features/my-page/ProfileSection";
import TabSection from "@/components/features/my-page/TabSection";
import useProfileTabs from "@/hooks/ui/my-page/useProfileTabs";
import { useParams } from "next/navigation";
import useGetUserData from "@/hooks/api/user-profile/useGetUserData";
import Spinner from "@/icon/Spinner";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/ui/useToast";
import useGetUserPostData from "@/hooks/api/user-profile/useGetUserPostData";

const UserProfilePage = () => {
  const { activeTab, setActiveTab } = useProfileTabs();
  const router = useRouter();
  const toast = useToast();
  const params = useParams();
  const username = params.name as string;
  const encoded = username;
  const decoded = decodeURIComponent(encoded);

  const {
    data: userData,
    isLoading,
    isError,
  } = useGetUserData({ nickname: decoded });

  const {
    data: userPostData,
    isLoading: userPostLoading,
    isError: userPostError,
  } = useGetUserPostData({ user_id: userData?.[0].user_id });
  console.log("userPostData: ", userPostData);

  if (isLoading || userPostLoading) {
    return (
      <div className="w-full min-h-screen custom-margin layout-container">
        <Spinner />
      </div>
    );
  }

  if (isError || userPostError) {
    toast.error("유저를 찾을 수 없습니다.");
    router.push("/404");
  }

  return (
    <div className="w-full min-h-fit custom-margin layout-container">
      <div className="w-full">
        {/* 프로필 섹션 */}
        <ProfileSection userData={userData?.[0]} onEditClick={() => {}} />

        {/* 탭 섹션 */}
        <TabSection
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          user_id={userData?.[0].user_id}
        />
      </div>
    </div>
  );
};

export default UserProfilePage;
