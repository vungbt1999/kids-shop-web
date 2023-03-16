// @ts-nocheck
import { apiClientInstance } from '@/config/graphql-api';
import NextAuth, { User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'Email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        try {
          const authLogin = await apiClientInstance.auth_login({
            email: credentials?.email || '',
            password: credentials?.password || ''
          });
          const loginResult = authLogin.auth_login;
          if (loginResult) {
            return { ...loginResult, id: loginResult.profile?.id } as User;
          }
          return null;
        } catch (error) {
          console.log('NextAuth authorize', error);
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      let newToken = token as JWT;
      if (!newToken.accessToken && user) {
        newToken = user;
      }
      if (
        newToken?.accessTokenExpires &&
        new Date(newToken.accessTokenExpires).getTime() <= new Date().getTime() + 60000
      ) {
        // return refreshToken({
        //   refreshToken: String(newToken?.refreshToken || '')
        // }).then((result) => {
        //   if (result.error) {
        //     return signOut();
        //   }
        //   return { ...newToken, ...result };
        // });
      }
      return newToken;
    },
    async session({ session, token }: any) {
      session.token = {
        accessToken: token.accessToken,
        accessTokenExpires: token.accessTokenExpires
      };
      session.expires = token.accessTokenExpires;
      delete session.user;
      return session;
    }
  },
  jwt: {
    secret: process.env.JWT_SECRET
  },
  pages: {
    signIn: '/login'
  }
};
export default NextAuth(authOptions);
