'use client';
import { useHotkeys } from 'react-hotkeys-hook';
import { useStore, selectSetKeyboardShortcutsDialogOpen } from '@project/store';

export function KeyboardShortcutsOpenShortcuts() {
  const setKeyboardShortcutsDialogOpen = useStore(selectSetKeyboardShortcutsDialogOpen);

  useHotkeys('Shift+?', () => setKeyboardShortcutsDialogOpen(true));

  return null;
}
