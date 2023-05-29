import { cva } from 'class-variance-authority';

export const scrollAreaThumbStyles = cva([
  'flex-1',
  'bg-neutral-7',
  'rounded-full',
  'relative',
  'hover:bg-neutral-8',
  'motion-safe:transition-colors',
  'motion-safe:duration-150',

  'before:content-[""]',
  'before:absolute',
  'before:top-1/2',
  'before:left-1/2',
  'before:-translate-x-1/2',
  'before:-translate-y-1/2',
  'before:h-full',
  'before:w-full',
  // 'before:min-h-[2.75rem]',
  // 'before:min-w-[2.75rem]',
]);
