import { cva } from 'class-variance-authority';

export const containerStyles = cva(['flex', 'flex-col']);

export const liStyles = cva([
  'flex',
  'select-none',
  'items-center',
  'justify-end',
  'pl-[1.3125rem]',
  'pr-[0.625rem]',
  'text-right',
  'leading-[inherit]',
  'text-[color:var(--sandbox-editor-line-number-inactive-foreground)]',
]);

export const spanStyles = cva([
  'scale-90',

  'motion-safe:transition-[color]',
  'motion-safe:ease-linear',
  'motion-safe:duration-150',
]);
