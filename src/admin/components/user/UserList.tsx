import React from "react";

const UserList = () => {
  return (
    <div>
      <p className="text-2xl font-bold">유저 리스트</p>
      <div className="grid grid-rows-4 gap-4">
        <p>닉네임</p>
        <p>이메일</p>
        <p>가입일</p>
        <p>가입 기간</p>
      </div>
    </div>
  );
};

export default UserList;
