"use client";

import React from "react";
import ListItem from "@/components/list/ListItem";
import SearchContainer from "@/components/list/SearchContainer";
import Masonry from "react-masonry-css";
import EmptyBox from "@/components/statusBox/EmptyBox";
import ErrorBox from "@/components/statusBox/ErrorBox";
import LoadingBox from "@/components/statusBox/LoadingBox";
import { ImgListType, ListItemType } from "@/types/ListType";

interface PhotoListClientProps {
  initialPosts: ListItemType[] | null;
  initialImages: ImgListType[] | null;
  error?: boolean;
}

// Masonry 브레이크포인트 설정
const breakpointColumnsObj = {
  default: 5,
  1600: 4,
  1200: 3,
  900: 2,
  600: 1,
};

const PhotoListClient = ({
  initialPosts,
  initialImages,
  error = false,
}: PhotoListClientProps) => {
  const posts = initialPosts;
  const images = initialImages;

  // 분기 처리 및 렌더링 함수
  const renderContent = () => {
    if (error) return <ErrorBox />;
    if (!posts || !images) return <LoadingBox />;

    const renderedItems = posts.map((item: ListItemType) => {
      const matchedImages = images.filter(
        (img: ImgListType) => img.posts_id === item.post_id
      );
      return <ListItem key={item.id} data={item} imgData={matchedImages} />;
    });

    if (renderedItems.length === 0) return <EmptyBox />;
    return (
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto -ml-4"
        columnClassName="pl-4 bg-clip-padding"
      >
        {renderedItems}
      </Masonry>
    );
  };

  return (
    <div className="w-full min-h-screen custom-margin layout-container">
      <div className="flex items-start justify-center mt-[10px] gap-10">
        <div className="w-full bg-black rounded-[5px] p-5">
          {renderContent()}
        </div>
        <SearchContainer />
      </div>
    </div>
  );
};

export default PhotoListClient;
