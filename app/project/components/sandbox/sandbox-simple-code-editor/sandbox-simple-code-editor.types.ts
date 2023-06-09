import type { ReactNode } from 'react';

export interface SandboxSimpleCodeEditorProps {
  /**
   * The content of the sandbox simple code editor - `SandboxSyntaxHighlighter` component.
   */
  children: ReactNode;
}

export type Selection = [selectionStart: number, selectionEnd: number];

export type Record = {
  value: string;
  selectionStart: number;
  selectionEnd: number;
};

export type History = {
  stack: (Record & { timestamp: number })[];
  offset: number;
};
