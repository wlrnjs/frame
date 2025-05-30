import React from "react";
import {
  useGetRecommendList,
  useGetRecommendPhotoList,
} from "@/hooks/api/photo-list/detail/useGetRecommendList";
import Masonry from "react-masonry-css";
import { MASONRY_BREAKPOINTS } from "@/constants/MASONRY";
import Image from "next/image";
// import ListItem from "../ListItem";

interface RecommendContainerProps {
  category: string;
}

const RecommendContainer = ({ category }: RecommendContainerProps) => {
  const { data, isLoading } = useGetRecommendList({
    category,
    offset: 0,
    limit: 10,
  });

  // 이미지 호출 id 수정 필요, 현재는 1개만 호출 및 무한스크롤 추가 필요
  const { data: imgList } = useGetRecommendPhotoList({
    id: data?.[0]?.post_id,
    offset: 0,
    limit: 10,
  });

  console.log("카테고리 데이터", data);
  console.log("이미지 데이터", imgList);
  if (isLoading) return <div>로딩중</div>;

  // const renderedItems = imgList?.map((img) => {
  //   return <ListItem key={img.id} data={img} imgData={imgList} />;
  // });

  return (
    <div className="w-full h-[700px] bg-black flex items-start justify-start rounded-[5px]">
      <div className="w-full h-full flex-center text-white">
        {/* 추천 사진 보여주기 (무한스크롤, masonry 스타일) */}
        <Masonry
          breakpointCols={MASONRY_BREAKPOINTS}
          className="flex w-auto -ml-4"
          columnClassName="pl-4 bg-clip-padding"
        >
          <div className="w-[200px] h-[300px] relative">
            <Image
              src={imgList?.[0]?.image_url}
              alt="test_img"
              fill
              className="object-cover"
            />
          </div>
        </Masonry>
      </div>
    </div>
  );
};

export default RecommendContainer;
