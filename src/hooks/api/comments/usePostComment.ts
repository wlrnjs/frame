"use client";

import { useToast } from "@/hooks/ui/useToast";
import postComment from "@/service/comments/postComment";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { CommentItemType } from "@/types/CommentType";

interface PostCommentProps {
  id: string;
  userId: string;
  content: string;
  type: CommentItemType;
}

const usePostComment = () => {
  const { success, error: toastError } = useToast();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ id, userId, content, type }: PostCommentProps) => postComment({ id, userId, content, type }),
    retry: 1,
    onSuccess: (_, { id, type }: PostCommentProps) => {
      success("댓글이 등록되었습니다.");
      const queryKey = type === "event" ? ["comment", id] : ["comment", id];
      queryClient.invalidateQueries({ queryKey });
    },
    onError: () => {
      toastError("댓글 등록 실패");
    },
  });

  return { ...mutation };
};

export default usePostComment;
