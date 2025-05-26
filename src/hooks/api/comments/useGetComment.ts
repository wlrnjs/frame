import getComment from "@/service/comments/getComment";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { CommentItemType } from "@/types/CommentType";
import { CommentType } from "@/types/CommentType";

interface GetCommentResponse {
  data: CommentType[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

interface UseGetCommentReturn {
  comments: CommentType[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

const useGetComment = (id: string, type: CommentItemType, page = 1, pageSize = 5) => {
  return useQuery<GetCommentResponse, Error, UseGetCommentReturn>({
    queryKey: ["comment", id, page, pageSize],
    queryFn: () => getComment({ id, type, page, pageSize }),
    placeholderData: keepPreviousData,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    retry: 1,
    select: (data) => ({
      comments: data?.data || [],
      totalCount: data?.totalCount || 0,
      page: data?.page || 1,
      pageSize: data?.pageSize || 5,
      totalPages: data?.totalPages || 1,
    }),
  });
};

export default useGetComment;