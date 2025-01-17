import { useState } from "react";
import { ToastProps, ToastOptions, ToastProviderProps } from "./interfaces";
import { ToastType } from "./types";
import ToastContext from "./ToastContext";
import { getByQueryId } from "../../utils";
import ToastContainer from "./ToastContainer";

export const ToastProvider = ({
  children,
  autoClose,
  duration,
  position = "top-left",
  recentOnTop = false
}: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = (
    type: ToastType,
    message: string,
    options?: ToastOptions,
  ) => {
    const id = Math.random().toString(36).substring(2, 9);
    if (autoClose) {
      options = { ...options, autoClose: autoClose, duration: duration };
    }

    setToasts((prev) => {
      if (recentOnTop) {
        return [{ id, type, message, options }, ...prev];

      } else {
        return [...prev, { id, type, message, options }];
      }
    });

    if (autoClose) {
      setTimeout(() => {
        removeToast(id);
      }, duration || 5000);
    }

    if (options?.autoClose) {
      setTimeout(() => {
        removeToast(id);
      }, options.duration || 5000);
    }
  };

  const removeToast = (id: string) => {
    const div = getByQueryId(id);
    if (div) {
      switch (position) {
        case "top-right":
          div.classList.remove("animate-slideInFromRight");
          div.classList.add("animate-slideOutToRight");
          break;
        case "top-left":
          div.classList.remove("animate-slideInFromLeft");
          div.classList.add("animate-slideOutToLeft");
          break;
        case "bottom-right":
          div.classList.remove("animate-slideInFromRight");
          div.classList.add("animate-slideOutToRight");
          break;
        case "bottom-left":
          div.classList.remove("animate-slideInFromLeft");
          div.classList.add("animate-slideOutToLeft");
          break;
      }
    }

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 505);
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer
        toasts={toasts}
        removeToast={removeToast}
        position={position}
      />
    </ToastContext.Provider>
  );
};
