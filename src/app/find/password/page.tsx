import Input from "@/components/login/Input";
import SubmitBtn from "@/components/login/SubmitBtn";
import LOGO from "@/icon/LOGO";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-[calc(100vh-100px)] custom-login flex-col-center gap-[20px]">
      <LOGO className="ml-12" />
      <div className="w-[400px] px-5 flex flex-col gap-2">
        <form action="submit" className="flex flex-col gap-[10px]">
          <Input
            label="이메일"
            placeholder="이메일을 입력해주세요."
            id="email"
            type="email"
          />
          <SubmitBtn title="임시 비밀번호 발급받기" />
        </form>
      </div>
    </div>
  );
};

export default page;
