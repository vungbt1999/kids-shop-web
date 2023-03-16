import { useSession } from 'next-auth/react';
import React, { ReactNode, useContext, useMemo } from 'react';

import { apiClientInstance, getApiClient } from '..';

export const ApiClientContext = React.createContext({
  apiClient: apiClientInstance
});

type ApiClientProviderProps = {
  children: JSX.Element | ReactNode;
};

export const ApiClientProvider = ({ children }: ApiClientProviderProps) => {
  const { data: session } = useSession();

  const apiClient = useMemo(() => {
    const accessToken = (session as any)?.token?.accessToken;
    if (accessToken) {
      return getApiClient(accessToken);
    }
    return apiClientInstance;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [(session as any)?.token?.accessToken]);

  return (
    <ApiClientContext.Provider
      value={{
        apiClient
      }}
    >
      {children}
    </ApiClientContext.Provider>
  );
};

export const useApiClient = () => {
  return useContext(ApiClientContext);
};
