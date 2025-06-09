import useDeleteEventJoin from "./useDeleteEventJoin";
import useGetEventJoin from "./useGetEventJoin";
import usePostEventJoin from "./usePostEventJoin";
import { useToast } from "@/hooks/ui/useToast";

interface JoinType {
  event_id: string;
  user_id: string;
}

export const useEventJoinLogic = (eventId: string, userId: string) => {
  const { error: toastError } = useToast();

  const { data: eventJoin } = useGetEventJoin(eventId);
  const { mutate: postEventJoin, isPending: postEventJoinLoading } =
    usePostEventJoin();
  const { mutate: deleteEventJoin, isPending: deleteEventJoinLoading } =
    useDeleteEventJoin();

  const myJoin = eventJoin?.some(
    (join: JoinType) => join.user_id === userId
  );

  const hasJoined = Boolean(myJoin);
  const isLoading = postEventJoinLoading || deleteEventJoinLoading;

  const handleJoinToggle = () => {
    if (!eventId || !userId) {
      toastError("로그인이 필요한 서비스입니다.");
      return;
    }
    
    if (myJoin) {
      deleteEventJoin({ id: eventId, userId });
    } else {
      postEventJoin({ id: eventId, userId });
    }
  };

  return {
    hasJoined,
    isLoading,
    handleJoinToggle,
  };
};