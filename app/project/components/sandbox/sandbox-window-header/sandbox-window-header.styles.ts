import { cva } from 'class-variance-authority';

export const sandboxWindowHeaderStyles = cva([
  'flex',
  'items-center',
  'gap-x-4',
  'px-4',
  'h-12',
  'bg-[color:var(--sandbox-editor-background)]',
]);
