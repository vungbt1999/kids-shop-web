import { RenderIcon } from '@/components/icons';
import { CTAButton } from '@/types';
import clsx from 'clsx';
import React from 'react';
import { Button } from '../button';

export type EmptyProps = {
  title: string;
  subtitle?: string;
  ctaButton: CTAButton;
};
export default function Empty({ title, subtitle, ctaButton }: EmptyProps) {
  return (
    <div className="w-full flex flex-col items-center pb-8">
      <RenderIcon name="cart-empty" />
      <p className="font-bold">{title}</p>
      <div className="font-light">{subtitle}</div>

      <Button onClick={ctaButton.onClick} className="w-3/4 bg-danger border-danger mt-8">
        {ctaButton.title}
      </Button>
    </div>
  );
}
