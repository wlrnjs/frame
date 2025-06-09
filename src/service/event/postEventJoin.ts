import axios from "axios";

interface PostEventJoinProps {
  id: string;
  userId: string;
}

const postEventJoin = async ({ id, userId }: PostEventJoinProps) => {
  const token = JSON.parse(localStorage.getItem("sb-whvyyrwjdjzfcpcwvlvq-auth-token") || "{}")?.access_token;

  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/events_join`,
    {
      event_id: id,
      user_id: userId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        Prefer: "return=representation",
      },
    }
  );

  return response;
};

export default postEventJoin;