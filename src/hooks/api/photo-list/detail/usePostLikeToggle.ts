import { useToast } from "@/hooks/useToast";
import postLikeToggle from "@/service/photo-list/detail/postLikeToggle";
import { useMutation } from "@tanstack/react-query";

const usePostLikeToggle = () => {
  const { success, error: toastError } = useToast();

  const mutation = useMutation({
    mutationFn: ({post_id, user_id}: {post_id: number, user_id: string}) => postLikeToggle({post_id, user_id}),
    retry: 1,
    onSuccess: () => {
      success("추천 성공");
    },
    onError: () => {
      toastError("추천 실패. 잠시후 다시 시도해주세요");
    },
  });

  return { ...mutation };
};

export default usePostLikeToggle;