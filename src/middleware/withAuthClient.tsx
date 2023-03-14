import { useAuth } from '@/config/auth';
import { LoginResult } from '@/utils/graphql-api/generated';
import localStorageUtils, { KeyStorage } from '@/utils/local-storage.utils';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export const withAuthClient = (Component: any): any => {
  const AuthenticatedComponent = () => {
    const router = useRouter();
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
      const getAuthentication = async () => {
        setLoading(true);
        const auth: LoginResult = localStorageUtils.getObject(KeyStorage.AUTH, null);
        if (!auth) {
          router.push('/login');
          setLoading(false);
        }
      };
      getAuthentication();
    }, []);

    return loading ? <Component /> : <p>Loading...</p>;
  };

  return AuthenticatedComponent;
};
