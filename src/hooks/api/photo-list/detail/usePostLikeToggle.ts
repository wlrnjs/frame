import { revalidatePhotoList } from "@/app/actions";
import { useToast } from "@/hooks/useToast";
import postLikeToggle from "@/service/photo-list/detail/postLikeToggle";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const usePostLikeToggle = () => {
  const { success, error: toastError } = useToast();
  const router = useRouter();

  return useMutation({
    mutationFn: ({post_id, user_id}: {post_id: number, user_id: string}) => postLikeToggle({post_id, user_id}),
    retry: 1,
    onSuccess: async (post_id) => {
      success("추천 성공");
      await revalidatePhotoList();
      router.push(`/photo-list/detail?id=${post_id}`);
    },
    onError: () => {
      toastError("추천 실패");
    },
  });
};

export default usePostLikeToggle;