import getEventJoin from "@/service/event/getEventJoin";
import { useQuery } from "@tanstack/react-query";

const useGetEventJoin = (id: string) => {
  return useQuery({
    queryKey: ["eventJoin", id],
    queryFn: () => getEventJoin(id),
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    retry: 1,
  });
};

export default useGetEventJoin;