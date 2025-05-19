import postImg, { postImgProps } from "@/service/write/postImg";
import { useMutation } from "@tanstack/react-query";

const usePostImg = () => {

  return useMutation({
    mutationFn: (data: postImgProps) => postImg(data),
    retry: 1,
  });
};

export default usePostImg;