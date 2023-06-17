'use client';
import { useHotkeys } from 'react-hotkeys-hook';
import { useStore, selectCopyToClipboardCopy } from '@project/store';

export function KeyboardShortcutsCopyToClipboard() {
  const copyToClipboardCopy = useStore(selectCopyToClipboardCopy);

  useHotkeys('Ctrl+C', (e) => {
    e.preventDefault();
    copyToClipboardCopy();
  });

  return null;
}
