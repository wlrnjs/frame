import React from "react";
import MainAnimation from "./MainAnimation";
import SecondSection from "./SecondSection";
import EventBanner from "./EventBanner";
import ThirdSection from "./ThirdSection";
import FinalSection from "./FinalSection";

const Main = () => {
  return (
    <div className="w-full min-h-screen bg-bg flex flex-col">
      <MainAnimation />
      <ThirdSection />
      <SecondSection />
      <EventBanner />
      <FinalSection />
    </div>
  );
};

export default Main;
