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
import { cn } from "@/utils";

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
    <div
      className={cn(
        "w-full min-h-screen flex-col-center gap-20 custom-margin layout-container",
        "mobile:gap-10"
      )}
    >
      <div
        className={cn(
          "w-full h-full flex gap-10 justify-center items-start",
          "mobile:flex-col"
        )}
      >
        <div className={cn("w-full flex flex-col gap-10", "mobile:gap-3")}>
          <DetailPhotoContainer
            img_url={
              Array.isArray(imgDetail?.data)
                ? imgDetail?.data
                : imgDetail?.data?.image_url
            }
            isLoading={imgDetailLoading}
          />
          <div className={cn("hidden", "mobile:block")}>
            <DetailContainer data={data} imgData={imgDetail?.data} />
          </div>
          <CommentContainer />
        </div>

        <div className={cn("block", "mobile:hidden")}>
          <DetailContainer data={data} imgData={imgDetail?.data} />
        </div>
      </div>
      <RecommendContainer />
    </div>
  );
};

export default Page;
