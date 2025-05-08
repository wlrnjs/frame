import React from "react";
import Input from "../login/Input";

interface EmailCurrentProps {
  email: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EmailCurrent = ({ email, onChange }: EmailCurrentProps) => {
  return (
    <div className="flex gap-2 items-end justify-between">
      <div className="w-3/4">
        <Input
          label="이메일"
          placeholder="이메일을 입력해주세요."
          id="email"
          value={email}
          onChange={onChange}
        />
      </div>
      <button
        type="button"
        className="w-1/4 h-[45px] bg-black text-white rounded-[5px]"
      >
        인증하기
      </button>
    </div>
  );
};

export default EmailCurrent;
