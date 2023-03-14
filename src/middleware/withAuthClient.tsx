import { useAuth } from '@/config/auth';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export const withAuthClient = (Component: any): any => {
  const AuthenticatedComponent = () => {
    const router = useRouter();
    const [loading, setLoading] = React.useState(false);
    const { authInfo } = useAuth();

    useEffect(() => {
      console.log('hoc===>authInfo:', authInfo);
      const getAuthentication = async () => {
        setLoading(true);
        if (!authInfo) {
          router.push('/login');
          setLoading(false);
        }
      };
      getAuthentication();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authInfo]);

    useEffect(() => {}, []);
    return loading ? <Component /> : <p>Loading...</p>;
  };

  return AuthenticatedComponent;
};
