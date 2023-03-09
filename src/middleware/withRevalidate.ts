import { GetStaticProps, GetStaticPropsContext } from 'next';
import mergeOptions from 'merge-options';

export function withRevalidate(
  cb?: GetStaticProps,
  revalidate = Number(process.env.PAGE_PROPS_REVALIDATE || 0)
) {
  return async (ctx: GetStaticPropsContext) => {
    return mergeOptions(cb ? await cb(ctx) : {}, { revalidate });
  };
}
