"use client";

import ProfileEditModal from "@/components/ui/modal/ProfileEditModal";
import useGetUser from "@/hooks/api/my-page/useGetUser";
import useProfileEditModal from "@/hooks/ui/my-page/useProfileEditModal";
import { useToast } from "@/hooks/ui/useToast";
import { supabase } from "@/service/lib/supabaseClient";
import { cn } from "@/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const links = [
  {
    href: "/my-page",
    label: "내 정보",
  },
  {
    href: "/my-page/activities",
    label: "활동 내역",
  },
  {
    href: "/my-page/notifications",
    label: "내 알림",
  },
  {
    href: "/my-page/inquiries",
    label: "내 문의 내역",
  },
];

const MyPageNav = () => {
  const { isModalOpen, openModal, closeModal } = useProfileEditModal();
  const { data: user } = useGetUser();
  const userData = user?.[0];
  const toast = useToast();
  const router = useRouter();
  const buttonStyle =
    "w-full py-2 px-4 rounded hover:bg-gray-700 transition-colors";

  // TODO: GNB 캐싱 이슈, 로그아웃 해도 로그아웃 안 됨.
  // TODO: DropDown.tsx handleLogout 함수와 중복, 커스텀 훅으로 수정
  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      sessionStorage.removeItem("userId");
      toast.success("로그아웃이 완료되었습니다.");
      router.push("/");
    } catch (error) {
      toast.error("로그아웃 중 오류가 발생했습니다.");
      console.error("error code:", error);
    }
  };

  return (
    <div className="sticky top-0 w-1/6 h-fit bg-gray-900 flex flex-col items-start gap-4 text-white p-4 rounded-lg">
      {links.map((link, index) => (
        <Link key={index} href={link.href} className={buttonStyle}>
          {link.label}
        </Link>
      ))}
      <button className={cn(buttonStyle, "text-start")} onClick={openModal}>
        내 정보 수정
      </button>
      <button className={cn(buttonStyle, "text-start")} onClick={handleLogout}>
        로그아웃
      </button>
      {isModalOpen && (
        <ProfileEditModal
          isOpen={isModalOpen}
          onClose={closeModal}
          data={userData}
        />
      )}
    </div>
  );
};

export default MyPageNav;
