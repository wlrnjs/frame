import React from "react";
import Image from "next/image";

const UserProfileHeader = () => {
  const categoryStyle =
    "inline-block bg-neutral-800 text-white text-xs px-2 py-1 rounded-full";

  return (
    <div className="flex-center gap-6">
      <Image
        src={"/avatar.png"}
        alt="Profile"
        width={128}
        height={128}
        className="w-[128px] h-[128px] rounded-full object-cover border-2 border-neutral-700"
      />
      <div className="flex-1 text-left">
        <h1 className="text-2xl font-bold text-white">wlrnjs</h1>
        <p className="text-neutral-400">tjwlrnjs7336@naver.com</p>
        <p className="text-sm text-neutral-500">가입일: 2025.05.04</p>
        <div className="mt-2 flex flex-wrap gap-2 justify-center md:justify-start">
          <span className={categoryStyle}>도시</span>
          <span className={categoryStyle}>풍경</span>
          <span className={categoryStyle}>흑백</span>
        </div>
      </div>
      <div className="text-right">
        <p className="text-lg font-semibold text-white">Activity Score</p>
        <p className="text-2xl leading-5 text-white">1200</p>
      </div>
    </div>
  );
};

export default UserProfileHeader;
