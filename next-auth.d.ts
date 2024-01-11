// import { LoginResult } from "@/config/graphql-api/generated"

export interface Token {
  accessToken: string;
  expires: string;
}

declare module 'next-auth/jwt' {
  interface JWT extends Token {}
}

declare module "next-auth" {
  interface Session {
    token?: Token;
    expires: string;
  }

  interface User extends LoginResult {
    id: string
  }
}