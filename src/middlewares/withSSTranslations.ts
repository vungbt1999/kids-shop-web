import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import mergeOptions from 'merge-options';

const defaultNamespaces = ['common', 'message'];

export function withTranslations(
  namespaces: string[] = [],
  cb?: GetServerSideProps | GetStaticProps | GetStaticPaths
) {
  return async (context: any) => {
    return mergeOptions(cb ? await cb(context) : { props: {} }, {
      props: {
        ...(await serverSideTranslations(context.locale, [...defaultNamespaces, ...namespaces]))
      }
    });
  };
}
