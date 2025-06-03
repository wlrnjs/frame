import React from "react";
import ErrorBox from "@/components/ui/statusBox/ErrorBox";
import LoadingBox from "@/components/ui/statusBox/LoadingBox";
import EmptyBox from "@/components/ui/statusBox/EmptyBox";
import ListItem from "@/components/features/photo-list/ListItem";
import Masonry from "react-masonry-css";
import { ListItemType } from "@/types/ListType";
import { MASONRY_BREAKPOINTS } from "@/constants/MASONRY";

const PhotoListContent = ({
  posts,
  error,
}: {
  posts: ListItemType[] | null;
  error?: boolean;
}) => {
  if (error) return <ErrorBox />;
  if (!posts) return <LoadingBox />;

  if (posts.length === 0) return <EmptyBox />;

  return (
    <Masonry
      breakpointCols={MASONRY_BREAKPOINTS}
      className="flex w-auto -ml-4"
      columnClassName="pl-4 bg-clip-padding"
    >
      {posts.map((item) => (
        <ListItem key={item.id} data={item} />
      ))}
    </Masonry>
  );
};

export default PhotoListContent;
