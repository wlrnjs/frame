import getImg from "@/service/photo-list/detail/getImg";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const useGetImg = (id: string) => {
  return useQuery({
    queryKey: ["getImg", id],
    queryFn: () => getImg(id),
    placeholderData: keepPreviousData,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    retry: 1,
  });
};

export default useGetImg;