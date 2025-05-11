import React from "react";
import DetailContainer from "@/components/detail/DetailContainer";
import DetailPhotoContainer from "@/components/detail/DetailPhotoContainer";
import CommentContainer from "@/components/detail/CommentContainer";
import RecommendContainer from "@/components/detail/RecommendContainer";

const page = () => {
  return (
    <div className="w-full min-h-screen flex-col-center gap-20 custom-margin layout-container">
      <div className="w-full h-full flex gap-10 justify-center items-start">
        <div className="flex flex-col gap-10">
          <DetailPhotoContainer />
          <CommentContainer />
        </div>

        <DetailContainer />
      </div>
      <RecommendContainer />
    </div>
  );
};

export default page;
