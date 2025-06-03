"use client";

import { useToast } from "@/hooks/ui/useToast";
import postEvent from "@/admin/service/postEvent";
import { useMutation } from "@tanstack/react-query";
import { postEventProps } from "@/admin/service/postEvent";

const usePostEvent = () => {
  const { success, error: toastError } = useToast();

  const mutation = useMutation({
    mutationFn: (data: postEventProps) => postEvent(data),
    retry: 1,
    onSuccess: () => {
      success("이벤트 생성이 완료되었습니다.");
    },
    onError: () => {
      toastError("이벤트 생성 실패");
    },
  });

  return { ...mutation };
};

export default usePostEvent;
