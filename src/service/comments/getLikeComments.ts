import axios from "axios";

interface GetCommentProps {
  ids: string[];
}

const getLikeComment = async ({ ids }: GetCommentProps) => {
  const idList = ids.join(',');

  const token = JSON.parse(localStorage.getItem("sb-whvyyrwjdjzfcpcwvlvq-auth-token") || "{}")?.access_token;

  if (!token) throw new Error("인증 정보가 없습니다.");

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/comment_likes`, {
      params: {
        select: '*,users(nickname)',
        comment_id: `in.(${idList})`,
      },
      headers: {
        Authorization: `Bearer ${token}`,
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      },
    }
  );

  return response?.data;
};

export default getLikeComment;