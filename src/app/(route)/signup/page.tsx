"use client";

import React, { useState } from "react";
import Input from "@/components/login/Input";
import SubmitBtn from "@/components/login/SubmitBtn";
import AgreementCheckbox from "@/components/signup/AgreementCheckbox";
import LOGO from "@/icon/LOGO";
import { supabase } from "@/service/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { generateRandomNickname } from "@/utils/generateRandomNickname";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (password !== confirmPassword) {
        throw new Error("비밀번호가 일치하지 않습니다.");
      }

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      const user = data.user;
      if (!user) {
        throw new Error("유저 정보를 가져오지 못했습니다.");
      }

      const nickname = generateRandomNickname();

      // 사용자 정보 저장
      const { error: insertError } = await supabase.from("users").insert([
        {
          user_id: user.id,
          nickname,
        },
      ]);

      if (insertError) {
        throw new Error("닉네임 저장 중 오류가 발생했습니다.");
      }

      alert(`회원가입 성공! 닉네임: ${nickname}`);
      router.push("/login");
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "회원가입 중 오류가 발생했습니다."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-[calc(100vh-100px)] custom-login flex-col-center gap-5">
      <LOGO className="ml-12" />
      <div className="w-[400px] px-5 flex flex-col gap-2">
        <form onSubmit={handleSubmit} className="flex flex-col gap-[10px]">
          <Input
            label="이메일"
            placeholder="이메일을 입력해주세요."
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            description="이메일은 로그인, 비밀번호 찾기에 사용됩니다."
          />
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요."
            id="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <AgreementCheckbox />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <SubmitBtn title="회원가입" disabled={isLoading} />
        </form>
      </div>
    </div>
  );
};

export default Page;
