import getEventJoin from "@/service/event/getEventJoin";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const useGetEventJoin = (id: string) => {
  return useQuery({
    queryKey: ["eventJoin", id],
    queryFn: () => getEventJoin(id),
    placeholderData: keepPreviousData,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    retry: 1,
  });
};

export default useGetEventJoin;