import { cva } from 'class-variance-authority';

export const nativeSelectWrapperStyles = cva([
  'relative',
  'w-full',
  'text-neutral-12',

  'motion-safe:transition',
  'motion-safe:duration-150',

  'data-[disabled]:text-neutral-11',
  'data-[disabled]:opacity-40',
  'data-[disabled]:cursor-not-allowed',

  'data-[invalid]:text-error-11',
]);
