import React from "react";
import MainAnimation from "./MainAnimation";
import PopularContainer from "./PopularContainer";
import EventBanner from "./EventBanner";
import BestContainer from "./BestContainer";
import LinkContainer from "./LinkContainer";

const Main = () => {
  return (
    <div className="w-full min-h-screen bg-bg flex flex-col">
      <MainAnimation />
      <BestContainer />
      <PopularContainer />
      <EventBanner />
      <LinkContainer />
    </div>
  );
};

export default Main;
