import { cva } from 'class-variance-authority';

export const buttonStyles = cva(
  [
    'relative',
    'inline-flex',
    'justify-center',
    'items-center',
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

    'enabled:active:scale-95',

    'disabled:opacity-40',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      size: {
        sm: ['h-8', 'text-xs'],
        md: ['h-9', 'text-sm'],
        lg: ['h-10', 'text-base'],
      },
      pill: {
        true: ['rounded-full', 'px-5'],
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
        success: [''],
        error: [''],
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

      // color success
      {
        color: 'success',
        variant: 'filled',
        className: [
          'text-white',
          'bg-success-9',
          'enabled:hover:bg-success-10',
          'focus-visible:bg-success-10',
        ],
      },
      {
        color: 'success',
        variant: 'light',
        className: [
          'text-success-11',
          'bg-success-4',
          'enabled:hover:bg-success-5',
          'enabled:active:bg-success-6',
          'focus-visible:bg-success-5',
        ],
      },

      // color error
      {
        color: 'error',
        variant: 'filled',
        className: [
          'text-white',
          'bg-error-9',
          'enabled:hover:bg-error-10',
          'focus-visible:bg-error-10',
        ],
      },
      {
        color: 'error',
        variant: 'light',
        className: [
          'text-error-11',
          'bg-error-4',
          'enabled:hover:bg-error-5',
          'enabled:active:bg-error-6',
          'focus-visible:bg-error-5',
        ],
      },
    ],
  }
);
