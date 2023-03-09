import { SEO, SEOData } from '@/components/seo';
import { themeConfig, UIProvider } from '@/config/themes';
import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import { SSRConfig, appWithTranslation } from 'next-i18next';
import MainLayout from '@/components/layout';
import { ToastProvider } from '@/config/toast';
import App from 'next/app';
import '../styles/global.css';

type MyAppProps = {
  pageProps: SSRConfig;
  seo: SEOData;
} & AppProps;

const DefaultLayout = ({ children }: any) => <Fragment>{children}</Fragment>;

function MyApp({ Component, pageProps, seo }: MyAppProps) {
  const Layout = (Component as any).withPageLayout ? MainLayout : DefaultLayout;

  return (
    <UIProvider config={themeConfig}>
      <Layout>
        <ToastProvider>
          <Fragment>
            {seo && <SEO {...seo} />}
            <Component {...pageProps} />
          </Fragment>
        </ToastProvider>
      </Layout>
    </UIProvider>
  );
}

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);
  return {
    ...appProps,
    seo: {
      title: 'Kids Shop',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      image: {
        url: 'https://storage.googleapis.com/doscms.metados.com/assets/logo_mini_07e4537257/logo_mini_07e4537257.png'
      },
      keywords: 'kids shop'
    }
  };
};

export default appWithTranslation<MyAppProps>(MyApp);
