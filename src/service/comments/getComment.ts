import axios from "axios";

const getComment = async (id: string) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/comments`, {
      params: {
        select: '*,users(nickname)',
        [`post_id`]: `eq.${id}`,
      },
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      },
    }
  );

  return response?.data;
};

export default getComment;