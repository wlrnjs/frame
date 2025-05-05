import AddPhotoContainer from "@/components/write/AddPhotoContainer";
import PhotoInfoContainer from "@/components/write/PhotoInfoContainer";
import React from "react";

const page = () => {
  return (
    <div className="w-full min-h-screen flex-col-center gap-20 pt-[170px] pb-16 px-[200px]">
      <div className="w-full h-full flex gap-10 justify-center items-start">
        <AddPhotoContainer />
        <PhotoInfoContainer />
      </div>
    </div>
  );
};

export default page;
