import React from "react";
import Image from "next/image";
import Question from "@/icon/Question";
import { cn } from "@/utils";
import { formatDate } from "@/utils/date/dateUtils";
import { UserDataType } from "@/types/ProfileType";

const ACTIVITY_SCORE_TOOLTIP = [
  { label: "글쓰기", value: "+30" },
  { label: "댓글", value: "+10" },
  { label: "개선요청 채택", value: "+50" },
  { label: "이벤트 참여", value: "+20" },
  { label: "하루 최대", value: "50점", isBold: true },
];

interface UserProfileHeaderProps {
  isMyPage?: boolean;
  userData?: UserDataType;
}

const UserProfileHeader = ({
  isMyPage = false,
  userData,
}: UserProfileHeaderProps) => {
  const categoryStyle = cn(
    "inline-block bg-neutral-800 text-white text-xs px-2 py-1 rounded-full",
    "mobile:text-[10px]"
  );

  return (
    <div className={cn("flex-center gap-6", "mobile:gap-2")}>
      <Image
        src={"/avatar.png"}
        alt="Profile"
        width={128}
        height={128}
        className={cn(
          "w-[128px] h-[128px] rounded-full object-cover border-2 border-neutral-700",
          "mobile:w-[100px] mobile:h-[100px]"
        )}
      />
      <div className="flex-1 text-left">
        <h1 className={cn("text-2xl font-bold text-white", "mobile:text-xl")}>
          {userData?.nickname}
        </h1>
        <p className={cn("text-neutral-400", "mobile:text-sm")}>
          {userData?.email || "이메일 미등록"}
        </p>
        <p className={cn("text-sm text-neutral-500", "mobile:text-xs")}>
          가입일: {formatDate(userData?.created_at || "알수없음")}
        </p>
        <div className={cn("mt-2 flex flex-wrap gap-2", "mobile:gap-1")}>
          {userData?.category ? (
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
      <div className="text-right">
        <div className="flex gap-1 items-center">
          <div
            className={cn(
              "text-lg font-semibold text-white text-nowrap flex items-center gap-2",
              "mobile:text-sm"
            )}
          >
            <p>활동 점수</p>
            {isMyPage && (
              <div className="relative group">
                <Question />
                <div className="absolute bottom-full mb-2 right-1 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 ease-in-out w-max bg-white text-black rounded px-2 py-1 whitespace-nowrap z-10">
                  {ACTIVITY_SCORE_TOOLTIP.map(({ label, value, isBold }) => (
                    <p
                      key={label}
                      className={cn(
                        "text-sm leading-normal py-0.5",
                        isBold && "font-semibold",
                        "mobile:text-xs"
                      )}
                    >
                      {label} {value}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <p className={cn("text-2xl leading-5 text-white", "mobile:text-xl")}>
          {userData?.activity_score || "0"}점
        </p>
      </div>
    </div>
  );
};

export default UserProfileHeader;
