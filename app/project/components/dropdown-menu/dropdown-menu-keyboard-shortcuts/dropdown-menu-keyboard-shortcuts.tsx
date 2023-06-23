'use client';
import { IconCommand } from '@tabler/icons-react';
import { MenuItem } from '@/components';
import { useProjectPageStore, selectSetKeyboardShortcutsDialogOpen } from '@project/store';

export function DropdownMenuKeyboardShortcuts() {
  const keyboardShortcutsDialogOpen = useProjectPageStore(selectSetKeyboardShortcutsDialogOpen);

  function handleSelect() {
    keyboardShortcutsDialogOpen(true);
  }

  return (
    <MenuItem
      onSelect={handleSelect}
      icon={
        <IconCommand
          aria-hidden="true"
          focusable="false"
          className="h-4 w-4 md:h-[0.875rem] md:w-[0.875rem]"
        />
      }
    >
      Keyboard shortcuts
    </MenuItem>
  );
}
