"use client";

import React from "react";
import SearchContainer from "@/components/features/photo-list/SearchContainer";
import { ListItemType } from "@/types/ListType";
import { cn } from "@/utils";
import PhotoListContent from "@/components/features/photo-list/PhotoListContent";

interface PhotoListClientProps {
  initialPosts: ListItemType[] | null;
  error?: boolean;
}

const PhotoListClient = ({
  initialPosts,
  error = false,
}: PhotoListClientProps) => {
  return (
    <div className="w-full min-h-full custom-margin layout-container">
      <div
        className={cn(
          "flex items-start justify-center mt-[10px] gap-10",
          "mobile:flex-col-reverse mobile:gap-2"
        )}
      >
        <div className="w-full bg-black rounded-[5px] p-5">
          <PhotoListContent posts={initialPosts} error={error} />
        </div>
        <div className="mobile:w-full">
          <SearchContainer />
        </div>
      </div>
    </div>
  );
};

export default PhotoListClient;
