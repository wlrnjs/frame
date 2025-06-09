import React from "react";
import Image from "next/image";
import { cn } from "@/utils";
import { formatDate } from "@/utils/date/dateUtils";
import { UserDataType } from "@/types/ProfileType";
import LOGO from "@/icon/LOGO";

interface UserProfileHeaderProps {
  userData?: UserDataType;
}

const UserProfileHeader = ({ userData }: UserProfileHeaderProps) => {
  const categoryStyle = cn(
    "inline-block bg-neutral-800 text-white text-xs px-2 py-1 rounded-full",
    "mobile:text-[10px]"
  );

  return (
    <div className={cn("flex-center gap-6", "mobile:gap-2")}>
      <div
        className={cn(
          "relative w-[128px] h-[128px] rounded-full object-cover border-2 border-neutral-700 flex-center overflow-hidden",
          "mobile:w-[80px] mobile:h-[80px]"
        )}
      >
        {userData?.profile_image ? (
          <Image
            src={userData?.profile_image}
            alt="Profile"
            fill
            className="object-cover"
          />
        ) : (
          <div>
            <LOGO className="w-full mt-2" isLogin />
          </div>
        )}
      </div>
      <div className="flex-1 text-left">
        <h1 className={cn("text-2xl font-bold text-white", "mobile:text-lg")}>
          {userData?.nickname}
        </h1>
        <p className={cn("text-neutral-400", "mobile:text-xs")}>
          {userData?.email || "이메일 미등록"}
        </p>
        <p className={cn("text-sm text-neutral-500", "mobile:text-xs")}>
          가입일: {formatDate(userData?.created_at || "알수없음")}
        </p>
        <div className={cn("mt-2 flex flex-wrap gap-2", "mobile:gap-1")}>
          {Array.isArray(userData?.category) &&
          userData?.category.length > 0 ? (
            userData?.category?.map((category: string) => (
              <span key={category} className={categoryStyle}>
                {category}
              </span>
            ))
          ) : (
            <p className={categoryStyle}>카테고리 미등록</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfileHeader;
