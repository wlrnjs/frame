"use client";

import { supabase } from "@/service/lib/supabaseClient";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/ui/useToast";

interface DropDownItem {
  type: "link" | "button";
  href?: string;
  text: string;
}

const DROPDOWN_ITEMS: DropDownItem[] = [
  { type: "link", href: "/my-page", text: "프로필 관리" },
  { type: "link", href: "/", text: "관심 목록" },
  { type: "button", text: "로그아웃" },
];

const DropDown = () => {
  const toast = useToast();
  const router = useRouter();

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

  const dropDownStyle =
    "block w-full text-start px-4 py-2 text-white hover:bg-gray-800";

  return (
    <div className="absolute right-0 mt-3 w-48 bg-black rounded-md py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
      {DROPDOWN_ITEMS.map((item, index) => {
        if (item.type === "link") {
          return (
            <Link key={index} href={item.href!} className={dropDownStyle}>
              {item.text}
            </Link>
          );
        }
        return (
          <button
            key={index}
            className={dropDownStyle}
            onClick={item.text === "로그아웃" ? handleLogout : undefined}
          >
            {item.text}
          </button>
        );
      })}
    </div>
  );
};

export default DropDown;
