import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from "./Icons";
import { ToastProps } from "./interfaces";
import { useRef, useEffect } from "react";
import { ToastPosition } from "./types";

interface ToastComponentProps {
  toast: ToastProps;
  onClick: () => void;
  position?: ToastPosition;
}

const Toast = ({ toast, onClick, position }: ToastComponentProps) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const { message, type, options } = toast;
  const { useIcon = true, autoClose, duration } = options || {};

  useEffect(() => {
    let progress = 100;
    const amountToDecrease = 100 / (duration! / 100);

    if (progressRef.current) {
      const interval = setInterval(() => {
        if (progress > 0) {
          if (progressRef.current) {
            progress -= amountToDecrease;
            progressRef.current.style.width = `${progress}%`;
          } else {
            clearInterval(interval);
          }
        } else {
          clearInterval(interval);
        }
      }, 100);
    }
  }, []);

  const getIcon = () => {
    switch (type) {
      case "success":
        return <SuccessIcon />;
      case "error":
        return <ErrorIcon />;
      case "info":
        return <InfoIcon />;
      case "warning":
        return <WarningIcon />;
      default:
        return <ErrorIcon />;
    }
  };

  const getAnimation = () => {
    switch (position) {
      case "top-right":
        return "animate-slideInFromRight";
      case "top-left":
        return "animate-slideInFromLeft";
      case "bottom-right":
        return "animate-slideInFromRight";
      case "bottom-left":
        return "animate-slideInFromLeft";
    }
  };

  return (
    <div
      query-id={toast.id}
      className={`flex flex-col justify-between items-center
      mb-2 border rounded-lg cursor-pointer min-h-[34px]
      shadow-md ${getAnimation()} transition-all duration-500`}
      onClick={onClick}
    >
      <div className="flex w-full ">
        {useIcon ? (
          <div
            className={`flex rounded-l-lg toast-${type} h-[57px] place-items-center justify-center px-4 border-r border-white`}
          >
            {getIcon()}
          </div>
        ) : null}
        <div className="flex flex-col w-full">
          <div
            className={`uppercase border-b border-white pl-2 toast-${type} rounded-tr-lg w-full`}
          >
            {type}
          </div>
          <div
            query-id="toast-message"
            className={`pl-2 pr-8 py-1 font-medium toast-${type}`}
          >
            {message}
          </div>
        </div>
      </div>

      {autoClose ? (
        <div className="w-full flex justify-center items-center">
          <div className={`w-4/5 mt-1 mb-1 rounded-full h-2.5 ml-1 mr-2`}>
            <div
              ref={progressRef}
              className={`toast-${type} h-2.5 rounded-full transition-all`}
              style={{ width: "100%" }}
            ></div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Toast;