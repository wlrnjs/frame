
import { keepPreviousData, useQuery } from "@tanstack/react-query";

import axios from "axios";

interface GetLikeToggleProps {
  post_id: number;
}

const getLikeToggle = async ({ post_id }: GetLikeToggleProps) => {
    const tokenData = JSON.parse(localStorage.getItem("sb-whvyyrwjdjzfcpcwvlvq-auth-token") || "{}");
    const token = tokenData?.access_token;

    if (!token) throw new Error("인증 정보가 없습니다.");

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (!supabaseUrl) {
      throw new Error('NEXT_PUBLIC_SUPABASE_URL is not defined');
    }
    
    const response = await axios.get(
      `${supabaseUrl}/rest/v1/posts_like`,
      {
        params: {
          select: '*',
          post_id: `eq.${post_id}`,
        },
        headers: {
          Authorization: `Bearer ${token}`,
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation',
        },
      }
    );
    return response.data;
};

const useGetLikeToggle = (post_id: number) => {
  return useQuery({
    queryKey: ["likeToggle", post_id],
    queryFn: () => getLikeToggle({ post_id }),
    placeholderData: keepPreviousData,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    retry: 1,
  });
};

export default useGetLikeToggle;