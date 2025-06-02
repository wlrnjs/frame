import React from "react";
import { TabType } from "@/types/ProfileType";
import { ListItemType } from "@/types/ListType";
import PostGridItem from "../profile/PostGridItem";

interface TabContentProps {
  activeTab: TabType;
  data: ListItemType[];
}

// 탭 콘텐츠 컴포넌트
// TODO: PostGridItem, PostGrid 삭제
const TabContent = ({ activeTab, data }: TabContentProps) => {
  const renderPostGrids = (data: ListItemType[]) =>
    data.length > 0 ? (
      <div className="flex flex-col gap-[20px]">
        {data.map((item, index) => (
          <PostGridItem key={index} data={item} />
        ))}
      </div>
    ) : (
      <div className="text-white">작성한 게시글이 없습니다.</div>
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
