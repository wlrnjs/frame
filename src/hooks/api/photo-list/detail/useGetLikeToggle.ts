
import { keepPreviousData, useQuery } from "@tanstack/react-query";

import axios from "axios";

interface GetLikeToggleProps {
  ids: string[];
}

const getLikeToggle = async ({ ids }: GetLikeToggleProps) => {
  const idList = ids.join(',');

  const token = JSON.parse(localStorage.getItem("sb-whvyyrwjdjzfcpcwvlvq-auth-token") || "{}")?.access_token;

  if (!token) throw new Error("인증 정보가 없습니다.");

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/posts_like`, {
      params: {
        select: '*,users(nickname)',
        post_id: `in.(${idList})`,
      },
      headers: {
        Authorization: `Bearer ${token}`,
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      },
    }
  );

  return response.data;
};

const useGetLikeToggle = (ids: string[]) => {
  return useQuery({
    queryKey: ["likeToggle", ids],
    queryFn: () => getLikeToggle({ ids }),
    placeholderData: keepPreviousData,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    retry: 1,
  });
};

export default useGetLikeToggle;