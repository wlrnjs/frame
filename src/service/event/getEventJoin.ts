import axios from "axios";

const getEventJoin = async (id: string) => {
  const token = JSON.parse(localStorage.getItem("sb-whvyyrwjdjzfcpcwvlvq-auth-token") || "{}")?.access_token;

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/events_join`,
    {
      params: {
        select: '*',
        event_id: `eq.${id}`,
      },
      headers: {
        Authorization: `Bearer ${token}`,
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation',
      },
    }
  );

  return response.data;
};

export default getEventJoin;