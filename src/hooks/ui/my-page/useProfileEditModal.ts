import { useState } from "react";

// 커스텀 훅: 프로필 편집 모달 관리
const useProfileEditModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return {
    isModalOpen,
    openModal,
    closeModal,
  };
};

export default useProfileEditModal;
