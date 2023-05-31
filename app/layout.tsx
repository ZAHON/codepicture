import '@/styles/globals.css';
import type { ReactNode } from 'react';
import { Providers } from './providers';
import { Notifications } from '@/components';
import { inter } from './fonts';

export const metadata = {
  title: 'CodePicture',
  description: 'Create beautiful pictures of your source code',
};

export default function RootLayout(props: { children: ReactNode }) {
  const { children } = props;

  return (
    <html suppressHydrationWarning lang="en" className={`${inter.variable}`}>
      <Providers>
        <body>
          <Notifications />
          {children}
        </body>
      </Providers>
    </html>
  );
}
