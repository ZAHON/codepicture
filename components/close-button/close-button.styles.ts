import { cva } from 'class-variance-authority';

export const closeButtonStyles = cva(
  [
    'inline-flex',
    'justify-center',
    'items-center',
    'whitespace-nowrap',
    'select-none',
    'origin-center',
    'overflow-hidden',
    'rounded-lg',

    'motion-safe:transition',
    'motion-safe:duration-150',

    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-2',
    'focus-visible:outline-primary-9',

    'enabled:active:scale-95',

    'disabled:opacity-40',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      size: {
        sm: ['h-8', 'w-8'],
        md: ['h-9', 'w-9'],
        lg: ['h-10', 'w-10'],
      },
      pill: {
        true: ['rounded-full'],
      },
      variant: {
        filled: [
          'text-white',
          'bg-neutral-9',
          'enabled:hover:bg-neutral-10',
          'focus-visible:bg-neutral-10',
        ],
        light: [
          'text-neutral-12',
          'bg-neutral-4',
          'enabled:hover:bg-neutral-5',
          'enabled:active:bg-neutral-6',
          'focus-visible:bg-neutral-5',
        ],
        subtle: [
          'bg-transparent',
          'text-neutral-12',
          'enabled:hover:bg-neutral-4',
          'enabled:active:bg-neutral-5',
          'focus-visible:bg-neutral-4',
          'focus-visible:bg-neutral-5',
        ],
        transparent: ['bg-transparent', 'text-neutral-12'],
      },
    },
  }
);
