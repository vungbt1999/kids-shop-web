import { RenderIcon } from '@/components/icons';
import { CTAButton, ImageObj, StyleVariant } from '@/types';
import clsx from 'clsx';
import React from 'react';

export type CategoryItem = {
  image: ImageObj;
  title: string;
  ctaButton?: CTAButton;
  total?: number;
};

export type CategoriesProps = {
  items: CategoryItem[];
  className?: string;
};

export default function Categories({ items, className }: CategoriesProps) {
  return (
    <div className={clsx(className, 'container grid grid-cols-1 gap-3')}>
      {items.map((item, index) => {
        const ctaButton = item.ctaButton;
        return (
          <div
            key={index}
            className="home-category-item w-full min-h-[280px] p-10 flex flex-col justify-center relative overflow-hidden"
          >
            <div
              style={{
                backgroundImage: `url(${item.image.url})`,
                backgroundPosition: '50%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              }}
              className="home-category-item-image absolute top-0 right-0 left-0 bottom-0 h-full"
            ></div>
            <div className="z-[1]">
              <p className="font-medium text-[22px] capitalize">{item.title}</p>
              {ctaButton && (
                <button
                  onClick={ctaButton.onClick}
                  className={clsx(
                    ctaButton.className,
                    'w-fit flex items-center font-medium py-3 capitalize cursor-pointer'
                  )}
                >
                  {ctaButton.title}
                  <span className="home-category-item-button-icon">
                    <RenderIcon name="arrow-right" className="!w-4 ml-2" />
                  </span>
                </button>
              )}
            </div>

            <span className="home-category-item-line-w absolute top-0 left-0 h-[1.5px] w-0 bg-primary transition-all"></span>
            <span className="home-category-item-line-h absolute top-0 left-0 w-[1.5px] h-0 bg-primary transition-all"></span>
            <span className="home-category-item-line-w absolute bottom-0 right-0 h-[1.5px] w-0 bg-primary transition-all"></span>
            <span className="home-category-item-line-h absolute bottom-0 right-0 w-[1.5px] h-0 bg-primary transition-all"></span>
          </div>
        );
      })}
    </div>
  );
}
