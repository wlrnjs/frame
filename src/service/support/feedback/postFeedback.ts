import axios from "axios";

export interface postFeedbackProps {
  title: string;
  content: string;
}

const postFeedback = async (data: postFeedbackProps) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/feedbacks`, 
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

export default postFeedback;