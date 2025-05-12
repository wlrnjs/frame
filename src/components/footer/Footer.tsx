"use client";

import Email from "@/icon/Email";
import Github from "@/icon/Github";
import Instagram from "@/icon/Instagram";
import Link from "next/link";
import React, { useState } from "react";
import TermsModal from "@/components/modal/TermsModal";
import InquiryModal from "@/components/modal/InquiryModal";

type TermsModalType = "terms" | "privacy";
type FooterModalType = TermsModalType | "inquiry";

const Footer = () => {
  const [activeModal, setActiveModal] = useState<FooterModalType | null>(null);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  const subTextStyle =
    "text-sm text-white-80 hover:text-white hover:underline hover:underline-offset-2 transition-all duration-200 cursor-pointer";

  const handleLinkClick = (e: React.MouseEvent, type: FooterModalType) => {
    e.preventDefault();
    if (type === "inquiry") {
      setIsInquiryModalOpen(true);
    } else {
      setActiveModal(type as TermsModalType);
    }
  };

  return (
    <footer className="w-full min-h-[200px] flex-col-center text-center gap-3 bg-black text-white border-t border-gray-870 px-[200px] pt-5 pb-2 flex flex-col justify-between">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h2 className="text-base font-semibold text-white">Frame</h2>
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
          {[
            { text: "이용약관", type: "terms" as const },
            { text: "개인정보처리방침", type: "privacy" as const },
            { text: "문의하기", type: "inquiry" as const },
          ].map((item) => (
            <li key={item.text}>
              <div
                className={subTextStyle}
                onClick={(e) => handleLinkClick(e, item.type)}
              >
                {item.text}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center text-xs text-white-60">
        © 2025 Frame. All rights reserved.
      </div>

      {activeModal && activeModal !== "inquiry" && (
        <TermsModal
          activeModal={activeModal as TermsModalType}
          setActiveModal={() => setActiveModal(null)}
        />
      )}

      <InquiryModal
        onOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        onSubmit={(title: string, content: string) => {
          console.log("Inquiry submitted:", { title, content });
          // 제출 로직 추가
        }}
      />
    </footer>
  );
};

export default Footer;
