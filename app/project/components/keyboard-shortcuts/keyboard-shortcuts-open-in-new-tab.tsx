'use client';
import { useHotkeys } from 'react-hotkeys-hook';
import { useStore, selectOpenInNewTabPrePrepareLink } from '@project/store';

export function KeyboardShortcutsOpenInNewTab() {
  const openInNewTabPrePrepareLink = useStore(selectOpenInNewTabPrePrepareLink);

  useHotkeys('Ctrl+O', (e) => {
    e.preventDefault();
    openInNewTabPrePrepareLink();
  });

  return null;
}
