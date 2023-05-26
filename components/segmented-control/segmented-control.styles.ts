import { cva } from 'class-variance-authority';

export const segmentedControlStyles = cva(
  [
    'flex',
    'p-1',
    'rounded-lg',
    'bg-neutral-6',
    'select-none',
    'cursor-pointer',

    'data-[disabled]:cursor-not-allowed',
  ],
  {
    variants: {
      size: {
        sm: ['h-8', 'text-xs'],
        md: ['h-9', 'text-sm'],
        lg: ['h-10', 'text-base'],
      },
    },
  }
);
