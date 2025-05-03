import ListItem from "@/components/list/ListItem";
import SearchContainer from "@/components/list/SearchContainer";
import React from "react";

const page = () => {
  return (
    <div className="w-full min-h-screen pt-[100px]">
      <div className="flex items-start justify-center mt-[10px] gap-10">
        <div className="w-[1020px] h-[1500px] bg-black rounded-[5px] flex gap-2 p-5">
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <SearchContainer />
      </div>
    </div>
  );
};

export default page;
