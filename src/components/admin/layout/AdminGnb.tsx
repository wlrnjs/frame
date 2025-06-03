"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import AdminLogo from "@/icon/AdminLogo";
import { useSearchParams } from "next/navigation";
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
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdminGnbDom />
    </Suspense>
  );
};

const AdminGnbDom = () => {
  const params = useSearchParams();
  const activeItem = AdminGnbItem.find(
    (item) => item.href === params.get("page")
  );

  return (
    <nav className="w-[200px] h-full flex flex-col justify-start items-center gap-5 bg-gray-800 text-white p-4">
      <AdminLogo className="w-full" />
      <div className="flex flex-col items-start justify-center gap-5">
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
    </nav>
  );
};

export default AdminGnb;
