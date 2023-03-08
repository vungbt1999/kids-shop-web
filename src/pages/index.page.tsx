import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { withTranslations } from '@/middleware/withSSTranslations';
import { withRevalidate } from '@/middleware/withRevalidate';
import { GetStaticPropsContext } from 'next';
import { SEO, SEOData } from '@/components/seo';
import { RenderIcon } from '@/components/icons';

type Props = {
  seo: SEOData;
};

export default function HomePage({ seo }: Props) {
  const { t } = useTranslation();
  return (
    <>
      {seo && <SEO {...seo} />}
      <div>
        <h1 className="text-cyan">{t('home')}</h1>
        <h1 className="text-primary">{t('messages:page_not_found')}</h1>
        <RenderIcon name="cart" strokeWidth={2} className="w-4 h-4" />
        <RenderIcon name="heart" strokeWidth={2} className="w-4 h-4" />
        <RenderIcon name="search" strokeWidth={2} className="w-4 h-4" />
        <RenderIcon name="user" strokeWidth={2} className="w-4 h-4" />
      </div>
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
