import { CTAButton, ImageObj, StyleVariant } from '@/types';
import clsx from 'clsx';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { RenderIcon } from '@/components/icons';

export type BannerTypes = {
  title: string;
  subtitle?: string;
  summary?: string;
  ctaButtons: CTAButton[];
  image: ImageObj;
  style?: StyleVariant;
};

export default function BannerSwiper() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const banners: BannerTypes[] = [
    {
      title: '<p style="margin-bottom: 0.5rem;">Summer Sale</p>',
      subtitle:
        '<p style="font-size: 78px; color: #fe6f61; font-weight: 500; line-height: 1.2" >-70%</>',
      summary:
        '<p style="font-weight: 500; font-size:22px; color: #1F1F1F; margin-bottom: 2.5rem">with promo code CN67EW*</p>',
      ctaButtons: [
        {
          title: 'Shop now'
        }
      ],
      image: {
        url: '/images/cover/cover-1.jpg'
      },
      style: StyleVariant.style_1
    },
    {
      title: '<p style="margin-bottom:1.25rem">Summer Collection</p>',
      summary:
        '<p style="font-size: 1.125rem; color: #525252; margin-bottom: 2.5rem">So called give, one whales tree seas dry place own day, winged tree created spirit.</p>',
      ctaButtons: [
        {
          title: 'Shop now'
        }
      ],
      image: {
        url: '/images/cover/cover-2.jpg'
      },
      style: StyleVariant.style_1
    },
    {
      title:
        '<p style="color: #ffffff; font-size: 1.5rem; text-align: center; width: 100%;">Summer Styles</p>',
      subtitle:
        '<p style="color: #ffffff; font-size: 78px; text-align: center; width: 100%; margin-bottom: 0.75rem; font-weight: 500;line-height: 1.2;">50% OFF</p>',
      ctaButtons: [
        {
          title: 'Shop women'
        },
        {
          title: 'Shop men'
        }
      ],
      image: {
        url: '/images/cover/cover-3.jpg'
      },
      style: StyleVariant.style_2
    }
  ];

  return (
    <Swiper
      modules={[Navigation]}
      loop={true}
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current
      }}
      onInit={(swiper) => {
        // @ts-ignore
        swiper.params.navigation.prevEl = navigationPrevRef.current;
        // @ts-ignore
        swiper.params.navigation.nextEl = navigationNextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
    >
      {banners.map((item, index) => {
        return (
          <SwiperSlide
            key={index}
            className="h-[550px] w-full bg-cover flex flex-col justify-center items-start container"
            style={{
              background: `url(${item.image.url})`,
              backgroundPosition: '50%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}
          >
            <div
              dangerouslySetInnerHTML={{ __html: item.title }}
              className="font-medium capitalize text-4xl w-full"
            />
            {item.subtitle && (
              <div className="w-full" dangerouslySetInnerHTML={{ __html: item.subtitle }} />
            )}
            {item.summary && (
              <div className="w-full" dangerouslySetInnerHTML={{ __html: item.summary }} />
            )}
            <div
              className={clsx('flex items-center w-full', {
                'justify-center': item.style === StyleVariant.style_2
              })}
            >
              {item.ctaButtons.map((ctaItem, index) => {
                return (
                  <button
                    onClick={ctaItem.onClick}
                    key={index}
                    className={clsx({
                      'bg-dark text-white border border-dark py-4 px-7 cursor-pointer flex items-center capitalize font-medium':
                        item.style === StyleVariant.style_1,
                      "m-4 font-medium px-5 capitalize text-white relative before:content-[''] before:absolute before:bottom-0 before:right-0 before:h-[1px] before:w-full before:bg-white before:transition-all hover:before:w-0":
                        item.style === StyleVariant.style_2
                    })}
                  >
                    {ctaItem.title}
                    {item.style === StyleVariant.style_1 && (
                      <RenderIcon name="arrow-right" className="!w-4 !h-4 ml-3" />
                    )}
                  </button>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}

      <div
        ref={navigationPrevRef}
        className="hidden absolute top-1/2 -translate-y-1/2 z-[1] p-3 bg-white cursor-pointer"
      >
        <RenderIcon name="chevron-left" className="text-dark" />
      </div>
      <div
        ref={navigationNextRef}
        className="hidden absolute right-0 top-1/2 -translate-y-1/2 z-[1] p-3 bg-white cursor-pointer"
      >
        <RenderIcon name="chevron-right" className="text-dark" />
      </div>
    </Swiper>
  );
}
