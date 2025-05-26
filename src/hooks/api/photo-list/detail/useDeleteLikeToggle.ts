import { useToast } from "@/hooks/ui/useToast";
import deleteLikeToggle from "@/service/photo-list/detail/deleteLikeToggle";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface DeleteLikeToggleProps {
  id: number;
}

const useDeleteLikeToggle = () => {
  const { success, error: toastError } = useToast();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ id }: DeleteLikeToggleProps) => 
      deleteLikeToggle({ id }),
    retry: 1,
    onSuccess: (_, {id}: DeleteLikeToggleProps) => {
      success("추천이 취소되었습니다.");
      queryClient.invalidateQueries({
        queryKey: ["likeToggle", [id]],
        refetchType: 'all'
      });
    },
    onError: () => {
      toastError("추천 취소 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    },
  });

  return { ...mutation };
};

export default useDeleteLikeToggle;