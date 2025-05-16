import getFeedbackList from "@/service/support/feedback/getFeedbackList";
import { keepPreviousData, useQuery } from "@tanstack/react-query";


const useGetFeedbackList = () => {
  return useQuery({
    queryKey: ["feedback"],
    queryFn: () => getFeedbackList(),
    placeholderData: keepPreviousData,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    retry: 1,
  });
};

export default useGetFeedbackList;