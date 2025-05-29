import postImg, { postImgProps } from "@/service/write/postImg";
import { useMutation } from "@tanstack/react-query";

const usePostImg = () => {
  return useMutation({
    mutationFn: ({posts_id, image_url}: postImgProps) => postImg({posts_id, image_url}),
    retry: 1,
  });
};

export default usePostImg;