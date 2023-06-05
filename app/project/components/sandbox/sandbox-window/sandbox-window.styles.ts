import { cva } from 'class-variance-authority';

export const sandboxWindowStyles = cva([
  'relative',
  'overflow-hidden',
  'rounded-[var(--sandbox-window-border-radius)]',
  '[box-shadow:var(--sandbox-window-shadow)]',

  'motion-safe:transition-[box-shadow]',
  'motion-safe:ease-linear',
  'motion-safe:duration-150',
]);
