"use client";

import { useToast } from "@/hooks/ui/useToast";
import deleteComment from "@/service/comments/deleteComment";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

const useDeleteComment = () => {
  const { success, error: toastError } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, userId }: { id: string; userId: string }) => deleteComment({ id, userId }),
    retry: 1,
    onSuccess: (res) => {
      success("댓글이 삭제되었습니다.");
      const id = String(res.data[0].post_id);
      queryClient.invalidateQueries({ queryKey: ["comment", id] });
    },
    onError: () => {
      toastError("댓글 삭제 실패");
    },
  });
};

export default useDeleteComment;
