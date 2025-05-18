import axios from "axios";

const getImg = async (id: string) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/posts_photos?posts_id=eq.${id}`,
    {
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      },
    }
  );

  return response;
};

export default getImg;