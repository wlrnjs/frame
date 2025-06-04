import axios from "axios";

export interface postEventProps {
  image_url: string;
  title: string;
  description: string;
  created_at: string;
  expires_at: string;
  user_id: string;
}

const postEvent = async (data: postEventProps) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/events`,
    data,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        Prefer: "return=representation",
      }
    }
  );

  const createdPost = response.data[0];
  return createdPost.event_id;
};

export default postEvent;