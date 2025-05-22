import { TabType } from "@/types/ProfileType";
import React from "react";
import UserTabs from "../profile/UserTabs";
import { cn } from "@/utils";
import TabContent from "./TabContent";

// 탭 섹션 컴포넌트
const TabSection = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}) => (
  <div className="bg-black rounded-lg shadow-lg">
    <UserTabs activeTab={activeTab} setActiveTab={setActiveTab} />
    <div className={cn("p-6", "mobile:p-1")}>
      <TabContent activeTab={activeTab} />
    </div>
  </div>
);

export default TabSection;
