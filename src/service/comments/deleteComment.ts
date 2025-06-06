import axios from "axios";
import { CommentItemType } from "@/types/CommentType";

interface DeleteCommentProps {
  id: string;
  userId: string;
  type: CommentItemType;
}

const deleteComment = async ({ id, userId, type }: DeleteCommentProps) => {
  const token = JSON.parse(localStorage.getItem("sb-whvyyrwjdjzfcpcwvlvq-auth-token") || "{}")?.access_token;

  const response = await axios.delete(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/comments?id=eq.${id}&user_id=eq.${userId}&target_type=eq.${type}`,
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

export default deleteComment;