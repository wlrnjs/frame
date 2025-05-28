import { revalidatePhotoList } from "@/app/actions";
import { useToast } from "@/hooks/ui/useToast";
import postWrite, { postPostsProps } from "@/service/write/postWrite";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const usePostWrite = () => {
  const { success, error: toastError } = useToast();
  const router = useRouter();

  return useMutation({
    mutationFn: (data: postPostsProps) => postWrite(data),
    retry: 1,
    onSuccess: async (data) => {
      success("게시글이 등록되었습니다.");
      await revalidatePhotoList();
      router.replace(`/photo-list/detail?id=${data}`);
    },
    onError: () => {
      toastError("게시글 등록 실패");
    },
  });
};

export default usePostWrite;