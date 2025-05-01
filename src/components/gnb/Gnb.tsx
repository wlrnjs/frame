import LOGO from "@/icon/LOGO";
import Link from "next/link";
import React from "react";

const Gnb = () => {
  return (
    <div className="w-full h-[100px] px-[200px] flex items-center justify-between bg-black text-main text-[40px] leading-10 tracking-[-0.04em] fixed">
      <Link href={"/"} className="cursor-pointer">
        <LOGO className="text-white bg-white" />
      </Link>
      <div className="flex gap-10">
        <Link href={"/"}>LOGO</Link>
        <Link href={"/"}>LOGO</Link>
      </div>
    </div>
  );
};

export default Gnb;
