'use client';
import { MainLayout } from '@/components/layout';
import '../../styles/global.css';
import { NextIntlClientProvider } from 'next-intl/client';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
}


export default async function RootLayout({ children, params: { locale } }: { children: React.ReactNode, params: any }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <MainLayout>{children}</MainLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
