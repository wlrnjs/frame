import { useToastStore } from "@/utils/store/Store";


export const useToast = () => {
  const showToast = useToastStore((state) => state.showToast);

  return {
    success: (message: string) => showToast("success", message),
    error: (message: string) => showToast("error", message),
  };
};
