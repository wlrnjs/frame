import { useToast } from "@/hooks/useToast";
import postWrite, { postPostsProps } from "@/service/write/postWrite";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const usePostWrite = () => {
  const { success, error: toastError } = useToast();
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: (data: postPostsProps) => postWrite(data),
    retry: 1,
    onSuccess: (data) => {
      success("게시글이 등록되었습니다.");
      router.push(`/photo-list/detail?id=${data}`);
      queryClient.invalidateQueries({ queryKey: ['imgList'] });
    },
    onError: () => {
      toastError("게시글 등록 실패");
    },
  });
};

export default usePostWrite;