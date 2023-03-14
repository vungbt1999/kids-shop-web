import { ApiClientProvider, ApiClientProviderProps } from '@/config/graphql-api';
import { LoginResult } from '@/config/graphql-api/generated';
import localStorageUtils, { KeyStorage } from '@/utils/local-storage.utils';
import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';

export type AuthContextProps = {
  authInfo: LoginResult | null;
  changeAuthInfo: (_authInfo: LoginResult | null) => void;
};

const localeAuth: LoginResult = localStorageUtils.getObject(KeyStorage.AUTH, null);
const initState: AuthContextProps = {
  authInfo: localeAuth,
  changeAuthInfo: (_authInfo) => {}
};

const AuthContext = createContext(initState);

export interface AuthProviderProps extends Pick<ApiClientProviderProps, 'apiUrl'> {
  children: JSX.Element | ReactNode;
}

export function AuthProvider({ children, apiUrl }: AuthProviderProps) {
  const [authInfo, setAuthInfo] = useState<LoginResult | null>(initState.authInfo);

  useEffect(() => {
    getAuthInfo();
  }, []);

  const getAuthInfo = () => {
    if (localeAuth) {
      setAuthInfo(localeAuth);
    }
  };

  const changeAuthInfo = useCallback((payload: LoginResult | null) => {
    console.log('payload:', payload);
    setAuthInfo(payload);
    localStorageUtils.setObject(KeyStorage.AUTH, payload);
  }, []);

  console.log('auth-provider===>authInfo:', authInfo);

  return (
    <AuthContext.Provider value={{ authInfo, changeAuthInfo }}>
      <ApiClientProvider apiUrl={apiUrl} token={authInfo?.accessToken}>
        {children}
      </ApiClientProvider>
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
