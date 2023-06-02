import { cva } from 'class-variance-authority';

export const sandboxWindowStyles = cva([
  'overflow-hidden',
  'rounded-[var(--sandbox-window-border-radius)]',
]);
