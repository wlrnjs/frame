"use client";

import ListItem from "@/components/list/ListItem";
import SearchContainer from "@/components/list/SearchContainer";
import React from "react";
import useGetImgList from "@/service/hooks/list/useGetImgList";
import useGetPostsList from "@/service/hooks/list/useGetPostsList";

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

  console.log(postsList);
  console.log(imgList);

  return (
    <div className="w-full min-h-screen custom-margin layout-container">
      <div className="flex items-start justify-center mt-[10px] gap-10">
        <div className="w-full bg-black rounded-[5px] p-5">
          <div className="grid grid-cols-5 gap-4">
            {postsList?.map((item: ListItemType) => {
              const matchedImages = imgList?.filter(
                (img: ImgListType) => img.posts_id === item.post_id
              );
              console.log("matchedImages: ", matchedImages);

              return (
                <ListItem key={item.id} data={item} images={matchedImages} />
              );
            })}
          </div>
        </div>
        <SearchContainer />
      </div>
    </div>
  );
};

export default Page;
