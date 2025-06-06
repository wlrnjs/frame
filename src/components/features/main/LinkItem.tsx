import Link from "next/link";
import React from "react";
import Image from "next/image";
import { cn } from "@/utils";

interface FinalSectionProps {
  href: string;
  imgSrc: string;
  title: string;
  description: string;
  className: string;
}

const LinkItem = ({
  href,
  imgSrc,
  title,
  description,
  className,
}: FinalSectionProps) => {
  return (
    <Link
      href={href}
      className={cn("w-full h-full fade-up group block", className)}
    >
      <div className="relative w-full h-full overflow-hidden hover-slide">
        {/* 오버레이 텍스트 */}
        <div className="absolute bottom-0 left-0 w-full flex-col-center gap-1 justify-end pb-6 z-10 text-white pointer-events-none drop-shadow-md">
          <span className="text-[30px]">{title}</span>
          <span className="text-[12px]">{description}</span>
        </div>
        {/* 이미지 */}
        <Image
          src={imgSrc}
          alt="image"
          width={420}
          height={500}
          className="object-cover w-full h-full block shadow-lg hover:scale-105 transition-all duration-300"
        />
        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      </div>
    </Link>
  );
};

export default LinkItem;
