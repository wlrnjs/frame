"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import useGetRecommendList from "@/hooks/api/photo-list/detail/useGetRecommendList";
import Masonry from "react-masonry-css";
import { MASONRY_BREAKPOINTS } from "@/constants/MASONRY";
import ListItem from "../ListItem";
import { cn } from "@/utils";
import LOGO from "@/icon/LOGO";
import Link from "next/link";
import Spinner from "@/icon/Spinner";
import { ListItemType } from "@/types/ListType";
import { PHOTO_CATEGORIES } from "@/constants/CATEGORY";
import { formatCategory } from "@/utils/text/formatCategory";

// TODO: 추천 사진 로직 리펙토링 및 하단 버튼 클릭시 해당 카테고리 연결 작업 추가필요
// TODO: 카테고리 두 개 들어가도 조회 가능하게 연결 필요

interface RecommendContainerProps {
  category: string;
  id: string;
}

export const formatCategoryForQuery = (rawCategory: string): string => {
  try {
    const parsed = JSON.parse(rawCategory);
    if (Array.isArray(parsed)) {
      return parsed.map((c: string) => c.replace(/^#/, "")).join(",");
    }
    return rawCategory.replace(/^#/, "");
  } catch {
    // rawCategory가 JSON 파싱 불가능한 일반 문자열이라면
    return rawCategory.replace(/^#/, "");
  }
};

const RecommendContainer = ({ category, id }: RecommendContainerProps) => {
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [items, setItems] = useState<ListItemType[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);
  console.log("category: ", formatCategoryForQuery(category));

  const { data, isLoading } = useGetRecommendList({
    category,
    offset,
    limit: 10,
  });

  const lastItemRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (!node || !hasMore) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setOffset((prev) => prev + 10);
        }
      });

      observer.current.observe(node);
    },
    [hasMore]
  );

  useEffect(() => {
    if (!data) return;

    // 첫 로드가 아니고, 데이터가 없거나 이미 로드된 경우는 무시
    if (
      offset > 0 &&
      (data.length === 0 ||
        items.some((item) => data.some((newItem) => newItem.id === item.id)))
    ) {
      return;
    }

    // 새로운 데이터만 items에 추가
    setItems((prev) => {
      const newItems = [...prev];
      data.forEach((item) => {
        if (!newItems.some((existing) => existing.id === item.id)) {
          newItems.push(item);
        }
      });
      return newItems;
    });

    // 데이터가 10개 미만이면 더 이상 로드할 데이터가 없는 것으로 간주
    if (data.length < 10) {
      setHasMore(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, offset]);

  if (isLoading) return <Spinner />;

  return (
    <div
      className={cn(
        "w-full h-auto flex items-start justify-start rounded-[5px] px-28",
        "mobile:px-0"
      )}
    >
      <div className="w-full h-full flex flex-col items-start justify-center gap-5">
        <h1 className="text-[20px] font-bold pl-4">추천 사진</h1>
        {!isLoading && offset === 0 && (!data || data.length === 0) && (
          <div className="w-full h-[300px] flex-col-center gap-2 bg-black text-white">
            <LOGO />
            <div className="flex flex-col gap-2 items-center">
              <h1 className="text-[20px] font-bold">
                해당 카테고리로 추천된 사진이 없습니다.
              </h1>
              <Link href="/write" className="underline">
                글쓰러 가기
              </Link>
              <p>가장 먼저 이미지를 추가해보세요!</p>
            </div>
          </div>
        )}
        {(isLoading || (data && data.length > 0)) && (
          <>
            <Masonry
              breakpointCols={MASONRY_BREAKPOINTS}
              className="w-full flex"
              columnClassName="pl-4 bg-clip-padding"
            >
              {items.map((post) => {
                return <ListItem id={id} key={post.id} data={post} />;
              })}
            </Masonry>
            {/* 무한 스크롤 감지용 엘리먼트 */}
            {hasMore && <div ref={lastItemRef} style={{ height: "20px" }} />}

            {/* 더 이상 불러올 데이터가 없는 경우 */}
            {!hasMore && data && data.length > 0 && (
              <div className="w-full h-fit flex-col-center">
                <h1 className="text-[20px] font-bold">
                  {`${formatCategory(
                    category
                  )} 으로 등록된 사진이 더 없습니다.`}
                </h1>
                <p>다른 카테고리로 이동해보세요!</p>
                <div className="flex gap-2">
                  {PHOTO_CATEGORIES.filter((c) => c !== `#${category}`).map(
                    (category) => (
                      <button key={category} className="text-black">
                        {category}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default RecommendContainer;
