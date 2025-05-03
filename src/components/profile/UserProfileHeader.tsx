import React from "react";
import Image from "next/image";

const UserProfileHeader = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
      <Image
        src={"/BlackPhoto.JPG"}
        alt="Profile"
        width={32}
        height={32}
        className="w-32 h-32 rounded-full object-cover border-4 border-neutral-700"
      />
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-2xl font-bold text-white">nickname</h1>
        <p className="text-neutral-400">tjwlrnjs7336@naver.com</p>
        <p className="text-sm text-neutral-500">Joined: 2025.05.04</p>
        <div className="mt-2 flex flex-wrap gap-2 justify-center md:justify-start">
          <span className="inline-block bg-neutral-800 text-white text-xs px-2 py-1 rounded-full">
            Landscape
          </span>
          <span className="inline-block bg-neutral-800 text-white text-xs px-2 py-1 rounded-full">
            Portrait
          </span>
          <span className="inline-block bg-neutral-800 text-white text-xs px-2 py-1 rounded-full">
            Street
          </span>
        </div>
      </div>
      <div className="text-center md:text-right">
        <p className="text-lg font-semibold text-white">Activity Score</p>
        <p className="text-2xl text-white">1200</p>
      </div>
    </div>
  );
};

export default UserProfileHeader;
