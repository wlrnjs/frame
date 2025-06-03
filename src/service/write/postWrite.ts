import axios from "axios";

export interface postPostsProps {
  title: string;
  description: string;
  category: string[];
  location: string;
  camera_info: string;
  user_id: string;
  img_urls: string[];
}

const postWrite = async (data: postPostsProps) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/posts`, 
    data,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        Prefer: "return=representation",
      },
    }
  );

  const createdPost = response.data[0];
  return createdPost.post_id;
};

export default postWrite;