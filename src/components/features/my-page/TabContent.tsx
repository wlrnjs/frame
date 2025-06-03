import React from "react";
import { TabType } from "@/types/ProfileType";
import { ListItemType } from "@/types/ListType";
import Masonry from "react-masonry-css";
import { MASONRY_BREAKPOINTS } from "@/constants/MASONRY";
import ListItem from "../photo-list/ListItem";

interface TabContentProps {
  activeTab: TabType;
  data: ListItemType[];
  userLikePost: ListItemType[];
}

// 탭 콘텐츠 컴포넌트
const TabContent = ({ activeTab, data, userLikePost }: TabContentProps) => {
  const renderPostGrids = (data: ListItemType[]) =>
    data?.length > 0 ? (
      <Masonry
        breakpointCols={MASONRY_BREAKPOINTS}
        className="flex w-auto -ml-4"
        columnClassName="pl-4 bg-clip-padding"
      >
        {data.map((item) => (
          <ListItem key={item.id} data={item} />
        ))}
      </Masonry>
    ) : (
      <div className="text-white">등록된 게시글이 없습니다.</div>
    );

  const renderLikePostGrids = (userLikePost: ListItemType[]) =>
    userLikePost?.length > 0 ? (
      <Masonry
        breakpointCols={MASONRY_BREAKPOINTS}
        className="flex w-auto -ml-4"
        columnClassName="pl-4 bg-clip-padding"
      >
        {userLikePost.map((item) => (
          <ListItem key={item.id} data={item} />
        ))}
      </Masonry>
    ) : (
      <div className="text-white">관심 이미지가 없습니다.</div>
    );

  switch (activeTab) {
    case "posts":
      return renderPostGrids(data);
    case "liked":
      return renderLikePostGrids(userLikePost);
    default:
      return null;
  }
};

export default TabContent;
