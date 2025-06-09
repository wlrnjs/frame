import axios from "axios";

interface DeleteEventJoinProps {
  id: string;
  userId: string;
}

const deleteEventJoin = async ({ id, userId }: DeleteEventJoinProps) => {
  const token = JSON.parse(localStorage.getItem("sb-whvyyrwjdjzfcpcwvlvq-auth-token") || "{}")?.access_token;

  const response = await axios.delete(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/events_join?event_id=eq.${id}&user_id=eq.${userId}`,
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

export default deleteEventJoin;