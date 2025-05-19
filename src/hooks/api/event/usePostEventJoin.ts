"use client";

import { useToast } from "@/hooks/useToast";
import postEventJoin from "@/service/event/postEventJoin";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

const usePostEventJoin = () => {
  const { success, error: toastError } = useToast();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ id, userId }: { id: string; userId: string }) => postEventJoin({ id, userId }),
    retry: 1,
    onSuccess: (res) => {
      success("이벤트 참여가 완료되었습니다.");
      const id = String(res.data[0].event_id);
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
