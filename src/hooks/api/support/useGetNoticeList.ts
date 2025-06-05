import getNoticeList, { getNoticeListProps } from "@/service/support/notice/getNoticeList";
import { keepPreviousData, useQuery } from "@tanstack/react-query";


const useGetNoticeList = ({ page, limit }: getNoticeListProps) => {
  return useQuery({
    queryKey: ["notice", page, limit],
    queryFn: () => getNoticeList({ page, limit }),
    placeholderData: keepPreviousData,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    retry: 1,
  });
};

export default useGetNoticeList;