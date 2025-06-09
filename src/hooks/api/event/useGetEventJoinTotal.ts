import getEventJoinTotal from "@/service/event/getEventJoinTotal";
import { useQuery } from "@tanstack/react-query";

const useGetEventJoinTotal = (id: string) => {
  return useQuery({
    queryKey: ["joinTotal", id],
    queryFn: () => getEventJoinTotal({ id }),
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    retry: 1,
  });
};

export default useGetEventJoinTotal;