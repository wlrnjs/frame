import getImgDetail from "@/service/list/getImgDetail";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const useGetImgDetail = (id: string) => {
  return useQuery({
    queryKey: ["img", id],
    queryFn: () => getImgDetail(id),
    placeholderData: keepPreviousData,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    retry: 1,
  });
};

export default useGetImgDetail;