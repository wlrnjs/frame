import axios from "axios";

export interface getNoticeListProps {
  page: number;
  limit: number;
}

const getNoticeList = async ({ page = 1, limit = 10 }: getNoticeListProps) => {
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/notices`,
    {
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        Range: `${from}-${to}`,
        Prefer: "count=exact",
      },
      params: {
        order: "created_at.desc",
        select: "*",
      },
    }
  );

  return {
    data: response.data,
    count: response.headers["content-range"].split("/")[1]
  };
};

export default getNoticeList;