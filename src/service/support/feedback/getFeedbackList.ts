import axios from "axios";

const getFeedbackList = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/feedbacks`,
    {
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
      },
      params: {
        order: "created_at.desc",
        select: "*",
      },
    }
  );

  return response.data;
};

export default getFeedbackList;