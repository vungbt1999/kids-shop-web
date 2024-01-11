import { CTAButton, ImageObj } from '@/types';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import Image from 'next/image';
import Link from 'next/link';

export type CategoriesSwiperItem = {
  image: ImageObj;
  title: string;
  ctaButton?: CTAButton;
  total?: number;
};

export type CategoriesSwiperProps = {
  items: CategoriesSwiperItem[];
  title: string;
  navigation: { title: string; value: string }[];
};

export default function CategoriesSwiper({ items, title, navigation }: CategoriesSwiperProps) {
  return (
    <div className="container">
      <p className="text-3xl font-medium mb-4 text-center mt-12">{title}</p>
      <div className="flex items-center justify-center font-medium text-dark mb-12">
        {navigation.map((item, index) => {
          return (
            <div
              className="px-4 py-2 border-b border-solid border-transparent hover:border-primary hover:text-primary cursor-pointer transition-all"
              key={index}
            >
              {item.title}
            </div>
          );
        })}
      </div>

      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true
        }}
        loop={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {items.map((item, index) => {
          return (
            <SwiperSlide key={index} className="!w-[168px] h-auto min-w-[168px]">
              <Image
                width={168}
                height={168}
                src={item.image.url}
                alt={item.image.alternativeText || 'category'}
              />
              <Link href={'/#'} className="text-center py-4 block">
                <p className="font-medium line-clamp-1">
                  {item.title} (<span className="text-sm">{item?.total || 0}</span>)
                </p>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
