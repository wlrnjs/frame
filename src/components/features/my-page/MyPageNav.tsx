import Link from "next/link";
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
  {
    href: "/my-page/",
    label: "내 정보 수정",
  },
  {
    href: "/my-page/",
    label: "로그아웃",
  },
];

const MyPageNav = () => {
  return (
    <div className="sticky top-0 w-1/6 h-fit bg-gray-900 flex flex-col items-start gap-4 text-white p-4 rounded-lg">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="w-full py-2 px-4 rounded hover:bg-gray-700 transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default MyPageNav;
