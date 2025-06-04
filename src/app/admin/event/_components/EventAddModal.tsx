import usePostEvent from "@/admin/hooks/usePostEvent";
import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

interface EventAddModalProps {
  onClose: () => void;
}

// TODO: 임시 이벤트 업로드 구현, 수정 필요

const EventAddModal = ({ onClose }: EventAddModalProps) => {
  const postEvent = usePostEvent();

  const imageRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const createdAtRef = useRef<HTMLInputElement>(null);
  const expiresAtRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user_id = JSON.parse(
      localStorage.getItem("sb-whvyyrwjdjzfcpcwvlvq-auth-token") || "{}"
    )?.user?.id;
    postEvent.mutate({
      image_url: previewUrl || "",
      title: titleRef.current?.value || "",
      description: descriptionRef.current?.value || "",
      created_at: createdAtRef.current?.value || "",
      expires_at: expiresAtRef.current?.value || "",
      user_id,
    });
    onClose();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const blobUrl = URL.createObjectURL(file);
      setPreviewUrl(blobUrl);
    }
  };

  return createPortal(
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded-lg w-[500px]">
        <h2 className="text-xl font-bold">이벤트 생성</h2>
        <form onSubmit={onSubmit} className="flex flex-col gap-3 mt-5">
          <div>
            <label htmlFor="event-image">이벤트 이미지</label>
            <input
              type="file"
              accept="image/*"
              className="w-full"
              id="event-image"
              ref={imageRef}
              onChange={handleImageChange}
            />
            {previewUrl && (
              <div className="mt-2">
                <Image
                  src={previewUrl}
                  alt="미리보기"
                  width={200}
                  height={200}
                  className="max-h-40"
                />
              </div>
            )}
          </div>
          <label htmlFor="event-name">이벤트 이름</label>
          <input
            type="text"
            id="event-name"
            className="w-full border border-gray-300 rounded p-2"
            ref={titleRef}
          />
          <div className="flex flex-col gap-2">
            <label htmlFor="event-description">이벤트 설명</label>
            <textarea
              id="event-description"
              name="event-description"
              className="w-full h-[100px] border border-gray-300 rounded p-2"
              ref={descriptionRef}
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="event-start-date">이벤트 시작일</label>
            <input
              type="date"
              id="event-start-date"
              className="w-full border border-gray-300 rounded p-2"
              ref={createdAtRef}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="event-end-date">이벤트 종료일</label>
            <input
              type="date"
              id="event-end-date"
              className="w-full border border-gray-300 rounded p-2"
              ref={expiresAtRef}
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-300 px-4 py-2 rounded w-fit self-end"
          >
            이벤트 생성
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default EventAddModal;
