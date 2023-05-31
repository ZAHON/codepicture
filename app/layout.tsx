import '@/styles/globals.css';
import type { ReactNode } from 'react';
import { inter } from '@/app/fonts';

export const metadata = {
  title: 'CodePicture',
  description: 'Create beautiful pictures of your source code',
};

export default function RootLayout(props: { children: ReactNode }) {
  const { children } = props;

  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
