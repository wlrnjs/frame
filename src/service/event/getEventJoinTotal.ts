import axios from "axios";

interface GetEventJoinTotalProps {
  id: string;
}

const getEventJoinTotal = async ({ id }: GetEventJoinTotalProps) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/events_join`,
    {
      params: {
        event_id: `eq.${id}`,
      },
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      },
    }
  );

  return response.data;
};

export default getEventJoinTotal;