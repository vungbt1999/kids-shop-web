import { useApiClient } from '@/utils/graphql-api';
import { LoginResult } from '@/utils/graphql-api/generated';
import localStorageUtils, { KeyStorage } from '@/utils/local-storage.utils';
import { ReactNode, createContext, useCallback, useContext, useEffect, useState } from 'react';

export type AuthContextProps = {
  authInfo: LoginResult | null;
  changeAuthInfo: (_authInfo: LoginResult) => void;
};

const initState: AuthContextProps = {
  authInfo: null,
  changeAuthInfo: (_authInfo) => {}
};

const AuthContext = createContext(initState);

export type AuthProviderProps = {
  children: JSX.Element | ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [authInfo, setAuthInfo] = useState<LoginResult | null>(null);
  const { setToken } = useApiClient();

  useEffect(() => {
    const auth: LoginResult = localStorageUtils.getObject(KeyStorage.AUTH, null);
    if (auth) {
      setAuthInfo(auth);
      setToken(auth.accessToken);
    }
  }, []);

  const changeAuthInfo = useCallback((payload: LoginResult) => {
    setAuthInfo(payload);
    localStorageUtils.setObject(KeyStorage.AUTH, payload);
  }, []);

  return (
    <AuthContext.Provider value={{ authInfo, changeAuthInfo }}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
