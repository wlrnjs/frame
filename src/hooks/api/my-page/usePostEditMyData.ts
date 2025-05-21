import { useToast } from "@/hooks/useToast";
import postEditMyData, { postEditMyDataProps } from "@/service/my-page/postEditMyData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePostEditMyData = () => {
  const { success, error: toastError } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: postEditMyDataProps) => postEditMyData(data),
    retry: 1,
    onSuccess: () => {
      success("프로필이 수정되었습니다.");
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: () => {
      toastError("프로필 수정 실패");
    },
  });
};

export default usePostEditMyData;