import { cva } from 'class-variance-authority';

export const sliderStyles = cva(
  [
    'relative',
    'flex',
    'items-center',
    'select-none',
    'touch-none',
    'w-full',
    'cursor-pointer',

    'motion-safe:transition-opacity',
    'motion-safe:duration-150',

    'data-[disabled]:opacity-40',
    'data-[disabled]:cursor-not-allowed',
  ],
  {
    variants: {
      size: {
        sm: ['h-3'],
        md: ['h-4'],
        lg: ['h-5'],
      },
    },
  }
);
