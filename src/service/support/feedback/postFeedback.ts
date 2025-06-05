import axios from "axios";

export interface postFeedbackProps {
  title: string;
  content: string;
}

const postFeedback = async (data: postFeedbackProps) => {
  const token = JSON.parse(localStorage.getItem("sb-whvyyrwjdjzfcpcwvlvq-auth-token") || "{}")?.access_token;
  const userId = JSON.parse(localStorage.getItem("sb-whvyyrwjdjzfcpcwvlvq-auth-token") || "{}")?.user?.id;
  console.log(token);

  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/feedbacks`, 
    {
      ...data,
      user_id: userId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      },
    }
  );
  return response;
};

export default postFeedback;