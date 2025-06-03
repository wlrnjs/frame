import axios from "axios";

export interface getUserLikePostProps {
  post_id: string[];
}

const getUserLikePost = async ({ post_id }: getUserLikePostProps) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/posts`,
    {
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
      },
      params: {
        post_id: `in.(${post_id.join(",")})`,
        select: "*",
        order: "created_at.desc",
      },
    }
  );

  return response.data;
};

export default getUserLikePost;