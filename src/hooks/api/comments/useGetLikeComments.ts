import getLikeComment from "@/service/comments/getLikeComments";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const useGetLikeComment = (ids: string[]) => {
  return useQuery({
    queryKey: ["comment", ids],
    queryFn: () => getLikeComment({ ids }),
    placeholderData: keepPreviousData,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    retry: 1,
  });
};

export default useGetLikeComment;