import axios from "axios";

export interface postInquiryProps {
  title: string;
  content: string;
}

const postInquiry = async (data: postInquiryProps) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/inquiry`, 
    data,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      },
    }
  );
  return response;
};

export default postInquiry;