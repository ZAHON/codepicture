'use client';
import { useHotkeys } from 'react-hotkeys-hook';
import { useTheme } from '@/hooks';

export function KeyboardShortcutsToggleTheme() {
  const { toggleTheme } = useTheme();

  useHotkeys('d', () => toggleTheme());

  return null;
}
