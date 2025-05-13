import Check from "@/icon/Check";
import { cn } from "@/utils";
import React, { useEffect, useState } from "react";

interface ToastProps {
  type: "success" | "error";
  message: string;
  onClose: () => void;
}

const Toast = ({ type, message, onClose }: ToastProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const hideTimer = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(hideTimer);
  }, []);

  useEffect(() => {
    if (!show) {
      const closeTimer = setTimeout(() => {
        onClose();
      }, 500);
      return () => clearTimeout(closeTimer);
    }
  }, [show, onClose]);

  return (
    <div
      className={cn(
        "w-[300px] h-[50px] bg-white text-black p-4 rounded-[5px] fixed top-5 right-5 z-50 flex items-center justify-between transition-all duration-500 select-none",
        show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
      )}
    >
      <div className="flex items-center gap-3">
        {type === "success" ? (
          <div className="w-[20px] h-[20px] bg-green-500 rounded-full flex items-center justify-center">
            <Check size="14" />
          </div>
        ) : (
          <div className="w-[20px] h-[20px] bg-red-500 rounded-full flex items-center justify-center">
            <Check size="14" />
          </div>
        )}
        <p className="text-sm font-medium tracking-[-0.04em]">{message}</p>
      </div>
    </div>
  );
};

export default Toast;
