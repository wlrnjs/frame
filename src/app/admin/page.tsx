import Widgets from "@/admin/components/main/Widgets";
import Widgets2 from "@/admin/components/main/Widgets2";
import Widgets3 from "@/admin/components/main/Widgets3";
import Widgets4 from "@/admin/components/main/Widgets4";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-full flex flex-col gap-5">
      <div className="grid grid-cols-3 gap-5">
        <Widgets title="오늘 업로드된 게시물" />
        <Widgets title="오늘 업로드된 댓글" />
        <Widgets title="이벤트별 참여자 수" />
      </div>
      <div className="flex gap-5">
        <Widgets2 title="회원 통계 (오늘, 주간, 월간, 연간)" />
        <Widgets3 title="광고 수 (미정)" />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col gap-5">
          <Widgets4 title="신고 내역" />
          <Widgets4 title="문의 내역" />
        </div>
        <Widgets2 title="최신 게시글 목록" />
      </div>
    </div>
  );
};

export default page;
