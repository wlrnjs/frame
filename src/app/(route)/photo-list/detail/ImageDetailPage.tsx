import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/ui/useToast";
import { cn } from "@/utils";
import DetailContainer from "@/components/features/photo-list/detail/DetailContainer";
import DetailPhotoContainer from "@/components/features/photo-list/detail/DetailPhotoContainer";
import CommentContainer from "@/components/features/photo-list/detail/CommentContainer";
import useGetImgDetail from "@/hooks/api/photo-list/detail/useGetImgDetail";
import useGetImg from "@/hooks/api/photo-list/detail/useGetImg";

const RecommendContainer = dynamic(
  () => import("@/components/features/photo-list/detail/RecommendContainer"),
  {
    loading: () => <div>추천 게시글을 불러오는 중입니다...</div>,
    ssr: false,
  }
);

const ImageDetailPage = () => {
  const params = useSearchParams();
  const id = params.get("id");
  const router = useRouter();
  const toast = useToast();

  const { data, isError } = useGetImgDetail(id!);
  console.log("data: ", data?.img_urls);

  const {
    data: imgDetail,
    isError: imgDetailError,
    isLoading: imgDetailLoading,
  } = useGetImg(id!);

  if (isError || imgDetailError) {
    toast.error("게시글을 찾을 수 없습니다.");
    router.replace("/404");
  }

  return (
    <div
      className={cn(
        "w-full h-fit flex-col-center gap-20 custom-margin layout-container",
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
            img_url={data?.img_urls}
            isLoading={imgDetailLoading}
          />
          <DetailContainer data={data} imgData={imgDetail?.data} />
          <CommentContainer id={id!} type="post" />
        </div>
      </div>
      {data && !isError && (
        <RecommendContainer id={id!} category={data?.category} />
      )}
    </div>
  );
};

export default ImageDetailPage;
