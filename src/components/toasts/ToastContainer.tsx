import { ToastContainerProps } from "./interfaces";
import Toast from "./Toast";

const ToastContainer = ({ toasts, removeToast, position }: ToastContainerProps) => {
  let positionStyle: string = "top-0 right-0";

  switch(position) {
    case 'top-left':
      positionStyle =  'top-0 left-0';
      break;
    case 'bottom-left':
      positionStyle = 'bottom-0 left-0';
      break;
    case 'bottom-right':
      positionStyle = 'bottom-0 right-0';
      break;
  }

  return (
    <div query-id="toast-container" className={`fixed ${positionStyle} z-50`}>
      {toasts.reverse().map((toast) => (
        <Toast
          key={toast.id}
          toast={toast}
          onClick={() => removeToast(toast.id)}
          position={position}
        ></Toast>
      ))}
    </div>
  );
};

export default ToastContainer;