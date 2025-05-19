import getImgDetail from "@/service/photo-list/detail/getImgDetail";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const useGetImgDetail = (id: string) => {
  return useQuery({
    queryKey: ["postDetail", id],
    queryFn: () => getImgDetail(id),
    placeholderData: keepPreviousData,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    retry: 1,
  });
};

export default useGetImgDetail;