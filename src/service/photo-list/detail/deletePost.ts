import { supabase } from "@/service/lib/supabaseClient";
import axios from "axios";

interface DeletePostProps {
  post_id: number;
}

const deletePost = async ({ post_id }: DeletePostProps) => {
  const token = JSON.parse(localStorage.getItem("sb-whvyyrwjdjzfcpcwvlvq-auth-token") || "{}")?.access_token;
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const response = await axios.delete(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/posts?post_id=eq.${post_id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "user_id": user?.id,
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
    }
  );
  return response;
};

export default deletePost;