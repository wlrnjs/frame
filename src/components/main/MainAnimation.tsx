import React from "react";
import Image from "next/image";
import { supabase } from "@/service/lib/supabaseClient";

const MainAnimation = () => {
  // TODO: 동적 이미지 처리 필요
  const { data } = supabase.storage
    .from("main-img")
    .getPublicUrl("main-img.jpg");
  console.log(data);
  const imageUrl = data.publicUrl;
  console.log(imageUrl);

  return (
    <div className="w-full h-[calc(100vh-20px)]">
      <div className="w-full h-full flex flex-col gap-20 items-center justify-end">
        <div className="w-[400px] h-[550px] relative overflow-hidden">
          <Image
            src="https://whvyyrwjdjzfcpcwvlvq.supabase.co/storage/v1/object/public/main-img//View.jpg"
            alt="main-img"
            fill
            className="object-contain"
          />
        </div>
        <div className="w-full flex items-start justify-end text-white">
          <div className="w-1/2 flex flex-col gap-[10px] items-start justify-center">
            <p className="text-[25px] leading-[20px] tracking-[-0.02em] text-main font-bold">
              TITLE
            </p>
            <p className="text-[18px] leading-[20px] tracking-[-0.02em] text-sub">
              SubTitle SubTitle SubTitle
            </p>
          </div>
          <div className="w-1/2 flex flex-col text-end">
            <p className="text-sub">CATEGORY CATEGORY CATEGORY</p>
            <p className="text-main">CATEGORY CATEGORY CATEGORY</p>
            <p className="text-sub">CATEGORY CATEGORY CATEGORY</p>
            <p className="text-sub">CATEGORY CATEGORY CATEGORY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAnimation;
