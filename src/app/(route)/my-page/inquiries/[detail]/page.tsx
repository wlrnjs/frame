import React from "react";

const page = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <h1 className="text-xl font-bold">내 문의내역 상세페이지</h1>
      <div className="flex flex-col items-start">
        <div className="w-full flex gap-5 items-center text-start border-t border-gray-300 p-6">
          <p className="text-gray-400">제목</p>
          <p>문의 제목이 들어갈 부분</p>
        </div>
        <div className="w-full flex gap-5 items-center text-start border-t border-gray-300 p-6">
          <p className="text-gray-400">내용</p>
          <p>문의 내용이 들어갈 부분</p>
        </div>
        <div className="w-full flex gap-5 items-center text-start border-t border-gray-300 p-6">
          <p className="text-gray-400">날짜</p>
          <p>날짜가 들어갈 부분</p>
        </div>
        <div className="w-full flex gap-5 items-center text-start border-t border-gray-300 p-6">
          <p className="text-gray-400">상태</p>
          <p>답변대기</p>
        </div>
      </div>
      <h1 className="text-lg font-bold">댓글</h1>
      <div>
        <p>댓글이 들어갈 부분</p>
      </div>
    </div>
  );
};

export default page;
