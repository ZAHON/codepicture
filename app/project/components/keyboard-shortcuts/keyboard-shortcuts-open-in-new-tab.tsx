'use client';
import { useHotkeys } from 'react-hotkeys-hook';
import { useProjectPageStore, selectOpenInNewTabPrePrepareLink } from '@project/store';

export function KeyboardShortcutsOpenInNewTab() {
  const openInNewTabPrePrepareLink = useProjectPageStore(selectOpenInNewTabPrePrepareLink);

  useHotkeys('Ctrl+O', (e) => {
    e.preventDefault();
    openInNewTabPrePrepareLink();
  });

  return null;
}
