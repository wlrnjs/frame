import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/service/lib/supabaseClient";

const getMainImg = async (): Promise<string[]> => {
  const { data } = await supabase.storage
    .from("main-img")
    .list("animation", { limit: 100 });

  const publicUrls = data
    ?.filter((item) => item.name !== ".emptyFolderPlaceholder")
    .map((item) => {
      return supabase.storage
        .from("main-img")
        .getPublicUrl(`animation/${item.name}`).data.publicUrl;
    })
    .filter((url): url is string => url !== null);

  return publicUrls || [];
};

export const useGetMainImg = () => {
  return useQuery({
    queryKey: ["main-images"],
    queryFn: getMainImg,
    staleTime: 1000 * 60 * 60,
  });
};