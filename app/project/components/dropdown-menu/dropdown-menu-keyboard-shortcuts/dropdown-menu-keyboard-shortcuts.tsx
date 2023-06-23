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
      icon={<IconCommand size="1rem" aria-hidden="true" focusable="false" />}
    >
      Keyboard shortcuts
    </MenuItem>
  );
}
