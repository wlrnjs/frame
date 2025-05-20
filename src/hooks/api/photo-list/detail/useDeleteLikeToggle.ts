import { useToast } from "@/hooks/useToast";
import deleteLikeToggle from "@/service/photo-list/detail/deleteLikeToggle";
import { useMutation } from "@tanstack/react-query";

const useDeleteLikeToggle = () => {
  const { success, error: toastError } = useToast();

  const mutation = useMutation({
    mutationFn: ({ id, userId }: { id: string; userId: string }) => 
      deleteLikeToggle({ id, userId }),
    retry: 1,
    onSuccess: () => {
      success("추천이 취소되었습니다.");
    },
    onError: () => {
      toastError("추천 취소 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    },
  });

  return { ...mutation };
};

export default useDeleteLikeToggle;