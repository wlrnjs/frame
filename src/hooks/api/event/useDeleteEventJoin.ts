"use client";

import { useToast } from "@/hooks/ui/useToast";
import deleteEventJoin from "@/service/event/deleteEventJoin";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

const useDeleteEventJoin = () => {
  const { success, error: toastError } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, userId }: { id: string; userId: string }) => deleteEventJoin({ id, userId }),
    retry: 1,
    onSuccess: (res) => {
      success("이벤트 참여가 취소되었습니다.");
      const id = String(res.data[0].event_id);
      queryClient.invalidateQueries({ queryKey: ["eventJoin", id] });
      queryClient.invalidateQueries({ queryKey: ["eventDetail", id] });
    },
    onError: () => {
      toastError("이벤트 참여 취소 실패");
    },
  });
};

export default useDeleteEventJoin;
