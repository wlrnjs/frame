import { useToast } from "@/hooks/ui/useToast";
import postFeedback, { postFeedbackProps } from "@/service/support/feedback/postFeedback";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePostFeedback = () => {
  const { success, error: toastError } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: postFeedbackProps) => postFeedback(data),
    retry: 1,
    onSuccess: () => {
      success("개선요청이 접수되었습니다.");
      queryClient.invalidateQueries({ queryKey: ['feedback'] });
    },
    onError: () => {
      toastError("개선요청 생성 실패");
    },
  });
};

export default usePostFeedback;