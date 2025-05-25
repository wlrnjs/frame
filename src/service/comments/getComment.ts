import { CommentItemType } from "@/types/CommentType";
import axios from "axios";

interface GetCommentProps {
  id: string;
  type: CommentItemType;
}

const getComment = async ({ id, type }: GetCommentProps) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/comments`, {
      params: {
        select: '*,users(nickname)',
        target_id: `eq.${id}`,
        target_type: `eq.${type}`,
      },
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      },
    }
  );

  return response?.data;
};

export default getComment;