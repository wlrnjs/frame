"use client";

import React from "react";
import Link from "next/link";
import AdminLogo from "@/icon/AdminLogo";
import { usePathname } from "next/navigation";
import { cn } from "@/utils";

const AdminGnbItem = [
  {
    href: "/admin/user",
    text: "회원 관리",
    // subMenu: [
    //   { href: "/admin/user/list", text: "회원 목록" },
    //   { href: "/admin/user/register", text: "회원 등록" },
    //   { href: "/admin/user/blocked", text: "차단된 회원" },
    // ],
  },
  {
    href: "/admin/photo",
    text: "사진 관리",
    // subMenu: [
    //   { href: "/admin/photo/list", text: "사진 목록" },
    //   { href: "/admin/photo/register", text: "사진 등록" },
    //   { href: "/admin/photo/blocked", text: "차단된 사진" },
    // ],
  },
  {
    href: "/admin/comment",
    text: "댓글 관리",
    // subMenu: [
    //   { href: "/admin/comment/list", text: "댓글 목록" },
    //   { href: "/admin/comment/register", text: "댓글 등록" },
    //   { href: "/admin/comment/blocked", text: "차단된 댓글" },
    // ],
  },
  {
    href: "/admin/report",
    text: "신고 관리",
    // subMenu: [
    //   { href: "/admin/report/comment", text: "댓글 신고" },
    //   { href: "/admin/report/post", text: "게시글 신고" },
    //   { href: "/admin/report/all", text: "모든 신고 보기" },
    // ],
  },
  {
    href: "/admin/inquiry",
    text: "문의 관리",
    // subMenu: [
    //   { href: "/admin/inquiry/pending", text: "대기 중인 문의" },
    //   { href: "/admin/inquiry/resolved", text: "처리 완료 문의" },
    // ],
  },
  {
    href: "/admin/notice",
    text: "공지 관리",
    // subMenu: [
    //   { href: "/admin/notice/list", text: "공지 목록" },
    //   { href: "/admin/notice/register", text: "공지 등록" },
    // ],
  },
  {
    href: "/admin/event",
    text: "이벤트 관리",
    // subMenu: [
    //   { href: "/admin/event/ongoing", text: "진행 중인 이벤트" },
    //   { href: "/admin/event/past", text: "종료된 이벤트" },
    //   { href: "/admin/event/create", text: "이벤트 생성" },
    // ],
  },
];

const AdminGnb = () => {
  const pathname = usePathname();
  const activeItem = AdminGnbItem.find((item) => item.href === pathname);

  return (
    <nav className="w-[250px] h-full flex flex-col justify-between items-center gap-5 bg-gray-800 text-white p-4">
      <div className="flex flex-col gap-5">
        <Link href="/admin">
          <AdminLogo className="w-full" />
        </Link>
        <div className="flex flex-col items-center justify-center gap-5">
          {AdminGnbItem.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "hover:text-yellow-300 transition-colors duration-200",
                activeItem?.href === item.href && "text-yellow-300"
              )}
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <Link href={"/"}>FRAME USER</Link>
      </div>
    </nav>
  );
};

export default AdminGnb;
