import MyPageNav from "@/components/features/my-page/MyPageNav";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-fit custom-margin layout-container">
      <div className="flex gap-5">
        {children}
        <MyPageNav />
      </div>
    </div>
  );
};

export default layout;
