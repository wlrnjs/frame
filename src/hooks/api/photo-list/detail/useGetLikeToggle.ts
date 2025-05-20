
import { keepPreviousData, useQuery } from "@tanstack/react-query";

import axios from "axios";

const getLikeToggle = async (id: string) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/posts_like?post_id=eq.${id}`,
    {
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
      },
    }
  );

  return response.data;
};

const useGetLikeToggle = (id: string) => {
  return useQuery({
    queryKey: ["likeToggle", id],
    queryFn: () => getLikeToggle(id),
    placeholderData: keepPreviousData,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    retry: 1,
  });
};

export default useGetLikeToggle;