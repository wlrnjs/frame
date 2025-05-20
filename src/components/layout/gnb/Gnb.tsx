"use client";

import { NAV_LINKS } from "@/constants/NAV";
import LOGO from "@/icon/LOGO";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAuthCheck } from "@/hooks/useAuthCheck";
import DropDown from "./DropDown";
import { usePathname } from "next/navigation";
import { cn } from "@/utils";
import useIsMobile from "@/utils/dom/isMobile";
import GnbIcon from "@/icon/Gnb";

const LinkStyle = "hover:text-gray-300 transition-colors duration-200 pointer";

const Gnb = () => {
  const { isLoggedIn } = useAuthCheck();
  const pathname = usePathname();
  const [showGnb, setShowGnb] = useState(pathname !== "/");
  const isMobile = useIsMobile() || false; // Ensure boolean value

  useEffect(() => {
    if (pathname !== "/") {
      setShowGnb(true);
      return;
    }

    const handleScroll = () => {
      setShowGnb(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 z-10 w-full bg-black text-white transition-all duration-300 ${
        showGnb ? "opacity-100" : "opacity-0 -translate-y-full"
      }`}
    >
      <div
        className={cn(
          "h-[80px] flex items-center justify-between layout-container",
          "mobile:h-[60px]"
        )}
      >
        <Link
          href="/"
          className="flex items-center overflow-hidden"
          aria-label="홈으로 이동"
        >
          <LOGO className="w-[120px] h-auto text-white bg-white" />
        </Link>
        <nav
          className={cn(
            "flex gap-8 text-lg font-medium tracking-tight",
            "mobile:gap-4"
          )}
        >
          {!isMobile && (
            <>
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
            </>
          )}
          {isMobile && (
            <div className="mobile-menu">
              <GnbIcon />
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Gnb;
