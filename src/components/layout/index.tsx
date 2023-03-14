import React, { Fragment } from 'react';
import Head from 'next/head';
import { HeaderLayout, HeaderLayoutProps } from './header';
import { FooterLayout } from './footer';
export * from './footer';
export * from './header';

export type PageLayoutProps = {
  children?: JSX.Element | string;
  header: HeaderLayoutProps;
};

export default function MainLayout({ children, header }: PageLayoutProps) {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      <HeaderLayout {...header} />
      <div>{children}</div>
      <FooterLayout />
    </Fragment>
  );
}
