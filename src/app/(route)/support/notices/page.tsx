"use client";

import React, { useState } from "react";

type Notice = {
  id: number;
  title: string;
  date: string;
  content: string;
};

const notices: Notice[] = [
  {
    id: 1,
    title: "서비스 점검 안내 (5월 15일)",
    date: "2025.05.01",
    content: `안녕하세요, Frame 운영팀입니다.

5월 15일(수) 오전 2시 ~ 4시까지 서버 점검이 예정되어 있어 서비스 이용이 제한됩니다.

더 나은 서비스를 위해 최선을 다하겠습니다. 감사합니다.`,
  },
  {
    id: 2,
    title: "사진 업로드 기능 개선 안내",
    date: "2025.04.18",
    content: `사진 업로드 처리 속도가 약 30% 개선되었습니다.  
지속적으로 안정적인 서비스를 제공하겠습니다.`,
  },
  {
    id: 3,
    title: "Frame 오픈 공지",
    date: "2025.04.03",
    content: `사진 커뮤니티 Frame이 정식 오픈되었습니다.  
많은 관심 부탁드립니다.`,
  },
];

const NoticeListPage = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleOpen = (id: number) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="w-full min-h-screen bg-white text-black layout-container custom-margin py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 border-b pb-4">공지사항</h1>

        <ul className="space-y-4">
          {notices.map((notice) => (
            <li key={notice.id}>
              <button
                onClick={() => toggleOpen(notice.id)}
                className="w-full text-left border rounded-xl p-4 hover:bg-gray-50 transition"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{notice.title}</span>
                  <span className="text-sm text-gray-500">{notice.date}</span>
                </div>

                {/* 본문 드롭다운 */}
                {openId === notice.id && (
                  <div className="mt-4 text-sm whitespace-pre-wrap text-gray-700">
                    {notice.content}
                  </div>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NoticeListPage;
