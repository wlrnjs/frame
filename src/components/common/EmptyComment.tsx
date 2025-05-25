import React from "react";

const EmptyComment = () => {
  return (
    <div className="w-full h-full flex-col-center gap-2 text-white text-lg py-10">
      <div>등록된 댓글이 없습니다.</div>
      <div>가장 먼저 댓글을 작성해보세요!</div>
    </div>
  );
};

export default EmptyComment;
