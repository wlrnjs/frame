"use client";

import ListItem from "@/components/list/ListItem";
import SearchContainer from "@/components/list/SearchContainer";
import React from "react";
import useGetImgList from "@/service/hooks/list/useGetImgList";
import useUserId from "@/utils/useUserId";

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
  const { data: imgList } = useGetImgList();
  const userId = useUserId();

  console.log(userId);
  console.log(imgList);

  return (
    <div className="w-full min-h-screen custom-margin layout-container">
      <div className="flex items-start justify-center mt-[10px] gap-10">
        <div className="w-full bg-black rounded-[5px] p-5">
          <div className="grid grid-cols-5 gap-4">
            {imgList?.map((item: ListItemType) => (
              <ListItem key={item.id} data={item} />
            ))}
          </div>
        </div>
        <SearchContainer />
      </div>
    </div>
  );
};

export default Page;
