import axios from "axios";

const postLikeToggle = async ({post_id, user_id}: {post_id: number, user_id: string}) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/posts_like`, 
    {
      post_id,
      user_id,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        Prefer: "return=representation",
      },
    }
  );

  return response;
};

export default postLikeToggle;