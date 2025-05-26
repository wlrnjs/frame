import { CommentItemType } from "@/types/CommentType";
import axios from "axios";

interface GetCommentProps {
  id: string;
  type: CommentItemType;
  page?: number;
  pageSize?: number;
}

const DEFAULT_PAGE_SIZE = 5;

const getComment = async ({ 
  id, 
  type, 
  page = 1, 
  pageSize = DEFAULT_PAGE_SIZE 
}: GetCommentProps) => {
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/comments`, {
      params: {
        select: '*,users(nickname)',
        target_id: `eq.${id}`,
        target_type: `eq.${type}`,
        order: 'created_at.desc',
        offset: from.toString(),
        limit: pageSize.toString(),
      },
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        'Range': `${from}-${to}`,
        'Range-Unit': 'items',
        'Prefer': 'count=exact'
      },
    }
  );

  // 전체 댓글 수를 가져오기 위해 content-range 헤더 파싱
  const contentRange = response.headers['content-range'];
  const totalCount = contentRange ? parseInt(contentRange.split('/')[1]) : 0;

  return {
    data: response?.data || [],
    totalCount,
    page,
    pageSize,
    totalPages: Math.ceil(totalCount / pageSize)
  };
};

export default getComment;