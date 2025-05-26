"use client";

import { useToast } from "@/hooks/ui/useToast";
import postLikeComment from "@/service/comments/postLikeComment";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

interface PostLikeCommentProps {
  id: string;
}

const usePostLikeComment = () => {
  const { success, error: toastError } = useToast();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ id }: PostLikeCommentProps) => postLikeComment({ id }),
    retry: 1,
    onSuccess: (_, { id }: PostLikeCommentProps) => {
      success("추천 성공");
      queryClient.invalidateQueries({
        queryKey: ["comment", [id]],
        refetchType: 'all'
      });
    },
    onError: () => {
      toastError("추천 실패");
    },
  });

  return { ...mutation };
};

export default usePostLikeComment;
