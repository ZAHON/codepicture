import { cva } from 'class-variance-authority';

export const sandboxWindowStyles = cva([
  'relative',
  'overflow-hidden',
  'rounded-[var(--sandbox-window-border-radius)]',
]);
