import { cn } from "@/utils";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div
      className={cn(
        "w-full min-h-screen flex flex-col items-center justify-center gap-8 layout-container bg-black text-white",
        "mobile:gap-2"
      )}
    >
      <h1
        className={cn(
          "text-6xl md:text-8xl font-bold tracking-tight pt-12",
          "mobile:pt-8"
        )}
      >
        404
      </h1>
      <h2
        className={cn(
          "text-2xl md:text-3xl font-semibold text-center",
          "mobile:text-xl"
        )}
      >
        앗! 이 페이지는 앨범 밖으로 빠져나갔어요!
      </h2>
      <p
        className={cn(
          "text-lg md:text-xl text-gray-400 text-center max-w-md",
          "mobile:text-sm"
        )}
      >
        걱정 마세요, 잃어버린 사진 찾듯이 다시 정리해드릴게요. <br />
        갤러리로 돌아가볼까요?
      </p>
      <Link
        href="/"
        className={cn(
          "mt-4 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors duration-300",
          "mobile:px-4"
        )}
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
};

export default Page;
