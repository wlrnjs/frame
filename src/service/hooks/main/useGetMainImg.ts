import { useQuery } from "@tanstack/react-query";

const getMainImg = async (): Promise<{ 
  title: string; 
  category: string; 
  image_url: string;
  content: string;
}[]> => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  const apiUrl = `${supabaseUrl}/rest/v1/main-img?select=*`;

  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      apikey: supabaseKey || "",
      Authorization: `Bearer ${supabaseKey}`,
    },
  });

  if (!response.ok) {
    console.error("table fetch error", response.statusText);
    return [];
  }

  const data = await response.json();
  return data || [];
};

export const useGetMainImg = () => {
  return useQuery({
    queryKey: ["main-images"],
    queryFn: getMainImg,
    staleTime: 1000 * 60 * 60,
  });
};