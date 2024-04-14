import NextAuth from 'next-auth';
import type { NextAuthConfig } from 'next-auth';
import Google from 'next-auth/providers/google';

export const config = {
  providers: [Google],
  pages: {
    signIn: '/sign-in',
  },
  callbacks: {
    authorized({ request, auth }) {
      if (auth) {
        return true;
      }
      return false;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
