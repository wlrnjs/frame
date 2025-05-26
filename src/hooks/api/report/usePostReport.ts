import postReport, { postReportProps } from "@/service/report/postReport";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/ui/useToast";

const usePostReport = () => {
  const toast = useToast();
  return useMutation({
    mutationFn: (data: postReportProps) => postReport(data),
    onSuccess: () => {
      toast.success("신고가 접수되었습니다.");
    },
    onError: () => {
      toast.error("신고 접수 실패");
    },
    retry: 1,
  });
};

export default usePostReport;