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
  },
  {
    href: "/admin/photo",
    text: "사진 관리",
  },
  {
    href: "/admin/comment",
    text: "댓글 관리",
  },
  {
    href: "/admin/report",
    text: "신고 관리",
  },
  {
    href: "/admin/inquiry",
    text: "문의 관리",
  },
  {
    href: "/admin/notice",
    text: "공지 관리",
  },
  {
    href: "/admin/event",
    text: "이벤트 관리",
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
