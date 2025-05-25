"use client";

import { useToast } from "@/hooks/ui/useToast";
import deleteComment from "@/service/comments/deleteComment";
import { CommentItemType } from "@/types/CommentType";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

interface DeleteCommentProps {
  id: string;
  postId: string;
  userId: string;
  type: CommentItemType;
}

const useDeleteComment = () => {
  const { success, error: toastError } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, userId, type }: DeleteCommentProps) => deleteComment({ id, userId, type }),
    retry: 1,
    onSuccess: (_, { postId }: DeleteCommentProps) => {
      success("댓글이 삭제되었습니다.");
      queryClient.invalidateQueries({ 
        queryKey: ["comment", postId],
        refetchType: 'all'
      });
    },
    onError: () => {
      toastError("댓글 삭제 실패");
    },
  });
};

export default useDeleteComment;
