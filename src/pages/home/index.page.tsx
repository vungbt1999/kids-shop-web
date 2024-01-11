import { SEO, SEOData } from '@/components/seo';
import { withRevalidate } from '@/middleware/withRevalidate';
import { withTranslations } from '@/middleware/withSSTranslations';
import { GetStaticPropsContext } from 'next';
import { useSession } from 'next-auth/react';
import { useTranslation } from 'next-i18next';

import BannerSwiper from './components/banner-swiper';
import Categories, { CategoryItem } from './components/categories';
import CategoriesSwiper, { CategoriesSwiperProps } from './components/categories-swiper';
import { CategoryType } from '@/config/graphql-api/generated';

type Props = {
  seo: SEOData;
};

export default function HomePage({ seo }: Props) {
  const { t } = useTranslation();
  const { data: session } = useSession();

  const categories: CategoryItem[] = [
    {
      title: 'Summer Hats',
      image: { url: '/images/products/product-1.jpeg' },
      ctaButton: { title: 'Shop Now', onClick: () => alert('Summer Hats') }
    },
    {
      title: 'Men Hats',
      image: { url: '/images/products/product-2.jpeg' },
      ctaButton: { title: 'Shop Now', onClick: () => alert('Men Hats') }
    },
    {
      title: 'Floral Dresses',
      image: { url: '/images/products/product-3.jpeg' },
      ctaButton: { title: 'Shop Now', onClick: () => alert('Floral Dresses') }
    }
  ];

  const categoriesSwiper: CategoriesSwiperProps = {
    navigation: [
      { title: 'Women', value: CategoryType.Women },
      { title: 'Men', value: CategoryType.Men },
      { title: 'Kid', value: CategoryType.Kid }
    ],
    items: [
      {
        title: 'Jackets',
        image: {
          url: 'https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-126.jpg'
        },
        total: 90
      },
      {
        title: 'Dresses',
        image: {
          url: 'https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-25.jpg'
        },
        total: 63
      },
      {
        title: 'Tops',
        image: {
          url: 'https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-26.jpg'
        },
        total: 24
      },
      {
        title: 'T-shirts',
        image: {
          url: 'https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-27.jpg'
        },
        total: 67
      },
      {
        title: 'Shoes',
        image: {
          url: 'https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-28.jpg'
        },
        total: 43
      }
    ],
    title: t('shopByCategory')
  };
  return (
    <>
      {seo && <SEO {...seo} />}
      <BannerSwiper />

      {/** CATEGORIES */}
      <Categories items={categories} className="pt-6" />

      {/** CATEGORIES SWIPER */}
      <CategoriesSwiper
        title={categoriesSwiper.title}
        navigation={categoriesSwiper.navigation}
        items={categoriesSwiper.items}
      />
    </>
  );
}

HomePage.withPageLayout = true;
export const getStaticProps = withRevalidate(
  withTranslations([], async (_: GetStaticPropsContext) => {
    return {
      props: {
        seo: {
          title: 'Trang Chủ - Kids Shop',
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
          image: {
            url: 'https://storage.googleapis.com/doscms.metados.com/assets/logo_mini_07e4537257/logo_mini_07e4537257.png'
          },
          keywords: 'kids shop'
        },
        withPageLayout: true
      }
    };
  })
);
