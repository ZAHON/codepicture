'use client';
import { IconSunHigh, IconMoon } from '@tabler/icons-react';
import { useTheme } from 'next-themes';
import { MenuItem } from '@/components';

export function DropdownMenuThemeChanger() {
  const { resolvedTheme, setTheme } = useTheme();

  const label = `${resolvedTheme === 'dark' ? 'Light' : 'Dark'} theme`;
  const icon =
    resolvedTheme === 'dark' ? (
      <IconSunHigh
        aria-hidden="true"
        focusable="false"
        className="h-4 w-4 md:h-[0.875rem] md:w-[0.875rem]"
      />
    ) : (
      <IconMoon
        aria-hidden="true"
        focusable="false"
        className="h-4 w-4 md:h-[0.875rem] md:w-[0.875rem]"
      />
    );

  function handleToggleTheme(e: Event) {
    if (resolvedTheme) {
      e.preventDefault();
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    }
  }

  if (!resolvedTheme) {
    return null;
  }

  return (
    <MenuItem icon={icon} onSelect={handleToggleTheme}>
      {label}
    </MenuItem>
  );
}
