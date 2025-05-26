"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/service/lib/supabaseClient";

const useUserId = () => {
  const [userId, setUserId] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("userId");
    }
    return null;
  });

  useEffect(() => {
    if (userId) return;

    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const id = user?.id ?? null;
      setUserId(id);

      if (id) {
        sessionStorage.setItem("userId", id);
      }
    };

    fetchUser();
  }, [userId]);

  return userId;
};

export default useUserId;