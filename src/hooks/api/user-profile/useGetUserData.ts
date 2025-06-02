"use client"

import getUserData from "@/service/user-profile/getUserData";
import { useQuery } from "@tanstack/react-query";

const useGetUserData = ({nickname}: {nickname: string}) => {
  return useQuery({
    queryKey: ["user-profile"],
    queryFn: () => getUserData({nickname}),
    retry: 1,
  });
};

export default useGetUserData;