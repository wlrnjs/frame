import {create} from "zustand";

type ToastType = "success" | "error";

interface Toast {
  visible: boolean;
  type: ToastType;
  message: string;
}

interface ToastStore {
  toast: Toast;
  showToast: (
    type: ToastType,
    message: string,
  ) => void;
  hideToast: () => void;
}

const initialState: Toast = {
  visible: false,
  type: "success",
  message: "",
};


export const useToastStore = create<ToastStore>((set) => {
  let toastTimer: NodeJS.Timeout | null = null;

  return {
    toast: initialState,

    showToast: (type, message) => {
      if (toastTimer) {
        clearTimeout(toastTimer);
        toastTimer = null;
      }

      set({
        toast: {
          visible: true,
          type,
          message,
        },
      });

      toastTimer = setTimeout(() => {
        set((state) => ({
          toast: {
            ...state.toast,
            visible: false,
          },
        }));
        toastTimer = null;
      }, 3000);
    },

    hideToast: () => {
      if (toastTimer) {
        clearTimeout(toastTimer);
        toastTimer = null;
      }

      set((state) => ({
        toast: {
          ...state.toast,
          visible: false,
        },
      }));
    },
  };
});
