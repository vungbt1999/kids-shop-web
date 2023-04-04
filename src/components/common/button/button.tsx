import { StyleVariant } from '@/types';
import clsx from 'clsx';
import React, { ReactNode } from 'react';

export type ButtonProps = {
  children: JSX.Element | string | ReactNode;
  style?: StyleVariant;
  className?: string;
  onClick?: () => void;
};
export function Button({
  children,
  className,
  style = StyleVariant.style_1,
  onClick
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        className,
        'w-full h-14 flex items-center justify-center cursor-pointer font-medium capitalize outline-none',
        {
          'bg-dark text-white border border-dark hover:bg-white hover:text-dark transition-all':
            style === StyleVariant.style_1,
          'bg-white text-dark border border-dark hover:bg-dark hover:text-white':
            style === StyleVariant.style_2
        }
      )}
    >
      {children}
    </button>
  );
}
