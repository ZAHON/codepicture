import { cva } from 'class-variance-authority';

export const sandboxWindowHeaderStyles = cva([
  'h-12',
  'px-4',
  'flex',
  'items-center',
  '[flex-direction:var(--sandbox-window-header-flex-direction)]',
  'gap-x-4',
  'bg-[color:var(--sandbox-window-header-fill)]',

  'motion-safe:transition-[background-color]',
  'motion-safe:ease-linear',
  'motion-safe:duration-150',
]);
