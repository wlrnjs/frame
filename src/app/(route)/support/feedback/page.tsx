"use client";

import React, { useState } from "react";

type Feedback = {
  id: number;
  title: string;
  date: string;
  content: string;
};

const feedback: Feedback[] = [
  {
    id: 1,
    title: "다크 모드 지원 요청",
    date: "2025.05.10",
    content: `앱을 야간에 사용할 때 눈이 피로합니다.  
다크 모드 기능을 추가해 주시면 좋겠습니다.`,
  },
  {
    id: 2,
    title: "이미지 정렬 기능 개선 요청",
    date: "2025.05.08",
    content: `현재 이미지를 업로드한 순서대로만 정렬할 수 있는데,  
좋아요 순, 조회수 순으로도 정렬할 수 있으면 좋겠습니다.`,
  },
  {
    id: 3,
    title: "댓글 알림 기능 추가 요청",
    date: "2025.05.05",
    content: `내가 작성한 게시글에 댓글이 달렸을 때 알림이 오면  
상호작용이 더 쉬울 것 같습니다.`,
  },
];

const FeedbackListPage = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleOpen = (id: number) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="w-full min-h-screen bg-white text-black layout-container custom-margin py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8 border-b pb-4">
          <h1 className="text-3xl font-bold">개선 요청</h1>
          <button className="text-black px-4 py-2 rounded border-black border">
            새로운 요청하기
          </button>
        </div>

        <ul className="space-y-4">
          {feedback.map((feedback) => (
            <li key={feedback.id}>
              <button
                onClick={() => toggleOpen(feedback.id)}
                className="w-full text-left border rounded-xl p-4 hover:bg-gray-50 transition"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{feedback.title}</span>
                  <span className="text-sm text-gray-500">{feedback.date}</span>
                </div>

                {/* 본문 드롭다운 */}
                {openId === feedback.id && (
                  <div className="mt-4 text-sm whitespace-pre-wrap text-gray-700">
                    {feedback.content}
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

export default FeedbackListPage;
