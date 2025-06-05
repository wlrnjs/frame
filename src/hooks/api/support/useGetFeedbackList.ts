import getFeedbackList, { getFeedbackListProps } from "@/service/support/feedback/getFeedbackList";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { SupportData } from "@/types/Support";

const useGetFeedbackList = ({ page, limit }: getFeedbackListProps) => {
  return useQuery<SupportData>({
    queryKey: ["feedback", page, limit],
    queryFn: () => getFeedbackList({ page, limit }),
    placeholderData: keepPreviousData,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    retry: 1,
  });
};

export default useGetFeedbackList;