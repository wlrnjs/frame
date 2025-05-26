import axios from "axios";

interface DeleteLikeCommentProps {
  id: string;
  userId: string;
}

const deleteLikeComment = async ({ id, userId }: DeleteLikeCommentProps) => {
  const response = await axios.delete(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/comment_likes?comment_id=eq.${id}&user_id=eq.${userId}`,
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

export default deleteLikeComment;