import axios from "axios";

const getImgDetail = async (id: string) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/posts?post_id=eq.${id}`,
    {
      params: {
        select: "*,users(nickname)",
      },
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      },
    }
  );

  return response?.data[0];
};

export default getImgDetail;