import type { DefaultSession } from 'next-auth';
import { PrismaClient } from '@prisma/client';

declare module 'next-auth' {
  interface Session {
    user?: {
      id: string;
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt/types' {
  interface JWT {
    uid: string;
  }
}

declare global {
  /* eslint-disable no-var */
  var prisma: PrismaClient;
}
