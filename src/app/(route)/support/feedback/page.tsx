"use client";

import React, { useState } from "react";
import FeedbackModal from "@/components/modal/FeedbackModal";
import useGetFeedbackList from "@/service/hooks/support/feedback/useGetFeedbackList";
import { formatDate } from "@/utils/formatDate";

type Feedback = {
  id: number;
  title: string;
  content: string;
  created_at: string;
};

const FeedbackListPage = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: feedbackList } = useGetFeedbackList();

  const toggleOpen = (id: number) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="w-full min-h-screen bg-white text-black layout-container custom-margin py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8 border-b pb-4">
          <h1 className="text-3xl font-bold">개선 요청</h1>
          <button
            className="text-black px-4 py-2 rounded border-black border hover:bg-black hover:text-white hover:border-transparent transition-colors"
            onClick={() => setIsModalOpen(true)}
          >
            새로운 요청하기
          </button>
        </div>

        {isModalOpen && (
          <FeedbackModal
            onOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSubmit={(title, content) => {
              // TODO: 실제 저장 로직 구현 필요
              console.log("피드백 제출:", title, content);
            }}
          />
        )}

        <ul className="space-y-4">
          {feedbackList?.map((feedback: Feedback) => (
            <li key={feedback.id}>
              <button
                onClick={() => toggleOpen(feedback.id)}
                className="w-full text-left border rounded-xl p-4 hover:bg-gray-50 transition"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{feedback.title}</span>
                  <span className="text-sm text-gray-500">
                    {formatDate(feedback.created_at)}
                  </span>
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
      {isModalOpen && (
        <FeedbackModal
          onOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={(title, content) => {
            // TODO: 실제 저장 로직 구현 필요
            console.log("피드백 제출:", title, content);
          }}
        />
      )}
    </div>
  );
};

export default FeedbackListPage;
