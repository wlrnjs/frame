import LOGO from "@/icon/LOGO";
import Link from "next/link";
import React from "react";

const Gnb = () => {
  return (
    <div className="w-full h-[100px] px-[200px] flex items-center justify-between bg-black text-main text-[40px] leading-10 tracking-[-0.04em] fixed z-10">
      <Link href={"/"} className="pointer">
        <LOGO className="text-white bg-white" />
      </Link>
      <div className="flex gap-10 text-white">
        {/* 테스트용임시 */}
        <Link href={"/user-profile"}>유저프로필</Link>
        <Link href={"/category/detail"}>상세페이지</Link>
        {/* 테스트용임시 */}
        <Link href={"/write"}>WRITE</Link>
        <Link href={"/photo-list"}>LIST</Link>
        <Link href={"/login"}>LOGIN</Link>
      </div>
    </div>
  );
};

export default Gnb;
