import { StyleVariant } from '@/types';
import clsx from 'clsx';
import Link from 'next/link';
import React, { ReactNode } from 'react';

export type ButtonLinkProps = {
  children: JSX.Element | string | ReactNode;
  style?: StyleVariant;
  href: string;
  className?: string;
};
export function ButtonLink({
  children,
  style = StyleVariant.style_1,
  href,
  className
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={clsx(
        className,
        'w-full h-14 flex items-center justify-center cursor-pointer font-medium capitalize',
        {
          'bg-dark text-white border border-dark hover:bg-white hover:text-dark transition-all':
            style === StyleVariant.style_1,
          'bg-white text-dark border border-dark hover:bg-dark hover:text-white':
            style === StyleVariant.style_2
        }
      )}
    >
      {children}
    </Link>
  );
}
