"use client";

import { useToastStore } from "@/utils/store/Store";
import Toast from "../toast/Toast";

export const ToastContainer = () => {
  const toast = useToastStore((state) => state.toast);
  const hideToast = useToastStore((state) => state.hideToast);

  if (!toast.visible) return null;

  return (
    <Toast type={toast.type} message={toast.message} onClose={hideToast} />
  );
};
