"use client";

import React from "react";
import useGetUser from "@/hooks/api/my-page/useGetUser";
import useProfileTabs from "@/hooks/ui/my-page/useProfileTabs";
import ProfileSection from "@/components/features/my-page/ProfileSection";
import TabSection from "@/components/features/my-page/TabSection";

const MyPage = () => {
  const { data: user } = useGetUser();
  const { activeTab, setActiveTab } = useProfileTabs();
  const userData = user?.[0];

  return (
    <div className="w-full min-h-fit">
      <ProfileSection userData={userData} />

      <TabSection
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        user_id={userData?.user_id}
      />
    </div>
  );
};

export default MyPage;
