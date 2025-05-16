import { useToast } from "@/hooks/useToast";
import postInquiry, { postInquiryProps } from "@/service/support/inquiry/postInquiry";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePostInquiry = () => {
  const { success, error: toastError } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: postInquiryProps) => postInquiry(data),
    retry: 1,
    onSuccess: () => {
      success("문의가 접수되었습니다.");
      queryClient.invalidateQueries({ queryKey: ['inquiry'] });
    },
    onError: () => {
      toastError("문의 접수 실패");
    },
  });
};

export default usePostInquiry;