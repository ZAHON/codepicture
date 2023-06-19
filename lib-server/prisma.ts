import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

// only on server
if (typeof window === 'undefined') {
  if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
  }
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default prisma;
