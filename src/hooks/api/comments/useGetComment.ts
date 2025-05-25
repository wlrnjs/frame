import getComment from "@/service/comments/getComment";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { CommentItemType } from "@/types/CommentType";

const useGetComment = (id: string, type: CommentItemType) => {
  return useQuery({
    queryKey: ["comment", id],
    queryFn: () => getComment({ id, type }),
    placeholderData: keepPreviousData,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    retry: 1,
  });
};

export default useGetComment;