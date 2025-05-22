import { cn } from "@/utils";
import React from "react";

interface EventJoinButtonProps {
  hasJoined: boolean;
  isLoading: boolean;
  onJoin: () => void;
}

const EventJoinButton = ({
  hasJoined,
  isLoading,
  onJoin,
}: EventJoinButtonProps) => (
  <button
    onClick={onJoin}
    disabled={isLoading}
    className={cn(
      "w-full h-[50px] rounded-[5px] my-4 transition-colors",
      "mobile:h-[40px]",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      hasJoined
        ? "bg-black text-white border border-white hover:bg-gray-800"
        : "bg-white text-black hover:bg-gray-100"
    )}
  >
    {hasJoined ? "이벤트 참여 취소" : "이벤트 참여하기"}
  </button>
);

export default EventJoinButton;
