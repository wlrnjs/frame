"use client";

import React from "react";
import {
  useGetRecommendList,
  useGetRecommendPhotoList,
} from "@/hooks/api/photo-list/detail/useGetRecommendList";
import Masonry from "react-masonry-css";
import { MASONRY_BREAKPOINTS } from "@/constants/MASONRY";
import ListItem from "../ListItem";
import { cn } from "@/utils";
import LOGO from "@/icon/LOGO";
import Link from "next/link";
import Spinner from "@/icon/Spinner";

interface RecommendContainerProps {
  category: string;
  id: string;
}

// TODO: 무한 스크롤 도입 필요
const RecommendContainer = ({ category, id }: RecommendContainerProps) => {
  const { data, isLoading } = useGetRecommendList({
    category,
    offset: 0,
    limit: 10,
  });

  const postIds = data?.map((post) => post.post_id);

  const { data: imgList } = useGetRecommendPhotoList({
    id: postIds,
    offset: 0,
    limit: 10,
  });

  if (isLoading) return <Spinner />;

  const renderedItems = data?.map((post) => {
    const matchedImages = imgList?.filter(
      (img) => img.posts_id === post.post_id
    );
    return (
      <ListItem id={id} key={post.id} data={post} imgData={matchedImages!} />
    );
  });

  return (
    <div
      className={cn(
        "w-full h-auto flex items-start justify-start rounded-[5px] px-28",
        "mobile:px-0"
      )}
    >
      <div className="w-full h-full flex flex-col items-start justify-center gap-5">
        <h1 className="text-[20px] font-bold pl-4">추천 사진</h1>
        {/* 추천 사진 보여주기 (무한스크롤, masonry 스타일) */}
        {renderedItems && renderedItems.length > 0 ? (
          <Masonry
            breakpointCols={MASONRY_BREAKPOINTS}
            className="w-full flex"
            columnClassName="pl-4 bg-clip-padding"
          >
            {renderedItems}
          </Masonry>
        ) : (
          <div className="w-full h-[300px] flex-col-center gap-2 bg-black text-white">
            <LOGO />
            <div className="flex flex-col gap-2 items-center">
              <h1 className="text-[20px] font-bold">
                해당 카테고리로 추천된 사진이 없습니다.
              </h1>
              <Link href="/write" className="underline">
                글쓰러 가기
              </Link>
              <p>가장 먼저 이미지를 추가해보세요!</p>
            </div>
          </div>
        )}
        {(data?.length === 0 || imgList?.length === 0) && (
          <div className="w-full h-[300px] flex-col-center bg-black text-white">
            <h1 className="text-[20px] font-bold">
              {`이 ${category} 카테고리로 추천된 사진이 없습니다.`}
            </h1>
            <p>다른 카테고리로 이동해보세요!</p>
            <button className="text-white">#도시</button>
            <button className="text-white">#풍경</button>
            <button className="text-white">#흑백</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommendContainer;
