import { useCallback } from 'react';
import { useTheme as useThemeNextThemes } from 'next-themes';

type Theme = 'light' | 'dark';
type NewTheme = 'light' | 'dark' | 'system';

export function useTheme() {
  const { resolvedTheme, setTheme } = useThemeNextThemes();

  const theme = resolvedTheme as Theme | undefined;

  const toggleTheme = useCallback(() => setTheme(theme === 'dark' ? 'light' : 'dark'), [theme]);

  const changeTheme = useCallback((newTheme: NewTheme) => setTheme(newTheme), []);

  return { theme, toggleTheme, changeTheme };
}
