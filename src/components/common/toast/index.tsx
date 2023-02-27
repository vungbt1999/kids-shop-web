import { ToastPriority } from '@/config/toast';
import { useState, useEffect } from 'react';

export type ToastProps = {
  items: ToastPriority[];
  autoDelete?: boolean;
  autoDeleteTime?: number;
};

export const Toast = (props: ToastProps) => {
  const { items, autoDelete = true, autoDeleteTime = 3000 } = props;
  const [list, setList] = useState(items);

  useEffect(() => {
    setList([...items]);
  }, [items]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete && items.length && list.length) {
        deleteToast(items[0].id);
      }
    }, autoDeleteTime);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line
  }, [items, autoDelete, autoDeleteTime, list]);

  const deleteToast = (id: number) => {
    const listItemIndex = list.findIndex((e) => e.id === id);
    const toastListItem = items.findIndex((e) => e.id === id);
    list.splice(listItemIndex, 1);
    items.splice(toastListItem, 1);
    setList([...list]);
  };

  return (
    <div className="toast-top-right text-sm md:text-base box-border fixed z-[999999]">
      {list.map((toast, index) => (
        <div
          key={`${toast.id}-${index}`}
          className="toast-content toast-top-right relative pointer-events-auto overflow-hidden p-4 rounded-md h-fit min-w-[20rem] w-auto font-primary text-sm md:text-base text-white mb-3 last:mb-0"
          style={{ background: toast.backgroundColor }}
        >
          <p className="m-0 text-left overflow-hidden text-ellipsis whitespace-nowrap max-w-xs">
            {toast.description}
          </p>
        </div>
      ))}
    </div>
  );
};
