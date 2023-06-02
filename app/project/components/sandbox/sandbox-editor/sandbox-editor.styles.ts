import { cva } from 'class-variance-authority';

export const sandboxEditorStyles = cva([
  'relative',
  'flex',
  'pt-[var(--sandbox-editor-padding-top)]',
  'pb-[var(--sandbox-editor-padding-bottom)]',
  'bg-[color:var(--sandbox-editor-background)]',
  'text-[color:var(--sandbox-editor-foreground)]',
  '[font-family:var(--sandbox-editor-font-family)]',
]);
