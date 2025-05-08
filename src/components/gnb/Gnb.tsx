"use client";

import { NAV_LINKS } from "@/constants/NAV";
import LOGO from "@/icon/LOGO";
import Link from "next/link";
import React from "react";
import { useAuthCheck } from "@/utils/useAuthCheck";

const LinkStyle = "hover:text-gray-300 transition-colors duration-200 pointer";

const Gnb = () => {
  const { isLoggedIn } = useAuthCheck();

  return (
    <header className="fixed top-0 left-0 z-10 w-full bg-black text-white">
      <div className="max-w-[1300px] mx-auto h-[80px] flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center overflow-hidden"
          aria-label="홈으로 이동"
        >
          <LOGO className="w-[120px] h-auto text-white bg-white" />
        </Link>
        <nav className="flex gap-8 text-lg font-medium tracking-tight">
          {NAV_LINKS.filter(({ title }) => title !== "LOGIN").map(
            ({ title, href }) => (
              <Link key={href} href={href} className={LinkStyle}>
                {title}
              </Link>
            )
          )}
          {isLoggedIn ? (
            <Link href="/my-page" className={LinkStyle}>
              마이페이지
            </Link>
          ) : (
            <Link href="/login" className={LinkStyle}>
              LOGIN
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Gnb;
