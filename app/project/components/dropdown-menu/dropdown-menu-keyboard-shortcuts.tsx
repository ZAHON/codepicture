'use client';
import { IconCommand } from '@tabler/icons-react';
import { useMediaQuery } from '@/hooks';
import { MenuItem } from '@/components';
import { useProjectPageStore, selectSetKeyboardShortcutsDialogOpen } from '@project/store';

export function DropdownMenuKeyboardShortcuts() {
  const keyboardShortcutsDialogOpen = useProjectPageStore(selectSetKeyboardShortcutsDialogOpen);
  const matches = useMediaQuery('(min-width: 768px)');

  if (!matches) {
    return null;
  }

  return (
    <MenuItem
      icon={<IconCommand size="0.875rem" aria-hidden="true" focusable="false" />}
      onSelect={() => keyboardShortcutsDialogOpen(true)}
    >
      Keyboard shortcuts
    </MenuItem>
  );
}
