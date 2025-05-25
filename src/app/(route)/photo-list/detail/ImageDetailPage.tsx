import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/ui/useToast";
import { cn } from "@/utils";
import DetailContainer from "@/components/features/photo-list/detail/DetailContainer";
import DetailPhotoContainer from "@/components/features/photo-list/detail/DetailPhotoContainer";
import CommentContainer from "@/components/features/photo-list/detail/CommentContainer";
import RecommendContainer from "@/components/features/photo-list/detail/RecommendContainer";
import useGetImgDetail from "@/hooks/api/photo-list/detail/useGetImgDetail";
import useGetImg from "@/hooks/api/photo-list/detail/useGetImg";

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

  console.log("imgDetail?.data: ", imgDetail?.data);

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
          <CommentContainer id={id!} />
        </div>

        <div className={cn("block", "mobile:hidden")}>
          <DetailContainer data={data} imgData={imgDetail?.data} />
        </div>
      </div>
      <RecommendContainer />
    </div>
  );
};

export default ImageDetailPage;
