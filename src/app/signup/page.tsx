"use client";

import React, { useState } from "react";
import Input from "@/components/login/Input";
import SubmitBtn from "@/components/login/SubmitBtn";
import AgreementCheckbox from "@/components/signup/AgreementCheckbox";
import EmailCurrent from "@/components/signup/EmailCurrent";
import LOGO from "@/icon/LOGO";
import { supabase } from "@/service/lib/supabaseClient";
import { useRouter } from "next/navigation";

const Page = () => {
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      setIsLoading(false);
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    setIsLoading(false);

    if (error) {
      setError(error.message);
    } else {
      alert("회원가입 성공! 이메일을 확인해주세요.");
      router.push("/");
    }
  };

  return (
    <div className="w-full h-[calc(100vh-100px)] custom-login flex-col-center gap-[20px]">
      <LOGO className="ml-12" />
      <div className="w-[400px] px-5 flex flex-col gap-2">
        <form onSubmit={handleSubmit} className="flex flex-col gap-[10px]">
          <EmailCurrent
            email={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
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
