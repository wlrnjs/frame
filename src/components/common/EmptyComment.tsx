import LOGO from "@/icon/LOGO";
import { cn } from "@/utils";
import React from "react";

const EmptyComment = () => {
  return (
    <div
      className={cn(
        "w-full h-full flex-col-center gap-1 text-black/60 text-lg font-semibold py-10",
        "mobile:text-base mobile:gap-0"
      )}
    >
      <LOGO className={cn("text-black/60", "mobile:h-[60px]")} />
      <div className="text-center">
        <h1>등록된 댓글이 없습니다.</h1>
        <p>가장 먼저 댓글을 작성해보세요!</p>
      </div>
    </div>
  );
};

export default EmptyComment;
