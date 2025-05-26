import { useToast } from "@/hooks/ui/useToast";
import postLikeToggle from "@/service/photo-list/detail/postLikeToggle";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface PostLikeToggleProps {
  id: number;
  post_id: string;
}

const usePostLikeToggle = () => {
  const { success, error: toastError } = useToast();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({id, post_id}: PostLikeToggleProps) => postLikeToggle({id, post_id}),
    retry: 1,
    onSuccess: (_, {post_id}: PostLikeToggleProps) => {
      const id = String(post_id);
      success("추천 성공");
      queryClient.invalidateQueries({
        queryKey: ["likeToggle", [id]],
        refetchType: 'all'
      });
    },
    onError: () => {
      toastError("추천 실패. 잠시후 다시 시도해주세요");
    },
  });

  return { ...mutation };
};

export default usePostLikeToggle;