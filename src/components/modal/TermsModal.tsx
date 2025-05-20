import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import Close from "@/icon/Close";
import TERMS from "@/constants/TERMS";
import PRIVACY from "@/constants/PRIVACY";

interface TermsModalProps {
  activeModal: "terms" | "privacy" | "inquiry";
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
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm z-50 transition-opacity duration-300"
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
            {activeModal === "inquiry" && "1:1 문의하기"}
          </h2>
          <button
            onClick={() => setActiveModal(null)}
            className="text-gray-500 hover:text-black"
          >
            <Close />
          </button>
        </div>
        <div className="text-sm text-gray-700 overflow-y-auto max-h-[70vh] p-4">
          {activeModal === "terms" && (
            <div>
              {TERMS.map((item, index) => (
                <div key={index} className="mb-6">
                  <h3 className="font-bold text-base mb-2">{item.title}</h3>
                  {item.content && <p className="mb-3 whitespace-pre-line">{item.content}</p>}
                  {item.list && (
                    <ul className="list-disc pl-5 space-y-1">
                      {item.list.map((listItem, i) => (
                        <li key={i} className="text-gray-700">{listItem}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
          {activeModal === "privacy" && (
            <div>
              {PRIVACY.map((item, index) => (
                <div key={index} className="mb-6">
                  <h3 className="font-bold text-base mb-2">{item.title}</h3>
                  {item.content && <p className="mb-3 whitespace-pre-line">{item.content}</p>}
                  {item.list && (
                    <ul className="list-disc pl-5 space-y-1">
                      {item.list.map((listItem, i) => (
                        <li key={i} className="text-gray-700">{listItem}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default TermsModal;
