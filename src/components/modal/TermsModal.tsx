import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import Close from "@/icon/Close";
import TERMS from "@/constants/TERMS";
import PRIVACY from "@/constants/PRIVACY";

interface TermsModalProps {
  activeModal: "terms" | "privacy";
  setActiveModal: (value: null) => void;
}

const TermsModal = ({ activeModal, setActiveModal }: TermsModalProps) => {
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setActiveModal(null);
        }
      };
      window.addEventListener("keydown", handleEscape);

      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleEscape);
      };
    }
  }, [activeModal, setActiveModal]);

  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setActiveModal(null);
    }
  };
  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center modal-overlay"
      onClick={handleBackgroundClick}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-6 rounded-lg max-w-[800px] w-full"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            {activeModal === "terms" && "이용약관"}
            {activeModal === "privacy" && "개인정보처리방침"}
          </h2>
          <button
            onClick={() => setActiveModal(null)}
            className="text-gray-500 hover:text-black"
          >
            <Close />
          </button>
        </div>
        <div className="text-sm text-gray-700">
          {activeModal === "terms" && TERMS}
          {activeModal === "privacy" && PRIVACY}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default TermsModal;
