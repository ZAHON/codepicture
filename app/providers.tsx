'use client';
import type { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

export function Providers(props: { children: ReactNode }) {
  const { children } = props;

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
