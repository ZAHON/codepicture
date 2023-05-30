import { cva } from 'class-variance-authority';

export const separatorStyles = cva([
  'empty:h-px',
  'empty:bg-neutral-5',

  'flex',
  'items-center',
  'gap-x-3',

  'before:content-[""]',
  'before:h-px',
  'before:bg-neutral-5',
  'before:flex-1',

  'after:content-[""]',
  'after:h-px',
  'after:bg-neutral-5',
  'after:flex-1',
]);
