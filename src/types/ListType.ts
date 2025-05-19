export interface ListItemType {
  camera_info: string;
  category: string;
  created_at: string;
  description: string;
  id: number;
  img_url: string;
  location: string;
  post_id: number;
  title: string;
  user_id: string;
  nickname: string;
}

export interface ImgListType {
  id: string;
  image_url: string;
  posts_id: number;
}
