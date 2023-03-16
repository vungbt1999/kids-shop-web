import mergeOptions from 'merge-options';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import { stringify } from 'querystring';

// only getServerSideProps
export function withSSAuth(cb?: GetServerSideProps) {
  return async (ctx: GetServerSidePropsContext) => {
    const session = await getSession(ctx);
    if (!session) {
      return {
        redirect: {
          destination: `/login?${stringify({
            callbackUrl: ctx.resolvedUrl
          })}`,
          permanent: false
        }
      };
    }
    return mergeOptions(cb ? await cb(ctx) : {}, { props: { session } });
  };
}
