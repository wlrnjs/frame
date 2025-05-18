"use client"

import getPostsList from "@/service/list/getPostsList";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const useGetPostsList = () => {
  return useQuery({
    queryKey: ["postsList"],
    queryFn: () => getPostsList(),
    placeholderData: keepPreviousData,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    retry: 1,
  });
};

export default useGetPostsList;