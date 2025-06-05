import React from "react";
import Image from "next/image";
import { cn } from "@/utils";
import { supabase } from "@/service/lib/supabaseClient";
import Link from "next/link";

// TODO: 디자인 수정 더 해야할듯

const BestContainer = async () => {
  const { data, error } = await supabase.rpc("get_top_viewed_image_last_month");

  if (error) {
    console.error("Error fetching top image:", error);
  }

  const rawUrl = data[0]?.img_urls;
  const cleanedUrl = rawUrl?.replace(/[{}"]/g, "").split(",")[0];

  return (
    <div className="w-full h-screen bg-black flex-col-center gap-5">
      <h1
        className={cn(
          "text-white text-3xl tracking-[-0.04em]",
          "mobile:text-[25px]"
        )}
      >
        현재 가장 주목받고 있는 이미지
      </h1>
      {cleanedUrl ? (
        <Link
          href={`/photo-list/detail?id=${data[0]?.post_id}`}
          className={cn(
            "w-[350px] h-[550px] relative rounded-lg shadow-lg overflow-hidden pointer",
            "mobile:w-[350px] mobile:h-[350px]"
          )}
        >
          <Image
            src={cleanedUrl}
            alt="best-image"
            fill
            className="object-contain"
          />
        </Link>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <p className="text-white text-2xl tracking-[-0.04em]">
              가 없네요..
            </p>
            <p className="text-white text-xl tracking-[-0.04em]">
              가장 먼저 이미지를 추가해보세요!
            </p>
          </div>
          <Link href="/write">
            <button
              className={cn(
                "w-[200px] h-[50px] rounded-[5px] text-lg border-2 border-gray-870 text-white hover:bg-gray-920 transition-all duration-300",
                "mobile:w-[100px] mobile:h-[40px]"
              )}
            >
              글쓰러 가기
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default BestContainer;
