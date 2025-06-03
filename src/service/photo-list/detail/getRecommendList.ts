import { supabase } from "@/service/lib/supabaseClient";

export interface getRecommendListProps {
  category?: string;
  offset: number;
  limit: number;
  id?: string[];
}

// 예시: 클라이언트에서 호출 (category, limit, offset 전달)
const getRecommendList = async ({ category, offset, limit }: getRecommendListProps) => {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('category', category)
    .range(offset, offset + limit - 1); // 예: 0~9, 10~19

  if (error) throw error;
  return data;
};

export default getRecommendList;