import React from "react";
import Image from "next/image";
import Question from "@/icon/Question";

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
        className="w-[128px] h-[128px] rounded-full object-cover border-2 border-neutral-700"
      />
      <div className="flex-1 text-left">
        <h1 className="text-2xl font-bold text-white">wlrnjs</h1>
        <p className="text-neutral-400">tjwlrnjs7336@naver.com</p>
        <p className="text-sm text-neutral-500">가입일: 2025.05.04</p>
        <div className="mt-2 flex flex-wrap gap-2 justify-center md:justify-start">
          <span className={categoryStyle}>도시</span>
          <span className={categoryStyle}>풍경</span>
          <span className={categoryStyle}>흑백</span>
        </div>
      </div>
      <div className="text-right">
        <div className="flex gap-1 items-center">
          <div className="text-lg font-semibold text-white text-nowrap flex items-center gap-2">
            <p>활동 점수</p>
            {isMyPage && (
              <div className="relative group">
                <Question />
                <div className="absolute bottom-full mb-2 right-3 hidden group-hover:block w-max bg-white text-black rounded px-2 py-1 whitespace-nowrap z-10">
                  <p className="text-sm leading-normal py-0.5">글쓰기 +30</p>
                  <p className="text-sm leading-normal py-0.5">댓글 +10</p>
                  <p className="text-sm leading-normal py-0.5">
                    개선요청 채택 +50
                  </p>
                  <p className="text-sm leading-normal py-0.5">
                    이벤트 참여 +20
                  </p>
                  <p className="text-sm leading-normal py-0.5 font-semibold">
                    하루 최대 50점
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <p className="text-2xl leading-5 text-white">800</p>
      </div>
    </div>
  );
};

export default UserProfileHeader;
