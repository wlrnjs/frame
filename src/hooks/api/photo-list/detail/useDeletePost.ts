"use client";

import { revalidatePhotoList } from "@/app/actions";
import { useToast } from "@/hooks/ui/useToast";
import deletePost from "@/service/photo-list/detail/deletePost";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useDeletePost = () => {
  const { success, error: toastError } = useToast();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: ({post_id}: {post_id: number}) => 
      deletePost({post_id}),
    retry: 1,
    onSuccess: async () => {
      success("게시글이 삭제되었습니다.");
      await revalidatePhotoList();
      router.replace("/photo-list");
    },
    onError: () => {
      toastError("게시글 삭제 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    },
  });

  return { ...mutation };
};

export default useDeletePost;