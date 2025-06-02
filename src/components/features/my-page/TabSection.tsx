import { TabType } from "@/types/ProfileType";
import React from "react";
import UserTabs from "../profile/UserTabs";
import { cn } from "@/utils";
import TabContent from "./TabContent";
import useGetUserPostData from "@/hooks/api/user-profile/useGetUserPostData";

interface TabSectionProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  user_id: string;
}

// 탭 섹션 컴포넌트
const TabSection = ({ activeTab, setActiveTab, user_id }: TabSectionProps) => {
  const { data: userPostData } = useGetUserPostData({ user_id });
  console.log("userPostData: ", userPostData);

  return (
    <div className="bg-black rounded-lg shadow-lg">
      <UserTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className={cn("p-6", "mobile:p-1")}>
        <TabContent activeTab={activeTab} data={userPostData} />
      </div>
    </div>
  );
};

export default TabSection;
