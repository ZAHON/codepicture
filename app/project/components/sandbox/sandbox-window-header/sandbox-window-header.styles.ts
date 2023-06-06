import { cva } from 'class-variance-authority';

export const sandboxWindowHeaderStyles = cva([
  'flex',
  'items-center',
  '[flex-direction:var(--sandbox-window-header-flex-direction)]',
  'gap-x-4',
  'px-4',
  'h-12',
  'bg-[color:var(--sandbox-window-header-fill)]',

  'motion-safe:transition-[background-color]',
  'motion-safe:ease-linear',
  'motion-safe:duration-150',
]);
