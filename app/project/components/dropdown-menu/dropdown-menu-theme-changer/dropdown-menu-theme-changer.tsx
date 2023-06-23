'use client';
import { IconSunHigh, IconMoon } from '@tabler/icons-react';
import { useTheme } from '@/hooks';
import { MenuItem } from '@/components';

export function DropdownMenuThemeChanger() {
  const { theme, toggleTheme } = useTheme();

  const label = `${theme === 'dark' ? 'Light' : 'Dark'} theme`;

  function getIcon() {
    if (theme === 'dark') {
      return (
        <IconSunHigh
          aria-hidden="true"
          focusable="false"
          className="h-4 w-4 md:h-[0.875rem] md:w-[0.875rem]"
        />
      );
    }

    return (
      <IconMoon
        aria-hidden="true"
        focusable="false"
        className="h-4 w-4 md:h-[0.875rem] md:w-[0.875rem]"
      />
    );
  }

  function handleToggleTheme(e: Event) {
    if (theme) {
      e.preventDefault();
      toggleTheme();
    }
  }

  return (
    <MenuItem icon={getIcon()} onSelect={handleToggleTheme}>
      {label}
    </MenuItem>
  );
}
