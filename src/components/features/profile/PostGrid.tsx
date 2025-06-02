import React from "react";
import PostGridItem from "./PostGridItem";
import { ListItemType } from "@/types/ListType";

interface PostGridProps {
  data: ListItemType[];
}

const PostGrid = ({ data }: PostGridProps) => {
  // TODO: src 수정 필요
  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((item, index) => (
        <PostGridItem
          key={index}
          src={item.img_urls.length > 0 ? item.img_urls[0] : "/BlackPhoto.JP"}
          alt={`Image ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default PostGrid;
