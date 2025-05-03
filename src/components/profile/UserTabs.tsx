"use client";

import React from "react";

interface UserTabsProps {
  activeTab: string;
  setActiveTab: (tab: "posts" | "liked") => void;
}

const UserTabs = ({ activeTab, setActiveTab }: UserTabsProps) => {
  return (
    <div className="flex border-b">
      <button
        className={`flex-1 py-3 text-center font-semibold ${
          activeTab === "posts"
            ? "border-b-2 border-white text-white"
            : "text-neutral-400"
        }`}
        onClick={() => setActiveTab("posts")}
      >
        게시글
      </button>
      <button
        className={`flex-1 py-3 text-center font-semibold ${
          activeTab === "liked"
            ? "border-b-2 border-white text-white"
            : "text-neutral-400"
        }`}
        onClick={() => setActiveTab("liked")}
      >
        관심 이미지
      </button>
    </div>
  );
};

export default UserTabs;
