'use client';
import { useHotkeys } from 'react-hotkeys-hook';
import {
  useStore,
  selectSetExportImageDialogOpen,
  selectSetKeyboardShortcutsDialogOpen,
} from '@project/store';

export function KeyboardShortcutsExportImage() {
  const setExportImageDialogOpen = useStore(selectSetExportImageDialogOpen);
  const setKeyboardShortcutsDialogOpen = useStore(selectSetKeyboardShortcutsDialogOpen);

  useHotkeys('Ctrl+S', (e) => {
    e.preventDefault();
    setExportImageDialogOpen(true);
    setKeyboardShortcutsDialogOpen(false);
  });

  return null;
}
