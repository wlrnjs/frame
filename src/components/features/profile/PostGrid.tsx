import React from "react";
import PostGridItem from "./PostGridItem";

const TestArray = ["/BlackPhoto.JPG", "/IMG_7115.JPG", "/BlackPhoto.JPG"];

const PostGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {TestArray.map((src, index) => (
        <PostGridItem key={index} src={src} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default PostGrid;
