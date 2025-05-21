import axios from "axios";

const getUser = async ({ userId }: { userId: string }) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/users`,
    {
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
      },
      params: {
        user_id: `eq.${userId}`,
        select: "*"
      },
    }
  );

  return response.data;
};

export default getUser;