"use client";

import Input from "@/components/login/Input";
import SubmitBtn from "@/components/login/SubmitBtn";
import LOGO from "@/icon/LOGO";
import { supabase } from "@/service/lib/supabaseClient";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:3000/reset-password",
    });

    if (error) {
      setMessage("오류가 발생했습니다: " + error.message);
    } else {
      setMessage("이메일로 비밀번호 재설정 링크를 보냈습니다.");
    }
  };

  return (
    <div className="w-full h-[calc(100vh-100px)] custom-login flex-col-center gap-[20px]">
      <LOGO className="ml-12" />
      <div className="w-[400px] px-5 flex flex-col gap-2">
        <form onSubmit={handleSubmit} className="flex flex-col gap-[10px]">
          <Input
            label="이메일"
            placeholder="이메일을 입력해주세요."
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <SubmitBtn title="비밀번호 초기화" />
        </form>
        <div className="flex items-center justify-between">
          <Link href="/login" className="text-[14px]">
            로그인
          </Link>
          <Link href="/find/id" className="text-[14px]">
            아이디 찾기
          </Link>
        </div>
        {message && <p className="text-sm text-white mt-2">{message}</p>}
      </div>
    </div>
  );
};

export default Page;
