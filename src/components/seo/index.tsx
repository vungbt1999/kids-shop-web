import { ImageObj } from '@/types';
import Head from 'next/head';

export type SEOData = {
  siteName?: string;
  title?: string;
  description?: string;
  image?: ImageObj;
  keywords?: string;
  robots?: string;
  viewport?: string;
  canonicalUrl?: string;
};

export function SEO({
  siteName,
  title,
  description,
  image,
  keywords,
  robots,
  viewport,
  canonicalUrl
}: SEOData) {
  return (
    <Head>
      <title>{title}</title>
      {viewport && <meta name="viewport" content={viewport} />}
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      {robots && <meta name="robots" content={robots} />}

      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      {image && (
        <>
          <meta property="og:image" content={image?.url} />
          <meta property="og:image:type" content={image?.mime || ''} />
          <meta property="og:image:width" content={String(image.width)} />
          <meta property="og:image:height" content={String(image.height)} />
        </>
      )}
      <meta property="og:description" content={description} />
      {keywords && <meta property="og:keywords" content={keywords} />}

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content={siteName} />
      {image && (
        <>
          <meta name="twitter:image" content={image?.url} />
          <meta name="twitter:image:width" content={String(image.width)} />
          <meta name="twitter:image:height" content={String(image.height)} />
          <meta name="twitter:image:alt" content={image.alternativeText || ''} />
        </>
      )}
    </Head>
  );
}
