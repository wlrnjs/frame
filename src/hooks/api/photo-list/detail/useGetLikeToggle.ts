
import { keepPreviousData, useQuery } from "@tanstack/react-query";

import axios from "axios";

interface GetLikeToggleProps {
  post_id: number;
}

const getLikeToggle = async ({ post_id }: GetLikeToggleProps) => {
  try {
    console.log('Getting like toggle for post_id:', post_id);
    
    const tokenData = JSON.parse(localStorage.getItem("sb-whvyyrwjdjzfcpcwvlvq-auth-token") || "{}");
    const token = tokenData?.access_token;
    
    console.log('Token exists:', !!token);

    if (!token) throw new Error("인증 정보가 없습니다.");

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (!supabaseUrl) {
      throw new Error('NEXT_PUBLIC_SUPABASE_URL is not defined');
    }

    console.log('Requesting URL:', `${supabaseUrl}/rest/v1/posts_like?select=*,user(nickname)&post_id=eq.${post_id}`);
    
    const response = await axios.get(
      `${supabaseUrl}/rest/v1/posts_like`,
      {
        params: {
          select: '*',
          post_id: `eq.${post_id}`,
        },
        headers: {
          Authorization: `Bearer ${token}`,
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
          'Content-Type': 'application/json',
          'Prefer': 'return=representation',
        },
      }
    );

    console.log('API Response:', response.data);
    return response.data || [];
  } catch (error) {
    console.error('Error in getLikeToggle:', error);
    throw error;
  }
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