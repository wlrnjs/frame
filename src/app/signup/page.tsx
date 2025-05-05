import Input from "@/components/login/Input";
import SubmitBtn from "@/components/login/SubmitBtn";
import AgreementCheckbox from "@/components/signup/AgreementCheckbox";
import EmailCurrent from "@/components/signup/EmailCurrent";
import LOGO from "@/icon/LOGO";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-[calc(100vh-100px)] custom-login flex-col-center gap-[20px]">
      <LOGO className="ml-12" />
      <div className="w-[400px] px-5 flex flex-col gap-2">
        <form action="submit" className="flex flex-col gap-[10px]">
          <EmailCurrent />
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            id="userId"
          />
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            id="password"
            type="password"
          />
          <Input
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요."
            id="password"
            type="password"
          />
          <AgreementCheckbox />
          <SubmitBtn title="회원가입" />
        </form>
      </div>
    </div>
  );
};

export default page;
