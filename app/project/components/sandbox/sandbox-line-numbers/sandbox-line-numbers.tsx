'use client';
import { useSandboxLineNumbers } from './hooks';
import { containerStyles, liStyles, spanStyles } from './sandbox-line-numbers.styles';

export function SandboxLineNumbers() {
  const editorLineNumbers = true;
  const lineNumbers = useSandboxLineNumbers();

  if (!editorLineNumbers) {
    return null;
  }

  return (
    <ol className={containerStyles()}>
      {lineNumbers.map((lineNumber) => (
        <li key={lineNumber} className={liStyles()}>
          <span className={spanStyles()}>{lineNumber}</span>
        </li>
      ))}
    </ol>
  );
}