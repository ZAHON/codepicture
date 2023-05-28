import { cva } from 'class-variance-authority';

export const sliderThumbStyles = cva(
  [
    'block',
    'rounded-full',
    'drop-shadow-md',

    'bg-white',

    'motion-safe:transition',
    'motion-safe:duration-150',

    'focus:outline-none',
    'focus:scale-125',
  ],
  {
    variants: {
      size: {
        sm: ['h-3', 'w-3'],
        md: ['h-4', 'w-4'],
        lg: ['h-5', 'w-5'],
      },
    },
  }
);
