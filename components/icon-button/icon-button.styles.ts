import { cva } from 'class-variance-authority';

export const iconButtonStyles = cva(
  [
    'inline-flex',
    'justify-center',
    'items-center',
    'rounded-lg',
    'whitespace-nowrap',
    'select-none',
    'origin-center',
    'overflow-hidden',

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
        filled: [''],
        light: [''],
        subtle: [''],
      },
      color: {
        neutral: [''],
        primary: [''],
      },
    },
    compoundVariants: [
      // color neutral
      {
        color: 'neutral',
        variant: 'filled',
        className: [
          'text-white',
          'bg-neutral-9',
          'enabled:hover:bg-neutral-10',
          'focus-visible:bg-neutral-10',
        ],
      },
      {
        color: 'neutral',
        variant: 'light',
        className: [
          'text-neutral-12',
          'bg-neutral-4',
          'enabled:hover:bg-neutral-5',
          'enabled:active:bg-neutral-6',
          'focus-visible:bg-neutral-5',
        ],
      },
      {
        color: 'neutral',
        variant: 'subtle',
        className: [
          'bg-transparent',
          'text-neutral-12',
          'enabled:hover:bg-neutral-4',
          'enabled:active:bg-neutral-5',
          'focus-visible:bg-neutral-4',
          'focus-visible:bg-neutral-5',
        ],
      },

      // color primary
      {
        color: 'primary',
        variant: 'filled',
        className: [
          'text-white',
          'bg-primary-9',
          'enabled:hover:bg-primary-10',
          'focus-visible:bg-primary-10',
        ],
      },
      {
        color: 'primary',
        variant: 'light',
        className: [
          'text-primary-11',
          'bg-primary-4',
          'enabled:hover:bg-primary-5',
          'enabled:active:bg-primary-6',
          'focus-visible:bg-primary-5',
        ],
      },
      {
        color: 'primary',
        variant: 'subtle',
        className: [
          'bg-transparent',
          'text-primary-11',
          'enabled:hover:bg-primary-4',
          'enabled:active:bg-primary-5',
          'focus-visible:bg-primary-4',
          'focus-visible:bg-primary-5',
        ],
      },
    ],
  }
);
