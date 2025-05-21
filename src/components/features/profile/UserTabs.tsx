"use client";

import { cn } from "@/utils";
import React from "react";

interface UserTabsProps {
  activeTab: string;
  setActiveTab: (tab: "posts" | "liked") => void;
}

const UserTabs = ({ activeTab, setActiveTab }: UserTabsProps) => {
  return (
    <div className={cn("flex border-b", "mobile:justify-center")}>
      <button
        className={cn(
          "flex-1 py-3 text-center font-semibold",
          activeTab === "posts"
            ? "border-b-2 border-white text-white"
            : "text-neutral-400",
          "mobile:text-sm"
        )}
        onClick={() => setActiveTab("posts")}
      >
        게시글
      </button>
      <button
        className={cn(
          "flex-1 py-3 text-center font-semibold",
          activeTab === "liked"
            ? "border-b-2 border-white text-white"
            : "text-neutral-400",
          "mobile:text-sm"
        )}
        onClick={() => setActiveTab("liked")}
      >
        관심 이미지
      </button>
    </div>
  );
};

export default UserTabs;
