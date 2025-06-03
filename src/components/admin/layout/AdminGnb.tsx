import React from "react";
import Link from "next/link";
import AdminLogo from "@/icon/AdminLogo";

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
    <nav className="w-[200px] h-full flex flex-col justify-start items-center gap-5 bg-gray-800 text-white p-4">
      <AdminLogo className="w-full" />
      <div className="flex flex-col items-start justify-center gap-5">
        {AdminGnbItem.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            {item.text}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default AdminGnb;
