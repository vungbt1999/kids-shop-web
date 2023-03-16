import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';

// only getServerSideProps
export function withSSUnAuth(cb?: GetServerSideProps) {
  return async (context: GetServerSidePropsContext) => {
    const session = await getSession(context);
    if (session) {
      return {
        redirect: {
          destination: String(context.query?.callbackUrl || '/'),
          permanent: false
        }
      };
    }
    return cb ? await cb(context) : { props: {} };
  };
}
