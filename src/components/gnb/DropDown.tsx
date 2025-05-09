"use client";

import Link from "next/link";

interface DropDownItem {
  type: 'link' | 'button';
  href?: string;
  text: string;
}

const DROPDOWN_ITEMS: DropDownItem[] = [
  { type: 'link', href: '/my-page', text: '프로필 관리' },
  { type: 'link', href: '/', text: '관심 목록' },
  { type: 'button', text: '로그아웃' },
];

const DropDown = () => {
  const dropDownStyle = "block px-4 py-2 text-white hover:bg-gray-800";

  return (
    <div className="absolute right-0 mt-3 w-48 bg-black rounded-md py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
      {DROPDOWN_ITEMS.map((item, index) => {
        if (item.type === 'link') {
          return (
            <Link
              key={index}
              href={item.href!}
              className={dropDownStyle}
            >
              {item.text}
            </Link>
          );
        }
        return (
          <button key={index} className={dropDownStyle}>
            {item.text}
          </button>
        );
      })}
    </div>
  );
};

export default DropDown;
