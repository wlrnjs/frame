"use client";

import React, { Suspense } from "react";
import DetailContainer from "@/components/detail/DetailContainer";
import DetailPhotoContainer from "@/components/detail/DetailPhotoContainer";
import CommentContainer from "@/components/detail/CommentContainer";
import RecommendContainer from "@/components/detail/RecommendContainer";
import useGetImgDetail from "@/service/hooks/list/useGetImgDetail";
import { useSearchParams } from "next/navigation";

// interface ImageDetailType {
//   camera_info: string;
//   category: string;
//   created_at: string;
//   description: string;
//   img_url: string;
//   location: string;
//   post_id: string;
//   title: string;
// }

const Page = () => {
  return (
    <Suspense fallback={""}>
      <ImageDetailPage />
    </Suspense>
  );
};

const ImageDetailPage = () => {
  const params = useSearchParams();
  const id = params.get("id");
  const { data } = useGetImgDetail(id!);
  console.log(data);

  return (
    <div className="w-full min-h-screen flex-col-center gap-20 custom-margin layout-container">
      <div className="w-full h-full flex gap-10 justify-center items-start">
        <div className="w-full flex flex-col gap-10">
          <DetailPhotoContainer img_url={data?.img_url} />
          <CommentContainer />
        </div>

        <DetailContainer data={data} />
      </div>
      <RecommendContainer />
    </div>
  );
};

export default Page;
