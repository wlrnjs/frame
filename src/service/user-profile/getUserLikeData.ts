import axios from "axios";

export interface getUserLikeDataProps {
  user_id: string;
}

const getUserLikeData = async ({ user_id }: getUserLikeDataProps) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/posts`,
    {
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
      },
      params: {
        user_id: `eq.${user_id}`,
        select: "*"
      },
    }
  );

  return response.data;
};

export default getUserLikeData;