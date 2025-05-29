import { supabase } from "@/service/lib/supabaseClient";
import { UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { postImgProps } from "@/service/write/postImg";
import { ToastType } from "@/types/Toast";

interface UploadImageProps {
  images: File[];
  postId: number;
  postImgMutation: UseMutationResult<AxiosResponse, Error, postImgProps>;
  toast: ToastType;
}

export const uploadImages = async ({ images, postId, postImgMutation, toast }: UploadImageProps) => {
  for (const image of images) {
    const { data, error } = await supabase.storage
      .from("users-upload-photos")
      .upload(`images/${Date.now()}_${image.name}`, image);

    if (error) {
      toast.error("이미지 업로드에 실패했습니다.");
      continue;
    }

    const { data: publicUrlData } = supabase.storage
      .from("users-upload-photos")
      .getPublicUrl(data.path);

    await postImgMutation.mutateAsync({
      posts_id: postId,
      image_url: publicUrlData.publicUrl,
    });
  }

  toast.success("게시글과 이미지가 성공적으로 업로드되었습니다.");
};