import { cva } from 'class-variance-authority';

export const segmentedSwitchStyles = cva(
  [
    'flex',
    'w-full',
    'p-1',
    'rounded-lg',
    'bg-neutral-6',
    'select-none',
    'cursor-pointer',

    'motion-safe:transition-opacity',
    'motion-safe:duration-150',

    'data-[disabled]:opacity-40',
    'data-[disabled]:cursor-not-allowed',

    'focus:outline-none',
    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-2',
    'focus-visible:outline-primary-9',
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
