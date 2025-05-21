import React from "react";
import Image from "next/image";
import Question from "@/icon/Question";
import { cn } from "@/utils";

const ACTIVITY_SCORE_TOOLTIP = [
  { label: "글쓰기", value: "+30" },
  { label: "댓글", value: "+10" },
  { label: "개선요청 채택", value: "+50" },
  { label: "이벤트 참여", value: "+20" },
  { label: "하루 최대", value: "50점", isBold: true },
];

interface UserProfileHeaderProps {
  isMyPage?: boolean;
}

const UserProfileHeader = ({ isMyPage = false }: UserProfileHeaderProps) => {
  const categoryStyle =
    "inline-block bg-neutral-800 text-white text-xs px-2 py-1 rounded-full";

  return (
    <div className="flex-center gap-6">
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
          wlrnjs
        </h1>
        <p className={cn("text-neutral-400", "mobile:text-sm")}>
          tjwlrnjs7336@naver.com
        </p>
        <p className={cn("text-sm text-neutral-500", "mobile:text-xs")}>
          가입일: 2025.05.04
        </p>
        <div className={cn("mt-2 flex flex-wrap gap-2", "mobile:gap-1")}>
          <span className={categoryStyle}>도시</span>
          <span className={categoryStyle}>풍경</span>
          <span className={categoryStyle}>흑백</span>
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
          800
        </p>
      </div>
    </div>
  );
};

export default UserProfileHeader;
