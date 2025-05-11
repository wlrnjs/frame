"use client";

import Email from "@/icon/Email";
import Github from "@/icon/Github";
import Instagram from "@/icon/Instagram";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const subTextStyle =
    "text-[14px] text-white/80 hover:text-white hover:underline transition-all duration-200";

  return (
    <footer className="w-full min-h-[200px] flex-col-center text-center gap-3 bg-black text-white border-t border-[#4B4B4B] px-[200px] pt-5 pb-2 flex flex-col justify-between">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h2 className="text-[16px] font-semibold text-white">Frame</h2>
        </div>
        <div className="flex-center gap-4">
          {[
            { icon: <Github />, link: "https://github.com/wlrnjs" },
            { icon: <Instagram />, link: "https://www.instagram.com/_zuqil/" },
            { icon: <Email />, link: "mailto:wlrnjs5824@google.com" },
          ].map((social, index) => (
            <Link
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform duration-200"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <ul className="flex gap-2">
          {["이용약관", "개인정보처리방침", "문의하기"].map((link) => (
            <li key={link}>
              <Link href="#" className={subTextStyle}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center text-[12px] text-white/60">
        © 2025 Frame. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
