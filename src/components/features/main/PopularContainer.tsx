"use client";

import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import useFadeUpAnimation from "@/hooks/ui/useFadeUpAnimation";
import { cn } from "@/utils";
import { supabase } from "@/service/lib/supabaseClient";
import { ListItemType } from "@/types/ListType";

const PopularContainer = () => {
  const animationClass = useFadeUpAnimation({ targetClass: "fade-up-popular" });
  const [posts, setPosts] = useState<ListItemType[]>([]);

  useEffect(() => {
    const fetchPopularPosts = async () => {
      const { data, error } = await supabase.rpc(
        "get_top_30_viewed_posts_last_month"
      );
      if (error) {
        console.error("Error fetching top 30 posts:", error);
      } else {
        setPosts(data ?? []);
      }
    };

    fetchPopularPosts();
  }, []);

  return (
    <div
      className={cn(
        "w-full h-auto layout-container my-44 text-start flex flex-col gap-24",
        "mobile:my-24 mobile:gap-14"
      )}
    >
      <div
        className={cn(
          "flex items-center pb-5 justify-between border-b-[2px] border-black font-semibold"
        )}
      >
        <h1
          className={cn("flex items-start text-[25px]", "mobile:text-[18px]")}
        >
          가장 인기있는 사진 30장
        </h1>
        <p
          className={cn(
            "text-sm pointer",
            "mobile:text-[15px] mobile:text-end"
          )}
        >
          전체보기
        </p>
      </div>

      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6",
          "mobile:grid-cols-2"
        )}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <ImageCard key={i} className={animationClass} data={posts[i]} />
        ))}
      </div>
    </div>
  );
};

export default PopularContainer;
