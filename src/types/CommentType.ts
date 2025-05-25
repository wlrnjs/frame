interface User {
  nickname: string;
}

export interface CommentType {
  comment_like: number;
  content: string;
  created_at: string;
  id: number;
  post_id: string;
  user_id: string;
  users: User;
}