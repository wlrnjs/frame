"use client";

import useDeleteComment from "@/hooks/api/comments/useDeleteComment";
import { commentDate } from "@/utils/date/dateUtils";
import React, { useState } from "react";
import { CommentItemType } from "@/types/CommentType";
import usePostLikeComment from "@/hooks/api/comments/uesPostLikeComment";
import useGetLikeComment from "@/hooks/api/comments/useGetLikeComments";
import useDeleteLikeComment from "@/hooks/api/comments/useDeleteLikeComment";
import useUserId from "@/hooks/useUserId";
import ReportModal from "../ui/modal/ReportModal";

interface LikeComment {
  id: number;
  comment_id: number;
  user_id: string;
  created_at: string;
  users: string | null;
}

interface CommentItemProps {
  name: string;
  created_at: string;
  comment: string;
  isMine?: boolean;
  comment_id: string;
  user_id: string;
  type: CommentItemType;
  postId: string;
  onDeleteSuccess?: () => void;
}

const CommentItem = ({
  name,
  created_at,
  comment,
  isMine,
  comment_id,
  user_id,
  type,
  postId,
  onDeleteSuccess,
}: CommentItemProps) => {
  const userId = useUserId();
  const [isOpen, setIsOpen] = useState(false);
  const { data: likeComments } = useGetLikeComment([comment_id]); // 좋아요 조회
  const myLike = likeComments?.some(
    (like: LikeComment) => like.user_id === userId
  );

  const { mutate: postLikeComment } = usePostLikeComment(); // 좋아요 추가
  const { mutate: deleteLikeComment } = useDeleteLikeComment(); // 좋아요 삭제

  const { mutate: deleteComment } = useDeleteComment(); // 댓글 삭제

  const onHandleComment = () => {
    // 좋아요 추가/삭제
    if (myLike) {
      deleteLikeComment({ id: comment_id });
    } else {
      postLikeComment({ id: comment_id });
    }
  };

  const onDelete = () => {
    // 댓글 삭제
    deleteComment(
      { id: comment_id, postId, userId: user_id, type },
      {
        onSuccess: () => {
          if (onDeleteSuccess) {
            onDeleteSuccess();
          }
        },
      }
    );
  };

  const btnStyle =
    "flex items-center gap-1 px-3 py-1 rounded-full bg-gray-800 hover:bg-gray-700 text-xs text-white transition-colors";

  return (
    <div className="border-b border-gray-700 pb-1 px-2 flex flex-col gap-1">
      {/* 유저 정보 */}
      <div className="flex items-center gap-2 text-sm text-gray-300">
        <span className="font-semibold text-white">{name}</span>
        <span className="text-gray-500 text-xs">{commentDate(created_at)}</span>
      </div>

      {/* 댓글 본문 */}
      <p className="text-gray-200 text-sm leading-relaxed pl-1">{comment}</p>

      {/* 하단 정보 */}
      <div className="flex items-center gap-2 mb-2">
        <button onClick={onHandleComment} className={btnStyle}>
          <svg
            className="w-4 h-4"
            fill={myLike ? "#FF0000" : "none"}
            stroke={myLike ? "#FF0000" : "currentColor"}
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          {likeComments?.length}
        </button>
        {!isMine ? (
          <div className="flex items-center gap-2">
            <button onClick={() => setIsOpen(true)} className={btnStyle}>
              신고하기
            </button>
          </div>
        ) : (
          <button onClick={onDelete} className={btnStyle}>
            삭제
          </button>
        )}
      </div>

      <ReportModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        commentId={comment_id}
        type="comments"
      />
    </div>
  );
};

export default CommentItem;
