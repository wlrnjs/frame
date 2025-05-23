import Input from "@/components/features/login/Input";
import SubmitBtn from "@/components/features/login/SubmitBtn";
import LOGO from "@/icon/LOGO";
import Link from "next/link";
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
          />
          <SubmitBtn title="아이디 찾기" />
        </form>
        <div className="flex items-center justify-between">
          <Link href="/login" className="text-sm">
            로그인
          </Link>
          <Link href="/find/password" className="text-sm">
            비밀번호 찾기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
