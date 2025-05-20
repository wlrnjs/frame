"use client";

import React, { Suspense } from "react";
import DetailContainer from "@/components/features/photo-list/detail/DetailContainer";
import DetailPhotoContainer from "@/components/features/photo-list/detail/DetailPhotoContainer";
import CommentContainer from "@/components/features/photo-list/detail/CommentContainer";
import RecommendContainer from "@/components/features/photo-list/detail/RecommendContainer";
import { useSearchParams } from "next/navigation";
import useGetImg from "@/hooks/api/photo-list/detail/useGetImg";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/useToast";
import useGetImgDetail from "@/hooks/api/photo-list/detail/useGetImgDetail";

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
  const router = useRouter();
  const toast = useToast();

  const { data, isError } = useGetImgDetail(id!);
  const {
    data: imgDetail,
    isError: imgDetailError,
    isLoading: imgDetailLoading,
  } = useGetImg(id!);

  if (isError || imgDetailError) {
    toast.error("게시글을 찾을 수 없습니다.");
    router.push("/404");
  }

  return (
    <div className="w-full min-h-screen flex-col-center gap-20 custom-margin layout-container">
      <div className="w-full h-full flex gap-10 justify-center items-start">
        <div className="w-full flex flex-col gap-10">
          <DetailPhotoContainer
            img_url={
              Array.isArray(imgDetail?.data)
                ? imgDetail?.data
                : imgDetail?.data?.image_url
            }
            isLoading={imgDetailLoading}
          />
          <CommentContainer />
        </div>

        <DetailContainer data={data} imgData={imgDetail?.data} />
      </div>
      <RecommendContainer />
    </div>
  );
};

export default Page;
