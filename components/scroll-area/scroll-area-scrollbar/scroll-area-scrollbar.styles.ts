import { cva } from 'class-variance-authority';

export const scrollAreaScrollbarStyles = cva([
  'flex',
  'select-none',
  'touch-none',
  'p-0.5',

  'data-[orientation=vertical]:w-2.5',

  'data-[orientation=horizontal]:flex-col',
  'data-[orientation=horizontal]:h-2.5',
]);
