import axios from "axios";

interface PostLikeToggleProps {
  post_id: number;
}

const postLikeToggle = async ({post_id}: PostLikeToggleProps) => {
  const token = JSON.parse(localStorage.getItem("sb-whvyyrwjdjzfcpcwvlvq-auth-token") || "{}")?.access_token;
  const userId = JSON.parse(localStorage.getItem("sb-whvyyrwjdjzfcpcwvlvq-auth-token") || "{}")?.user?.id;

  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/posts_like`, 
    {
      post_id,
      user_id: userId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        Prefer: "return=representation",
      },
    }
  );

  return response;
};

export default postLikeToggle;