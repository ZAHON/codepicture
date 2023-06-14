'use client';
import { useHotkeys } from 'react-hotkeys-hook';
import { useProjectStore, selectSetKeyboardShortcutsDialogOpen } from '@project/store';

export function KeyboardShortcutsOpenShortcuts() {
  const setKeyboardShortcutsDialogOpen = useProjectStore(selectSetKeyboardShortcutsDialogOpen);

  useHotkeys('Shift+?', () => setKeyboardShortcutsDialogOpen(true));

  return null;
}
