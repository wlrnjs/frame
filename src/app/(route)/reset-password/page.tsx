"use client";

import React, { useState } from "react";
import Input from "@/components/login/Input";
import SubmitBtn from "@/components/login/SubmitBtn";
import { supabase } from "@/service/lib/supabaseClient";

const Page = () => {
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.updateUser({ password: newPassword });

    if (error) {
      setMessage("오류가 발생했습니다: " + error.message);
    } else {
      setMessage("비밀번호가 성공적으로 변경되었습니다. 다시 로그인 해주세요.");
    }
  };

  return (
    <div className="w-full h-[calc(100vh-100px)] custom-login flex-col-center gap-5">
      <h1 className="text-white text-2xl font-semibold">비밀번호 재설정</h1>
      <div className="w-[400px] px-5 flex flex-col gap-2">
        <form onSubmit={handleReset} className="flex flex-col gap-[10px]">
          <Input
            label="새 비밀번호"
            placeholder="새 비밀번호를 입력해주세요."
            id="new-password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <SubmitBtn title="비밀번호 변경" />
        </form>
        {message && <p className="text-sm text-white mt-2">{message}</p>}
      </div>
    </div>
  );
};

export default Page;
