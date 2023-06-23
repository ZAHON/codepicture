'use client';
import { IconSunHigh, IconMoon } from '@tabler/icons-react';
import { useTheme } from '@/hooks';
import { MenuItem } from '@/components';

export function UserMenuInnerThemeChanger() {
  const { theme, toggleTheme } = useTheme();

  const label = `${theme === 'dark' ? 'Light' : 'Dark'} theme`;

  function getIcon() {
    if (theme === 'dark') {
      return <IconSunHigh size="1rem" aria-hidden="true" focusable="false" />;
    }

    return <IconMoon size="1rem" aria-hidden="true" focusable="false" />;
  }

  function handleToggleTheme(e: Event) {
    if (theme) {
      e.preventDefault();
      toggleTheme();
    }
  }

  if (!theme) {
    return null;
  }

  return (
    <MenuItem icon={getIcon()} onSelect={handleToggleTheme}>
      {label}
    </MenuItem>
  );
}
