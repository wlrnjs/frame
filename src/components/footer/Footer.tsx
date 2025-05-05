"use client";

import Github from "@/icon/Github";
import Instagram from "@/icon/Instagram";
import { cn } from "@/utils";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText("wlrnjs5824@gmail.com");
  };

  const subTextStyle =
    "text-[14px] text-white/80 hover:text-white hover:underline transition-all duration-200";

  return (
    <footer className="w-full min-h-[200px] bg-black text-white border-t border-[#4B4B4B] mt-10 px-4 md:px-[200px] pt-5 pb-2 flex flex-col justify-between">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 서비스 정보 */}
        <div className="flex flex-col gap-4">
          <h2 className="text-[16px] font-semibold text-white">Frame</h2>
          <p className={subTextStyle}>Frame</p>
        </div>

        {/* 내비게이션 링크 */}
        <div className="flex flex-col gap-4">
          <h2>지원</h2>
          <ul className="flex flex-col gap-1">
            {["이용약관", "개인정보처리방침", "문의하기"].map((link) => (
              <li key={link}>
                <Link href="#" className={subTextStyle}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 연락처 및 소셜 미디어 */}
        <div className="flex flex-col gap-4">
          <h2 className="text-[16px] font-semibold text-white">연락처</h2>
          <p className={cn(subTextStyle, "pointer")} onClick={copyEmail}>
            이메일: wlrnjs5824@gmail.com
          </p>
          <div className="flex gap-4">
            <Github />
            <Instagram />
          </div>
        </div>
      </div>

      {/* 저작권 */}
      <div className="text-center text-[12px] text-white/60">
        © 2025 PhotoHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
