import axios from "axios";

export interface getFeedbackListProps {
  page: number;
  limit: number;
}

const getFeedbackList = async ({ page = 1, limit = 10 }: getFeedbackListProps) => {
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/feedbacks`,
    {
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        Range: `${from}-${to}`
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