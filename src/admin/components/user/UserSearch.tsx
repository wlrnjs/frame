import React from "react";

const SearchType = [
  {
    label: "닉네임",
    value: "nickname",
    placeholder: "닉네임을 입력해주세요.",
  },
  {
    label: "이메일",
    value: "email",
    placeholder: "이메일을 입력해주세요.",
  },
  {
    label: "가입일",
    value: "createdAt",
    placeholder: "가입일을 입력해주세요.",
  },
  {
    label: "가입 기간",
    value: "createdAtRange",
    placeholder: "가입 기간을 입력해주세요.",
  },
];

const UserSearch = () => {
  return (
    <div className="w-full h-fit p-6">
      <div className="w-full flex flex-col">
        {SearchType.map((item) => (
          <div
            key={item.value}
            className="w-full h-[60px] bg-black flex items-center text-start"
          >
            <p className="w-[160px] bg-[#FFFFFF] text-white p-2">
              {item.label}
            </p>
            <input
              type="text"
              placeholder={item.placeholder}
              className="w-[300px] px-4 py-[10px] border border-gray-920 rounded-md"
            />
          </div>
        ))}
      </div>
      <div className="w-full flex items-center">
        <button className="w-full h-[120px] bg-red-500 text-white p-2">
          검색
        </button>
      </div>
    </div>
  );
};

export default UserSearch;
