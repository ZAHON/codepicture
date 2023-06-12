'use client';
import { useState } from 'react';
import { useMediaQuery } from '@/hooks';
import { Menu, MenuContent, MenuSeparator, MenuGroup } from '@/components';
import { DropdownMenuTrigger } from './dropdown-menu-trigger';
import { DropdownMenuExportImage } from './dropdown-menu-export-image';
import { DropdownMenuGithubLink } from './dropdown-menu-github-link';
import { DropdownMenuThemeChanger } from './dropdown-menu-theme-changer';

export function DropdownMenu() {
  const [open, setOpen] = useState(false);
  const matches = useMediaQuery('(min-width: 768px)');

  return (
    <Menu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger state={open} />
      <MenuContent
        size={matches ? 'sm' : 'md'}
        align="start"
        sideOffset={15}
        collisionPadding={{ left: 16, right: 16 }}
        className="w-[calc(100vw-2rem)] md:w-auto"
      >
        <MenuGroup>
          <DropdownMenuExportImage />
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup>
          <DropdownMenuGithubLink />
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup>
          <DropdownMenuThemeChanger />
        </MenuGroup>
      </MenuContent>
    </Menu>
  );
}
