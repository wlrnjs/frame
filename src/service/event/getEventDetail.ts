import axios from "axios";

const getEventDetail = async (id: string) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/events?event_id=eq.${id}`,
    {
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      },
    }
  );

  return response?.data[0]; // Supabase는 배열로 반환하므로 첫 번째 항목을 반환
};

export default getEventDetail;