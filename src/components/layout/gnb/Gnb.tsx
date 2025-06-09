"use client";

import { NAV_LINKS } from "@/constants/NAV";
import LOGO from "@/icon/LOGO";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DropDown from "./DropDown";
import { usePathname } from "next/navigation";
import { cn } from "@/utils";
import GnbIcon from "@/icon/Gnb";
import MobileGnb from "./MobileGnb";
import useGetUser from "@/hooks/api/my-page/useGetUser";

const LinkStyle = "hover:text-gray-300 transition-colors duration-200 pointer";

const Gnb = () => {
  const pathname = usePathname();
  const [showMobileGnb, setShowMobileGnb] = useState(false);
  const [showGnb, setShowGnb] = useState(pathname !== "/");

  const { data: nickname } = useGetUser();

  const nicknameValue = nickname?.[0]?.nickname;

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
          className="flex items-center overflow-hidden pointer"
          aria-label="홈으로 이동"
        >
          <LOGO className="w-[160px] h-fit mt-2" />
        </Link>
        <nav
          className="mobile-menu pointer select-none block pc:hidden"
          onClick={() => setShowMobileGnb(true)}
        >
          <GnbIcon />
        </nav>
        <nav
          className={cn(
            "flex gap-8 text-lg font-medium tracking-tight items-center",
            "mobile:hidden"
          )}
        >
          {NAV_LINKS.filter(({ title }) => title !== "LOGIN").map(
            ({ title, href }) => (
              <Link key={href} href={href} className={LinkStyle}>
                {title}
              </Link>
            )
          )}
          {nickname ? (
            <div className="relative group">
              <div
                className={cn(
                  LinkStyle,
                  "bg-gray-800 px-8 py-2 rounded-full flex items-center justify-center shadow-lg"
                )}
              >
                {nicknameValue}
              </div>
              <DropDown />
            </div>
          ) : (
            <Link href="/login" className={LinkStyle}>
              LOGIN
            </Link>
          )}
        </nav>
      </div>
      {showMobileGnb && (
        <MobileGnb
          onClose={() => setShowMobileGnb(false)}
          isOpen={showMobileGnb}
        />
      )}
    </header>
  );
};

export default Gnb;
