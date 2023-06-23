'use client';
import { useHotkeys } from 'react-hotkeys-hook';
import { useProjectPageStore, selectCopyToClipboardCopy } from '@project/store';

export function KeyboardShortcutsCopyToClipboard() {
  const copyToClipboardCopy = useProjectPageStore(selectCopyToClipboardCopy);

  useHotkeys('Ctrl+C', (e) => {
    e.preventDefault();
    copyToClipboardCopy();
  });

  return null;
}
