import getNoticeList from "@/service/support/notice/getNoticeList";
import { keepPreviousData, useQuery } from "@tanstack/react-query";


const useGetNoticeList = () => {
  return useQuery({
    queryKey: ["notice"],
    queryFn: () => getNoticeList(),
    placeholderData: keepPreviousData,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    retry: 1,
  });
};

export default useGetNoticeList;