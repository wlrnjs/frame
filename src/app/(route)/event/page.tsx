import Image from "next/image";
import Link from "next/link";
import React from "react";

const EventPage = () => {
  return (
    <div className="w-full min-h-screen text-black custom-margin layout-container">
      <main className="w-full flex flex-col items-center">
        {/* 이벤트 타이틀 */}
        <h2 className="text-3xl mb-8">이벤트 페이지</h2>

        {/* 메인 이벤트 이미지 */}
        <Link
          href="/event/detail"
          className="relative w-1/2 h-96 bg-gray-800 mb-12 overflow-hidden"
        >
          <Image
            src="/IMG_7115.JPG"
            alt="Event Main"
            fill
            className="object-cover hover:scale-105 transition-all duration-300 ease-out"
          />
        </Link>

        {/* 이벤트 갤러리 섹션 */}
        <section className="w-full py-5">
          <h3 className="text-xl mb-4">다가오는 이벤트</h3>
          <div className="grid grid-cols-3 gap-4">
            {[...Array(6)].map((_, index) => (
              <Link
                href="/event/detail"
                key={index}
                className="relative w-full h-56 bg-gray-800 overflow-hidden"
              >
                <Image
                  src="/IMG_7115.JPG"
                  alt={`Event ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-all duration-300 ease-out"
                />
              </Link>
            ))}
          </div>
        </section>
        {/* 종료된 이벤트 섹션 */}
        <section className="w-full py-5">
          <h3 className="text-xl mb-4">종료된 이벤트</h3>
          <div className="grid grid-cols-3 gap-4">
            {[...Array(6)].map((_, index) => (
              <Link
                href="/event/detail"
                key={index}
                className="relative w-full h-56 overflow-hidden"
              >
                <Image
                  src="/IMG_7115.JPG"
                  alt={`Event ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-all duration-300 ease-out grayscale"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  종료됨
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default EventPage;
