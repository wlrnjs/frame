import AddPhotoContainer from "@/components/write/AddPhotoContainer";
import PhotoInfoContainer from "@/components/write/PhotoInfoContainer";
import React from "react";

const page = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center gap-20 custom-margin px-[200px]">
      <div className="w-full h-full flex gap-10 justify-center items-start">
        <AddPhotoContainer />
        <PhotoInfoContainer />
      </div>
    </div>
  );
};

export default page;
