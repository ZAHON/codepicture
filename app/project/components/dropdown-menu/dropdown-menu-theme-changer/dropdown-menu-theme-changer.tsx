'use client';
import { useSession } from 'next-auth/react';
import { IconSunHigh, IconMoon } from '@tabler/icons-react';
import { useTheme } from '@/hooks';
import { MenuSeparator, MenuGroup, MenuItem } from '@/components';

export function DropdownMenuThemeChanger() {
  const { data: session } = useSession();
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

  if (!theme || session) {
    return null;
  }

  return (
    <>
      <MenuSeparator />
      <MenuGroup>
        <MenuItem icon={getIcon()} onSelect={handleToggleTheme}>
          {label}
        </MenuItem>
      </MenuGroup>
    </>
  );
}
