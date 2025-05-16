import getEvents from "@/service/event/getEvents";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const useGetEvents = () => {
  return useQuery({
    queryKey: ["events"],
    queryFn: () => getEvents(),
    placeholderData: keepPreviousData,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    retry: 1,
  });
};

export default useGetEvents;