import getEventDetail from "@/service/event/getEventDetail";
import { keepPreviousData, useQuery } from "@tanstack/react-query";


const useGetEventDetail = (id: string) => {
  return useQuery({
    queryKey: ["event", id],
    queryFn: () => getEventDetail(id),
    placeholderData: keepPreviousData,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    retry: 1,
  });
};

export default useGetEventDetail;