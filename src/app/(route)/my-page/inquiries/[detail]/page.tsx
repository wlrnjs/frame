import React from "react";

const page = () => {
  return (
    <div className="w-full flex flex-col">
      <h1>내 문의내역 상세</h1>

      <div className="flex flex-col w-full max-w-md border border-gray-300 rounded p-4">
        <div className="flex border-b py-2">
          <div className="w-32 font-semibold text-gray-700">문의 제목</div>
          <div className="flex-1">문의 제목이 들어갈 부분</div>
        </div>
        <div className="flex border-b py-2">
          <div className="w-32 font-semibold text-gray-700">문의 내용</div>
          <div className="flex-1">문의 내용이 들어갈 부분</div>
        </div>
        <div className="flex border-b py-2">
          <div className="w-32 font-semibold text-gray-700">문의 일시</div>
          <div className="flex-1">2025년 06월 13일</div>
        </div>
        <div className="flex py-2">
          <div className="w-32 font-semibold text-gray-700">답변 일시</div>
          <div className="flex-1">2025년 06월 13일</div>
        </div>
      </div>
    </div>
  );
};

export default page;
