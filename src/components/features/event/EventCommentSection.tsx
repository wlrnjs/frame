import { cn } from "@/utils";
import React from "react";
import CommentContainer from "../photo-list/detail/CommentContainer";

const EventCommentSection = () => (
  <div
    className={cn(
      "bg-black text-white px-20 pb-20 flex flex-col gap-4",
      "mobile:px-4"
    )}
  >
    <h2
      className={cn("text-2xl mb-4 flex gap-2 items-center", "mobile:text-xl")}
    >
      댓글
      <span className={cn("text-gray-500 text-lg", "mobile:text-sm")}>
        총 3개
      </span>
    </h2>
    <CommentContainer isEvent />
  </div>
);

export default EventCommentSection;
