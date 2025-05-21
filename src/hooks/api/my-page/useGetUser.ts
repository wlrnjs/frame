"use client"

import getUser from "@/service/my-page/getUser";
import { useQuery } from "@tanstack/react-query";
import useUserId from "@/hooks/useUserId";

const useGetUser = () => {
  const userId = useUserId();

  return useQuery({
    queryKey: ["user"],
    queryFn: () => getUser({ userId: userId! }),
    enabled: !!userId,
    retry: 1,
  });
};

export default useGetUser;