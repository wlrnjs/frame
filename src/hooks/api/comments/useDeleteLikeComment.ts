"use client";

import { useToast } from "@/hooks/ui/useToast";
import deleteLikeComment from "@/service/comments/deleteLikeComment";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

interface DeleteCommentProps {
  id: string;
  userId: string;
}

const useDeleteLikeComment = () => {
  const { success, error: toastError } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, userId }: DeleteCommentProps) => deleteLikeComment({ id, userId }),
    retry: 1,
    onSuccess: (_, { id }: DeleteCommentProps) => {
      success("좋아요가 삭제되었습니다.");
      queryClient.invalidateQueries({
        queryKey: ["comment", [id]],
        refetchType: 'all'
      });
    },
    onError: () => {
      toastError("좋아요 삭제 실패");
    },
  });
};

export default useDeleteLikeComment;
