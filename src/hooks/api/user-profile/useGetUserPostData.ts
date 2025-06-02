"use client"

import getUserPost, { getUserPostProps } from "@/service/user-profile/getUserPost";
import { useQuery } from "@tanstack/react-query";

const useGetUserPostData = ({user_id}: getUserPostProps) => {
  return useQuery({
    queryKey: ["user-posts", user_id],
    queryFn: () => getUserPost({user_id}),
    retry: 1,
  });
};

export default useGetUserPostData;