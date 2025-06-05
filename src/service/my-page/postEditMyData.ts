import axios from "axios";
import { supabase } from "../lib/supabaseClient";

export interface postEditMyDataProps {
  profile_image: string;
  nickname: string;
  email: string;
  category: string[];
  camera: string;
  lens: string;
  links: { name: string; url: string }[];
}

const postEditMyData = async (data: postEditMyDataProps) => {
  const userId = (await supabase.auth.getUser()).data.user?.id;
  if (!userId) throw new Error("사용자 인증이 필요합니다.");

  const session = await supabase.auth.getSession();
  const accessToken = session.data.session?.access_token

  const response = await axios.patch(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/users?user_id=eq.${userId}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        // Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        "Content-Type": "application/json",
        "Prefer": "return=representation",
      },
    }
  );
  return response.data[0];
};

export default postEditMyData;