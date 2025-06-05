import { CommentItemType } from "@/types/CommentType";
import axios from "axios";

interface PostCommentProps {
  id: string;
  userId: string;
  content: string;
  type: CommentItemType;
}

const postComment = async ({ id, userId, content, type }: PostCommentProps) => {
  const token = JSON.parse(localStorage.getItem("sb-whvyyrwjdjzfcpcwvlvq-auth-token") || "{}")?.access_token;

  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/comments`,
    { target_id: id, target_type: type, user_id: userId, content },
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

export default postComment;