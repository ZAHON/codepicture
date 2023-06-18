import { cva } from 'class-variance-authority';

export const linkAsButtonStyles = cva(
  [
    'inline-flex',
    'justify-center',
    'items-center',
    'gap-x-2',
    'font-medium',
    'whitespace-nowrap',
    'select-none',
    'origin-center',
    'overflow-hidden',
    'px-3',
    'rounded-lg',

    'motion-safe:transition',
    'motion-safe:duration-150',

    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-2',
    'focus-visible:outline-primary-9',

    'active:scale-95',
  ],
  {
    variants: {
      size: {
        sm: ['h-8', 'text-xs'],
        md: ['h-9', 'text-sm'],
        lg: ['h-10', 'text-base'],
      },
      fullWidth: {
        true: ['w-full'],
      },
      variant: {
        filled: [''],
        light: [''],
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
          'hover:bg-neutral-10',
          'focus-visible:bg-neutral-10',
        ],
      },
      {
        color: 'neutral',
        variant: 'light',
        className: [
          'text-neutral-12',
          'bg-neutral-4',
          'hover:bg-neutral-5',
          'active:bg-neutral-6',
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
          'hover:bg-primary-10',
          'focus-visible:bg-primary-10',
        ],
      },
      {
        color: 'primary',
        variant: 'light',
        className: [
          'text-primary-11',
          'bg-primary-4',
          'hover:bg-primary-5',
          'active:bg-primary-6',
          'focus-visible:bg-primary-5',
        ],
      },
    ],
  }
);
