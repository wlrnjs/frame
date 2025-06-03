"use client"

import getUserPost, { getUserPostProps } from "@/service/user-profile/getUserPost";
import { useQuery } from "@tanstack/react-query";

const useGetUserPostData = ({user_id}: getUserPostProps) => {
  return useQuery({
    queryKey: ["user-posts", user_id],
    queryFn: () => getUserPost({user_id}),
    retry: 1,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
  });
};

export default useGetUserPostData;