"use client";

import React, { useState } from "react";
import TermsModal from "@/components/ui/modal/TermsModal";
import InquiryModal from "@/components/ui/modal/InquiryModal";
import { cn } from "@/utils";
import { SupportItem } from "@/types/Support";
import SupportItemCard from "@/components/features/support/SupportItemCard";
import { SUPPORT_ITEMS } from "@/constants/SUPPORT_ITEMS";

type ModalType = "terms" | "privacy" | null;

const CustomerSupportPage: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  const handleModalOpen = (modalKey: SupportItem["modalKey"]) => {
    if (modalKey === "inquiry") {
      setIsInquiryModalOpen(true);
    } else if (modalKey === "terms" || modalKey === "privacy") {
      setActiveModal(modalKey);
    }
  };

  const handleModalClose = () => {
    setActiveModal(null);
    setIsInquiryModalOpen(false);
  };

  return (
    <div className="w-full min-h-screen bg-white text-black layout-container custom-margin">
      <div className="max-w-4xl mx-auto">
        <h1
          className={cn(
            "text-3xl font-bold mb-8 border-b pb-4",
            "mobile:text-2xl"
          )}
        >
          고객센터
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SUPPORT_ITEMS.map((item) => (
            <SupportItemCard
              key={item.title}
              item={item}
              onModalOpen={handleModalOpen}
            />
          ))}
        </div>
      </div>

      {/* 모달 */}
      {activeModal && (
        <TermsModal
          activeModal={activeModal}
          setActiveModal={handleModalClose}
        />
      )}

      <InquiryModal onOpen={isInquiryModalOpen} onClose={handleModalClose} />
    </div>
  );
};

export default CustomerSupportPage;
