'use client';
import { useTheme } from 'next-themes';
import { IconBrightnessHalf, IconSunHigh, IconMoon, IconDeviceDesktop } from '@tabler/icons-react';
import {
  IconButton,
  Menu,
  MenuTrigger,
  MenuContent,
  MenuRadioGroup,
  MenuRadioItem,
} from '@/components';

export function ThemeChangerMenu() {
  const { theme, setTheme } = useTheme();

  function handleChangeTheme(value: string) {
    setTheme(value);
  }

  return (
    <Menu>
      <MenuTrigger>
        <IconButton aria-label="Change theme" variant="light">
          <IconBrightnessHalf size="1.25rem" aria-hidden="true" focusable="false" />
        </IconButton>
      </MenuTrigger>
      <MenuContent align="end" sideOffset={15}>
        <MenuRadioGroup value={theme} onValueChange={handleChangeTheme}>
          <MenuRadioItem
            value="light"
            icon={<IconSunHigh size="1rem" aria-hidden="true" focusable="false" />}
          >
            Light
          </MenuRadioItem>
          <MenuRadioItem
            value="dark"
            icon={<IconMoon size="1rem" aria-hidden="true" focusable="false" />}
          >
            Dark
          </MenuRadioItem>
          <MenuRadioItem
            value="system"
            icon={<IconDeviceDesktop size="1rem" aria-hidden="true" focusable="false" />}
          >
            System
          </MenuRadioItem>
        </MenuRadioGroup>
      </MenuContent>
    </Menu>
  );
}
