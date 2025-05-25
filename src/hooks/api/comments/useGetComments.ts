import getComment from "@/service/comments/getComment";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const useGetComments = (id: string) => {
  return useQuery({
    queryKey: ["comment", id],
    queryFn: () => getComment(id),
    placeholderData: keepPreviousData,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    retry: 1,
  });
};

export default useGetComments;