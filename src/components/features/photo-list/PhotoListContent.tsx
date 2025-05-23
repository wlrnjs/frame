import React from "react";
import ErrorBox from "@/components/ui/statusBox/ErrorBox";
import LoadingBox from "@/components/ui/statusBox/LoadingBox";
import EmptyBox from "@/components/ui/statusBox/EmptyBox";
import ListItem from "@/components/features/photo-list/ListItem";
import Masonry from "react-masonry-css";
import { ImgListType, ListItemType } from "@/types/ListType";
import { MASONRY_BREAKPOINTS } from "@/constants/MASONRY";

const PhotoListContent = ({
  posts,
  images,
  error,
}: {
  posts: ListItemType[] | null;
  images: ImgListType[] | null;
  error?: boolean;
}) => {
  if (error) return <ErrorBox />;
  if (!posts || !images) return <LoadingBox />;

  const renderedItems = posts.map((item) => {
    const matchedImages = images.filter((img) => img.posts_id === item.post_id);
    return <ListItem key={item.id} data={item} imgData={matchedImages} />;
  });

  if (renderedItems.length === 0) return <EmptyBox />;

  return (
    <Masonry
      breakpointCols={MASONRY_BREAKPOINTS}
      className="flex w-auto -ml-4"
      columnClassName="pl-4 bg-clip-padding"
    >
      {renderedItems}
    </Masonry>
  );
};

export default PhotoListContent;
