'use client';
import { useStore, selectEditorLineNumbers } from '@/store';
import { useSandboxEditorLineNumbers } from './hooks';
import {
  sandboxEditorLineNumbersStyles,
  sandboxEditorLineNumbersListItemStyles,
  sandboxEditorLineNumbersItemStyles,
} from './sandbox-editor-line-numbers.styles';

export function SandboxEditorLineNumbers() {
  const editorLineNumbers = useStore(selectEditorLineNumbers);
  const lineNumbers = useSandboxEditorLineNumbers();

  if (!editorLineNumbers) {
    return null;
  }

  return (
    <ol className={sandboxEditorLineNumbersStyles()}>
      {lineNumbers.map((lineNumber) => (
        <li key={lineNumber} className={sandboxEditorLineNumbersListItemStyles()}>
          <span className={sandboxEditorLineNumbersItemStyles()}>{lineNumber}</span>
        </li>
      ))}
    </ol>
  );
}
