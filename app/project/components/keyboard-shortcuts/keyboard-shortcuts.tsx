'use client';
import { useMediaQuery } from '@/hooks';
import { KeyboardShortcutsDialog } from './keyboard-shortcuts-dialog';
import { KeyboardShortcutsFocusCodeEditor } from './keyboard-shortcuts-focus-code-editor';
import { KeyboardShortcutsToggleTheme } from './keyboard-shortcuts-toggle-theme';
import { KeyboardShortcutsOpenShortcuts } from './keyboard-shortcuts-open-shortcuts';

export function KeyboardShortcuts() {
  const matches = useMediaQuery('(min-width: 768px)');

  if (!matches) {
    return null;
  }

  return (
    <>
      <KeyboardShortcutsDialog />

      <KeyboardShortcutsFocusCodeEditor />
      <KeyboardShortcutsToggleTheme />
      <KeyboardShortcutsOpenShortcuts />
    </>
  );
}
