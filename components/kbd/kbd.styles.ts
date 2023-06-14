import { cva } from 'class-variance-authority';

export const kbdStyles = cva(
  [
    'p-2',
    'inline-flex',
    'justify-center',
    'items-center',
    'text-neutral-12',
    'rounded-lg',
    'font-sans',
    'font-medium',
    'shadow-kbd',
    'box-border',
  ],
  {
    variants: {
      fontSize: {
        inherit: ['leading-none'],
        sm: ['text-xs', 'leading-none'],
        md: ['text-sm', 'leading-none'],
        lg: ['text-base', 'leading-none'],
      },
    },
  }
);
