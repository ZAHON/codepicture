'use client';
import type { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';

export function Providers(props: { children: ReactNode }) {
  const { children } = props;

  return (
    <SessionProvider>
      <ThemeProvider attribute="class" enableColorScheme={false} disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
}
