import { GraphQLClient } from 'graphql-request';
import React, { ReactNode, useContext, useMemo, useState } from 'react';

import { AuthProvider } from '@/config/auth';
import { getSdk } from '../generated';

const defaultHeaders = {};

const getHeaders = (token?: string | null) => {
  const newHeaders: Record<string, string> = { ...defaultHeaders };
  if (token) {
    newHeaders['Authorization'] = `Bearer ${token}`;
  }
  return newHeaders;
};

export const getApiClient = (
  apiUrl = process.env.GRAPHQL_API_URL || '/graphql',
  token?: string | null
) => {
  return getSdk(
    new GraphQLClient(apiUrl, {
      headers: getHeaders(token)
    })
  );
};

export const ApiClientContext = React.createContext({
  apiClient: getApiClient(''),
  setToken: (_token?: string | null) => {}
});

type ApiClientProviderProps = {
  children?: ReactNode;
  token?: string | null;
  apiUrl: string;
};

export const ApiClientProvider = (props: ApiClientProviderProps) => {
  const [token, setToken] = useState(props.token);
  const apiClient = useMemo(() => getApiClient(props.apiUrl, token), [token, props.apiUrl]);

  return (
    <AuthProvider>
      <ApiClientContext.Provider
        value={{
          apiClient,
          setToken
        }}
      >
        {props.children}
      </ApiClientContext.Provider>
    </AuthProvider>
  );
};

export const useApiClient = () => {
  return useContext(ApiClientContext);
};
