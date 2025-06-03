"use client"

import getUserLikePost, { getUserLikePostProps } from "@/service/user-profile/getUserLikePost";
import { useQuery } from "@tanstack/react-query";

const useGetUserLikePost = ({post_id}: getUserLikePostProps) => {
  return useQuery({
    queryKey: ["user-likes", post_id],
    queryFn: () => getUserLikePost({post_id}),
    retry: 1,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
  });
};

export default useGetUserLikePost;