'use client';
import { useHotkeys } from 'react-hotkeys-hook';

export function KeyboardShortcutsFocusCodeEditor() {
  useHotkeys('f', (e) => {
    const codeEditorElement = document.getElementById('sandbox-simple-code-editor-textarea');

    if (codeEditorElement) {
      e.preventDefault();
      codeEditorElement.focus();
    }
  });

  return null;
}
