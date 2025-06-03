"use client"

import getUserLikeData, { getUserLikeDataProps } from "@/service/user-profile/getUserLikeData";
import { useQuery } from "@tanstack/react-query";

const useGetUserLikeData = ({user_id}: getUserLikeDataProps) => {
  return useQuery({
    queryKey: ["user-likes", user_id],
    queryFn: () => getUserLikeData({user_id}),
    retry: 1,
  });
};

export default useGetUserLikeData;