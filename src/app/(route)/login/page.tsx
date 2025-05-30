"use client";

import React, { useState } from "react";
import Input from "@/components/features/login/Input";
import SubmitBtn from "@/components/features/login/SubmitBtn";
import LOGO from "@/icon/LOGO";
import Link from "next/link";
import { supabase } from "@/service/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/ui/useToast";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("아이디 또는 비밀번호를 확인해주세요");
      toast.error("아이디 또는 비밀번호를 확인해주세요");
    } else {
      // 쿠키 저장
      const accessToken = data?.session?.access_token;
      const refreshToken = data?.session?.refresh_token;

      if (accessToken && refreshToken) {
        document.cookie = `sb-access-token=${accessToken}; path=/; max-age=3600;`;
        document.cookie = `sb-refresh-token=${refreshToken}; path=/; max-age=604800;`;

        // 배포후 변경 (secure 옵션)
        // document.cookie = `sb-access-token=${accessToken}; path=/; max-age=3600; secure`;
        // document.cookie = `sb-refresh-token=${refreshToken}; path=/; max-age=604800; secure`;
      }

      toast.success("로그인 성공!");
      router.push("/");
    }
  };

  return (
    <div className="w-full h-[calc(100vh-100px)] custom-login flex-col-center gap-5">
      <LOGO className="text-black mr-2" isLogin />
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
          <div className="flex flex-col gap-1">
            <SubmitBtn title="로그인" />
            {error && <p className="text-red-500 text-">{error}</p>}
          </div>
        </form>
        <div className="w-full flex items-center justify-between text-sm">
          <Link href={"/find/id"}>아이디찾기</Link>
          <Link href={"/find/password"}>비밀번호찾기</Link>
          <Link href={"/signup"}>회원가입</Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
