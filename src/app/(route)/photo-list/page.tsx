"use client";

import ListItem from "@/components/list/ListItem";
import SearchContainer from "@/components/list/SearchContainer";
import React from "react";
import useGetImgList from "@/service/hooks/list/useGetImgList";
import useGetPostsList from "@/service/hooks/list/useGetPostsList";
import Masonry from "react-masonry-css";

export interface ImgListType {
  id: string;
  image_url: string;
  posts_id: number;
}

export interface ListItemType {
  camera_info: string;
  category: string;
  created_at: string;
  description: string;
  id: number;
  img_url: string;
  location: string;
  post_id: number;
  title: string;
  user_id: string;
  nickname: string;
}

const Page = () => {
  const { data: postsList } = useGetPostsList();
  const { data: imgList } = useGetImgList();

  const renderedItems = postsList?.map((item: ListItemType) => {
    const matchedImages = imgList?.filter(
      (img: ImgListType) => img.posts_id === item.post_id
    );
    return <ListItem key={item.id} data={item} imgData={matchedImages} />;
  });

  // Masonry 브레이크포인트 설정
  const breakpointColumnsObj = {
    default: 5, // 기본 5개 컬럼
    1600: 4,    // 1600px 이하에서는 4개 컬럼
    1200: 3,    // 1200px 이하에서는 3개 컬럼
    900: 2,     // 900px 이하에서는 2개 컬럼
    600: 1      // 600px 이하에서는 1개 컬럼
  };

  return (
    <div className="w-full min-h-screen custom-margin layout-container">
      <div className="flex items-start justify-center mt-[10px] gap-10">
        <div className="w-full bg-black rounded-[5px] p-5">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex w-auto -ml-4"
            columnClassName="pl-4 bg-clip-padding"
            style={{ display: 'flex' }}
          >
            {renderedItems}
          </Masonry>
        </div>
        <SearchContainer />
      </div>
    </div>
  );
};

export default Page;
