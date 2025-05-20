"use client";

import React from "react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/NAV";
import { useAuthCheck } from "@/hooks/useAuthCheck";
import DropDown from "./DropDown";
import Close from "@/icon/Close";
import gsap from "gsap";

interface MobileGnbProps {
  isOpen: boolean;
  onClose: () => void;
}

const LinkStyle =
  "block text-white hover:text-gray-300 transition-colors duration-200 py-2 px-4";

const MobileGnb = ({ isOpen, onClose }: MobileGnbProps) => {
  const { isLoggedIn } = useAuthCheck();
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // 애니메이션 초기 설정
    const ctx = gsap.context(() => {
      animationRef.current = gsap
        .timeline({ paused: true })
        .to(overlayRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.inOut",
        })
        .to(
          menuRef.current,
          {
            x: 0,
            duration: 0.4,
            ease: "power3.out",
          },
          "-=0.2"
        );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // 애니메이션 실행
    if (isOpen) {
      document.body.style.overflow = "hidden";
      animationRef.current?.play();
    } else {
      document.body.style.overflow = "auto";
      animationRef.current?.reverse();
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // 애니메이션 닫기
  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (animationRef.current) {
      gsap
        .timeline()
        .to(menuRef.current, {
          x: "100%",
          duration: 0.3,
          ease: "power3.in",
        })
        .to(
          overlayRef.current,
          {
            opacity: 0,
            duration: 0.2,
            ease: "power2.out",
            onComplete: () => {
              onClose();
            },
          },
          "-=0.1"
        );
    } else {
      onClose();
    }
  };

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed top-0 left-0 z-50 w-full h-screen bg-black bg-opacity-0 backdrop-blur-sm pointer-events-none"
      onClick={handleClose}
    >
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-64 bg-black text-white shadow-lg transform translate-x-full pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-end justify-end p-4 mr-2">
          <button
            onClick={handleClose}
            aria-label="Close navigation menu"
            className="p-2 select-none"
          >
            <Close size="8" />
          </button>
        </div>
        <nav className="flex flex-col p-4 gap-2 text-lg font-medium tracking-tight">
          {NAV_LINKS.filter(({ title }) => title !== "LOGIN").map(
            ({ title, href }) => (
              <Link
                key={href}
                href={href}
                className={LinkStyle}
                onClick={onClose}
              >
                {title}
              </Link>
            )
          )}
          {isLoggedIn ? (
            <div className="relative group">
              <Link href="/my-page" className={LinkStyle} onClick={onClose}>
                마이페이지
              </Link>
              <DropDown />
            </div>
          ) : (
            <Link href="/login" className={LinkStyle} onClick={onClose}>
              LOGIN
            </Link>
          )}
        </nav>
      </div>
    </div>,
    document.body
  );
};

export default MobileGnb;
