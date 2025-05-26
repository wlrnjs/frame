import axios from "axios";

interface PostLikeCommentProps {
  id: string;
  userId: string;
}

const postLikeComment = async ({ id, userId }: PostLikeCommentProps) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/comment_likes`,
    { comment_id: id, user_id: userId },
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
    }
  );
  return response;
};

export default postLikeComment;