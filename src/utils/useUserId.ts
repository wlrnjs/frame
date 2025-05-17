import { useEffect, useState } from "react";
import { supabase } from "@/service/lib/supabaseClient";

const useUserId = () => {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUserId(user?.id ?? null);
    };

    fetchUser();
  }, []);

  return userId;
};

export default useUserId;