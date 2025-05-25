"use client";

import { useToast } from "@/hooks/ui/useToast";
import postComment from "@/service/comments/postComment";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

const usePostComment = () => {
  const { success, error: toastError } = useToast();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ id, userId, content }: { id: string; userId: string; content: string }) => postComment({ id, userId, content }),
    retry: 1,
    onSuccess: (res) => {
      success("댓글이 등록되었습니다.");
      const id = String(res.data[0].post_id);
      queryClient.invalidateQueries({ queryKey: ["comment", id] });
    },
    onError: () => {
      toastError("댓글 등록 실패");
    },
  });

  return { ...mutation };
};

export default usePostComment;
