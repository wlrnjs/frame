import React from "react";
import Edit from "@/icon/Edit";
import { cn } from "@/utils";

interface ProfileEditButtonProps {
  onClick: () => void;
  className?: string;
}

// 프로필 편집 버튼 컴포넌트
const ProfileEditButton = ({ onClick, className }: ProfileEditButtonProps) => (
  <button
    className={cn(
      "absolute right-6 top-3 h-[40px] bg-gray-920 border border-gray-870 rounded-[5px] px-4 py-2 text-sm text-white hover:bg-black transition-all duration-300 ease-out flex items-center gap-2",
      "mobile:right-4 mobile:top-2 mobile:h-[30px] mobile:text-xs mobile:px-2 mobile:py-1",
      className
    )}
    onClick={onClick}
  >
    <Edit size="16" />
    프로필 편집
  </button>
);

export default ProfileEditButton;
