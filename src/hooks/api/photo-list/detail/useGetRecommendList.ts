import { getRecommendList, getRecommendListProps, getRecommendPhotoList } from "@/service/photo-list/detail/getRecommendList";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useGetRecommendList = ({ category, offset, limit }: getRecommendListProps) => {
  return useQuery({
    queryKey: ["recommendList", category, offset, limit],
    queryFn: () => getRecommendList({ category, offset, limit }),
    placeholderData: keepPreviousData,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    retry: 1,
  });
};

export const useGetRecommendPhotoList = ({ id, offset, limit }: getRecommendListProps) => {
  return useQuery({
    queryKey: ["recommendPhotoList", id, offset, limit],
    queryFn: () => getRecommendPhotoList({ id, offset, limit }),
    placeholderData: keepPreviousData,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    retry: 1,
  });
};