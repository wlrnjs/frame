"use client";

import { NAV_LINKS } from "@/constants/NAV";
import LOGO from "@/icon/LOGO";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAuthCheck } from "@/utils/useAuthCheck";
import DropDown from "./DropDown";
import { usePathname } from "next/navigation";

const LinkStyle = "hover:text-gray-300 transition-colors duration-200 pointer";

const Gnb = () => {
  const { isLoggedIn } = useAuthCheck();
  const [showGnb, setShowGnb] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (pathname === "/") {
        if (window.scrollY > 10) {
          setShowGnb(true);
        } else {
          setShowGnb(false);
        }
      } else {
        setShowGnb(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 z-10 w-full bg-black text-white transition-all duration-300 ${
        showGnb ? "opacity-100" : "opacity-0 -translate-y-full"
      }`}
    >
      <div className="h-[80px] flex items-center justify-between layout-container">
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
            <div className="relative group">
              <Link href="/my-page" className={LinkStyle}>
                마이페이지
              </Link>
              <DropDown />
            </div>
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
