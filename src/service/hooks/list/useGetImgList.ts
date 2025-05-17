"use client"

import getImgList from "@/service/list/getImgList";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const useGetImgList = () => {
  return useQuery({
    queryKey: ["imgList"],
    queryFn: () => getImgList(),
    placeholderData: keepPreviousData,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    retry: 1,
  });
};

export default useGetImgList;