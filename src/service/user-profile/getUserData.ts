import axios from "axios";

interface getUserDataProps {
  nickname: string;
}

const getUserData = async ({ nickname }: getUserDataProps) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/users`,
    {
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
      },
      params: {
        nickname: `eq.${nickname}`,
        select: "*"
      },
    }
  );

  return response.data;
};

export default getUserData;