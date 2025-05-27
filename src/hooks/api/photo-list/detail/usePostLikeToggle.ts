import { useToast } from "@/hooks/ui/useToast";
import postLikeToggle from "@/service/photo-list/detail/postLikeToggle";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface PostLikeToggleProps {
  post_id: number;
}

const usePostLikeToggle = () => {
  const { success, error: toastError } = useToast();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({post_id}: PostLikeToggleProps) => postLikeToggle({post_id}),
    retry: 1,
    onSuccess: (_, {post_id}: PostLikeToggleProps) => {
      success("추천 성공");
      queryClient.invalidateQueries({
        queryKey: ["likeToggle", post_id],
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