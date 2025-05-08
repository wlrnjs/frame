import axios from "axios";

export interface PostWritePayload {
  title: string;
  content: string;
  category: string;
  place?: string;
  camera?: string;
  user_id: string;
  create_at?: string;
}

export const postWrite = async (payload: PostWritePayload) => {
  const { data } = await axios.post('/write', payload);
  return data
}