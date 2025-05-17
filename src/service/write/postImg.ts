import axios from "axios";

export interface postImgProps {
  posts_id: string;
  image_url: string;
}

const postImg = async (data: postImgProps) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/posts_photos`, 
    data,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        Prefer: "return=representation",
      },
    }
  );

  return response;
};

export default postImg;