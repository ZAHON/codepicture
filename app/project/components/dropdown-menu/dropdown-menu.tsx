'use client';
import { useState } from 'react';
import { useMediaQuery } from '@/hooks';
import { Menu, MenuContent, MenuSeparator, MenuGroup } from '@/components';
import { DropdownMenuTrigger } from './dropdown-menu-trigger';
import { DropdownMenuExportImage } from './dropdown-menu-export-image';
import { DropdownMenuOpenInNewTab } from './dropdown-menu-open-in-new-tab';
import { DropdownMenuCopyToClipboard } from './dropdown-menu-copy-to-clipboard';
import { DropdownMenuKeyboardShortcuts } from './dropdown-menu-keyboard-shortcuts';
import { DropdownMenuGithubLink } from './dropdown-menu-github-link';
import { DropdownMenuThemeChanger } from './dropdown-menu-theme-changer';

export function DropdownMenu() {
  const [open, setOpen] = useState(false);
  const matches = useMediaQuery('(min-width: 768px)');

  return (
    <Menu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger state={open} />
      <MenuContent
        size="md"
        align="end"
        sideOffset={matches ? 15 : 10}
        className="w-screen rounded-none border-x-0 border-t-0 md:w-auto md:rounded-lg md:border md:border-neutral-5"
      >
        <MenuGroup>
          <DropdownMenuExportImage />
          <DropdownMenuOpenInNewTab />
          <DropdownMenuCopyToClipboard />
          <DropdownMenuKeyboardShortcuts />
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup>
          <DropdownMenuGithubLink />
        </MenuGroup>
        <DropdownMenuThemeChanger />
      </MenuContent>
    </Menu>
  );
}
