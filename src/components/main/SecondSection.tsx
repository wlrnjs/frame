import React from "react";
import ImageCard from "./ImageCard";
import EventBanner from "./EventBanner";

const SecondSection = () => {
  return (
    <div className="mb-10">
      <div className="w-full h-auto pt-40 pb-20 flex-center gap-7">
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
      <EventBanner />
    </div>
  );
};

export default SecondSection;
