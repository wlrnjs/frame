"use client";

import React, { useState } from "react";
import Input from "@/components/login/Input";
import SubmitBtn from "@/components/login/SubmitBtn";
import LOGO from "@/icon/LOGO";
import Link from "next/link";
import { supabase } from "@/service/lib/supabaseClient";
import { useRouter } from "next/navigation";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      alert("로그인 성공!");
      router.push("/");
    }
  };

  return (
    <div className="w-full h-[calc(100vh-100px)] custom-login flex-col-center gap-[20px]">
      <LOGO className="ml-12" />
      <div className="w-[400px] px-5 flex flex-col gap-2">
        <form onSubmit={handleSubmit} className="flex flex-col gap-[10px]">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            id="userId"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <SubmitBtn title="로그인" />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
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

export default Page;
