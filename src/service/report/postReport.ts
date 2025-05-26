import axios from "axios";

export interface postReportProps {
  report_id: string;
  reason: string;
  description: string;
  report_type: "posts" | "comments";
}

const postReport = async (data: postReportProps) => {
  const accessToken = JSON.parse(localStorage.getItem("sb-whvyyrwjdjzfcpcwvlvq-auth-token") || "{}")?.access_token;
  const user_id = JSON.parse(localStorage.getItem("sb-whvyyrwjdjzfcpcwvlvq-auth-token") || "{}")?.user?.id;
  
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/reportsAll`,
      {
        ...data,
        user_id,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
          "Content-Type": "application/json",
          "Prefer": "return=representation",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error posting report:", error);
    throw error;
  }
};

export default postReport;