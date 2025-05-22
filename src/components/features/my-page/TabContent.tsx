import React from "react";
import PostGrid from "../profile/PostGrid";
import { TabType } from "@/types/ProfileType";

// 탭 콘텐츠 컴포넌트
const TabContent = ({ activeTab }: { activeTab: TabType }) => {
  const renderPostGrids = () => (
    <div className="flex flex-col gap-[20px]">
      <PostGrid />
      <PostGrid />
    </div>
  );

  switch (activeTab) {
    case "posts":
      return renderPostGrids();
    case "liked":
      return renderPostGrids();
    default:
      return null;
  }
};

export default TabContent;
