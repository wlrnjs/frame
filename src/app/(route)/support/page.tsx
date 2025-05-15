"use client";

import React, { useState } from "react";
import Link from "next/link";
import TermsModal from "@/components/modal/TermsModal";
import InquiryModal from "@/components/modal/InquiryModal";

const supportItems = [
  { title: "공지사항", href: "/support/notices" },
  { title: "개선 요청", href: "/support/feedback" },
  { title: "이용약관", href: "#" },
  { title: "개인정보처리방침", href: "#" },
  { title: "1:1 문의하기", href: "#" },
];

const CustomerSupportPage = () => {
  const [activeModal, setActiveModal] = useState<null | "terms" | "privacy">(
    null
  );
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-white text-black layout-container custom-margin">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 border-b pb-4">고객센터</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {supportItems.map((item) => {
            const isModal = [
              "이용약관",
              "개인정보처리방침",
              "1:1 문의하기",
            ].includes(item.title);
            const modalKey =
              item.title === "이용약관"
                ? "terms"
                : item.title === "개인정보처리방침"
                ? "privacy"
                : null;

            return isModal ? (
              <button
                key={item.title}
                onClick={() => {
                  if (item.title === "1:1 문의하기") {
                    setIsInquiryModalOpen(true);
                  } else {
                    setActiveModal(modalKey);
                  }
                }}
                className="w-full text-left border rounded-xl px-5 py-6 hover:bg-gray-50 transition"
              >
                <p className="text-lg font-semibold">{item.title}</p>
              </button>
            ) : (
              <Link
                key={item.title}
                href={item.href}
                aria-label={item.title}
                className="border rounded-xl px-5 py-6 hover:bg-gray-50 duration-300 ease-out transition pointer"
              >
                <p className="text-lg font-semibold">{item.title}</p>
              </Link>
            );
          })}
        </div>
      </div>

      {activeModal && (
        <TermsModal activeModal={activeModal} setActiveModal={setActiveModal} />
      )}

      <InquiryModal
        onOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        onSubmit={(title: string, content: string) => {
          console.log("Inquiry submitted:", { title, content });
          //제출 로직 추가
        }}
      />
    </div>
  );
};

export default CustomerSupportPage;
