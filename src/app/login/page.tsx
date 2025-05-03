import Input from "@/components/login/Input";
import SubmitBtn from "@/components/login/SubmitBtn";
import LOGO from "@/icon/LOGO";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-[calc(100vh-100px)] pt-[130px] flex-col-center gap-[20px]">
      <LOGO className="ml-12" />
      <div className="w-[400px] px-5 flex flex-col gap-2">
        <form action="submit" className="flex flex-col gap-[10px]">
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
          <SubmitBtn title="로그인" />
        </form>
        <div className="w-full flex items-center justify-between text-[14px]">
          <Link href={"/find/id"}>아이디찾기</Link>
          <Link href={"/find/password"}>비밀번호찾기</Link>
          <Link href={"/signup"}>회원가입</Link>
        </div>
      </div>
    </div>
  );
};

export default page;
