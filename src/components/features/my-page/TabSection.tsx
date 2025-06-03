import { TabType } from "@/types/ProfileType";
import React from "react";
import UserTabs from "../profile/UserTabs";
import { cn } from "@/utils";
import TabContent from "./TabContent";
import useGetUserPostData from "@/hooks/api/user-profile/useGetUserPostData";
import useGetUserLikeData from "@/hooks/api/user-profile/useGetUserLikeData";
import useGetUserLikePost from "@/hooks/api/user-profile/useGetUserLikePost";

interface TabSectionProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  user_id: string;
}

interface UserLikeData {
  created_at: string;
  id: number;
  post_id: number;
  user_id: string;
}

// 탭 섹션 컴포넌트
const TabSection = ({ activeTab, setActiveTab, user_id }: TabSectionProps) => {
  const { data: userPostData } = useGetUserPostData({ user_id }); // 게시글 데이터
  const { data: userLikeId } = useGetUserLikeData({ user_id }); // 좋아요한 게시글 ID

  const likeId = userLikeId?.map((item: UserLikeData) => item.post_id); // 좋아요한 게시글 출력

  const { data: userLikePost } = useGetUserLikePost({ post_id: likeId }); // 좋아요한 게시글 데이터

  return (
    <div className="bg-black rounded-lg shadow-lg">
      <UserTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className={cn("p-6", "mobile:p-1")}>
        <TabContent
          activeTab={activeTab}
          data={userPostData}
          userLikePost={userLikePost}
        />
      </div>
    </div>
  );
};

export default TabSection;
