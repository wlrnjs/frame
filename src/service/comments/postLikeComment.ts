import axios from "axios";

interface PostLikeCommentProps {
  id: string;
}

const postLikeComment = async ({ id }: PostLikeCommentProps) => {
  const token = JSON.parse(localStorage.getItem("sb-whvyyrwjdjzfcpcwvlvq-auth-token") || "{}")?.access_token;
  const userId = JSON.parse(localStorage.getItem("sb-whvyyrwjdjzfcpcwvlvq-auth-token") || "{}")?.user?.id;

  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/comment_likes`,
    { comment_id: id, user_id: userId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
    }
  );
  return response;
};

export default postLikeComment;