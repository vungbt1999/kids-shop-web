import MainLayout from '@/components/layout';
import { SEO, SEOData } from '@/components/seo';
import { themeConfig, UIProvider } from '@/config/themes';
import { ToastProvider } from '@/config/toast';
import { appWithTranslation, SSRConfig } from 'next-i18next';
import type { AppProps } from 'next/app';
import App from 'next/app';
import { Fragment } from 'react';
import '../styles/global.css';
import { ApiClientProvider } from '@/utils/graphql-api';

type MyAppProps = {
  pageProps: SSRConfig;
  seo: SEOData;
} & AppProps;

const DefaultLayout = ({ children }: any) => <Fragment>{children}</Fragment>;

function MyApp({ Component, pageProps, seo }: MyAppProps) {
  const Layout = (Component as any).withPageLayout ? MainLayout : DefaultLayout;
  const headerMock = {
    navigation: [
      {
        title: 'Home',
        url: '/'
      },
      {
        title: 'Catalog',
        url: '#'
      },
      {
        title: 'Shop',
        url: '#'
      },
      {
        title: 'Pages',
        url: '#'
      },
      {
        title: 'Blog',
        url: '#'
      },
      {
        title: 'Docs',
        url: '#'
      }
    ]
  };

  return (
    <ApiClientProvider apiUrl={String(process.env.GRAPHQL_API_URL)}>
      <UIProvider config={themeConfig}>
        <Layout header={headerMock}>
          <ToastProvider>
            <Fragment>
              {seo && <SEO {...seo} />}
              <Component {...pageProps} />
            </Fragment>
          </ToastProvider>
        </Layout>
      </UIProvider>
    </ApiClientProvider>
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
