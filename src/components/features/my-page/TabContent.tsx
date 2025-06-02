import React from "react";
import PostGrid from "../profile/PostGrid";
import { TabType } from "@/types/ProfileType";
import { ListItemType } from "@/types/ListType";

interface TabContentProps {
  activeTab: TabType;
  data: ListItemType[];
}

// 탭 콘텐츠 컴포넌트
const TabContent = ({ activeTab, data }: TabContentProps) => {
  const renderPostGrids = (data: ListItemType[]) => (
    <div className="flex flex-col gap-[20px]">
      <PostGrid data={data} />
      <PostGrid data={data} />
    </div>
  );

  switch (activeTab) {
    case "posts":
      return renderPostGrids(data);
    case "liked":
      return renderPostGrids(data);
    default:
      return null;
  }
};

export default TabContent;
