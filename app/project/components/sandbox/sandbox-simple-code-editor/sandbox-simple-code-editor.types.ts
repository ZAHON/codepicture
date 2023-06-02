import type { ReactNode } from 'react';

export type SandboxSimpleCodeEditorProps = {
  children: ReactNode;
};

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
