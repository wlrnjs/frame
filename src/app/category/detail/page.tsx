import React from "react";
import DetailContainer from "@/components/detail/DetailContainer";
import DetailPhotoContainer from "@/components/detail/DetailPhotoContainer";

const page = () => {
  return (
    <div className="w-full min-h-screen pt-[170px] flex items-start justify-center gap-10 px-10 pb-16">
      <DetailPhotoContainer />
      <DetailContainer />
      {/* 이전, 다음 사진보기 및 추천 앨범 보여주기 (카테고리) */}
    </div>
  );
};

export default page;
