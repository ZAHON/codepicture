'use client';
import { useHotkeys } from 'react-hotkeys-hook';
import { useProjectPageStore, selectSetKeyboardShortcutsDialogOpen } from '@project/store';

export function KeyboardShortcutsOpenShortcuts() {
  const setKeyboardShortcutsDialogOpen = useProjectPageStore(selectSetKeyboardShortcutsDialogOpen);

  useHotkeys('Shift+?', () => setKeyboardShortcutsDialogOpen(true));

  return null;
}
