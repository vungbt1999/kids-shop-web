import { createContext, useContext, useState } from 'react';
import { TOAST_PROPERTIES, ToastPriority, ToastType } from '..';
import { Toast } from '@/components/common';

export type ToastContextProps = {
  success: (message: string, title?: string) => void;
  danger: (message: string, title?: string) => void;
  info: (message: string, title?: string) => void;
  warning: (message: string, title?: string) => void;
};

const ToastContext = createContext<ToastContextProps>({
  success(message, title) {},
  danger(message, title) {},
  info(message, title) {},
  warning(message, title) {}
});

export function ToastProvider({ children }: { children: JSX.Element | React.ReactNode }) {
  const [list, setList] = useState<ToastPriority[]>([]);

  const common = (message: string, type: ToastType, title?: string) => {
    const toastProperties = TOAST_PROPERTIES.find(
      (toast) => toast.type.toLowerCase() === type.toLowerCase()
    );
    if (toastProperties) {
      setList([...list, { ...toastProperties, description: message, title }]);
    }
  };

  const success = (message: string, title?: string) => common(message, ToastType.Success, title);
  const danger = (message: string, title?: string) => common(message, ToastType.Danger, title);
  const info = (message: string, title?: string) => common(message, ToastType.Info, title);
  const warning = (message: string, title?: string) => common(message, ToastType.Warning, title);

  return (
    <ToastContext.Provider value={{ success, danger, info, warning }}>
      {children}
      <Toast items={list} />
    </ToastContext.Provider>
  );
}

export const useToasts = () => useContext(ToastContext);
