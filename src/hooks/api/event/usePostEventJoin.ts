"use client";

import { useToast } from "@/hooks/ui/useToast";
import postEventJoin from "@/service/event/postEventJoin";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

interface PostEventJoinProps {
  id: string;
  userId: string;
}

const usePostEventJoin = () => {
  const { success, error: toastError } = useToast();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ id, userId }: PostEventJoinProps) => postEventJoin({ id, userId }),
    retry: 1,
    onSuccess: (_, { id }: PostEventJoinProps) => {
      success("이벤트 참여가 완료되었습니다.");
      queryClient.invalidateQueries({ queryKey: ["eventJoin", id] });
      queryClient.invalidateQueries({ queryKey: ["eventDetail", id] });
    },
    onError: () => {
      toastError("이벤트 참여 실패");
    },
  });

  return { ...mutation };
};

export default usePostEventJoin;
