'use client';
import { useHotkeys } from 'react-hotkeys-hook';
import {
  useProjectPageStore,
  selectSetExportImageDialogOpen,
  selectSetKeyboardShortcutsDialogOpen,
} from '@project/store';

export function KeyboardShortcutsExportImage() {
  const setExportImageDialogOpen = useProjectPageStore(selectSetExportImageDialogOpen);
  const setKeyboardShortcutsDialogOpen = useProjectPageStore(selectSetKeyboardShortcutsDialogOpen);

  useHotkeys('Ctrl+S', (e) => {
    e.preventDefault();
    setExportImageDialogOpen(true);
    setKeyboardShortcutsDialogOpen(false);
  });

  return null;
}
