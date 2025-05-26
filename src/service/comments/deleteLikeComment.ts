import axios from "axios";

interface DeleteLikeCommentProps {
  id: string;
}

const deleteLikeComment = async ({ id }: DeleteLikeCommentProps) => {
  const token = JSON.parse(localStorage.getItem("sb-whvyyrwjdjzfcpcwvlvq-auth-token") || "{}")?.access_token;
  const userId = JSON.parse(localStorage.getItem("sb-whvyyrwjdjzfcpcwvlvq-auth-token") || "{}")?.user?.id;

  const response = await axios.delete(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/comment_likes?comment_id=eq.${id}&user_id=eq.${userId}`,
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

export default deleteLikeComment;