import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/ui/useToast";
import { cn } from "@/utils";
import DetailContainer from "@/components/features/photo-list/detail/DetailContainer";
import DetailPhotoContainer from "@/components/features/photo-list/detail/DetailPhotoContainer";
import CommentContainer from "@/components/features/photo-list/detail/CommentContainer";
import useGetImgDetail from "@/hooks/api/photo-list/detail/useGetImgDetail";
import { useEffect } from "react";
import { supabase } from "@/service/lib/supabaseClient";

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

  useEffect(() => {
    if (!id) return;

    const visitKey = "visited_posts";

    // 저장된 방문 기록 배열 불러오기
    const visitedPostsRaw = sessionStorage.getItem(visitKey);
    const visitedPosts: string[] = visitedPostsRaw
      ? JSON.parse(visitedPostsRaw)
      : [];

    if (!visitedPosts.includes(id)) {
      const increaseViews = async () => {
        const { error } = await supabase.rpc("increment_post_views", {
          post_id_input: Number(id),
        });
        if (error) {
          console.error("조회수 증가 실패:", error.message);
        } else {
          console.log("조회수 증가 성공");

          // 방문 기록에 현재 id 추가
          visitedPosts.push(id);
          sessionStorage.setItem(visitKey, JSON.stringify(visitedPosts));
        }
      };

      increaseViews();
    } else {
      console.log("조회수 증가 생략");
    }
  }, [id]);

  const { data, isError } = useGetImgDetail(id!);

  if (isError) {
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
          <DetailPhotoContainer img_url={data?.img_urls} isLoading={false} />
          <DetailContainer data={data} />
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
