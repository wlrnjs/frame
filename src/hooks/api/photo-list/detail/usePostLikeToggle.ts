import { useToast } from "@/hooks/ui/useToast";
import postLikeToggle from "@/service/photo-list/detail/postLikeToggle";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface PostLikeToggleProps {
  id: number;
}

const usePostLikeToggle = () => {
  const { success, error: toastError } = useToast();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({id}: PostLikeToggleProps) => postLikeToggle({id}),
    retry: 1,
    onSuccess: (_, {id}) => {
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