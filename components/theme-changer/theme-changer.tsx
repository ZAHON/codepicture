'use client';
import { useState, useEffect } from 'react';
import { ThemeChangerMenu } from './theme-changer-menu';
import { ThemeChangerPlaceholder } from './theme-changer-placehlder';

export function ThemeChanger() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, [mounted]);

  if (!mounted) {
    return <ThemeChangerPlaceholder />;
  }

  return <ThemeChangerMenu />;
}
