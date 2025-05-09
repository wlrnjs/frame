"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "@/service/lib/supabaseClient";

const MainAnimation = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data } = await supabase.storage
          .from("main-img")
          .list("animation", { limit: 100 });

        const publicUrls = data
          ?.filter((item) => item.name !== ".emptyFolderPlaceholder")
          .map((item) => {
            try {
              return supabase.storage
                .from("main-img")
                .getPublicUrl(`animation/${item.name}`).data.publicUrl;
            } catch (error) {
              console.error(
                `이미지 URL 생성 중 오류가 발생했습니다: ${item.name}`,
                error
              );
              return null;
            }
          })
          .filter((url) => url !== null);

        setImageUrls(publicUrls || []);
      } catch (error) {
        console.error(
          "이미지 불러오는 중 예기치 않은 오류가 발생했습니다:",
          error
        );
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="w-full h-[calc(100vh-20px)]">
      <div className="w-full h-full flex flex-col gap-20 items-center justify-end">
        <div className="w-[400px] h-[550px] relative overflow-hidden">
          {imageUrls.map((url, index) => (
            <Image
              key={index}
              src={url}
              alt={`main-img-${index}`}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-contain"
            />
          ))}
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
