import { cva } from 'class-variance-authority';

export const sandboxWindowTabIconStyles = cva([
  'motion-safe:transition-[height_width]',
  'motion-safe:ease-linear',
  'motion-safe:duration-150',
]);
